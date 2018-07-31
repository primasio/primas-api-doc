# Primas Node API Documentation

## Getting Started Guide

This document describes the general steps required to connect traditional applications to Primas network.
We will use an example to illustrate the whole integration process. In this example we connect a basic UGC platform
into Primas, where users can sign up, post their content, join different groups, and discuss about the content.

### 1. Prepare the root account

To make the life easier for applications, there's only one crypto account(a public/private keypair) that is required
to connect to Primas. This account is used by the application to sign requests. A proper design of offline signing is
still needed to protect the private key. This is already less work comparing to generating keypair for every single
user.

The crypto account is nothing more than a normal Ethereum account, with enough PST in it of course. All the locks
and consumptions of PST of the application users will be counted on the root account. For example, the illustrated UGC
platform has 10 users in total, and today there're 2 articles post by 2 users. There will be a lock of 4 PSTs for
7 days on the root account.

Now that the UGC platform is using offline signing machine to protect the private key. The root account should be
created on the signing machine and never touch the Internet.

[Primas Offline Signer](https://github.com/primasio/primas-offline-signer) can be used to implement an offline signing
machine. To generate a new Ethereum account, type the following command in the console:

```bash
$ ./offline-signer account --passwd "password"
```

Now we have the mnemonic words of the private key and the account address. Write down the mnemonic words on a paper
and keep it in a safe place.

Let's skip the steps where we go to a token exchange who has PST listed and buy some PSTs and withdraw those tokens
into the account we just created.

The next step is registering the root account on the Primas network. This can be done using Primas API. We have SDKs
prepared for different languages. In this guide we use the [NodeJS SDK](https://github.com/primasio/primas-api-sdk-js).

```js

/**
 * Root(Application) account creation
 */


```

After that the root account is fully prepared and can be used to sign API requests.

### 2. User sign up

The UGC platform assigned each of its user a numeric unique ID in the system. This ID, together with the root account
ID, is used to identify the application user in Primas network.

For the UGC platform, there's not too much profile data needed for the user in the Primas network. The name and id
might already be sufficient. In this case, we don't even need to have a separated sign up process. We can already use
the content publishing API to post content on behalf of the user, with the id and name of the user attached in the
request. The user account will be created automatically.

However, for other applications that have a rich set of user profile, such as applications that store users' resume.
We need to create user's account separately to upload the resume data. If the application needs to keep the detailed
profile data safe while at the same time create proof-of-existence of the data, it can upload only the hash of the
profile data to Primas network.

```js

/**
 * Sub(User) account creation
 */


```


### 3. Content posting

Now we can post content to Primas network.

### 4. Create group

### 5. Join a group

### 6. Share content to a group

### 7. Discuss about the content

