> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/locked-token-raffle.md).

# Locked Token Raffle

## Contracts

### Addresses

#### DFK Chain

| Name              | Mainnet                                      | Testnet                                      |
| ----------------- | -------------------------------------------- | -------------------------------------------- |
| LockedTokenRaffle | `0xeD1194F75180bb623231D2489071fE9c3e1e04e0` | `0x251eb22DBD0B04cA3bAA3dBCb85B03523Cc341C0` |

### Interfaces

```solidity
interface ILockedTokenRaffle {

    event RaffleClosed(uint256 indexed raffleId);
    event RaffleDrawn(uint256 indexed raffleId, address indexed winner);
    event RaffleEntered(address indexed user, uint256 indexed raffleId, uint256 tickets);
    event RaffleStarted(uint256 indexed raffleId, tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration) raffleType);
    event RaffleTypeActivated(uint256 indexed raffleTypeId, uint256 bucket);
    event RaffleTypeAdded(uint256 indexed id, tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration) raffleType);
    event RaffleTypeDeactivated(uint256 indexed raffleTypeId, uint256 bucket);
    
    function activeRaffleTypes(uint256, uint256) view returns (uint256);
    function bucketActive(uint256) view returns (bool);
    function burnAddress() view returns (address);
    function closeRaffles();
    function currentRaffleBuckets(uint256) view returns (uint256);
    function drawWinners();
    function enterRaffle(uint256 _raffleId, uint256 _tickets);
    function enterRaffleWithLocked(uint256 _raffleId, uint256 _tickets);
    function entries(uint256, uint256) view returns (address);
    function getCurrentRaffleBuckets() view returns (uint256[]);
    function getCurrentRaffleData() view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status, uint256[] winningIndexes, uint256 lastEntryChecked, uint256 lastEntryTicketsCount)[], tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[], uint256[], uint256[]);
    function getLastRaffleBuckets() view returns (uint256[]);
    function getPreviousRaffleData() view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status, uint256[] winningIndexes, uint256 lastEntryChecked, uint256 lastEntryTicketsCount)[], tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[], uint256[], uint256[]);
    function getRaffleList(uint256[] _raffleBuckets) view returns (tuple(uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, address[] winners, uint8 status, uint256[] winningIndexes, uint256 lastEntryChecked, uint256 lastEntryTicketsCount)[]);
    function getRaffleTicketsAllowanceList(uint256[] _raffleBuckets) view returns (uint256[]);
    function getRaffleTicketsList(uint256[] _raffleBuckets) view returns (uint256[]);
    function getRaffleTypesList(uint256[] _raffleBuckets) view returns (tuple(uint256 id, address[] rewards, uint256[] rewardAmounts, uint256 maxWinners, uint64 duration)[]);
    function getTicketAllowance(address _user, uint256 _raffleId) view returns (uint256);
    function lastRaffleBuckets(uint256) view returns (uint256);
    function paused() view returns (bool);
    function playerEntries(uint256, address) view returns (uint256);
    function playerEntryIndexes(uint256, address) view returns (uint256);
    function playerEntryObjects(uint256, uint256) view returns (address player, uint256 tickets);
    function powerToken() view returns (address);
    function questFund() view returns (address);
    function raffleTypes(uint256) view returns (uint256 id, uint256 maxWinners, uint64 duration);
    function raffles(uint256) view returns (uint256 id, uint256 raffleType, uint256 startTime, uint256 totalEntries, uint256 endTime, uint256 closedBlock, uint8 status, uint256 lastEntryChecked, uint256 lastEntryTicketsCount);
    function ticketPrice() view returns (uint256);
    function ticketPriceIncrease() view returns (uint256);
    function timePerTicket() view returns (uint256);
    function totalRaffleTypes() view returns (uint256);
    function totalRaffles() view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/LockedTokenRaffle.json" %}
