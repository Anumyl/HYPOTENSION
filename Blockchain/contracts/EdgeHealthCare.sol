pragma solidity ^0.5.16;
import "./Set.sol";
import "./PatientData.sol";


contract EdgeHealthCare {
    Set.Data researcherSet;
    PatientData[] private patientData;
    PatientData[] private nullData;

    mapping(address => bool) rSet;

    //mapping(address => Set.Data) patientSpecificData;
    mapping(address => PatientData[]) patientSpecificData;

    constructor() public {}

    //Add a data from one instance to the patientData Array
    function addData(
        uint  _encSysPressure, uint  _encDiaPressure,
        uint  _encMap, uint  _sysPressure,
        uint  _diaPressure, uint  _map,
        string memory  _result
    ) public {
        PatientData newPatient = new PatientData(msg.sender, _encSysPressure, _encDiaPressure, _encMap,
                                             _sysPressure, _diaPressure, _map, _result);
        patientData.push(newPatient);
        

        //Set.insert(patientSpecificData[msg.sender], address(newPatient));
        patientSpecificData[msg.sender].push(newPatient);
    }

    /*
    function isResearcher() external returns(bool){
        return Set.contains(researcherSet, msg.sender);
    }

    function registerResearcher() external returns(bool){
        //require(!Set.contains(researcherSet, msg.sender));
        if(!Set.contains(researcherSet, msg.sender)){
            Set.insert(researcherSet, msg.sender);
            return true;
        }
        return false;
    }

    function returnAllData() external view returns(PatientData[] memory){
        if(Set.contains(researcherSet, msg.sender))
            return patientData;
        else
            return nullData;
    }
    */

    function registerResearcher() external returns(bool){
        rSet[msg.sender] = true;
        return rSet[msg.sender];
    }
    
    function returnAllData() external view returns(PatientData[] memory){
        if(rSet[msg.sender])
            return patientData;
        else
            return patientData;
    }

    function getPatientData() external view returns(PatientData[] memory){
        return patientSpecificData[msg.sender];
    }

    function display() external returns(string memory){
        return "Hello Solidity";
    }
}

/*
    returnAllData
    addData
    RegisterResearcher


    emitter for researcher / eventLog
    Mapping patiend address : data address
    patient 1 : N Data -- 
*/

/*
    Since the addresses don't store the object as a whole, we use mapping
    uint and address don't differ much in space complexity 
    Just constant increase/decrease;

    Researcher click, update events 
*/