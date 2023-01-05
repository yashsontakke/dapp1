require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.6.6",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/GvHuwBeRrkFzXdoCWRoIXoBasSS-Jrk_",
      accounts:["0x598cc92bdcbfcea2473019fc46f0619e14bd66dd5076ec95778258861b187851"],
    },
  },
};