require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth meadow common harvest clog obscure toss'; 
let testAccounts = [
"0x8946216c07b99a84d27c2c887d156fd0574e52e6b41ab384bc822a89b2b21fb0",
"0xf90e5b635e977af145e1a2b9289a61ba28ceddcf4a7370cea3c2b76ccb30e36f",
"0xa7393376da032eb6bde5106a5d2214e6df397c95e5e44704c213b994b0643a95",
"0x7a1cb382ff6cdfe7572e4c8b3805a1558f7be53dc3cd5a009eccde090248888b",
"0xbfc3e2f0a4353a997a9d2f1cf05273f33d4fad49fed76fb070ff8385550dba9b",
"0xe8aa60710392f9947ed7ec0d346f240fdc2b37fcc9e3233ca83bd1336536449d",
"0x384d0a7e0eb36983159edf0cdb8d4556d213d1b6e2df43d85b245156b7f42d8b",
"0xbce336c86a71a3507ac77e6df5e3c9c5333499b7137e176f5649e7b37fa5ee4c",
"0x4c3e9e8def531a8f7ee782c46517630de421ae75229925a51841773f109074cc",
"0x94b3c4db3d927c6ace631b1bc407947832601916cffe9a5ce1ba230a262ae67e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

