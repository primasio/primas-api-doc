# Primas Node API Documentation

## Getting Started Guide

This document describes the general steps required to connect to Primas network using API. The applications who connect
to Primas network can be categorized into 2 types:

1. The client application. Such as Primas Android and iOS DApp. These applications are usually used by only one user.
2. The platform application. Such as a UGC platform. These applications are used by multiple users and have their own
user account system.

### 1. Prepare the root account

For client applications, this is the crypto account representing the end-user and is the only account required.

For platform applications, this is the crypto account representing the platform. For each of the platform users,
there is still a sub account needed.

To make the life easier for platform applications, there's only one crypto account(a public/private keypair) that is
required to connect to Primas. This account is used by the platform to sign requests. The users of the platform don't
need to have their own crypto account. They share the platform's crypto account and the user IDs on the platform are
used to create sub accounts on Primas network.

The crypto account is nothing more than a normal Ethereum account, with enough PST in it of course. All the locks
and consumptions of PST of the platform users will be counted on the platform account. For example, a UGC
platform has 10 users in total, and today there're 2 articles post by 2 users. There will be a lock of 4 PSTs for
7 days on the platform account.

Platform application usually needs to sign the request online, a proper design of offline signing mechanism is still
needed to protect the private key. This is already less work comparing to generating keypair for every single user.
The crypto account should be created on the signing machine and never touch the Internet.

