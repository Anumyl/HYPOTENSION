import React, { Component } from "react";
import PatientData from "../contracts/PatientData.json";
import { Container, Row, Col } from 'reactstrap';
class ViewAllData extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    getPatientDataInst(address){
        const instance = new this.props.web3.eth.Contract(PatientData.abi, address);
        return instance;
    }
    loadPatientData(){
        let dataArr = [];
        try {
            this.props.contract.methods.returnAllData().call({from: this.props.accounts[0]}).then(
                (patientDataList) => {
                    console.log(patientDataList);
                    patientDataList.forEach((patientData) =>{
                        // setTimeout(()=>{
                            const patientInst = this.getPatientDataInst(patientData);
                            patientInst.methods.getDetailsResearcher().call().then(
                                (data) => {
                                    console.log(data);
                                    dataArr.push(data);
                                }
                            )
                            
                        // })
                    });
                    setTimeout(()=>{
                        this.setState({
                            allData : dataArr,
                            isLoading : false
                        });
                    }, 1500);                    
                } 
            ).then( async() =>{
                this.setState({allData : dataArr});
            });
        }catch (error) {
            alert(
              `PatientData not called`,
            );
        }
        console.log("Patient Data Loaded");
    }

    componentDidMount(){
        this.loadPatientData();
    }
    render(){

        const displayData = this.state.isLoading === false ? (
            this.state.allData !==null ? (this.state.allData.map((k) => {
                     return(
                         <Container className="hover-decoration">
                            <Row className="align-items-center">
                                <Col>
                                    <p>{k.title}</p>
                                    <p>Sys Pressure: {k.EncSysPressure}</p>
                                    <p>Dia Pressure: {k.EncDiaPressure}</p>
                                    <p>Map : {k.EncMap}</p>
                                    <p>Result: {k.Result}</p> 
                                </Col>
                            </Row>
                            <hr/>
                         </Container>
                     );
                 }
         )): (<div> No Data Available </div>) ) : (<div> Loading... </div>)

        return(
            <div className="ViewAllData">
                <Container>
                    <Row>
                        <h1>View Data</h1>
                        {displayData}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ViewAllData;