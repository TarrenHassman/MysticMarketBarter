import React, { useEffect, useState } from "react";
import { Store } from "@tanstack/react-store";
import { LevelBlockstore } from "blockstore-level";
import { createLibp2p } from "libp2p";
import { createOrbitDB, useIdentityProvider, Identities,OrbitDBAccessController } from "@orbitdb/core";
import OrbitDBIdentityProviderEthereum,{OrbitDBIdentityProviderWalletConnect} from "./config/walletconnect"
import {
  DefaultLibp2pBrowserOptions,
  DefaultLibp2pOptions,
} from "./config/libp2p";
import { createHelia } from "helia";
import { gossipsub } from "@chainsafe/libp2p-gossipsub";
import { useAccount, useSignMessage } from "wagmi";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { BrowserProvider, Wallet } from 'ethers'
const isBrowser = () => typeof window !== "undefined";
export const orbit = new Store({
  state: {
    manager: {},
    isLoaded: false,
    databases: [],
  },
});

export default function Orbit() {
  const { walletProvider } = useWeb3ModalProvider()

  async function onSignMessage() {
    const provider = new BrowserProvider(walletProvider)
    const signer = await provider.getSigner()
    const signature = await signer?.signMessage('Hello AppKit Ethers')
    console.log(signature)
  }
  let loading = false;
  // const [wallet]
  useEffect(() => {
    async function loadDB() {
      //Orbit DB setup
      //IPFS setup
      const options = isBrowser()
        ? DefaultLibp2pBrowserOptions
        : DefaultLibp2pOptions;
      const libp2pOptions = await createLibp2p({ ...options });
      const blockstore = new LevelBlockstore("./ipfs/blocks");
      const ipfs = await createHelia({ libp2p: libp2pOptions, blockstore });

      //Wallet connect Orbit DB account binding
      //Fetch wallet from wallet connect
      const wallet = Wallet.createRandom();
      console.log("Create Provider");
      console.log(OrbitDBIdentityProviderEthereum);
      useIdentityProvider(OrbitDBIdentityProviderEthereum);
    //   console.log(isConnected);

    //  const value = signMessage(
    //     {
    //       account: address,
    //       message: "",
    //     }
    //   )

    

      // console.log(value)
      const provider = OrbitDBIdentityProviderEthereum({wallet});
      const identities = await Identities({ ipfs });
      const identity = await identities.createIdentity({
        id: "userA",
        provider,
      });

      const orbitManager = await createOrbitDB({
        ipfs,
        identities,
        identity,
      });
      orbit.setState(() => {
        return {
          state: {
            manager: orbitManager,
            isLoaded: false,
            databases: orbit.state.state.databases,
          },
        };
      });

      //Database creation
      const db = await orbitManager.open("db.address");
      console.log(db.address);
      orbit.setState(() => {
        orbit.state.state.databases.push(db);
        return {
          state: {
            manager: orbitManager,
            isLoaded: true,
            databases: orbit.state.state.databases,
          },
        };
      });
      // setAddress(db.address);
      // Add some records to the db.
      await db.add("hello world 1");
      await db.add("hello world 2");

      // Print out the above records.
      console.log("Records:");
      console.log(await db.all());
    //   process.on('SIGINT', async () => {
    //     // print the final state of the db.
    //     console.log((await db.all()).map(e => e.value))
    //     // Close your db and stop OrbitDB and IPFS.
    //     await db.close()
    //     await orbitManager.stop()
    //     await ipfs.stop()
  
    //     process.exit()
    // })
    }

    if (!loading) {
      loading = true;
      loadDB();
    }
  }, []);
  return <div></div>;
}
