// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import { TrustedRelayerIsm } from "../src/TrustedRelayerIsm.sol";

contract DeployIsmScript is Script {
    TrustedRelayerIsm public trustedRelayerIsm;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        address mailbox = 0x287E1E51Dad0736Dc5de7dEaC0751C21b3d88d6e; // Mordor Testnet Mailbox
        address trustedRelayer = 0x9a56fFd72F4B526c523C733F1F74197A51c495E1; // owner

        trustedRelayerIsm = new TrustedRelayerIsm(
            mailbox,
            trustedRelayer
        );

        console.log("TrustedRelayerIsm deployed at", address(trustedRelayerIsm));

        vm.stopBroadcast();
    }
}
