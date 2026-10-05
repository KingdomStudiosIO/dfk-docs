> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/hero-bridge-synapse.md).

# Hero Bridge (Synapse)

### Chain ID

{% hint style="danger" %}
Hero Bridging is not available directly between Harmony and Kaia and must go through DFK Chain first. Any Heroes sent incorrectly may be permanently lost.

Hero Bridging back to Harmony is no longer available.
{% endhint %}

Use the following destination Chain IDs for the Hero Bridge:

* Harmony: 1666600000
* DFK Chain: 53935
* Kaia: 8217

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. The fees for bridging Heroes are as follows:

* Harmony to DFK Chain: 0.016 ONE
* DFK Chain to Kaia: 0.105 JEWEL
* Kaia to DFK Chain: 0.0063 KLAY

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| Harmony   | `0x573e407Be90a50EAbA28748cbb62Ff9d6038A3e9` | `0xe21a31315ddeA8200d73945AA06ACBb15DB92bFb` |
| DFK Chain | `0x739B1666c2956f601f095298132773074c3E184b` | `0xE7a90d1E7638A977fC8892896D81596E1694f3CF` |
| Kaia      | `0xEE258eF5F4338B37E9BA9dE6a56382AdB32056E2` | `0x519cbdA25d7335DE1B32b6A7E662581baC6524A0` |

### Interfaces

```solidity
interface IHeroBridge {

    event HeroArrived(uint256 indexed heroId, uint256 arrivalChainId);
    event HeroSent(uint256 indexed heroId, uint256 arrivalChainId);
    
    function assistingAuction() view returns (address);
    function heroes() view returns (address);
    function sendHero(uint256 _heroId, uint256 _dstChainId) payable;

}
```

### ABIs

{% file src="/files/W7BbIlYYXvmu9Un6Ym1P" %}
