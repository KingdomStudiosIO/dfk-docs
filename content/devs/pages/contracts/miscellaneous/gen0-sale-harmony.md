> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/gen0-sale-harmony.md).

# Gen0 Sale (Harmony)

{% hint style="info" %}
This contract was used for the original sale of 2000 Serendale Gen0 Heroes on Harmony. It is listed here for data analysis and tracking purposes only.
{% endhint %}

## Historical Contracts

### Addresses

#### Harmony

| Name     | Mainnet                                      | Testnet                                      |
| -------- | -------------------------------------------- | -------------------------------------------- |
| Gen0Sale | `0xdF0Bf714e80F5e6C994F16B05b7fFcbCB83b89e9` | `0x4E8b1f13A64C0B7735FA0f9f4C7e4Af38b502988` |

### Interfaces

```solidity
interface IGen0Sale {

    event CrystalOpen(address indexed owner, uint256 crystalId, uint256 heroId);
    event Gen0Purchase(address indexed owner, uint256 crystalId, uint256 createdBlock, uint256 purchasePrice);
    
    function amountSold() view returns (uint256);
    function crystals(uint256) view returns (address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address bonusItem, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle);
    function enabled() view returns (bool);
    function getCrystal(uint256 _crystalId) view returns (tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address bonusItem, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle));
    function getUserCrystals(address _address) view returns (uint256[]);
    function increase() view returns (uint256);
    function jewelToken() view returns (address);
    function lastPurchase(address) view returns (uint256);
    function maxQuantity() view returns (uint256);
    function nextPrice() view returns (uint256);
    function open(uint256 _crystalId) returns (uint256);
    function purchase(uint256 _limit);
    function startCost() view returns (uint256);
    function userCrystals(address, uint256) view returns (uint256);
    function vrf(uint256 blockNumber) view returns (bytes32 result);
  
}
```

### ABIs

{% file src="/files/7mlthL9delYSWvi7acnR" %}
