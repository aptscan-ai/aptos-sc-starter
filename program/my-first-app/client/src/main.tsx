import { AptosClient, AptosAccount, FaucetClient, TransactionBuilderRemoteABI, HexString } from "aptos";
import { Buffer } from 'buffer';
export const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
export const FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
export const aptosCoinStore = "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>";
import nacl from 'tweetnacl'

export const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
const accountConfig = {
    publicKey: "0xa48e2ca945850ea52f4dea61073bacc39528ce4a2fb4f185950385dd1dc55967",
    privateKey: "0xd5c095ffb31ca63951c04cd220e612c9e4cd1f30d6473d31313d940fc03dd34b",
    authentKey: "0x72d8e526f3c7328f60f4fdd0a80b09a87f5ca3ca9c85d6897a1738aedaa003e2"
}
const accountSourceId = `${accountConfig.authentKey}::todolist::TodoList`

const myAccount = new AptosAccount(
    HexString.ensure(accountConfig.privateKey).toUint8Array()
);

type Task = {
    address: string;
    completed: boolean;
    content: string;
    task_id: string;
};

async function createResouce() {

}

async function createList() {
    const payload = {
        type: "entry_function_payload",
        function: `${accountConfig.authentKey}::todolist::create_list`,
        type_arguments: [],
        arguments: [],
    };
    const txnRequest = await client.generateTransaction(myAccount.address(), payload);
    const signedTxn = await client.signTransaction(myAccount, txnRequest);
    const transactionRes = await client.submitTransaction(signedTxn);
    return await client.waitForTransaction(transactionRes.hash);

}

async function main() {
    let createListRs = await createList()
    console.log(createListRs)
    // console.log(myAccount)

}

main()