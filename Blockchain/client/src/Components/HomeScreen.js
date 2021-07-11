import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from "./history";
class HomeScreen extends Component{
    constructor(props){
        super(props);
    }

    registerResearcher = async () => {
        try {
            this.props.contract.methods.registerResearcher().call({from: this.props.accounts[0]}).then((res)=>{
                alert (res)
            });
            alert(
                `Researcher Registered`,
            );
        }catch (error) {
            alert(
              `Function not called`,
            );
        }
    }
    render(){
        return(
            <div className="Home">
                <h1>Hello {this.props.accounts[0]}</h1>
                <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/ScanData')}>Scan Data </Button>
                    <br/><br/>
                    <Button variant="btn btn-success" onClick={() => history.push('/ViewPatientData')}>View Data </Button>
                    <br/><br/>
                    <Button variant="btn btn-success" onClick={this.registerResearcher}> Register as Researcher </Button>
                    <br/><br/>
                    <Button variant="btn btn-success" onClick={() => history.push('/ViewAllData')}>View All Data </Button>
                    <br/><br/>
                </form>
            </div>
        );
    }
}

export default HomeScreen;