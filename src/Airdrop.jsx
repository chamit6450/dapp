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
        <div>
            <input
                type='number' // Change to 'number' for better input handling
                placeholder='Enter amount'
                onChange={handleChange} 
            />
            <button onClick={sendAirdropToUser }>Send Airdrop</button>
        </div>
    );
}

export default Airdrop;