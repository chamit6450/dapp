import React, { useState } from 'react';
import {
    useConnection,
    useWallet
} from "@solana/wallet-adapter-react";

function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();
    const [dropAmt, setDropAmt] = useState(0);

    async function sendAirdropToUser () {
        if (wallet.publicKey) {
            // Convert dropAmt from SOL to lamports
            const lamports = dropAmt * 1e9; // 1 SOL = 1 billion lamports
            try {
                const airdropSignature = await connection.requestAirdrop(wallet.publicKey, lamports);
                
                alert("Airdrop sent!");
            } catch (error) {
                console.error("Airdrop failed:", error);
                alert("Airdrop failed. Please try again.");
            }
        } else {
            alert("Connect your wallet!");
        }
    }

    const handleChange = (e) => {
        setDropAmt(Number(e.target.value)); 
    };

    return (
        <div className="flex items-center justify-center  border-teal-500 py-2 ">
    <input
        type='number'
        placeholder='Enter amount'
        onChange={handleChange} 
        className=" border-none rounded-lg h-9 w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
    <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        onClick={sendAirdropToUser }
    >
        Send Airdrop
    </button>
</div>
    );
}

export default Airdrop;