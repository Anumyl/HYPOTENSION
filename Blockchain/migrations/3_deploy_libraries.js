var lib = artifacts.require("./Set.sol");
var EdgeHealthCare = artifacts.require("./EdgeHealthCare.sol");


// module.exports = function(deployer) {
//   deployer.deploy(lib);
// };


/*
async function doDeploy(deployer) {
  await deployer.deploy(lib);
  await deployer.deploy(EdgeHealthCare);
}

module.exports = (deployer) => {
  deployer.then(async () => {
      await doDeploy(deployer);
  });
};
*/

module.exports = function (deployer) {
  deployer.deploy(lib);
  deployer.link(lib, EdgeHealthCare);
  deployer.deploy(EdgeHealthCare);
};



// module.exports = function(deployer) {
//   deployer.deploy(lib).then(() => {
//     deployer.deploy(EdgeHealthCare);
//   });
// }


