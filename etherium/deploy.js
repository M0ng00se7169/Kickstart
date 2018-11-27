const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'call glow acoustic vintage front ring trade assist shuffle mimic volume reject',
  'https://rinkeby.infura.io/v3/c032d11d54fe4cedaefe93eb68eab21e'
);
const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ gas: '1000000' , from: accounts[0]})
    
  console.log('Contract deployed to', result.options.address);
};
deploy()

var hdkey = require("ethereumjs-wallet/hdkey")
var bip39 = require("bip39");

// You can generate a mnemonic seed with bip39 library
var mnemonic = "seed sock milk ...";
var path = "m/44'/60'/0'/0/0";

var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
var wallet = hdwallet.derivePath(path).getWallet();
var address = "0x" + wallet.getAddress().toString("hex");

console.log(address + "\n")
