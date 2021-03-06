import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import EdgeHealthCare from "./contracts/EdgeHealthCare.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Components/Routes";
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const deployedNetwork = EdgeHealthCare.networks[networkId];
      const instance = new web3.eth.Contract(
        EdgeHealthCare.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      //this.setState({ web3, accounts, contract: instance }, this.runExample);
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    
    //await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.display().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <div className="App">
          <h1>Edge HealthCare {this.state.storageValue}</h1>
          <Routes contract={this.state.contract} accounts={this.state.accounts} web3={this.state.web3}/>
        </div>
      </Router>
    );
  }
}

export default App;
