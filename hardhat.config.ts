import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const baseConfig: HardhatUserConfig = {
  solidity: "0.8.26",
  paths: {
    sources: "./src/contracts",
    tests: "./src/tests",
    cache: "./src/cache",
    artifacts: "./src/artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};

export default baseConfig;
