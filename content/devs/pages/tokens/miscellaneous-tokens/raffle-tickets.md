> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/miscellaneous-tokens/raffle-tickets.md).

# Raffle Tickets

Description

{% hint style="info" %}
**ERC20:** The Raffle Tickets are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="danger" %}
Raffle Tickets are non-transferrable except by bridging; they can only be burned after receiving permission from the user.
{% endhint %}

### Suggested Use Cases

* 3rd-party games can wholesale buy Raffle Tickets to award as prizes
* Game Rewards

To be eligible to wholesale purchase Raffle Tickets, submit a Master Raffle Application at: <https://build.defikingdoms.com/>.

## Contracts

### Addresses

#### DFK Chain

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Ticket    | `0xBbd7c4Be2e54fF5e013471162e1ABAD7AB74c3C3` | `0x1ac602641F578A4Ec6705888Cc705C544cD8dd33` |
| Raffle Wholesale | `0x6e473afad39150ffdc18aab5d436c0cce06d44b2` | `0x87B3E8A2A755aDe019E882DE42D5eA4e64D586dd` |

#### Kaia

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Ticket    | `0x3E5081337d1a12F261b013Bc08745fB3cd756Eb3` | `0x9ceAAF10e2353a31FB4715C48d22bCB7fD90EcE5` |
| Raffle Wholesale | `0xF455E000C75Bc92492e3FDc332DC3c6d1Ee83490` | `0x939Ea05C81aAC48F7C10BdB08615082B82C80c63` |

#### Metis

| Name                                                                                                                                      | Mainnet                                      | Testnet                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/tokens/submersian-shell.png" alt="" data-size="line"> Submersian Shell (DFKSUBSHELL) | `0x628ded2aB1741e6005ea3b99c070BB5AFd9d27AE` | `0x92162d9Fdca9D0b191Fd9A358412BE3F612a06fB` |

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
    function mint(address to, uint256 amount);
    function name() view returns (string);
    function paused() view returns (bool);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    
}
```

```solidity
interface IRaffleWholesale {

    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event LimitSet(address indexed wholesaler, uint256 limit);
    event PricingSet(address indexed wholesaler, tuple(uint256[] levels, uint256[] prices, uint256 periodLimit, uint256 method, uint256 startPeriod) pricing);
    event RefundClaimed(address indexed wholesaler, uint256 period, uint256 amount, uint256 refundableTickets);
    event TicketsPurchased(address indexed wholesaler, address indexed recipient, uint256 tickets);

    function claimRefund(uint256 _period);
    function costPerTicket() view returns (uint256);
    function currentPeriod() view returns (uint256);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function getCurrentPeriod() returns (uint256);
    function paused() view returns (bool);
    function periodDuration() view returns (uint256);
    function periodLimit(address) view returns (uint256);
    function potentialRefundableTickets(address, uint256) view returns (uint256);
    function powerToken() view returns (address);
    function purchaseTickets(address _recipient, uint256 _tickets);
    function purchaseTicketsWithLocked(address _recipient, uint256 _tickets);
    function raffleTickets() view returns (address);
    function ticketsPurchased(address, uint256) view returns (uint256);
    function userPricing(address) view returns (uint256 periodLimit, uint256 method, uint256 startPeriod);

}
```

### ABIs

{% file src="/files/ZOY1Kz3xAk5pGoyM2Nxd" %}

{% file src="/files/JL96C3TPpww17hT2N2SF" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Ticket | `0x0405f1b828C7C9462877cC70A9f266887FF55adA` | `0x262f3D1C9D6A0A99871f9Fc9BE6E1797D0ADbae4` |

## Related Contracts

{% content-ref url="/pages/m2dpAEE5I7HUpLg8cYUQ" %}
[DFK Duel](/contracts/dfk-duel.md)
{% endcontent-ref %}
