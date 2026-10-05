> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/pvp-combat.md).

# PVP Combat

{% hint style="info" %}
The PVP Diamond is combined with the [HeroV4 facet](/nfts/heroes/herov4-metis.md), [Influence facet](/contracts/pvp-combat.md), Patrols facet, and [MeditationV4](/contracts/meditation-circle.md) facet, which all share a contract address.
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
    event BattleAccepted(uint256 indexed battleId, address indexed host, address indexed opponent, uint256 battleSettingsPt1, uint256 battleSettingsPt2);
    event BattleAdminCanceled(uint256 indexed battleId, address indexed player);
    event BattleCanceled(uint256 indexed battleId, address indexed host);
    event BattleCompleteInvalid(uint256 battleId);
    event BattleCompleted(uint256 indexed battleId, address battleWinner, uint8 winner);
    event BattleCreated(uint256 indexed battleId, address indexed host, uint256 battleSettingsPt1, uint256 battleSettingsPt2);
    event BattleEarlyStartInvalid(uint256 battleId);
    event BattleHeroAssigned(uint256 heroId, uint256 battleId, uint8 side);
    event BattleHeroUnassigned(uint256 heroId, uint256 battleId, uint8 side);
    event BattleInfluenceDataUpdated(uint256 indexed battleId, tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData);
    event BattleOpponentWithdrew(uint256 indexed battleId, address indexed opponent, uint256 battleSettingsPt1, uint256 battleSettingsPt2);
    event BattlePotionBurned(uint256 indexed battleId, address indexed item, address indexed player, uint8 amount);
    event BattlePotionReturned(uint256 indexed battleId, address indexed item, address indexed player, uint8 amount);
    event BattleResultSubmitted(uint256 indexed battleId, address indexed battleWinner, uint8[] _hostUsedAmounts, uint8[] _opponentUsedAmounts);
    event BattleSpectatorAdded(uint256 indexed battleId, address indexed player, uint8 winner, uint256 influenceAdded, tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData);
    event BattleSpectatorRemoved(uint256 indexed battleId, address indexed player);
    event BattleSpectatorRewarded(uint256 indexed battleId, address indexed player, address rewardToken, bool isGasToken, uint256 amount);
    event BattleSpectatorVoteChanged(uint256 indexed battleId, address indexed player, uint8 newWinner, uint256 newInfluence, tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData);
    event BattleSpectatorWithdrew(uint256 indexed battleId, address indexed player, uint8 winner, uint256 influenceRemoved, tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData);
    event BattleSponsorRefunded(uint256 indexed battleId, address indexed sponsor, address sponsorToken, bool isGasToken, uint256 amount);
    event BattleSponsored(uint256 indexed battleId, address indexed sponsor, address sponsorToken, bool isGasToken, uint256 amount, uint256 sponsorCount, uint256 newTotal);
    event BattleStartedEarly(uint256 indexed battleId, uint256 battleStartTime);
    event BattleWinnerRewarded(uint256 indexed battleId, address indexed player, address rewardToken, bool isGasToken, uint256 amount);

    // State-Changing Functions
    function acceptBattle(uint256 _battleId, uint256[] _heroIds, uint8[] _potionAmounts, uint256 _glories);
    function cancelBattle(uint256 _battleId);
    function createBattle(uint256[] _heroIds, tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1) _battleSettings, uint8[] _potionAmounts, address _opponentAddress);
    function modifyVote(uint256 _battleId, uint256 _influence, uint8 _winner);
    function sponsorBattle(uint256 _battleId, address _sponsorToken, bool _isGasToken, uint256 _amount) payable;
    function voteOnWinner(uint256 _battleId, uint256 _influence, uint8 _winner);
    function withdrawFromBattle(uint256 _battleId);
    function withdrawVote(uint256 _battleId);
    
    // View Functions
    function getBattle(uint256 _battleId) view returns (tuple(uint256 id, tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1) settings, uint256[] hostHeroIds, uint256[] opponentHeroIds, uint256 hostPotions, uint256 opponentPotions));
    function getBattleAndSpectatorInfo(uint256 _battleId) view returns (tuple(tuple(uint256 id, tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1) settings, uint256[] hostHeroIds, uint256[] opponentHeroIds, uint256 hostPotions, uint256 opponentPotions) battle, tuple(tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData, tuple(address player, uint256 usedInfluence, uint8 side)[] spectators, tuple(address tokenAddress, uint256 amountAdded, bool isGasToken)[] sponsorTokens, tuple(address sponsor, uint256 amountAdded)[][] sponsors) spectatorInfo));
    function getBattleCounter() view returns (uint256);
    function getBattleIndex(uint256 _id, address _player) view returns (uint256);
    function getBattleInfluenceData(uint256 _battleId) view returns (tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB));
    function getBattleSettings(uint256 _battleId) view returns (tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1));
    function getBattleSettingsPt1(uint256 _battleId) view returns (uint256);
    function getBattleSettingsPt2(uint256 _battleId) view returns (uint256);
    function getBattleSpectatorInfo(uint256 _battleId) view returns (tuple(tuple(uint256 influenceSideA, uint256 influenceSideB, uint256 spectatorCountSideA, uint256 spectatorCountSideB) influenceData, tuple(address player, uint256 usedInfluence, uint8 side)[] spectators, tuple(address tokenAddress, uint256 amountAdded, bool isGasToken)[] sponsorTokens, tuple(address sponsor, uint256 amountAdded)[][] sponsors));
    function getHeroBattle(uint256 _heroId) view returns (tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1));
    function getHosts(uint256 _battleId) view returns (address);
    function getUnpackedBattleSettingsPt1(uint256 _battleId) view returns (tuple(uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, bool mustIncludeClass1));
    function getUnpackedBattleSettingsPt2(uint256 _battleId) view returns (tuple(address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, uint256 includedClass1));
    function getUserBattleIds(address _address) view returns (uint256[]);
    function getUserBattles(address _address) view returns (tuple(uint256 id, tuple(address host, uint256 battleStartTime, uint256 votingEnabledWithWindow, uint256 setupTime, uint256 minRank, uint256 maxRank, uint256 minRarity, uint256 maxRarity, uint256 battleInventory, uint256 battleBudget, uint256 minHeroStatScore, uint256 maxHeroStatScore, uint256 minTeamStatScore, uint256 maxTeamStatScore, uint256 minLevel, uint256 maxLevel, uint256 excludedClasses, uint256 excludedConsumables, uint256 excludedOrigin, uint256 shotClockDuration, uint256 bankedShotClockTime, uint256 shotClockPenaltyMode, uint256 shotClockForfeitCount, address opponent, uint256 partyCount, uint256 mapId, uint256 minGlories, uint256 hostGlories, uint256 opponentGlories, uint256 sponsorCount, uint8 battleState, bool privateBattle, bool allUniqueClasses, bool noTripleClasses, bool allowEarlyBattleStart, bool onlyPJ, bool autoRandom, bool gloryBout, bool mustIncludeClass1, uint256 includedClass1) settings, uint256[] hostHeroIds, uint256[] opponentHeroIds, uint256 hostPotions, uint256 opponentPotions)[]);
    
}
```

### ABIs

{% file src="/assets/devs/files/PVPDiamond.json" %}

{% file src="/assets/devs/files/PVPDiamond-minified.json" %}

### Mappings

#### Potions

Patrols use the same 15-item array mappings as [Void Hunts](/contracts/void-hunts.md#mappings).
