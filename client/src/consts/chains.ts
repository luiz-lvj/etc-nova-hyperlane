import {
  basesepolia,
  eclipsemainnet,
  eclipsemainnetAddresses,
  solanamainnet,
  solanamainnetAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  // solanamainnet: {
  //   ...solanamainnet,
  //   // SVM chains require mailbox addresses for the token adapters
  //   mailbox: solanamainnetAddresses.mailbox,
  //   // Including a convenient rpc override because the Solana public RPC does not allow browser requests from localhost
  //   rpcUrls: process.env.NEXT_PUBLIC_SOLANA_RPC_URL
  //     ? [{ http: process.env.NEXT_PUBLIC_SOLANA_RPC_URL }, ...solanamainnet.rpcUrls]
  //     : solanamainnet.rpcUrls,
  // },
  // eclipsemainnet: {
  //   ...eclipsemainnet,
  //   mailbox: eclipsemainnetAddresses.mailbox,
  // },


  mordor: {
    protocol: ProtocolType.Ethereum,
    chainId: 63,
    displayName: "Mordor Testnet",
    name: "mordor",
    domainId: 63,
    nativeToken: { name: "mETC", symbol: "mETC", decimals: 18 },
    rpcUrls: [{
      http: "https://rpc.mordor.etccooperative.org"
    }],
    blockExplorers: [
      {
        name: "Mordor Blocksckout Explorer",
        url: "https://etc-mordor.blockscout.com",
        apiUrl: "https://etc-mordor.blockscout.com/api",
        family: ExplorerFamily.Blockscout,
      }
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 10,
    },
    logoURI: "/ethereum-classic-etc-logo.png",
    isTestnet: true,
  }


  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
      //   domainId: 123123,
      //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
};
