> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/token-disburse.md).

# Token Disburse

{% hint style="info" %}
The Token Disburse contract is used for airdropped and vested tokens. These include:

#### DFK Chain

* Airdropped and vested xCRYSTAL
* Vested JEWEL

#### Klaytn

* Vested and Liquid JADE
  {% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name                     | Mainnet                                      | Testnet                                      |
| ------------------------ | -------------------------------------------- | -------------------------------------------- |
| TokenDisburse (xCRYSTAL) | `0x123165B3a30fdA3655B30cfC10135C1CA3C21bFC` | `0x2173A8153B4b88735A6E77E910e86cdB122BDd18` |
| TokenDisburse (JEWEL)    | `0x9a7C710A6E3A86c69F2FE704AD223Ce76934bb37` | `0x0C77D26bDd421B3d5c4a37F111910B7E57B53E8B` |

#### Klaytn

| Name                 | Mainnet                                      | Testnet                                      |
| -------------------- | -------------------------------------------- | -------------------------------------------- |
| TokenDisburse (JADE) | `0x33da18a92cB717ACcdA5d453B6ddB7Ee61000F81` | `0x9d05F8289F0eA7D1993B316F45b8e6E29F7e5D16` |

### Interfaces

```solidity
interface ITokenDisburse {

    event DisbursementAdded(uint256 id, address recipient, uint256 amount, uint64 startTime, uint64 duration);
    event DisbursementClaim(uint256 id, address recipient, uint256 amount);
    event DisbursementUpdated(uint256 id, uint256 reduction, uint64 startTime, uint64 duration);
    
    function addDisbursement(address _recipient, uint256 _amount, uint64 _startTime, uint64 _duration, string _note);
    function addDisbursements(address[] _recipients, uint256[] _amounts, uint64 _startTime, uint64 _duration, string _note);
    function claim(uint256 _amount);
    function disbursements(uint256) view returns (uint256 id, address recipient, string note, uint256 total, uint256 claimed, uint256 balance, uint64 createdTime, uint64 startTime, uint64 duration);
    function getDisbursementIds(address _recipient) view returns (uint256[]);
    function globalStartTime() view returns (uint256);
    function reservedToken() view returns (uint256);
    function totalClaimed(address _recipient) view returns (uint256);
    function totalUnvested(address _recipient) view returns (uint256);
    function totalVested(address _recipient) view returns (uint256);
    function updateDisbursement(uint256 _disbursementId, uint256 _reduction, uint64 _startTime, uint64 _duration);
    
}
```

### ABIs

{% file src="/files/PeBACWKpn9wN87CW1mrp" %}
