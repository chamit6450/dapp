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
        <div className="flex items-center justify-center ">
           <div className="h-9"> {balance/1000000000} </div>
            <button
             className=" ml-80 flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
             onClick={showUserBalance}>Check Balance</button>
        </div>
    )
  }