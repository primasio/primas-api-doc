# Primas Node API Documentation

## Getting Started Guide

This document describes the general steps required to connect traditional applications to Primas network.
We will use an example to illustrate the whole integration process. In this example we connect a basic UGC platform
into Primas, where users can sign up, post their content, join different groups, and discuss about the content.

### 1. Prepare the root account

To make the life easier for applications, there's only one crypto account(a public/private keypair) that is required
to connect to Primas. This account is used by the application to sign requests. A proper design of offline signing is
still required to protect the private key. This is already less work comparing to generating keypair for every single
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
and keep it at a safe place.

Let's skip the steps where we go to a token exchange who has PST listed and buy some PSTs and withdraw those tokens
into the account we just created.

Now the root account is fully prepared and can be used to sign API requests.

### 2. User sign up



### 3. User profile editing

### 4. Content posting

### 5. Create group

### 6. Join a group

### 7. Share content to a group

### 8. Discuss about the content

