> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/locked-token-claim.md).

# Locked Token Claim

{% hint style="info" %}
The Locked Token Claim contract is used for airdropped Locked Tokens. These include:

#### DFK Chain

* Locked CRYSTAL

#### Klaytn

* Locked JADE
  {% endhint %}

## Contracts

### Addresses

<table><thead><tr><th width="188.33333333333331">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DFK Chain</td><td><code>0x6ec0194675354142fFEBA7B3195B57BC083f9719</code></td><td><code>0x301769Af06DFf900aec3C97808de78da52b17751</code></td></tr><tr><td>Klaytn</td><td><code>0x4FedD4E88B75186bD3ca72f688c4B4621732191C</code></td><td><code>0x20FC4ECF7811d5E3Db6E990E5975aB2cf7202B95</code></td></tr></tbody></table>

### Interfaces

```solidity
interface ILockedTokenClaim {

    event Claimed(address recipient, uint256 amount);
    event Dropped(address recipient, uint256 amount);
    event Withdrawal(address recipient, uint256 amount);
    
    function claimAirdrop(uint256 _dropId);
    function tokenClaimedAmount(address) view returns (uint256);
    function tokenPendingAmount(address) view returns (uint256);
    function tokenTotalClaimedAmount() view returns (uint256);
    function tokenTotalPendingAmount() view returns (uint256);
    function viewAirdrops() view returns (tuple(uint256 amount, uint256 time, string note)[]);
    function viewUserAirdrops(address player) view returns (tuple(uint256 amount, uint256 time, string note)[]);

}
```

### ABIs

{% file src="/files/m6fyT3EIeWAyn0GSVg3Y" %}
