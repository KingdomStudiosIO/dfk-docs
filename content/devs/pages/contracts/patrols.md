> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/patrols.md).

# Patrols

{% hint style="info" %}
Patrols is part of the [PVP Diamond](/contracts/pvp-combat.md) contract, and is combined with the [HeroV4 facet](/nfts/heroes/herov4-metis.md), [PVP facet](/contracts/pvp-combat.md), [Influence facet](/contracts/pvp-combat.md), and [MeditationV4](/contracts/meditation-circle.md) facet, which all share a contract address.
{% endhint %}

## Contracts

### Addresses

| Name  | Mainnet                                      | Testnet                                      |
| ----- | -------------------------------------------- | -------------------------------------------- |
| Metis | `0xc7681698B14a2381d9f1eD69FC3D27F33965b53B` | `0xb2bC817C100a6bd60e8bf8a79dBAD607cE9C3cF2` |

### Interfaces

```solidity
interface IPVPDiamond {

    // Events
    event PatrolAvailibleStageLinks(uint256 indexed patrolId, uint256[] allowedTrialIds);
    event PatrolBattleBudget(uint256 indexed patrolId, uint256 battleBudget);
    event PatrolCanceled(uint256 indexed patrolId, address indexed player);
    event PatrolCompleted(uint256 indexed patrolId, address indexed player, uint256 fightsCompleted, bool patrolWon);
    event PatrolEquipmentMinted(uint256 indexed huntId, address indexed item, address indexed player, uint256 equipmentType, uint256 displayId, uint256 rarity, uint256 nftId);
    event PatrolHeroAssigned(uint256 indexed patrolId, uint256 indexed heroId, uint256 attempts);
    event PatrolHeroStatsUpdated(uint256 indexed patrolId, uint256 indexed heroId, uint256 hp, uint256 mp, uint256 position);
    event PatrolHeroUnassigned(uint256 indexed patrolId, uint256 indexed heroId, uint256 attempts);
    event PatrolInvalidResultSubmission(uint256 indexed patrolId);
    event PatrolPlayerInputReceived(uint256 indexed patrolId, address indexed player, uint256 trialId, bool playerIsContinuing);
    event PatrolPotionBurned(uint256 indexed patrolId, address indexed item, address indexed player, uint8 amount);
    event PatrolPotionReturned(uint256 indexed patrolId, address indexed item, address indexed player, uint8 amount);
    event PatrolResultSubmitted(uint256 indexed patrolId, bool patrolWon, uint256[] enemyIndexes, uint256 usedPotions);
    event PatrolRewardMinted(uint256 indexed patrolId, address indexed player, address indexed item, uint256 amount, uint256 data);
    event PatrolStarted(uint256 indexed patrolId, address indexed player, uint256 enemyPoolId);
    event PatrolXpEarned(uint256 indexed patrolId, uint256 indexed heroId, uint256 xpEarned);
  
    // State-Changing Functions
    function completePatrol(uint256 _patrolId);
    function startPatrol(uint256 _trialId, uint256[] _heroIds, uint8[] _potionAmounts);
    function submitPlayerDecision(uint256 _patrolId, uint256 _trialId, bool _playerIsContinuing);
    
    // View Functions
    function getAllPlayerEnemyPoolIdCounters(address _player) view returns (uint256[]);
    function getAllPlayerKillCountersForEnemyPoolId(address _player, uint256 _enemyPoolId) view returns (uint256[]);
    function getEnemyKillCounter(address _player, uint256 _enemyPoolId, uint256 _enemyIndex) view returns (uint256);
    function getNextAvailableStageLinks(uint256 _patrolId) view returns ((uint256 trialId, uint256 poolId)[], (address player, uint256 trialId, uint256 stage, uint256 blockNumber, uint8 status, bool patrolWon, uint256 fightsCompleted));
    function getPatrol(uint256 _patrolId) view returns ((uint256 patrolId, (address player, uint256 trialId, uint256 stage, uint256 blockNumber, uint8 status, bool patrolWon, uint256 fightsCompleted) patrol, uint256[3] heroIds, uint256 potions));
    function getPatrolEnemyCounters(uint256 _patrolId) view returns ((uint256 enemyPoolId, uint256 enemyIndex, uint256 count)[]);
    function getPlayerEnemyPoolIdCounter(address _player, uint256 _enemyPoolId) view returns (uint256);
    function getPlayerPatrolStatsTracker(address _player) view returns ((uint256 battlesWon, uint256 fullPatrolsCompleted, uint256 patrolsLost, uint256 currentDay, uint256 battlesToday, uint256 battlesYesterday, uint256 battlesThisWeek, uint256 battlesLastWeek, uint256 battlesThisMonth, uint256 battlesLastMonth, uint256 fullPatrolsToday, uint256 fullPatrolsYesterday, uint256 fullPatrolsThisWeek, uint256 fullPatrolsLastWeek, uint256 fullPatrolsThisMonth, uint256 fullPatrolsLastMonth));
    function getTrial(uint256 _trialId) view returns ((bool canInitiate, uint256 dailyAttemptLimitGroup, uint256 dailyAttemptLimit, uint256 enemyPoolId, uint256 stages, uint256[8] stageLinks, uint256[8] stageLinkChances, bool hasSpecialRules, uint256 battleInventory, uint256 battleBudget));
    function getUpToDatePlayerPatrolStatsTracker(address _player) view returns ((uint256 battlesWon, uint256 fullPatrolsCompleted, uint256 patrolsLost, uint256 currentDay, uint256 battlesToday, uint256 battlesYesterday, uint256 battlesThisWeek, uint256 battlesLastWeek, uint256 battlesThisMonth, uint256 battlesLastMonth, uint256 fullPatrolsToday, uint256 fullPatrolsYesterday, uint256 fullPatrolsThisWeek, uint256 fullPatrolsLastWeek, uint256 fullPatrolsThisMonth, uint256 fullPatrolsLastMonth));
    function getUserPatrolIds(address _player) view returns (uint256[]);
    function getUserPatrols(address _player) view returns ((uint256 patrolId, (address player, uint256 trialId, uint256 stage, uint256 blockNumber, uint8 status, bool patrolWon, uint256 fightsCompleted) patrol, uint256[3] heroIds, uint256 potions)[]);
  
}
```

### ABIs

{% file src="/assets/devs/files/PVPDiamond.json" %}

{% file src="/assets/devs/files/PVPDiamond-minified.json" %}

## Contract Data

### Mappings

#### Potions

Patrols use the same 15-item array mappings as [Void Hunts](/contracts/void-hunts.md#mappings).

#### Trial ID

| Trial ID | Trial Name        |
| -------- | ----------------- |
| 1        | Night Raid        |
| 2        | Dark Water        |
| 3        | Blood Moon Rising |
| 4        | Dark Water        |
| 5        | Dark Water        |
| 6        | Blood Moon Rising |
| 7        | Blood Moon Rising |
