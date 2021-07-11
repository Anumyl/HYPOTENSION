pragma solidity ^0.5.16;

contract PatientData{
    address public patient;
    uint public encSysPressure;
    uint public encDiaPressure;
    uint public encMap;
    uint public sysPressure;
    uint public diaPressure;
    uint public map;
    string public result;

    constructor(
        address _patient, uint  _encSysPressure, uint  _encDiaPressure,
        uint  _encMap, uint  _sysPressure,
        uint  _diaPressure, uint  _map,
        string memory  _result
    )public{
        patient = _patient;
        encSysPressure = _encSysPressure;
        encDiaPressure = _encDiaPressure;
        encMap = _encMap;
        sysPressure = _sysPressure;
        diaPressure = _diaPressure;
        map = _map;
        result = _result;
    }
    
    function getDetailsPatient() public returns(
        uint SysPressure, uint DiaPressure,
        uint Map, string memory Result
    ){
        SysPressure = sysPressure;
        DiaPressure = diaPressure;
        Map = map;
        Result = result;
    }

    function getDetailsResearcher() public returns(
        uint EncSysPressure, uint EncDiaPressure, 
        uint EncMap, string memory Result
    ){
        EncSysPressure = encSysPressure;
        EncDiaPressure = encDiaPressure;
        EncMap = encMap;
        Result = result;
    }
}