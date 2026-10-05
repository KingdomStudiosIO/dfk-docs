> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/airdrops.md).

# Airdrops

## Contracts

### Addresses

#### DFK Chain

| Name         | Mainnet                                      | Testnet                                      |
| ------------ | -------------------------------------------- | -------------------------------------------- |
| AirdropClaim | `0x947873092dc57C1A70704033c41cB110f4462a8B` | `0x77f376aCc4FB5B9B8e965be16e12623A0567ff14` |

#### Klaytn

| Name         | Mainnet                                      | Testnet                                      |
| ------------ | -------------------------------------------- | -------------------------------------------- |
| AirdropClaim | `0x86B70Cd6A405B84d1790021dC4F8c24B50727EA6` | `0x4E05bBA3C97131E25461Ee8786F61835C7bBbdFD` |

### Interfaces

```solidity
interface IAirdropClaim {

    event Claimed(address recipient, address token, uint256 amount);
    event Dropped(address recipient, address token, uint256 amount);
    event Withdrawal(address tokenAddress, address recipient, uint256 amount);
    
    function claimAirdrop(uint256 _dropId);
    function claimAirdrops(uint256 _amountToClaim);
    function createAirdropsWithTokens(address _tokenAddress, address[] memory _recipients, uint256[] memory _amounts, string memory _note)
    function enabled() view returns (bool);
    function tokenToPendingAmount(address) view returns (uint256);
    function viewAirdrops() view returns (tuple(address tokenAddress, uint256 amount, uint256 time, string note)[]);
    function viewUserAirdrops(address player) view returns (tuple(address tokenAddress, uint256 amount, uint256 time, string note)[]);
    function withdrawTokens(address _tokenAddress, address _recipient, uint256 _amount);

}
```

### ABIs

{% file src="/assets/devs/files/AirdropClaim.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="info" %}
The AirdropClaim contract on Harmony was upgraded from V1 on 1/14/2022.
{% endhint %}

#### Harmony

| Name           | Mainnet                                      | Testnet                                      |
| -------------- | -------------------------------------------- | -------------------------------------------- |
| AirdropClaimV2 | `0x8AbEbcDBF5AF9FC602814Eabf6Fbf952acF682A2` | `0x3CC701CD8A4D3Cb137c7dd933480C4A67e10aC90` |
| AirdropClaimV1 | `0xa678d193fEcC677e137a00FEFb43a9ccffA53210` | N/A                                          |

### Interfaces

```solidity
interface IAirdropClaimV1 {

    event Claimed(address recipient, uint256 amount);
    
    function balances(address) view returns (uint256);
    function claimAirdrop();
    function setAirdrops(address[] _recipients, uint256[] _amounts);
    function transferTokens(address _address, uint256 _amount);

}
```

### ABIs

{% file src="/assets/devs/files/historical/AirdropClaim.json" %}
