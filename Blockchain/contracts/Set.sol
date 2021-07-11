pragma solidity ^0.5.16;
//Library to implement set
library Set {
    struct Data { mapping(address => bool) flags; }

    function insert(Data storage self, address value)
        public
        returns (bool){
        if (self.flags[value])
            return false; // already there
        self.flags[value] = true;
        return true;
    }

    function remove(Data storage self, address value)
        public
        returns (bool){
        if (!self.flags[value])
            return false; // not there
        self.flags[value] = false;
        return true;
    }

    function contains(Data storage self, address value)
        public
        view
        returns (bool){
        return self.flags[value];
    }
}