import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./Airdrop.jsx";
import ShowBalance from "./ShowBalance.jsx";
import SignMessage from "./SignMessage.jsx";

function App() {
  // const network = WalletAdapterNetwork.Devnet;

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <>
    {/* <div>
      hi there!!
    </div> */}
    
    <ConnectionProvider endpoint={"https://divine-capable-seed.solana-devnet.quiknode.pro/3f4d8f9a6adc7a6ed015835e102028040732f559"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div >
            <div className="absolute top-0 left-0 m-2">
            <WalletMultiButton /></div>
            <div className="absolute top-0 right-0 m-2">
            <WalletDisconnectButton /></div>
            
            <div className="mt-20 mr-80 ml-80 p-4 bg-zinc-700 rounded-md">
              <div className="mt-5">
              <Airdrop />
              </div>
              <div className="mt-5">
              <SignMessage />
              </div>
              <div className="mt-5">
              <ShowBalance />
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    </>
  );
}

export default App;