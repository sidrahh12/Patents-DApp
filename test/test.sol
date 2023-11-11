// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/PatentdApp.sol";

contract TestPatentdApp {
    PatentdApp patentdApp = PatentdApp(DeployedAddresses.PatentdApp());

    function testInitialPatentCount() public {
        uint40 expected = 0;
        uint40 returned = patentdApp.numberOfPatents();
        Assert.equal(returned, expected, "Initial number of patents should be 0.");
    }
}
