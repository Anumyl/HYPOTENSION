import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ScanData from "./ScanData";
import ViewPatientData from "./ViewPatientData";
import ViewAllData from "./ViewAllData";
import HomeScreen from "./HomeScreen";
import history from "./history";

export default class Routes extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            
                <Switch>
                    {/* <Route path="/" exact component={HomeScreen} /> */}

                    <Route path="/" exact render={
                        () => <HomeScreen contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/ScanData" exact render={
                        () => <ScanData contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/ViewPatientData" exact render={
                        () => <ViewPatientData contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    <Route path="/ViewAllData" exact render={
                        () => <ViewAllData contract={this.props.contract} accounts={this.props.accounts} web3={this.props.web3}/>
                    }/>

                    {/* <Route path="/ScanData" component={ScanData} />
                    <Route path="/ViewPatientData" component={ViewPatientData} />
                    <Route path="/ViewAllData" component={ViewAllData} /> */}
                    
                </Switch>
            
        )
    }
}