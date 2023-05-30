import { AptosClient, AptosAccount, FaucetClient, TransactionBuilderRemoteABI, HexString, TxnBuilderTypes, BCS } from "aptos";
import { Buffer } from 'buffer';
export const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
export const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
export const aptosCoinStore = "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>";
import nacl from 'tweetnacl'
import { sha3_256 as sha3Hash } from "@noble/hashes/sha3";
import assert from "assert";

export const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
const accountConfig = {
    publicKey: "0xa48e2ca945850ea52f4dea61073bacc39528ce4a2fb4f185950385dd1dc55967",
    privateKey: "0xd5c095ffb31ca63951c04cd220e612c9e4cd1f30d6473d31313d940fc03dd34b",
    authentKey: "0x72d8e526f3c7328f60f4fdd0a80b09a87f5ca3ca9c85d6897a1738aedaa003e2"
}

async function main() {
    // await createList()
    // let createListRs = await createTask()

    console.log("hello")

}

main()