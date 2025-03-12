<br>
<p align="center">
    <img src="https://github.com/luiz-lvj/etc-nova-hyperlane/blob/master/client/public/apple-touch-icon.png" align="center" width="20%">
</p>
<div align="center">
    <i>Quark ETC Bridge</i>
</div>

- [Demo Video](https://www.youtube.com/watch?v=MUPzl7vQbLM)
- [Deployment](https://www.quarkfi.xyz/?origin=mordor&destination=basesepolia)


### Overview (Hyperlane Permissionless Interoperability)

- Hyperlane is a permissionless interoperability protocol that enables secure cross-chain communication between different blockchain networks.

- It allows developers to build applications that can seamlessly interact across multiple chains without requiring permission from any central authority.

- The protocol uses a modular architecture with message passing and security mechanisms to ensure reliable cross-chain transactions and data transfers.

<img src="https://github.com/luiz-lvj/etc-nova-hyperlane/blob/master/images/hyperlane_flow.png" align="center" >

### How it works

Below we can see a simple flow of a bridge of tokens between two chains (Base Sepolia and Mordor Testnet):

<img src="https://github.com/luiz-lvj/etc-nova-hyperlane/blob/master/images/hyperlane_example.png" align="center">

### Front-end deployment

This was based on the Hyperlane UI template

<img src="https://github.com/luiz-lvj/etc-nova-hyperlane/blob/master/images/quark_front.png" align="center">

### Smart Contracts Deployements (Mordor Testnet)

- [DomainRoutingIsmFactory](https://etc-mordor.blockscout.com/address/0xBBaf87dA3F1c1B3c119E389590108830a1e89829)
- [InterchainAccountIsm](https://etc-mordor.blockscout.com/address/0x3F91bF074fff67f1EB12bA029982c29eBd26c08a)
- [InterchainAccountRouter](https://etc-mordor.blockscout.com/address/0xf0a41Df7879F0585Fad55bda91Fc7d02a4eEe186)
- [Mailbox](https://etc-mordor.blockscout.com/address/0x287E1E51Dad0736Dc5de7dEaC0751C21b3d88d6e)
- [MerkleTreeHook](https://etc-mordor.blockscout.com/address/0x681758218142237B23530B98a52eafD020B9bc08)
- [ProxyAdmin](https://etc-mordor.blockscout.com/address/0x11e14F08Bd326521A3C1f59eE4Be0EB64C04908D)
- [StaticAggregationHookFactory](https://etc-mordor.blockscout.com/address/0x8Dc3812f911383e6320D036e35Db8dF3774C4eE1)
- [StaticAggregationIsmFactory](https://etc-mordor.blockscout.com/address/0xAb23DF3fd78F45E54466d08926c3A886211aC5A1)
- [StaticMerkleRootMultisigIsmFactory](https://etc-mordor.blockscout.com/address/0x40F58Bd4616a6E76021F1481154DB829953BF01B)
- [StaticMerkleRootWeightedMultisigIsmFactory](https://etc-mordor.blockscout.com/address/0x871ea89101BbE55C8c3dDbAA0890C128E828A339)
- [StaticMessageIdMultisigIsmFactory](https://etc-mordor.blockscout.com/address/0xF69a42eFE9d2A3AD87436bD7589F2c497F910cef)
- [StaticMessageIdWeightedMultisigIsmFactory](https://etc-mordor.blockscout.com/address/0xF3129E7A264a174AF742604cE59C7b6E640F4A75)
- [TestRecipient](https://etc-mordor.blockscout.com/address/0x51665298A7Ce1781aD2CB50B1E512322A6B12458)
- [ValidatorAnnounce](https://etc-mordor.blockscout.com/address/0xF6F1dE9DE71107Ff83e464AfadDccCA0Cd0a33ed)


### Warp Routes Deployed

#### USC Token
**Base Sepolia**
- Token Address: [0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1](https://sepolia.basescan.org/address/0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1)
- Collateral Address: [0xAC3dCAc5c2E2ab6977bf76C6c8c12B2BDa85d3B7](https://sepolia.basescan.org/address/0xAC3dCAc5c2E2ab6977bf76C6c8c12B2BDa85d3B7)
- Decimals: 6
- Connected to: Mordor USC

**Mordor**
- Token Address: [0x8337FE827722d60E77CB45dFCA9314B8c6308FF5](https://etc-mordor.blockscout.com/address/0x8337FE827722d60E77CB45dFCA9314B8c6308FF5)
- Collateral Address: [0xDE093684c796204224BC081f937aa059D903c52a](https://etc-mordor.blockscout.com/address/0xDE093684c796204224BC081f937aa059D903c52a)
- Decimals: 6
- Connected to: Base Sepolia USC

#### USDC Token
**Base Sepolia**
- Token Address: [0x9a9d823fC474F3CAad9737F99c1b9043828290A6](https://sepolia.basescan.org/address/0x9a9d823fC474F3CAad9737F99c1b9043828290A6)
- Collateral Address: [0x401a84C2c4121043F631Eca1CBC6bc9b184265AA](https://sepolia.basescan.org/address/0x401a84C2c4121043F631Eca1CBC6bc9b184265AA)
- Decimals: 6
- Connected to: Mordor USDC

**Mordor**
- Token Address: [0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E](https://etc-mordor.blockscout.com/address/0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E)
- Collateral Address: [0xD333787e69DbfC47E67C59441e392Eb530b3DC19](https://etc-mordor.blockscout.com/address/0xD333787e69DbfC47E67C59441e392Eb530b3DC19)
- Decimals: 6
- Connected to: Base Sepolia USDC



