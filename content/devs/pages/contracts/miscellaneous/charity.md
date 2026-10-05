> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/charity.md).

# Charity

{% hint style="info" %}
The Charity contracts are only available in-game during specific Charity Drive events.&#x20;
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name         | Mainnet                                      | Testnet                                      |
| ------------ | -------------------------------------------- | -------------------------------------------- |
| Charity Fund | `0xABABB0A2c42274D0e81417B824CABca464F5c16C` | `0xEE7d3642687ab561E2eea37bB936DDbB1565A037` |

### Interfaces

```solidity
interface ICharityFund {

    event Donation(address indexed account, address indexed token, uint256 amount);
    event Withdrawal(address indexed token, uint256 amount);
    
    function accepted(address) view returns (bool);
    function campaignId() view returns (uint8);
    function donateNativeToken() payable;
    function donateToken(address _token, uint256 _wei);
    function donationTotals(address) view returns (uint256);
    function getInfo() view returns (tuple(bool accepted, address token, string name, string symbol, uint256 decimals, uint256 total, uint256 balance, uint256 userDonation)[]);
    function multisig() view returns (address);
    function owner() view returns (address);
    function tokens(uint256) view returns (address);
    function withdraw(address _token);
    function withdrawAll();
    function withdrawNative();

}
```

### ABIs

{% file src="/assets/devs/files/CharityFund.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name         | Mainnet                                      | Testnet                                      |
| ------------ | -------------------------------------------- | -------------------------------------------- |
| Charity Fund | `0x51477E2E1481BcAE1a17DdbA777931d55c980Ecf` | `0x5238310E4115e85522A60d9e3B39D88bEA89FBA4` |
