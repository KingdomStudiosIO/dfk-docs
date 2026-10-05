> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/runes.md).

# Runes

Runes are high-value assets that are needed to upgrade a Hero through the Meditation Circle and used for crafting. Additional Rune types will be released as Heroes progress in level.

{% hint style="info" %}
**ERC20:** Runes are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin:  <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="warning" %}
Runes have 0 decimals
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="267.9646238371216">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/shvas-rune.gif" alt="" data-size="line"> Shvās Rune (DFKSHVAS)</td><td><code>0x75E8D8676d774C9429FbB148b30E304b5542aC3d</code></td><td><code>0xB5526A47A2858C2B29dCe89F3BD2B0726dcf5d18</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/moksha-rune.gif" alt="" data-size="line"> Moksha Rune (DFKMOKSHA)</td><td><code>0xCd2192521BD8e33559b0CA24f3260fE6A26C28e4</code></td><td><code>0xe9BfCc80800EB77a1eAF6881825936770aF83Eb6</code></td></tr></tbody></table>

#### Kaia

<table><thead><tr><th width="267.9646238371216">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/shvas-rune.gif" alt="" data-size="line"> Shvās Rune (DFKSHVAS)</td><td><code>0x907a98319AEB249e387246637149f4B2e7D21dB7</code></td><td><code>0xCE7ac1a4ea53CCB0C9fb855c13447a932A4A4471</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/moksha-rune.gif" alt="" data-size="line"> Moksha Rune (DFKMOKSHA)</td><td><code>0xd0223143057Eb44065e789b202E03A5869a6006C</code></td><td><code>0xD438F751DfBe682875dB0A3514f9237274C5383E</code></td></tr></tbody></table>

#### Metis

<table><thead><tr><th width="267.9646238371216">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/shvas-rune.gif" alt="" data-size="line"> Shvās Rune (DFKSHVAS)</td><td><code>0xFEd84c0C6a2517f1f48FdC5f1A2Ed00836826aa6</code></td><td><code>0x5477D7f1539aDC67787AEA54306700196B81E7c4</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/moksha-rune.gif" alt="" data-size="line"> Moksha Rune (DFKMOKSHA)</td><td><code>0x5fb51dff65eFf32644001981856f578120b8aE66</code></td><td><code>0x0202Ad2C873bCFfa0Fb23a52fA4eC1Db74e56F66</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IInventoryItem {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function burn(uint256 amount);
    function burnFrom(address account, uint256 amount);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function name() view returns (string);
    function paused() view returns (bool);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    
}
```

### ABIs

{% file src="/assets/devs/files/InventoryItem.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

<table><thead><tr><th width="267.21333393332526">Name</th><th width="240.09206342742226">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/shvas-rune.gif" alt="" data-size="line"> Shvās Rune (DFKSHVAS)</td><td><code>0x66F5BfD910cd83d3766c4B39d13730C911b2D286</code></td><td><code>0x457A99042D3ba3b61A036f3dC801243670c87c51</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/moksha-rune.gif" alt="" data-size="line"> Moksha Rune (DFKMOKSHA)</td><td><code>0x8F655142104478724bbC72664042EA09EBbF7B38</code></td><td><code>0x3e36768498A678bF3b36D2aF5d3d5974dC6d209a</code></td></tr></tbody></table>
