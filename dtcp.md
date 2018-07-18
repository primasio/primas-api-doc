# Primas Node API Documentation

## Dencentralized Trusted Content Protocol

### Metadata

DTCP models the digital world as a set of digital objects and the links between them. On the top level there're
only 2 types of data, "object" and "link". links connect different objects together and forms a network. For example,
"article" is a digital object, "account" is also a digital object, "comment", however, is a link between an "article"
 and an "account".

In DTCP, both objects and links are described with a collection of metadata. For example, "article" is
described with "title", "abstract", "content", "author". "comment" is described with "src_id" which points
to an account and "dest_id" with points to an account, and there's another field "content" contains the
comment content.

DTCP is all about a series of standards of how metadata is defined for different kinds of objects and links.

### Metadata DNA and Metadata ID

After metadata is created and saved, we need a URI, or Uniform Resource Identifier, to find the metadata when needed.
DNA, beyond all the other purposes, serves as the URI of the metadata. DNA can be generated using a set of given
metadata and is unique to these metadata.

The metadata cannot be modified or deleted after creation since it is recorded on the Blockchain. To implement
object modification and deletion functions, DTCP adds a `status` field to record the modification status and
`parent_dna` to build modification history chain for a digital object. Metadata ID is used to track the single object
in its metadata chain of modification.

For example, when creating an article, a set of metadata is created:

``` json

{
    "id": "2Z2B3212",
    "dna": "1Q279A8D",
    "type": "object",
    "tag": "article",
    "title": "This is an article",
    "content": "This is the article content",
    "created": "1531897155",
    "status": "created"
}

```

Then the article needs to be modified, instead of modifying the existing metadata, we create a new set of metadata:

``` json

{
    "dna": "2785C422",
    "parent_dna": "1Q279A8D",
    "content": "This is the updated article content",
    "updated": "1532097155",
    "status": "updated"
}

```

Note that in the updating metadata, `parent_dna` points to the previous metadata dna. And only the modified part
needs to be provided.

Metadata ID is only created when creating an object. It does not appear in the updating or deleting metadata. It is
used to provide a consistent way of identifying an object to the applications. One can always find the same object
with latest updated data using the same ID.

Then the article is deleted. Another set of metadata is created:

``` json

{
    "dna": "3696TRDF",
    "parent_dna": "2785C422",
    "updated": "1533097155",
    "status": "deleted"
}

```

In this way, there're 2 dimensions in the network DTCP builds. The first dimension is about objects and connections
between them using links. The other dimension is about the modification history of each object and link.
To identify objects and links, Metadata ID is used. To track the modification history or find a dedicated version
of a single object, Metadata DNA is used.

DTCP standard metadata is only good for storage. It is painful if we want to provide traditional index
functions to mobile apps using metadata directly. So in Primas Node, DTCP metadata is scanned at the first time
to build a traditional index-friendly database, or cache, internally to speed up the access of APIs.

### Metadata Signature

There's a field `signature` in the metadata standard to proof the integrity and ownership of the data.
The signature in Primas is also calculated using the same method, both the hash function and
the asymmetric cryptography as the DTCP specifies, which is also the same with Ethereum.

SHA3 and Keccak256

Primas uses Keccak256 as the hasing function. In most cases SHA3 and Keccak256 are the same function.
However in Ethereum SHA3, which is Keccak256 is slightly different than the standard NIST-SHA3.
To be compatible with Ethereum. Primas uses Keccak256 in both DTCP and Primas network.

Asymmetric Cryptography

Primas uses ECDSA-SECP256K1 to calculate the signature which is also the same with DTCP and Ethereum.
The private key is a 32-byte big number. And the address is a portion of the public key.

##### Example of signature calculation and verification in Golang

```go
package main

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"crypto/sha256"
	"crypto/x509"
	"encoding/base64"
	"encoding/hex"
)

func Sign(data []byte, privateKey string) (string, error) {
	h := sha256.New()
	h.Write(data)
	hashed := h.Sum(nil)
	buff, _ := base64.StdEncoding.DecodeString(privateKey)
	priv, err := x509.ParsePKCS1PrivateKey(buff)
	if err != nil {
		return "", err
	}
	sign, err := rsa.SignPKCS1v15(rand.Reader, priv, crypto.SHA256, hashed)
	return hex.EncodeToString(sign), err
}

func Verify(data []byte, signature, public string) error {
	signatureDecode, err := hex.DecodeString(signature)
	if err != nil {
		return err
	}
	hashed := sha256.Sum256(data)
	buff, _ := base64.StdEncoding.DecodeString(public)
	pubInterface, err := x509.ParsePKIXPublicKey(buff)
	if err != nil {
		return err
	}
	pub := pubInterface.(*rsa.PublicKey)
	return rsa.VerifyPKCS1v15(pub, crypto.SHA256, hashed[:], signatureDecode)
}
```

### Metadata Posting

Primas is built upon DCTP, for compatibility the metadata used in Primas is the same as DCTP.
For all the metadata related APIs such as person registration, article posting, group creation and article sharing,
the metadata in DTCP standard is post in request body. And the metadata is saved
in the same format in decentralized storage.

For content posting APIs there's a small difference in metadata however
which is about the raw content. Since DTCP concerns about metadata only so the raw data
is not stored in DTCP metadata. DTCP contains a field called `content` which is used
to store a URI to the raw content. The raw content is stored separately in other places
that can be accessed using URI.

In Primas API however, the raw content in its base64 encoded form should be filled in the `content`
field in the post metadata. Primas Node extracts the content from metadata
and saves it in decentralized storage, gets a URI(in the case of IPFS, a link starts with "ipfs://"),
and puts the URI in the `content` field and saves the metadata to decentralized storage then.

### Sub Accounts

Primas supports the integration with traditional centralized applications.
Such applications could use APIs to connect to Primas Node(both self-hosted or public one)
and gain full power of Primas in a second.

Authentication in a decentralized system is done by digital signatures,
which means in a simplest setup applications connecting to Primas needs to
create a public/private keypair for each user, which makes the integration
much harder(applications need to handle the private key properly, whether using
a KMS infrastructure and taking the risk of losing all keys, or giving the keys to
users and taking the complains about lost keys cannot be found.) while at the
same time limits the customization of the economic model and tokens(PST incentives
are calculated and distributed directly to end users).

Primas provides the sub account system to make the integration process less painful
and support more ways integration can be designed.

In the sub account integration setup, only one public/private keypair needs to be created
for the application. The keypair is attached to a "root account" representing the identity
of the application. When posting content on behalf of a user in the application,
the application signs the request using its root account private key and passes the user's id
in the application as a parameter. Primas then creates a "sub account" for this user
which is attached to the root account. Every time the application wants to do something on
behalf of the same user, it must provide the same user's id parameter and signs it using the
root account private key.

In DTCP layer, however, the sub account and root account are both "account" object with only
one difference that sub account has no public key attached. There's a "link" object between
root and sub account establishing the relation between these 2 accounts. This gives the
opportunity of "upgrading" the sub account to a root account or binding different accounts
together in the future.

All the tokens are locked on the root account. If a sub account posts an article, 2 PST will be
locked on the root account. For large scale applications they must ensure enough token pre-lock
on the root account. The incentives are calculated on the sub account level, which means application
can get the daily incentives record for each application user. **But the PST incentives will be distributed
to the root account**.

Sub account system supports the isolation of PST and incentives model from the application's own.
PST can be only visible to the application's root account while users of the application know nothing
about it. Applications can build their own economic model and issue their own tokens on top of
integration with Primas.