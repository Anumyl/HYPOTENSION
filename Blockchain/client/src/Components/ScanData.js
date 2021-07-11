import React, { Component } from "react";
import $ from "jquery";
var obj;
class ScanData extends Component{

    constructor(props){
        super(props);
        this.scanData = this.scanData.bind(this);
    }

    scanData(){
       
        
        $.ajax({
            url: 'http://localhost:65432',
            method: 'GET',
            success: function(response) {
                obj=JSON.parse(response)
                console.log(obj);
            }  
          });
            setTimeout(()=>{
                this.props.contract.methods.addData(obj.ENC_SYSTOLIC_PRESSURE, obj.ENC_DIASTOLIC_PRESSURE,obj.ENCRYPTED_MAP , obj.SYSTOLIC_PRESSURE, obj.DIASTOLIC_PRESSURE, obj.DECRYPTED_MAP,obj.TEST_REPORT ).send({from: this.props.accounts[0]});
            }, 1500);
            
            console.log("Done");
          
    }

    componentDidMount = async () => {
        this.scanData()
        
      
    }
    render(){
        return(
            <div className="ScanData">
                <h1>Hello {this.props.accounts[0]}</h1>
                <h1> Scan Data</h1>
            </div>
        );
    }
}

export default ScanData;