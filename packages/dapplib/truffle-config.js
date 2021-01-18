require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purity install open fortune seed'; 
let testAccounts = [
"0x6737ed4df2ac681d732760278bb8dd1a7a2ba8f29a16d19548154b9612ab8de3",
"0xa5031092d32ead3d0f5df10ddc895c938bd9a7ca1872c63009a80e7381eda8c1",
"0xad63170ebe31313cb6ff4286a9802a2ab23b0f747450cc16243b91297a8a6a83",
"0xe2fb6ab613a4a550739f5e4e3abfde9e76b95c67c77dc97322c2d8e3a7637436",
"0x98ff5b27176a9d5436340b21738457bc123e76bc2a42f402d0ce6a30a1b490bc",
"0xab1d4241609775b45fc7d80f4001c7673ed06c59379404a55ef9d5acc5e041aa",
"0x29fbf77b84be2107ea0569449b26ae691d65a9d03e327ff3cbd80edf4093593c",
"0xba28bb0334f7a9c943225335843b6c7c0f1df63ec5a9b0d1c2b53b09680f94bb",
"0xcc6337a479b6c817e15baa2b3fb5ce4f974a0aa6cfdbb8047d9c15fb2f6d40f0",
"0xf355934afacb80ca16c894fb8953e626127e15e9a73d9ad62583fa3632b5e02f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
