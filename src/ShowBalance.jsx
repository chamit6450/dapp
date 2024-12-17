import {
    useConnection,
    useWallet
  } from "@solana/wallet-adapter-react";
import { useState } from "react";


  export default function ShowBalance(){
   const wallet = useWallet();
   const {connection} = useConnection();
   const [balance, setBalance] = useState();
   


const showUserBalance = async () => {
    if (wallet.publicKey) {
        const balanceLamports = await connection.getBalance(wallet.publicKey);
        setBalance((balanceLamports));
        console.log(balance);
    }
};

    return (
        <div>
            <button onClick={showUserBalance}>Check Balance</button>
            {balance/1000000000}
        </div>
    )
  }