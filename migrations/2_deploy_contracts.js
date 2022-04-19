const CustomCoin = artifacts.require("CustomCoin");

module.exports = async function(deployer) {
    await deployer.deploy(CustomCoin);
};
