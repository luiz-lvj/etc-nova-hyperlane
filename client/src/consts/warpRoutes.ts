import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // {
    //   chainName: "mordor",
    //   standard: TokenStandard.EvmHypCollateral,
    //   decimals: 18,
    //   symbol: "WETC",
    //   name: "Wrapped Ethereum Classic",
    //   addressOrDenom: "0x4ddB2bB8724a20A9366DA7Fb2f080175B697D563",
    //   collateralAddressOrDenom:  "0x4309FcAA812F729A2c6Fc9b67094296389eC919c",
    //   logoURI: "https://www.wrappedether.org/images/wrapped-ether.png",
    //   connections: [{
    //     token: "ethereum|basesepolia|0xB3c4e893130293A35D418c319cb837E6F6917926"
    //   }]
    // },
    // {
    //   chainName: "basesepolia",
    //   standard: TokenStandard.EvmHypCollateral,
    //   decimals: 18,
    //   symbol: "WETC",
    //   name: "Wrapped Ethereum Classic",
    //   addressOrDenom: "0xB3c4e893130293A35D418c319cb837E6F6917926",
    //   collateralAddressOrDenom:  "0x794907066059A39bA07cDB4fD77961E4E9317c59",
    //   logoURI: "https://www.wrappedether.org/images/wrapped-ether.png",
    //   connections: [{
    //     token: "ethereum|mordor|0x4ddB2bB8724a20A9366DA7Fb2f080175B697D563"
    //   }]
    // },
    {
      chainName: "basesepolia",
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: "USC",
      name: "USC",
      addressOrDenom: "0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1",
      collateralAddressOrDenom: "0xAC3dCAc5c2E2ab6977bf76C6c8c12B2BDa85d3B7",
      logoURI: "https://kve.mcr.mybluehost.me/website_2513032b/wp-content/uploads/2024/08/favicon-96x96-1.png",
      connections: [{
        token: "ethereum|mordor|0x8337FE827722d60E77CB45dFCA9314B8c6308FF5"
      }]
    },
    {
      chainName: "mordor",
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: "USC",
      name: "USC",
      addressOrDenom: "0x8337FE827722d60E77CB45dFCA9314B8c6308FF5",
      collateralAddressOrDenom: "0xDE093684c796204224BC081f937aa059D903c52a",
      logoURI: "https://kve.mcr.mybluehost.me/website_2513032b/wp-content/uploads/2024/08/favicon-96x96-1.png",
      connections: [{
        token: "ethereum|basesepolia|0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1"
      }]
    },
    {
      chainName: "basesepolia",
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      addressOrDenom: "0x9a9d823fC474F3CAad9737F99c1b9043828290A6",
      collateralAddressOrDenom: "0x401a84C2c4121043F631Eca1CBC6bc9b184265AA",
      logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
      connections: [{
        token: "ethereum|mordor|0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E"
      }]
    },
    {
      chainName: "mordor",
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: "USDC",
      name: "USDC",
      addressOrDenom: "0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E",
      collateralAddressOrDenom: "0xD333787e69DbfC47E67C59441e392Eb530b3DC19",
      logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=040",
      connections: [{
        token: "ethereum|basesepolia|0x9a9d823fC474F3CAad9737F99c1b9043828290A6"
      }]
    }
    
  ],
  options: {},
};


// tokens:
// - chainName: basesepolia
//   standard: EvmHypCollateral
//   decimals: 6
//   symbol: USC
//   name: USC
//   addressOrDenom: "0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1"
//   collateralAddressOrDenom: "0xAC3dCAc5c2E2ab6977bf76C6c8c12B2BDa85d3B7"
//   connections:
//     - token: ethereum|mordor|0x8337FE827722d60E77CB45dFCA9314B8c6308FF5
// - chainName: mordor
//   standard: EvmHypCollateral
//   decimals: 6
//   symbol: USC
//   name: USC
//   addressOrDenom: "0x8337FE827722d60E77CB45dFCA9314B8c6308FF5"
//   collateralAddressOrDenom: "0xDE093684c796204224BC081f937aa059D903c52a"
//   connections:
//     - token: ethereum|basesepolia|0xBCa467631b4185059fB2EbB0dbd9d4a5475130D1

// tokens:
// - chainName: basesepolia
//   standard: EvmHypCollateral
//   decimals: 6
//   symbol: USDC
//   name: USDC
//   addressOrDenom: "0x9a9d823fC474F3CAad9737F99c1b9043828290A6"
//   collateralAddressOrDenom: "0x401a84C2c4121043F631Eca1CBC6bc9b184265AA"
//   connections:
//     - token: ethereum|mordor|0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E
// - chainName: mordor
//   standard: EvmHypCollateral
//   decimals: 6
//   symbol: USDC
//   name: USDC
//   addressOrDenom: "0x2F52c1215F39d9B537e54f65fffB3fbc3787BF8E"
//   collateralAddressOrDenom: "0xD333787e69DbfC47E67C59441e392Eb530b3DC19"
//   connections:
//     - token: ethereum|basesepolia|0x9a9d823fC474F3CAad9737F99c1b9043828290A6