> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/crafting/alchemist.md).

# Alchemist

The Alchemist is a one-stop-shop for producing [Potions](/collections/potions-and-consumables.md), which can be used on your Heroes, or as reagents in [Stone Carving](/crafting/stone-carver.md).

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="266.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Alchemist (The Burned Man)</td><td><code>0x2542e1Ce063FED3b5Aa81936c5a8f6Eeccaa6B4A</code></td><td><code>0x91413C1e14381353a40bAB1b72C1D0b8755695Cb</code></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="268.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Alchemist (Herbert)</td><td><code>0x696BECc6ddD5589a9a3Bb93fAc3A53D26b7cb819</code></td><td><code>0x5b0227Cf2f2C3b7d4847bE4fC56852f60DF52FD5</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IAlchemist {
    
    event PotionAdded(address indexed potionAddress, address[] requiredResources, uint32[] requiredQuantities);
    event PotionCreated(address indexed player, address potionAddress, uint256 quantity, address[] requiredResources, uint32[] requiredQuantities);
    event PotionUpdated(address indexed potionAddress, address[] requiredResources, uint32[] requiredQuantities, uint8 status);
    
    function addPotion( address _potionAddress, address[] _requiredResources, uint32[] _requiredQuantities );
    function addressToPotionId(address) external view returns (uint256);
    function createPotion(address _potionAddress, uint256 _quantity) external;
    function getPotion(address _potionAddress) external view returns (tuple(address potionAddress, address[] requiredResources, uint32[] requiredQuantities, uint8 status));
    function getPotions() external view returns (tuple(address potionAddress, address[] requiredResources, uint32[] requiredQuantities, uint8 status)[]);
    function paused() external view returns (bool);
    function potions(uint256) external view returns (address potionAddress, uint8 status);
    function updatePotion(address _potionAddress, address[] _requiredResources, uint32[] _requiredQuantities, uint8 _status) external;

}
```

### ABIs

{% file src="/assets/devs/files/Alchemist.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

<table><thead><tr><th width="254.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Alchemist (Herbert)</td><td><code>0x87CBa8F998F902f2fff990efFa1E261F35932e57</code></td><td><code>0x638C716b5aF694Cee4B0639826EAEbaAD03C2f66</code></td></tr></tbody></table>

## Recipes

Coming Soon
