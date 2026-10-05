> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/influence-system.md).

# Influence System

{% hint style="info" %}
The Influence System is part of the [PVP Diamond](/contracts/pvp-combat.md) contract, and is combined with the [HeroV4 facet](/nfts/heroes/herov4-metis.md), sharing a contract address.
{% endhint %}

## Contracts

### Addresses

#### Metis

| Name           | Mainnet                                      | Testnet                                      |
| -------------- | -------------------------------------------- | -------------------------------------------- |
| PVPDiamond     | `0xc7681698B14a2381d9f1eD69FC3D27F33965b53B` | `0xb2bC817C100a6bd60e8bf8a79dBAD607cE9C3cF2` |
| Colosseum Fund | `0xA0D026484859B84709749047a0118e3932c5DD92` | `0x3A1DD2De69AeC241eB6D601F73F29B7FE8a443c4` |

### Interfaces

```solidity
interface IPVPDiamond {

    // Events
    event BattleRewardsCollected(address indexed player, tuple(address tokenAddress, bool isGasToken)[] rewardTokens, uint256[] totalAmounts, uint256[] rewardCounts);
    event DailyInfluenceRewardCollected(address tokenAddress, uint256 amount, bool isGasToken, uint256 accTokensPerShare, uint256 globalInfluence);
    event DailyShellQuestComplete(address indexed player, uint256 rewardAmount, uint256 consecutiveDays);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FrequentShellQuesterComplete(address indexed player, uint256 rewardAmount);
    event HeroInfluenceDataSet(uint256 indexed heroId, tuple(uint256 lockExpirationDay, uint256 daysLocked, uint256 influence, uint256 lastXpClaimDay) heroInfluenceData);
    event HeroPledgeRemoved(uint256 indexed heroId, uint256 fee);
    event HeroXpClaimed(uint256 indexed heroId, uint256 xpClaimed);
    event InfluenceRewardCollected(address indexed player, address tokenAddress, uint256 amount, bool isGasToken);
    event PlayerInfluenceDataUpdated(address indexed player, tuple(uint256 totalInfluence, uint256 availableInfluence, uint256 resetWeekNumber, uint256 spectatingBattleId) playerInfluenceData);
    event PlayerInfluenceDataUpdatedV2(address indexed player, (uint256 totalInfluence, uint256 availableInfluence, uint256 resetWeekNumber, uint256 spectatingBattleCount, bool convertedToV2, uint256 activeInfluence) playerInfluenceData);
    event ShellsClaimed(address indexed player, uint256 claimedAmount, (uint256 availableShells, uint256 dailyQuestRemainder, uint256 currentClaimDay, uint256 lastRewardDay, uint256 consecutiveRewardDays, uint256 totalDaysRewarded) claimData);
    event ShellsEarned(address indexed player, uint256 earnedAmount);
    event WeeklyShellQuestComplete(address indexed player, uint256 rewardAmount);

    // State-Changing Functions
    function breakPledge(uint256 _heroId);
    function claimBattleRewards();
    function claimHeroXp(uint256 _heroId);
    function claimInfluenceRewards();
    function claimShells();
    function earlyBreakPledge(uint256 _heroId);
    function multiBreakPledge(uint256[] _heroIds);
    function multiClaimHeroXp(uint256[] _heroIds);
    function multiEarlyBreakPledge(uint256[] _heroIds);
    function multiPledgeHero(uint256[] _heroIds, uint256[] _lockDurations);
    function pledgeHero(uint256 _heroId, uint256 _lockDuration);
    function updateRewards();
    
    // View Functions
    function MAX_DAYS_LOCKED() view returns (uint256);
    function MIN_DAYS_LOCKED() view returns (uint256);
    function getAllPlayerRewards(address _player) view returns (tuple(address tokenAddress, uint256 dayAdded, bool isGasToken)[], uint256[], tuple(tuple(address tokenAddress, bool isGasToken) token, tuple(uint256 rewardAmount, uint256 timeReceived, uint256 battleId, uint8 reason)[] rewardInfo)[]);
    function getCurrentRewards(address _player) view returns (tuple(address tokenAddress, uint256 dayAdded, bool isGasToken)[], uint256[]);
    function getCurrentSpectatorRewards(address _player) view returns (tuple(tuple(address tokenAddress, bool isGasToken) token, tuple(uint256 rewardAmount, uint256 timeReceived, uint256 battleId, uint8 reason)[] rewardInfo)[]);
    function getGlobalInfluence() view returns (uint256);
    function getHeroInfluence(uint256 _heroId, uint256 _lockDuration) view returns (uint256);
    function getHeroInfluenceData(uint256 _heroId) view returns (tuple(uint256 lockExpirationDay, uint256 daysLocked, uint256 influence, uint256 lastXpClaimDay));
    function getHeroScore(uint256 _heroId) view returns (uint256);
    function getPlayerInfluenceData(address _player) view returns (tuple(uint256 totalInfluence, uint256 availableInfluence, uint256 resetWeekNumber, uint256 spectatingBattleId));
    function getPlayerPledgedHeroes(address _player) view returns (uint256[]);
    function getPlayerPledgedHeroesWithIndex(address _player, uint256 _index, uint256 _count) view returns (uint256[]);
    function getShellClaimData(address _player) view returns ((uint256 availableShells, uint256 dailyQuestRemainder, uint256 currentClaimDay, uint256 lastRewardDay, uint256 consecutiveRewardDays, uint256 totalDaysRewarded));
    function getWithdrawalFee(uint256 _heroId) view returns (uint256);
    
}
```

### ABIs

{% file src="/files/Qlo0WbRlefVzNNDjRmd6" %}

{% file src="/files/Qv1tOe7vHjZWDIdXeE2Z" %}
