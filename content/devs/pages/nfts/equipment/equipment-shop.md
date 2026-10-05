> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/equipment-shop.md).

# Equipment Shop

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0xEbaD9CD534aEEe4d8661599321018dAb20cDCE95` | `0x2eBa843E834D68d81e3AC02F540B3cc4e707c8ad` |

### Interface

```solidity
interface IVisageShop {

    // Events
    event ItemAdded(address indexed equipmentAddress, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 startingPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay);
    event ItemTraded(address indexed player, address indexed equipmentAddress, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 boughtQty, address soldItem, uint256 soldQty);
    event ItemUpdated(address indexed equipmentAddress, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 currentPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint8 status);

    // Functions
    function buyItem(address _equipmentContract, uint8 _equipmentType, uint16 _displayId, uint8 _rarity, uint256 _quantity, uint256 _maxPrice);
    function equipmentToShopItemId(address, uint8, uint16, uint8) view returns (uint256);
    function getNextPrice(address _equipmentContract, uint8 _equipmentType, uint16 _displayId, uint8 _rarity, uint256 _quantity) view returns (uint256);
    function getShopItem(uint256 _id) view returns (tuple(uint256 id, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 currentPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint256 priceIncreaseDecay, uint256 lastPurchaseTimestamp, uint8 status));
    function getShopItemByEquipment(address _equipmentContract, uint8 _equipmentType, uint16 _displayId, uint8 _rarity) view returns (tuple(uint256 id, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 currentPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint256 priceIncreaseDecay, uint256 lastPurchaseTimestamp, uint8 status));
    function getShopItems() view returns (tuple(uint256 id, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 currentPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint256 priceIncreaseDecay, uint256 lastPurchaseTimestamp, uint8 status)[]);

}
```

### ABI

{% file src="/files/vXVaMRhBVR2Itfw7NkTb" %}
