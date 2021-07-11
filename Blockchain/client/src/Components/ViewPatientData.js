import React, { Component } from "react";
import PatientData from "../contracts/PatientData.json";
import { Container, Row, Col } from 'reactstrap';
class ViewPatientData extends Component{
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
            this.props.contract.methods.getPatientData().call({from: this.props.accounts[0]}).then(
                (patientDataList) => {
                    //console.log(patientDataList);
                    patientDataList.forEach((patientData) =>{
                        // setTimeout(()=>{
                            const patientInst = this.getPatientDataInst(patientData);
                            patientInst.methods.getDetailsPatient().call().then(
                                (data) => {
                                    //console.log(data);
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

                    //this.setState({allData : dataArr});
                    
                } 
            ).then( async() =>{
                this.setState({allData : dataArr});
            });
        }catch (error) {
            // Catch any errors for any of the above operations.
            alert(
              `PatientData not called`,
            );
        }
        //console.log(this.state.allData);
        // try{
        //     console.log(this.state.allData);
        // }
        // catch(error){
        //     alert `error`
        // }
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
                                    <p>Sys Pressure: {k.SysPressure}</p>
                                    <p>Dia Pressure: {k.DiaPressure}</p>
                                    <p>Map : {k.Map}</p>
                                    <p>Result: {k.Result}</p> 
                                </Col>
                            </Row>
                            <hr/>
                         </Container>
                     );
                 }
         )):console.log(this.state.projects.length) ) : (<div> Loading... </div>)


        return(
            <div className="ViewPatientData">
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

export default ViewPatientData;