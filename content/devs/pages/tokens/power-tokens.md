> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/power-tokens.md).

# Power Tokens

{% hint style="info" %}
**ERC20:** Power Tokens are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

### Suggested Use Cases

* Exchange Fees
* NFT Fees
* Transaction Fees
* Staking
* Escrow
* Purchases
* Governance
* Lending

## Contracts

### Addresses

#### DFK Chain

| Name                                                                                                               | Mainnet                                      | Testnet                                      |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/crystal_token_x2.png" alt="" data-size="line"> CRYSTAL | `0x04b9dA42306B023f3572e106B11D82aAd9D32EBb` | `0xa5c47B4bEb35215fB0CF0Ea6516F9921591c3aCE` |

#### Klaytn

| Name                                                                                                                                                                                                                                                                                   | Mainnet                                      | Testnet                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://2908426948-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlZLlRJsOJCqm10zUsKr6%2Fuploads%2FuXiIbsjm7NGLpWAeZP3W%2Fjade_coin_v1-bigboi-no-whitespace.png?alt=media&amp;token=d8b562b3-7328-4dac-b40d-89ee032bee2d" alt="" data-size="line"> JADE | `0xB3F5867E277798b50ba7A71C0b24FDcA03045eDF` | `0x4dDD03B3850794534e01F2C95C93a45855058e19` |

### Interfaces

```solidity
interface ICrystalToken {
    
  event Approval(address indexed owner, address indexed spender, uint256 value);
  event Lock(address indexed to, uint256 value);
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Unlock(address indexed to, uint256 value);

  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 amount) external returns (bool);
  function balanceOf(address account) external view returns (uint256);
  function canUnlockAmount(address _holder) external view returns (uint256);
  function cap() external view returns (uint256);
  function circulatingSupply() external view returns (uint256);
  function decimals() external view returns (uint8);
  function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool);
  function increaseAllowance(address spender, uint256 addedValue) external returns (bool);
  function lastUnlockTime(address) external view returns (uint256);
  function lock(address _holder, uint256 _amount) external;
  function lockFromTime() external view returns (uint256);
  function lockOf(address _holder) external view returns (uint256);
  function lockToTime() external view returns (uint256);
  function name() external view returns (string memory);
  function owner() external view returns (address);
  function symbol() external view returns (string memory);
  function totalBalanceOf(address _holder) external view returns (uint256);
  function totalLock() external view returns (uint256);
  function totalSupply() external view returns (uint256);
  function transfer(address to, uint256 amount) external returns (bool);
  function transferAll(address _to) external;
  function transferAllInterval() external view returns (uint256);
  function transferAllTracker(address) external view returns (uint256);
  function transferFrom(address from, address to, uint256 amount) external returns (bool);
  function unlock() external;
  function unlockedSupply() external view returns (uint256);

}
```

### ABIs

{% file src="/files/AUGihK6iF62nQ8t936Li" %}