[Primas Offline Signer](https://github.com/primasio/primas-offline-signer) can be used to implement an offline signing
machine. To generate a new Ethereum account, type the following command in the console:

```bash
$ ./offline-signer account --passwd "password"

Account created successfully
Account Address:  0x284111d30E36029B6Aa9245d******Bb4b83e420A
Account Mnemonic:  cover **** drum defense **** curious **** very muscle **** okay slab
Account Keystore:  keystore:///Users/barry/gopath/src/github.com/kooksee/pstoff/kdata/keystore/UTC--2018-08-03T05-13-24.876762121Z--284111d30e36029b6aa9245d******bb4b83e420a

```

Now we have the mnemonic words of the private key and the account address. Write down the mnemonic words on a paper
and keep it in a safe place.

Let's skip the steps where we go to a token exchange who has PST listed and buy some PSTs and withdraw those tokens
into the account we just created.

The next step is registering the account on the Primas network. This can be done using Primas API. We have SDKs
prepared for different languages. In this guide we use the [NodeJS SDK](https://github.com/primasio/primas-api-sdk-js).

```js
/**
 * Create root account
 */

var Primas = require("primas-sdk-nodejs");

// We will not use offline signing mechanism for easier understanding of the process.
// The keystore is placed under a folder named "keystore" in the root folder of the project
// which is also the default config.

// The keystore is encrypted with a passphrase.

var client = new Primas({
	address: "<Your address>",
	passphrase: "<Your password>",
	node: "https://rigel-a.primas.network"
});

client.Account.create(
	{
		name: "<account name>",
		// avatar: "", // Avatar should be a metadata ID which can only be uploaded after the account creation.
		address: "<account address>"
	},
	function(err, res) {
	    
		if (err) {
			// handle error
			return;
		}
		
		// The response contains the account id and metadata dna
		
		console.log(res.id);
		console.log(res.dna);
	}
);
```

After that the root account is fully prepared and can be used to sign API requests.

### 2. User sign up

**This is only for the platform applications.**

Platforms usually assign each of their users a numeric unique ID in the system. This ID, together with the root account
ID, is used to identify the platform user in Primas network.

For some platforms, there's not too much profile data needed for the user in the Primas network. The name and id
might already be sufficient. In this case, we don't even need to have a separated sign up process. We can already use
the content publishing API to post content on behalf of the user, with the id and name of the user attached in the
request. The user account will be created automatically.

However, for other applications that have a rich set of user profile, such as applications that store users' resume.
We need to create user's account separately to upload the resume data. If the application needs to keep the detailed
profile data safe while at the same time create proof-of-existence of the data, it can upload only the hash of the
profile data to Primas network.

```js
/**
 * Create sub(user) account 
 */

client.Account.create(
	{
		name: "<account name>",
		creator: {
			account_id: "<root account id>", // The platform ID we received in the previous step.
			sub_account_id: "<user id on the platform>" // This id is used together to identify the user on Primas network.
		},
		extra: {
		    hash: "<a hex string>" // In case of sensitive user data that needs proof-of-existence, the data hash can be stored here.
		}
	},
	function(err, res) {
		if (err) {
			// handle error
			return;
		}
		
		// For sub accounts. No account id is returned at the moment.
		// The sub account is identified user root account id and user id on the platform.
		// console.log(res.id);
		
		console.log(res.dna);
	}
);

```

### 3. Post content

Now we can post content to Primas network.

Primas supports different kinds of content, such as articles, images, videos and audios. Among which the article type
serves as a container for texts and other types of content. For details about how content is stored in article type,
please refer to [Content Format](./dtcp.md#content-format). 

**For client applications that don't have their own servers, the content posting will be an interactive process:**

#### User uploads an image

1. The image should be directly post to [content posting API](./content.md#3-post-content).
Primas Node checks the image hash to see if there's a same image in the DTCP network before. If there exists one, the
[Metadata ID](./dtcp.md#metadata-dna-and-metadata-id) of the existing image is returned, otherwise Primas Node uploads
the image to DTCP network and returns its Metadata ID.

2. Primas Node will cache the image and generate a URL for the image and return the URL together with Metadata ID. This
URL can be inserted into the `src` attribute of `<img>` to display the image in the text editor:

    `<img src="https://rigel-a.primas.network/dtcp/raw/U2A3F33G.png" data-dtcp-id="U2A3F33G" />`

#### User inserts `<img>` element directly

1. The `src` attribute of the `<img>` element should be checked in DTCP network using
[query content API](./query.md#2-find-content-using-url-or-hash).

2. If the image is found, the `<img>` element should be upgraded to DTCP link:

    `<img src="https://rigel-a.primas.network/dtcp/raw/U2A3F33G.png" data-dtcp-id="U2A3F33G" />`

#### User creates hypertext link

1. The `href` attribute of the `a` element should be checked using
[query reproduction API](./query.md#3-find-reproductions-using-url).

2. If the reproduction is found, the hypertext link should be upgraded:

    `<a href="https://the.original.url" data-dtcp-id="U23G9IOU" ></a>`

When user submits the content, The content is post to [content posting API](./content.md#3.-post-content) using SDK.
The SDK will automatically removes `src` attribute of the `<img>` element and `href` in the `<a>` element from the
DTCP links(those attributes in traditional hypertext links will be preserved) and then signs the content and posts it
to Primas API.

**For platform applications, the user interface to handle content editing and image uploading should be fully functional
already. The content posting to Primas API is much easier with the help of the SDK, and the posting can be built as an
async operation to avoid blocking:**

```js
/**
 * Post content with embedded images
 */

var htmlContent = '<p>The original HTML content.</p><p><img src="https://an.external.image/image.png" /></p>';

// Upgrade DTCP links before posting
// This function call might take a long while to complete.
client.Content.upgradeDTCPLinks(htmlContent, function (err, content) {
    
    // The content will become something like this:
    // <p>The original HTML content.</p><p><img src="https://an.external.image/image.png" data-dtcp-id="5A243UYT" /></p>
    
    if (err) {
        // handle error
        return;
    }
    
    // The content will be processed again
    // to remove the `src` and `href` of DTCP links.
    // Then the content hash is calculated.
    // After that the whole metadata is signed and sent to the API.
    
    client.Content.create({
    	title: "<article title>",
    	creator: {
    		account_id: "<root account id>",
    		sub_account_id: "<sub account id>",
    		
    		// If the sub account is not registered separated before,
    		// provide the name here and it will be created automatically.
    		// sub_account_name: "<sub_account_name>"
    	},
    	abstract: "<article abstract>",
    	language: "en-US",
    	category: "<article category>",
    	content: content
    }, function (err, res) {
        
    	if (err) {
    		// handle error
    		return;
    	}
    	
    	// Article ID and DNA will be returned.
    	
    	console.log(res.id);
    	console.log(res.dna);
    })
});
```

Note that in this case, the `src` and `href` attribute will **NOT** be replaced by the cached version on Primas Node
and the original URL points to the UGC platform will be preserved. 

### 4. Create a group

There're different options to customize the group rules when creating the group:

1. How member could join the group

    a. Freely join
    
    b. Apply to join
    
    c. Pay to join (coming soon)
    
2. How content could be shared in the group

    a. Freely share
    
    b. Apply to share
    
    c. Whitelisted member can share
    
    d. Pay to share (coming soon)

```js
/**
 * Creat a group
 */

client.Group.create({
	title: "<group title>",
	creator: {
		account_id: "<account id>",
		sub_account_id: "<sub account id>",
            		
        // If the sub account is not registered separated before,
        // provide the name here and it will be created automatically.
        // sub_account_name: "<sub_account_name>"
	},
	avatar: "<image metadata id>",
	abstract: "<group abstract>",
	language: "en-US",
	category: "<article category>",
	extra: {
		allow_join: "all", // How member could join the group. "all" or "application".
		allow_post: "all"  // How content could be shared in the group. "all", "none" or "application".
	}
}, function (err, res) {
	if (err) {
		// handle error
		return;
	}
	// group ID and DNA will be returned.
	
	console.log(res.id);
	console.log(res.dna);
});
```

### 5. Join a group

The joining operation is a little bit different according to the group joining rules. The API is always the same. If the
group requires application before joining, the `application_status` parameter should be set to "pending" in the API call.

```js
/**
 * Join a group
 */

client.Group.join("<group id>",
{
	title: "<group title>",
	src_id: "<account id>",
	dest_id: "<group id>",
	creator: {
		account_id: "<account id>",
		sub_account_id: "<sub account id>",

        // If the sub account is not registered separated before,
        // provide the name here and it will be created automatically.
        // sub_account_name: "<sub_account_name>"
	},
	
	// If the group requires application before joining, the following parameters should be set:
	extra: {
		application_status: "pending",
		application_expire:  Date.now() + 24 * 3600 // The application will expire after 24 hours.
	}
}, function (err, res) {
	if (err) {
		// handle error
		return;
	}
	
	// group member ID and DNA will be returned
	
	console.log(res.id);
	console.log(res.dna);
});
```

### 6. Share content to a group

The share can be created from content directly, or from another share. There's a field named `share_id` in the `extra`
field of a share to trace where this share came from. If the share is from the content directly, `share_id` in `extra`
will be null.

If the group requires application before sharing, set the `application_status` field.

```js
/**
 * Share to a group
 */

// Group requires application
client.Group.createShare("<group id>",
{
	src_id: "<content id>",
	dest_id: "<group id>",
	creator: {
		account_id: "<account id>",
		sub_account_id: "<sub account id>",
        
        // If the sub account is not registered separated before,
        // provide the name here and it will be created automatically.
        // sub_account_name: "<sub_account_name>"
	},
	
	
	extra: {
	    // If the share is created from another share, the following parameters should be set:
	    share_id: "<parent share id>",
	    
	    // If the group requires application to share, the following parameters should be set:
	    application_status: "pending",
        application_expire:  Date.now() + 24 * 3600 // The application will expire after 24 hours.
	}
	
}, function (err, res) {
	if (err) {
		// handle error
		return;
	}
	
	// Share ID and DNA will be returned
	
	console.log(res.id);
	console.log(res.dna);
});
```

### 7. Discuss about the content

More precisely, it is discussing about the **shares** rather than the content, since content cannot be seen or liked
or commented until it is shared to a group. So the discussion happens on the share in the group. And the discussion is
only visible in the group.

```js
/**
 * Like a share
 */

client.ContentInteraction.createLike("<share id>",
{
	src_id: "<account id>",
	dest_id: "<share id>",
	creator: {
		account_id: "<account id>",
        sub_account_id: "<sub account id>",
        
        // If the sub account is not registered separated before,
        // provide the name here and it will be created automatically.
        // sub_account_name: "<sub_account_name>"
	}
}, function (err, res) {
	if (err) {
		// handle error
		return;
	}
	// handle res
});

/**
 * Comment on a share
 */

client.ContentInteraction.createComment("<share id>",
{
	src_id: "<account id>",
	dest_id: "<share id>",
	creator: {
        account_id: "<account id>",
        sub_account_id: "<sub account id>",
        
        // If the sub account is not registered separated before,
        // provide the name here and it will be created automatically.
        // sub_account_name: "<sub_account_name>"
    },
	extra: {
	    parent_comment_id: "<parent comment id>", // If this comment is a reply to another comment, the comment id should be set.
		content: "<comment HTML content>" // HTML format comment content, DTCP links still need to be upgraded.
	}
}, function (err, res) {
	if (err) {
		// handle error
		return;
	}
	// Comment ID and DNA is returned
	
	console.log(res.id);
	console.log(res.dna);
});
```
