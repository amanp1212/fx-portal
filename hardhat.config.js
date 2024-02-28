require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    //if you want to use sepolia network
    // sepolia: {
    //   url: 'https://ethereum-sepolia.publicnode.com',
    //   apikey: 'https://eth-sepolia.g.alchemy.com/v2/[MYALCHEMY_API_KEY]',
    //   accounts: [process.env.PRIVATE_KEY],
    //   etherscan: {
    //     // Your API key for Etherscan
    //     // Obtain one at https://etherscan.io/
        
    //     apiKey: '1N81UN57Q3KG2F358G643NW9RR2CZ1GAAX',
    //   },
      
    // },
    
  }
};

