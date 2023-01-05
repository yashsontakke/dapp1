// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.6.6;
pragma experimental ABIEncoderV2;
contract tip{

    struct Person{
        string senderName ;
        address from ;
        string  messgae ;
        uint time ;
    }

    Person[] person ;
    address payable owner;
    constructor() public{
        owner = payable(msg.sender);
    }

    function send(string memory senderName , string memory messgae ) public payable {
        require(msg.value>0 , "please do send greater than 0");
        owner.transfer(msg.value);
        person.push(Person(senderName,msg.sender,messgae,block.timestamp));
    }

    function getPersons() public view returns( Person[] memory  ){
        return person;
    }

}