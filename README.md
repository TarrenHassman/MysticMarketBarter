## Mystic Market

# Decentralized SDK for non double-spending vunerable uses
Currently the most popular method of building decentralized networks is to simply use a cryptocurrency style blockchain for storage. This has a major limitation of cost for users or requires developers to find monetization methods quickly. This limitation is due to the use of a double-spending proof network, where a large number of decentralized use-cases do not need protection from double-spending attacks.

Social media posts are one such example which do not need these protections.

This project will explore some of the methodologies used to protect a decentralized network using cryptographic keys and Merkle-DAGs


# OrbitDB
"OrbitDB is a serverless, distributed, peer-to-peer database. OrbitDB uses IPFS as its data storage and Libp2p Pubsub to automatically sync databases with peers. It's an eventually consistent database that uses Merkle-CRDTs for conflict-free database writes and merges making OrbitDB an excellent choice for p2p and decentralized apps, blockchain applications and local-first web applications."

# P2P propogation

# Local First Storage
People often talk about "Not your keys, Not your crypto" yet they rarely even store the keys(pointers) to their own data. You can see this in the way NFTs are currently managed, often defaulting to using centralized APIs/systems such as OpenSea/Alchemy-SDK as wallets do not by default store information such as a list of NFT addresses unless you do so manually.

The majority of users will never setup an IPFS/Filecoin node on their desktop. We have seen examples of how this has effected end user's with the lose of their NFT file data.

OrbitDb focuses on a local first approach, meaning you store your NFT data by default and don't constantly attempt to retreive it from the network.

# Possible Alternatives

These are possible alternatives to be used in an eventual re-write of the platform.

# RxDb
This is an alternative database sdk which allows webRTC p2p systems

This could allow developers more granular control of database structures for their applications

It also allows for better distinction between the "file system" (IPFS) and the database layer (Orbit/RxDb)



# Credits / Attributions / Tutorials

