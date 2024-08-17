## Mystic Market

# Warnings
Due to some node version conflict this is currently only function on dev build, not production.
For this reason it is not hosted on Vercel.

The OrbitDb features are currently local network only

In order to use it:
Clone the repo
npm run dev

Enjoy!

# Decentralized SDK for non double-spending vulnerable uses
Currently the most popular method of building decentralized networks is to simply use a cryptocurrency style blockchain for storage. This has a major limitation of cost for users or requires developers to find monetization methods quickly. This limitation is due to the use of a double-spending proof network, where a large number of decentralized use-cases do not need protection from double-spending attacks.

Social media posts are one such example which do not need these protections.

This project will explore some of the methodologies used to protect a decentralized network using cryptographic keys and Merkle-DAGs


# OrbitDB
"OrbitDB is a serverless, distributed, peer-to-peer database. OrbitDB uses IPFS as its data storage and Libp2p Pubsub to automatically sync databases with peers. It's an eventually consistent database that uses Merkle-CRDTs for conflict-free database writes and merges making OrbitDB an excellent choice for p2p and decentralized apps, blockchain applications and local-first web applications."

# P2P propogation
A connection cannot be made directly to a browser node. Browsers do not listen for incoming connections, they operate in a server/client environment where the server address is known and the browser connects to the server using the known address. Therefore, for a browser to respond to an incoming connection a relay is required to "listen" on the browser's behalf. The relay assigns and advertises multi addresses on behalf of the browser nodes, allowing the nodes to create a direct connection between each other.

Peer to peer connections where another peer connects to a browser node can use WebRTC as the transport protocol. A relay server is required to facilitate the discovery of a node and establish a direct connection to another node.

The final version will compile a Node version of OrbitDb to react native to eliminate the need for a relay.
This work has been started but is outside the scope of this hackathon.

# Local First Storage
People often talk about "Not your keys, Not your crypto" yet they rarely even store the keys(pointers) to their own data. You can see this in the way NFTs are currently managed, often defaulting to using centralized APIs/systems such as OpenSea/Alchemy-SDK as wallets do not by default store information such as a list of NFT addresses unless you do so manually.

The majority of users will never setup an IPFS/Filecoin node on their desktop. We have seen examples of how this has effected end user's with the lose of their NFT file data.

OrbitDb focuses on a local first approach, meaning you store your NFT data by default and don't constantly attempt to retreive it from the network.


# Roadmap

# Mobile First Plans

A mobile first platform should be a focus for a social media.

The following rebuild will most likely be done with React Native. I have the begginings of integrating OrbitDb already in the works.

# Rich Text Editor
The platform will incorporate a rich text editor for dynamic posts to bring back the era of customizable social media ala Myspace.

# NFT integration
Integrate viewing NFTs as well as integrating them into posts and enforcing ownership to do so

# Custom Access Controller
Allow access to a database based on NFT ownership by signing wallet

# Chainlink Relay
Build a relay server using Chainlink

# Web3 inbox integration
Display web3 notifications

# Possible Alternatives

These are possible alternatives to be used in the next rewrite as I learn from the previous versions.

# RxDb
This is an alternative database sdk which allows webRTC p2p systems

This could allow developers more granular control of database structures for their applications

It also allows for better distinction between the "file system" (IPFS) and the database layer (Orbit/RxDb)



If you would like to donate to the project you can to: 0x729A36e98445cd8C657bBB0f7F19Ef624864a0E3

If you would like to join the project, please feel free to join using github:
*Do note*
*The project will be moved to a more accurately named github repo*