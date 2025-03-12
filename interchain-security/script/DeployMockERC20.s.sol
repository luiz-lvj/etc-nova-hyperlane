// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { MockERC20 } from "../src/MockERC20.sol";

contract DeployMockERC20Script is Script {
    MockERC20 public mockERC20;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        mockERC20 = new MockERC20("USC", "USC");

        console.log("MockERC20 deployed at", address(mockERC20));

        vm.stopBroadcast();
    }
}
