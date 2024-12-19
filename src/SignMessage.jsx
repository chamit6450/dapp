import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function signUserMessage(){
        if(!publicKey) alert("Please connect to your wallet!");
        const message = document.getElementById('message').ariaValueMax;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);
    }
  return (
    <div className="flex items-center justify-center  border-teal-500 py-2 ">
        <input id='message' type="text" placeholder='Enter message' 
        className=" border-none rounded-lg h-9 w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
        <button 
         className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
       
        onClick={signUserMessage}>Sign Message</button>
    </div>
  )
}

export default SignMessage