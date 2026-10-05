> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/crafting/stone-carver.md).

# Stone Carver

The Stone Carver assists users in creating [Enhancement Stones](/collections/enhancement-stones.md) for use during Summoning.

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="226.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Stone Carver</td><td><code>0xc32A0e963e50AAAED273A75425fC39902b0d0b3b</code></td><td><code>0x70d70549fa208bEcB11946111216e8E687cDE452</code></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="226.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Stone Carver</td><td><code>0x2A4906925b168C6983BdD777B034e566675ac7B3</code></td><td><code>0x75d8ba2E4725633FcdcC165332dCA04c107915cA</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IStoneCarver {

    event CrosschainUpdate(uint256 awayUntil);
    event RecipeSet(address indexed stoneAddress, address[] requiredResources, uint32[] requiredQuantities, bool active);
    event ShopSetUp(uint256 workingUntil, uint256 awayUntil);
    event StoneCarved(address indexed player, address stoneAddress, uint256 quantity);
    
    function awayUntil() view returns (uint256);
    function carveStone(address _stoneAddress, uint256 _quantity);
    function getAvailability() view returns (uint256, uint256);
    function getRecipe(address stoneAddress) view returns (tuple(address[] requiredResources, uint32[] requiredQuantities, bool active));
    function minClosedTime() view returns (uint256);
    function minOpenTime() view returns (uint256);
    function paused() view returns (bool);
    function recipes(address) view returns (bool active);
    function setUpShop();
    function varClosedTime() view returns (uint256);
    function varOpenTime() view returns (uint256);
    function workingUntil() view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/StoneCarver2.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

<table><thead><tr><th width="227.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Stone Carver</td><td><code>0xfFB8a55676edA75954AB45a6Ce16F88b119dC511</code></td><td><code>0xeAe7c8121eF9626362369b398B9F0Ee5E05fDA72</code></td></tr></tbody></table>

## Recipes

Coming soon
