> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/hero-bridge-layerzero.md).

# Hero Bridge (LayerZero)

The LayerZero Hero Bridge processes the cross-chain bridging of Hero NFTs. It is available between **DFK Chain and Metis**, and between **Kaia and Metis** only. Bridging a Hero will also send any Pets or Equipment that are attached to the Hero.

{% hint style="info" %}
The Hero Bridge is built in partnership with [Layer Zero](https://layerzero.network/) using their V2 Messaging protocol. For more information, visit their documentation at: <https://layerzero.gitbook.io/docs/>.

Use [Layer Zero Scan](https://layerzeroscan.com/) (<https://layerzeroscan.com/>) to track the progress of bridged items.
{% endhint %}

### Chain ID

Use the following mainnet destination Chain IDs for the Hero Bridge:

* DFK Chain: `53935`
* Kaia: `8217`
* Metis: `1088`

{% hint style="warning" %}
Bridging Heroes from Metis requires that they are sent back to the same Chain ID that they first arrived from. This realm can be found in the `realmId` field on the `HeroV4` contract, with the following mappings:

DFK Chain: `1` (Testnet: 20)

Kaia: `2` (Testnet: 21)
{% endhint %}

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. Fees can be estimated by calling `estimateHero` or `estimateHeroes`.

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x49F7541b4308A2332afcA5dc5830a3a5f93F18bC` | `0xe2d5CD6384D54E73722A2caE2b00f1348B1F2B59` |
| Kaia      | `0x12af2AD0b90E08d0d70449E5d0b14afd14F9a24c` | `0x590e1060Eb2DB33D6A46Fb6927C08FD930A023D5` |
| Metis     | `0xDA53A7251f08ac9D59E977D0032a1521832A6Ac9` | `0xb5722C7ED74bD8D829754383C0E65f9F7e9bacD6` |

### Interfaces

```solidity
interface IHeroBridgeLZ {

    event HeroArrived(uint256 indexed heroId, uint256 arrivalChainId);
    event HeroLZBridgeReceived(uint32 srcEid, address sender, address receiver, uint256 heroId);
    event HeroLZBridgeSent(uint32 srcEid, address sender, address receiver, uint256 heroId);
    event HeroSent(uint256 indexed heroId, uint256 arrivalChainId);

    function bridgeHero(uint32 _dstChainId, address _receiver, uint256 _heroId) payable;
    function bridgeHeroes(uint32 _dstChainId, address _receiver, uint256[] _heroIds) payable;
    function estimateHero(uint32 _dstChainId, address _receiver, uint256 _heroId) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);
    function estimateHeroes(uint32 _dstChainId, address _receiver, uint256[] _heroIds) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);

}
```

### ABIs

{% file src="/files/KUrW6jL4NSUoaWdPRfp4" %}
