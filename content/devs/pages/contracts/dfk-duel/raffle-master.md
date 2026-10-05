> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/dfk-duel/raffle-master.md).

# Raffle Master

## Contracts

### Addresses

#### DFK Chain

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Master | `0xd8D7CE8921490b75EC489bd076AD0f27DC765675` | `0xffBaE4e33107D14452e83CF1F7B92B04627CbE01` |
| Gold Pot      | `0x2DC1b89d20878aD9dc06e7e165f340d6CCa78475` | `0xb6D1C4e5b131FA52Cfa48e5477aAe386B63B6fD6` |

#### Klaytn

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Master | `0x9aE38Ba1A4bB847E6D77e29Db235B0037A0cfB30` | `0xdFe913aa8b8b3c678C83b958F5e4997EAF3Fdc8f` |
| Gold Pot      | `0xEF8ce3a8308401Cd04B658830C53621561EeF138` | `0x5b5570C416a87e49c09dB0990751bF825C4A5045` |

### Interfaces

```solidity
interface IRaffleMaster {

    event RaffleClosed(uint256 indexed raffleId);
    event RaffleDrawn(uint256 indexed raffleId, address indexed winner);
    event RaffleEntered(address indexed user, uint256 indexed raffleId, uint256 tickets);
    event RaffleStarted(uint256 indexed raffleId, tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration) raffleType);
    event RaffleTypeActivated(uint256 indexed raffleTypeId, uint256 bucket);
    event RaffleTypeAdded(uint256 indexed id, tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration) raffleType);
    event RaffleTypeDeactivated(uint256 indexed raffleTypeId, uint256 bucket);
    
    function activeRaffleTypes(uint256, uint256) view returns (uint256);
    function addActiveRaffleType(uint256 _id, uint256 _bucket);
    function addAndActivateRaffleType(address[] _rewards, uint256[] _rewardAmounts, uint256 _maxWinners, uint64 _duration, uint256[] _buckets);
    function addRaffleType(address[] _rewards, uint256[] _rewardAmounts, uint256 _maxWinners, uint64 _duration);
    function closeRaffles();
    function createRaffle(uint256 _raffleTypeId, uint256 _bucket);
    function currentRaffleBuckets(uint256) view returns (uint256);
    function drawWinners();
    function enterRaffle(uint256 _raffleId, uint256 _tickets);
    function entries(uint256, uint256) view returns (address);
    function getCurrentRaffleBuckets() view returns (uint256[]);
    function getCurrentRaffleData() view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status)[], tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[], uint256[], uint256[]);
    function getLastRaffleBuckets() view returns (uint256[]);
    function getPreviousRaffleData() view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status)[], tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[], uint256[], uint256[]);
    function getRaffleList(uint256[] _raffleBuckets) view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status)[]);
    function getRaffleTicketsAllowanceList(uint256[] _raffleBuckets) view returns (uint256[]);
    function getRaffleTicketsList(uint256[] _raffleBuckets) view returns (uint256[]);
    function getRaffleTypesList(uint256[] _raffleBuckets) view returns (tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[]);
    function getTicketAllowance(address _user, uint256 _raffleId) view returns (uint256);
    function lastRaffleBuckets(uint256) view returns (uint256);
    function playerEntries(uint256, address) view returns (uint256);
    function raffleTypes(uint256) view returns (uint256 id, uint256 maxWinners, uint64 duration);
    function raffles(uint256) view returns (uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, uint8 status);
    function removeActiveRaffleType(uint256 _index, uint256 _bucket);
    function setRaffleType(uint256 _raffleTypeId, address[] _rewards, uint256[] _rewardAmounts, uint256 _maxWinners, uint64 _duration);
    function startRandomRaffle(uint256 _bucket);
    function startRandomRaffles(uint256[] _buckets);
    function timePerTicket() view returns (uint256);
    function totalRaffleTypes() view returns (uint256);
    function totalRaffles() view returns (uint256);
  
}
```

```solidity
interface IGoldPot {

    event Claim(address _from, uint256 _period, uint256 _amount);
    event Deposit(address _from, uint256 _period, uint256 _amount);
    event Enter(address _from, uint256 _period, uint256 _amount);
    event NewPeriod(uint256 _period);
    
    function claim(uint256 _period);
    function currentPeriod() view returns (uint256);
    function deposit(uint256 _amount);
    function enter(uint256 _tickets);
    function getCurrentData() view returns (uint256, uint256, uint256, uint256, uint256, uint256);
    function getCurrentPeriod() returns (uint256);
    function getPeriodStartTime(uint256 _period) view returns (uint256);
    function getTicketAllowance(address _user, uint256 _period) view returns (uint256);
    function getUnclaimedPeriods(address _user) view returns (uint256[]);
    function periodDuration() view returns (uint256);
    function periodTotalGold(uint256) view returns (uint256);
    function periodTotalTickets(uint256) view returns (uint256);
    function timePerTicket() view returns (uint256);
  
}
```

### ABIs

{% file src="/assets/devs/files/raffleMaster.json" %}

{% file src="/assets/devs/files/goldPot.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| Raffle Master | `0x6a56222A67df18FC282CD58dCDF12e61Be812f97` | `0xbA3eeE168F92c6A092544C0b8702D6B80085E562` |
| Gold Pot      | `0xd3f98a53fd4388b9297f6bd0d63b75a023adf7e5` | `0x9d8Af1831B2D5984De82C803562441Ef9f6e76c1` |

## Related Contracts

{% content-ref url="/pages/m2dpAEE5I7HUpLg8cYUQ" %}
[DFK Duel](/contracts/dfk-duel.md)
{% endcontent-ref %}

{% content-ref url="/pages/AivVnFE2kGEYbeLFQZ28" %}
[Locked Token Raffle](/contracts/miscellaneous/locked-token-raffle.md)
{% endcontent-ref %}

{% content-ref url="/pages/QJfkuQQDjlHvajMZCd8R" %}
[Raffle Tickets](/tokens/miscellaneous-tokens/raffle-tickets.md)
{% endcontent-ref %}
