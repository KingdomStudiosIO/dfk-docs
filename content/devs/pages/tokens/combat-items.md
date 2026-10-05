> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/combat-items.md).

# Combat Items

{% hint style="info" %}
**ERC20:** Combat Items are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="danger" %}
Combat Items are non-transferrable; they can only be burned after receiving permission from the user.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

<table data-full-width="true"><thead><tr><th width="285.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/void.gif" alt="" data-size="original"> Void Shard (DFKVOID)</td><td><code>0xBCd74403f82c61E247f2ba2A546EB3d0D2296936</code></td><td><code>0xC9307404C76D712A7f126ac2d3AF4C27dAA9Cd24</code></td></tr></tbody></table>

#### Klaytn

<table data-full-width="true"><thead><tr><th width="285.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/void.gif" alt="" data-size="original"> Void Shard (DFKVOID)</td><td><code>0x93B9a4aA929076404271f459a6140Cb46D94df5A</code></td><td><code>0xa6749aCfACC4FD7142F2D47040015D24D5C07941</code></td></tr></tbody></table>

### Interfaces

```solidity
interface INonTransferableInventoryItem {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function burn(uint256 amount);
    function burnFrom(address account, uint256 amount);
    function burnable() view returns (bool);
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

{% file src="/assets/devs/files/BirthdayCake1.json" %}
