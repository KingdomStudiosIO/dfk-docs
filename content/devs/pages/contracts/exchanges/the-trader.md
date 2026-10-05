> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/exchanges/the-trader.md).

# The Trader

The DEX or (Decentralized Exchange) is the center piece of the DFK Marketplace

The DFK Dex is (Decentralized Exchange) is the centerpiece of the DFK Marketplace; it is an automated market maker (AMM).&#x20;

{% hint style="info" %}
The DFK Dex is built on top of the UniswapV2 system. For more information, please view the Uniswap documentation: <https://docs.uniswap.org/contracts/v2/overview>
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name             | Mainnet                                                                             | Testnet                                      |
| ---------------- | ----------------------------------------------------------------------------------- | -------------------------------------------- |
| UniswapV2Factory | `0x794C07912474351b3134E6D6B3B7b3b4A07cbAAa`                                        | `0x2c22Ee594Fe562f548c88ed504D57Ebc86f1D9D1` |
| UniswapV2Router  | `0x3C351E1afdd1b1BC44e931E12D4E05D6125eaeCa`                                        | `0x7dEfa830CE7E3Ec374B2cE07EabeD6FBB48a1c09` |
| UniswapV2Pair    | *For incentivized pairs, see the* [*Gardens*](/contracts/gardens.md#dfk-chain-1)*.* |                                              |

#### Klaytn

| Name             | Mainnet                                                                          | Testnet                                      |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------------- |
| UniswapV2Factory | `0x36fAE766e51f17F8218C735f58426E293498Db2B`                                     | `0x4D4B23d51e763955E7FB5bEDF1FbFa337C2274A3` |
| UniswapV2Router  | `0x9e987E5E9aB872598f601BE4aCC5ac23F484845E`                                     | `0x40AF60Cc7BD3bb1ae9a99e7C8d94b68E7E9802b6` |
| UniswapV2Pair    | *For incentivized pairs, see the* [*Gardens*](/contracts/gardens.md#klaytn-1)*.* |                                              |

### ABIs

{% file src="/assets/devs/files/UniswapV2Factory.json" %}

{% file src="/assets/devs/files/UniswapV2Router02.json" %}

{% file src="/assets/devs/files/UniswapV2Pair.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| UniswapV2Factory | `0x9014B937069918bd319f80e8B3BB4A2cf6FAA5F7` | `0x017096690dceADb10dB4926196AA56BB4b4C2629` |
| UniswapV2Router  | `0x24ad62502d1C652Cc7684081169D04896aC20f30` | `0xa755d4728B74ae0D76ecA76d0a36D4Ffc1544122` |
