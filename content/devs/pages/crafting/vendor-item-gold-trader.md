> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/crafting/vendor-item-gold-trader.md).

# Vendor (Item Gold Trader)

The Vendor (Item Gold Trader) is a stable trading system for [Inventory Items](/tokens/inventory-items.md) so that users can exchange [Gold](/tokens/currencies/dfk-gold.md) for needed items or [Gold Crops](/tokens/gold-crops.md) for Gold.&#x20;

## Contracts

### Addresses

#### DFK Chain

| Name                    | Mainnet                                      | Testnet                                      |
| ----------------------- | -------------------------------------------- | -------------------------------------------- |
| ItemGoldTraderV2 (Eevi) | `0x0f85fdf6c561C42d6b46d0E27ea6Aa9Bf9476B3f` | `0x9E721454207FA0FD6E3a362dAb66912EF004E958` |

#### Klaytn

| Name                    | Mainnet                                      | Testnet                                      |
| ----------------------- | -------------------------------------------- | -------------------------------------------- |
| ItemGoldTraderV2 (Zada) | `0x3Eab8a8F71dDA3e6c907C74302B734805C4f3278` | `0xEac3517251339877426cec94B245c0D8D83D7cb5` |

### Interfaces

```solidity
interface IItemGoldTraderV2 {

    event ItemAdded(address indexed item, uint256 startingPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay);
    event ItemTraded(address indexed player, address boughtItem, uint256 boughtQty, address soldItem, uint256 soldQty);
    event ItemUpdated(address indexed item, uint256 currentPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint8 status);
    
    function addressToTradeItemId(address) view returns (uint256);
    function buyItem(address _itemAddress, uint256 _quantity, uint256 _maxPrice);
    function getNextPrice(address _itemAddress, uint256 _quantity) view returns (uint256);
    function getTradeItem(uint256 _id) view returns (tuple(uint256 id, address item, uint256 currentPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint64 lastPurchaseTimestamp, uint8 status));
    function getTradeItemByAddress(address _itemAddress) view returns (tuple(uint256 id, address item, uint256 currentPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint64 lastPurchaseTimestamp, uint8 status));
    function getTradeItems() view returns (tuple(uint256 id, address item, uint256 currentPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint64 lastPurchaseTimestamp, uint8 status)[]);
    function paused() view returns (bool);
    function sellItem(address _itemAddress, uint256 _quantity);
    function tradeItems(uint256) view returns (uint256 id, address item, uint256 currentPrice, uint256 playerSellPrice, uint256 minPrice, uint256 deltaPriceIncrease, uint256 decreaseRate, uint64 priceIncreaseDecay, uint64 lastPurchaseTimestamp, uint8 status);
    
}
```

### ABIs

{% file src="/assets/devs/files/ItemGoldTraderV2.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="info" %}
On 8/10/2022, the `ItemGoldTrader` contract was upgraded to V2 with the inclusion of dynamic pricing.&#x20;
{% endhint %}

### Addresses

#### Harmony

<table><thead><tr><th width="261.19811106064157">Name</th><th width="238.76239783644866">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>ItemGoldTraderV2 (Zada)</td><td><code>0x5BDa5c3258c72c4890E6c1EA16f4F9E394FF3fB4</code></td><td>N/A</td></tr><tr><td>ItemGoldTrader (Zada)</td><td><code>0xe53BF78F8b99B6d356F93F41aFB9951168cca2c6</code></td><td><code>0x65D232da83d69A76189dA008Eb03BCFB211A1612</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IItemGoldTrader {

  event ItemAdded(address indexed item, uint256 buyPrice, uint256 sellPrice);
  event ItemTraded(address indexed player, address boughtItem, uint256 boughtQty, address soldItem, uint256 soldQty);
  event ItemUpdated(address indexed item, uint256 buyPrice, uint256 sellPrice, uint8 status);

  function addressToTradeItemId( address ) external view returns ( uint256 );
  function buyItem( address _itemAddress, uint256 _quantity ) external;
  function getTradeItems(  ) external view returns ( tuple[] );
  function paused(  ) external view returns ( bool );
  function sellItem( address _itemAddress, uint256 _quantity ) external;
  function tradeItems( uint256 ) external view returns ( uint256 id, address item, uint256 buyPrice, uint256 sellPrice, uint8 status );
  
}
```

### ABIs

{% file src="/assets/devs/files/ItemGoldTrader.json" %}
