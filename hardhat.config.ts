import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
      accounts: [
        {
          privateKey: process.env.LOCAL_PRIVATE_KEY_1,
          balance: "10000000000000000000000",
        },
        {
          privateKey: process.env.LOCAL_PRIVATE_KEY_2,
          balance: "10000000000000000000000",
        },
        {
          privateKey: process.env.LOCAL_PRIVATE_KEY_3,
          balance: "10000000000000000000000",
        },
        {
          privateKey: process.env.LOCAL_PRIVATE_KEY_4,
          balance: "10000000000000000000000",
        },
      ],
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.BSC_TESTNET_PRIVATE_KEY],
    },
    mainnet: {
      url: process.env.BSC_MAINNET_RPC,
      accounts: [process.env.BSC_MAINNET_PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts/8.7",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v5",
  },
  mocha: {
    timeout: 50000,
  },
};
