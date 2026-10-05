> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/currencies/dfk-gold.md).

# DFK Gold

Description

{% hint style="info" %}
**ERC20:** Currencies are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="warning" %}
DFK Gold has 3 decimals vs the standard 18 for ERC20s and the standard 0 for Inventory Items.
{% endhint %}

### Suggested Use Cases

* In-game Transactions
* Game Fees
* Crafting Fees

## Contracts

### Addresses

#### DFK Chain

| Name                                                                                                              | Mainnet                                      | Testnet                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gold-pile.png" alt="" data-size="line"> Gold (DFKGOLD) | `0x576C260513204392F0eC0bc865450872025CB1cA` | `0xeCCC54b836cD5bf114daec723de1c0d89B0C2A7b` |

#### Kaia

| Name                                                                                                              | Mainnet                                      | Testnet                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gold-pile.png" alt="" data-size="line"> Gold (DFKGOLD) | `0xe7a1B580942148451E47b92e95aEB8d31B0acA37` | `0x74852982B2371004b97584A5AAFeF71F7A5196B9` |

#### Metis

| Name                                                                                                              | Mainnet                                      | Testnet                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gold-pile.png" alt="" data-size="line"> Gold (DFKGOLD) | `0xDeaF0ED1851accD469F0A42Ff9e9CC6804a619c5` | `0x67601BeBAa7fc8e2B699bE88501a02d2bd971258` |

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

{% file src="/files/a1WUZVAHA5MNWuVe4aEw" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name                                                                                                              | Mainnet                                      | Testnet                                      |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gold-pile.png" alt="" data-size="line"> Gold (DFKGOLD) | `0x3a4EDcf3312f44EF027acfd8c21382a5259936e7` | `0x24B46b91E0862221D39dd30FAAd63999717860Ab` |
