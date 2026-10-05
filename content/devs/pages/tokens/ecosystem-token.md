> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/ecosystem-token.md).

# Ecosystem Token

{% hint style="success" %}
The JEWEL Token is a fully verified contract on Harmony: <https://explorer.harmony.one/address/0x72cb10c6bfa5624dd07ef608027e366bd690048f?activeTab=7>
{% endhint %}

{% hint style="warning" %}
When interacting with bridges and bridged tokens, always be mindful of liquidity.
{% endhint %}

## Contracts

### Addresses

#### Harmony

| Name                                                                                                           | Mainnet                                      | Testnet                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png" alt="" data-size="line"> JEWEL | `0x72Cb10C6bfA5624dD07Ef608027E366bd690048F` | `0x63882d0438AdA0dD76ed2E6B7C2D53A55284A557` |
| synJEWEL ([Synapse](https://synapseprotocol.com/))                                                             | `0x28b42698Caf46B4B012CF38b6C75867E0762186D` | N/A                                          |

#### DFK Chain

{% hint style="info" %}
In addition to wJEWEL listed below, JEWEL is the native gas token on DFK Chain, which does not have its own separate contract address.
{% endhint %}

| Name                                                                                                            | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png" alt="" data-size="line"> wJEWEL | `0xCCb93dABD71c8Dad03Fc4CE5559dC3D89F67a260` | `0x602daa4Db4778Cb958b161F11574b4A206606b4B` |

#### Kaia

| Name                                                                                                           | Mainnet                                      | Testnet                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png" alt="" data-size="line"> JEWEL | `0x30C103f8f5A3A732DFe2dCE1Cc9446f545527b43` | `0xbb227Fcf45F9Dc5deF87208C534EAB1006d8Cc8d` |

#### Avalanche C-Chain

{% hint style="danger" %}
Note: The multiJEWEL token has been deprecated and is no longer in use. The Multichain bridge has shut down, and these tokens can no longer be redeemed off of C-Chain. Use caution when trading with this token.
{% endhint %}

| Name                                                   | Mainnet                                      | Testnet |
| ------------------------------------------------------ | -------------------------------------------- | ------- |
| synJEWEL ([Synapse](https://synapseprotocol.com/))     | `0x997Ddaa07d716995DE90577C123Db411584E5E46` | N/A     |
| multiJEWEL ([Multichain](https://app.multichain.org/)) | `0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6` | N/A     |

#### Metis

| Name                                                                                                           | Mainnet                                      | Testnet                                      |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png" alt="" data-size="line"> JEWEL | `0x17C09cfC96C865CF546d73365Cedb6dC66986963` | `0xBBd856826174307285149457Cc58f4ff443371Dc` |

#### Ethereum Mainnet

| Name                                                                                                           | Mainnet                                      | Testnet |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/jewel_token_x2.png" alt="" data-size="line"> JEWEL | `0x12f79f8c1A6e47a9b5F0796FDb008Bdc182fa19e` | `N/A`   |

### Interfaces

```solidity
interface IJewelToken {
    
  event Approval(address indexed owner, address indexed spender, uint256 value);
  event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);
  event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);
  event Lock(address indexed to, uint256 value);
  event Transfer(address indexed from, address indexed to, uint256 value);
  event Unlock(address indexed to, uint256 value);

  function allowance(address owner, address spender) view returns (uint256);
  function approve(address spender, uint256 amount) returns (bool);
  function balanceOf(address account) view returns (uint256);
  function decimals() view returns (uint8);
  function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
  function increaseAllowance(address spender, uint256 addedValue) returns (bool);
  function lockFromBlock() view returns (uint256);
  function lockToBlock() view returns (uint256);
  function miner() view returns (address);
  function name() view returns (string);
  function owner() view returns (address);
  function symbol() view returns (string);
  function totalSupply() view returns (uint256);
  function transfer(address recipient, uint256 amount) returns (bool);
  function transferFrom(address sender, address recipient, uint256 amount) returns (bool);
  function cap() view returns (uint256);
  function lockFromUpdate(uint256 _newLockFrom);
  function lockToUpdate(uint256 _newLockTo);
  function unlockedSupply() view returns (uint256);
  function lockedSupply() view returns (uint256);
  function circulatingSupply() view returns (uint256);
  function totalLock() view returns (uint256);
  function totalBalanceOf(address _holder) view returns (uint256);
  function lockOf(address _holder) view returns (uint256);
  function lastUnlockBlock(address _holder) view returns (uint256);
  function lock(address _holder, uint256 _amount);
  function canUnlockAmount(address _holder) view returns (uint256);
  function unlockForUser(address account, uint256 amount);
  function unlock();
  function transferAll(address _to;
  function getCurrentVotes(address account) view returns (uint256);
  function getPriorVotes(address account, uint256 blockNumber) view returns (uint256);
  function maxTransferAmount() view returns (uint256);

}
```

```solidity
// Wrapped JEWEL (wJEWEL) on DFK Chain

interface IWrappedNativeToken {
    
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function deposit() payable;
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function name() view returns (string);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    function withdraw(uint256 _amount)

}
```

### ABIs

{% file src="/assets/devs/files/JewelToken.json" %}

{% file src="/assets/devs/files/WrappedNativeToken.json" %}
