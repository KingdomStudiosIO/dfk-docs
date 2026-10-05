> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/pet-treats.md).

# Pet Treats

Pet Treats are crafted by the [Nutritionist](/crafting/nutritionist.md) and are used to feed [Pets](/nfts/pets.md).

{% hint style="info" %}
**ERC20:** Pet Treats are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="warning" %}
Pet Treats have 0 decimals
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="263.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-regular.png" alt="" data-size="line"> Regular Pet Treat (DFKREGTRT)</td><td><code>0xAcDa84fAb3d3cdB38078b04901a26c103C37E7F4</code></td><td><code>0xCB2Fe6D2384b359a4362F4368525417F3002205D</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-premium.png" alt="" data-size="line">Premium Pet Treat (DFKPRMTRT)</td><td><code>0x8Df3fFa5a677ba9737CE8Afcb8dd15Bd74085adD</code></td><td><code>0xb76D191B884b5c91fDD33864a14Ee87BE665Ad32</code></td></tr></tbody></table>

#### Kaia

<table><thead><tr><th width="263.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-regular.png" alt="" data-size="line"> Regular Pet Treat (DFKREGTRT)</td><td><code>0x2F11e335224C5aBd3418B99922A9fe442F5696E9</code></td><td><code>0xA6A3fDD363A6c0a2FC0e50A4204c52cB5Dc06D7a</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-premium.png" alt="" data-size="line">Premium Pet Treat (DFKPRMTRT)</td><td><code>0xEec86C39e061B3Dec44f608Ff0ADA8053B8fFaDb</code></td><td><code>0x3d4a28AFbef326364DBA99aAaB87A5A31115de8B</code></td></tr></tbody></table>

#### Metis

<table><thead><tr><th width="263.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-regular.png" alt="" data-size="line"> Regular Pet Treat (DFKREGTRT)</td><td><code>0x3a2b951de05B4A86A8eA8d23a51F75Edf4340E68</code></td><td><code>0x1526A8c1b6D09E38aaa2a2A8532C77291B94B7f7</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/pet-treat-premium.png" alt="" data-size="line">Premium Pet Treat (DFKPRMTRT)</td><td><code>0xc559206640FFb92b1b0C731c91CeFc1fD6a71DaC</code></td><td><code>0xCe7C5f89bA446eD97ee614AdfcC4CBeefFE2B5b2</code></td></tr></tbody></table>

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

{% file src="/files/RJR1RKbI8ng4TjIUVki1" %}

## Related Contracts

{% content-ref url="/pages/Nwx7cA57nGOLKaHfZwvN" %}
[Nutritionist](/crafting/nutritionist.md)
{% endcontent-ref %}

{% content-ref url="/pages/ko1qoh2zncFAVdAaOBzk" %}
[Pets](/nfts/pets.md)
{% endcontent-ref %}
