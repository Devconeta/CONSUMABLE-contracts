import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const baseConfig: HardhatUserConfig = {
  solidity: "0.8.26",
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    receiver: {
      default: 1,
    },
    zeroAddress: {
      default: "0x0000000000000000000000000000000000000000",
    },
    oneAddress: {
      default: "0x0000000000000000000000000000000000000001",
    },
    twoAddress: {
      default: "0x0000000000000000000000000000000000000002",
    },
  },
  networks: {
    localhost: {
      saveDeployments: true,
    },
    hardhat: {
      saveDeployments: true,
    },
  },
  mocha: {
    timeout: 40000,
  },
};

export default baseConfig;
