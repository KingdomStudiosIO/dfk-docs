> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/gaias-tear-bridge.md).

# Gaia's Tear Bridge

{% hint style="danger" %}
With the release of the [Item Bridge](/contracts/bridging/item-bridge-v2.md), the Gaia's Tear bridge has been deprecated and should no longer be used. Only [Gaia's Tears V1](/tokens/currencies/gaias-tears.md) were bridgeable between Harmony and DFK Chain through this contract.
{% endhint %}

### Chain ID

Use the following destination Chain IDs for the Tear Bridge:

* Harmony: 1666600000
* DFK Chain: 53935

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. The fees for bridging Tears are as follows:

* Harmony to DFK Chain: 0.016 ONE
* DFK Chain to Harmony: 0.004 JEWEL

### Contract Addresses

| Name      | Mainnet                                    | Testnet                                    |
| --------- | ------------------------------------------ | ------------------------------------------ |
| Harmony   | 0x27B7C0C87B9ecA92E5101852709e63685bF9d299 | 0xD2666441443DAa61492FFe0F37717578714a4521 |
| DFK Chain | 0x6a00Dc976a7291a1E9F5380FE6F96fE006dCdD3c | 0xB68281c60352529595c9ed7E845262f608985D7c |

### Interfaces

```solidity
interface ITearBridge {

    event GaiaArrived(address indexed dstUser, uint256 arrivalChainId);
    event GaiaSent(address indexed dstUser, uint256 arrivalChainId);
    
    function gaiaTears() view returns (address);
    function msgGasLimit() view returns (uint256);
    function sendTear(uint256 _tearsAmount, uint256 _dstChainId) payable;

}
```

### ABIs

{% file src="/assets/devs/files/tearBridge.json" %}
