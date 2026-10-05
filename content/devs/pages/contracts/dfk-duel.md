> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/dfk-duel.md).

# DFK Duel

## Contracts

### Addresses

#### DFK Chain

| Name            | Mainnet                                      | Testnet                                      |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| DFK Duel (S6)   | `0xb7F679d69FA55b762F7f48432Da77D096d749540` | `0xB1834889b1B87dEbd5FB4aAA9a339eA489C34793` |
| Duel Rank Claim | `0x89789a580fdE00319493BdCdB6C65959DAB1e517` | `0x14dB6602b620Ad4B781164C7BADB288b675e18eb` |

#### Klaytn

| Name            | Mainnet                                      | Testnet                                      |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| DFK Duel (S6)   | `0x1207b51994c7A21cC0C78Ad1B12f2A3E203afC85` | `0x1c648BaFfA8F06d552ebf0cF6E5169f299aff26E` |
| Duel Rank Claim | `0xb0f423BCB1F4396781e21ad9E0BC151d29Ac020C` | `0x4818D6cFCCBCbe1a11B26d381fd6Af8321d42A16` |

### Interfaces

```solidity
interface IDFKDuelS6 {

    // Events
    event ChampionMedalReturned(address player, uint256 lobby, uint256 medalId);
    event ChampionMedalsEarned(address player, uint256 lobby, uint256 count);
    event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds, tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata) duelEntry);
    event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
    event DuelKingBounty(uint256 indexed lobby, address player, uint256 duelEntryId, uint256 amount, uint64 timestamp);
    event DuelKingReward(uint256 indexed lobby, address player, uint256 duelEntryId, uint256 amount, uint64 timestamp);
    event DuelMatchReshuffle(uint256 indexed duelEntryId, uint256 indexed duelType);
    event DuelNewKing(uint256 indexed lobby, uint256 newKingId, uint256 oldKingId);
    event DuelPtBalanceClaimed(address player, uint256 amount, uint64 timestamp);
    event EntriesRecharged(uint256 indexed heroId, uint256 indexed lobby, uint256 day, uint256 rechargeCount, uint256 amount);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event HeroLockedToWallet(uint256 heroId, address indexed lastHeroDuelOwner, uint256 indexed lastHeroDuelTime);
    event PassiveEntryRemoved(uint256 indexed duelEntryId, uint256 indexed duelType);
    event PlayerScoreChanged(uint256 indexed duelId, address indexed player, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) playerScoreChange);
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity, tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) data) hero1Snapshot, tuple(uint256 petId, uint8 petRarity, tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) data) hero2Snapshot) turnResult);
    event UpdatedCrossChainData(uint256 indexed _heroId, address indexed _address, uint256 indexed time);

    // Ranked Mode
    function completeDuel(uint256 _duelId);
    function completeDuels(uint256 _numToComplete);
    function enterDuelLobby(uint256 _lobby, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function enterDuelLobbyWithLocked(uint256 _lobby, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function matchMake();
    function repairDuelEntry(uint256 _entryId);
    function rechargeEntries(uint8 _lobby, uint256 _heroId);
    function rechargeEntriesMulti(uint8 _lobby, uint256[] _heroIds);

    // Champion Mode
    function challengeKing(uint256 _lobby, uint256[] _heroIds, uint256 _background, uint256 _stat);
    function claimPtBalance();
    function returnChampionMedal(uint256 _lobby, uint256 _accessoryId);
    function updateChampionLeaderboard(uint256 _lobby);
            
    // Private & Practice Modes
    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function cancelPrivateDuel(uint256 _duelId);
    function startPracticeDuel(uint256 _lobby, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _lobby, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

    // View Functions
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChampionLeaderboard(uint256 _type, uint256 _start, uint256 _end) view returns (address[] _addresses, uint256[] _times, uint256 _lastUpdate);
    function getCurrentClassBonuses() view returns (uint8[6][2]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntries(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity, tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) data) hero1Snapshot, tuple(uint256 petId, uint8 petRarity, tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) data) hero2Snapshot)[]);
    function getDuels(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getHeroAddress(uint256[] _heroIds) view returns (address[]);
    function getHeroCoreAddress() view returns (address);
    function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getHeroDuelCountForDay(uint256[] _heroIds, uint256 _duelType) view returns (uint256[]);
    function getHeroDuelEntry(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getHeroLastTimePlayed(uint256 _heroId) view returns (uint256);
    function getHeroRechargeInfo(uint256 _heroId, uint256 _lobby) view returns (uint256 _rechargeCount, uint256 _rechargeCost, uint256 _day, uint64 _secondsUntilNextDay);
    function getHeroesDuelDailyData(uint256[] _heroIds, uint256 _duelType) view returns (tuple(uint256 numDuels, uint256 rechargeCount, uint256 rechargeCost, uint256 formerKingRechallengeTime, address lastPlayer)[] heroData, uint256 _today, uint64 _secondsUntilNextDay);
    function getHighestScore(uint256 _type) view returns (uint64);
    function getKingInfo(uint256 _lobby) view returns (uint256 _kingId, uint256 _currentBounty, uint256 _challengeCost, uint32 _streakRequired, uint64 _scoreRequired, uint256 _kingChangeDuelId);
    function getLeaderboard(uint256 _type, uint256 _start, uint256 _end) view returns (address[] _addresses, uint256[] _scores, uint256[] _totalDuels, uint256[] _totalWins);
    function getLeaderboardRank(uint64 _score, uint256 _type) view returns (uint256);
    function getNumRanks(uint256 _type) pure returns (uint256);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getPlayerInfo(address _profile) view returns (uint64[] _scores, uint256[] _ranks, uint64[] _totalWins, uint32[] _winStreaks, uint64[] _totalDuels, uint256[] _lbRanks, uint256 _ptBalance, uint256[] _championTimes);
    function getPlayerRank(address _profile, uint256 _type) view returns (uint256);
    function getPlayerScore(address _profile, uint256 _type) view returns (uint64);
    function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getRankLevels(uint256 _type) pure returns (uint16[]);
    function getSeasonInfo() view returns (uint256 startTime, uint256 endTime, uint16 season);
    function getTotalDuelEntries() view returns (uint256);
    function getTotalDuelEntriesByType(uint256 _type) view returns (uint256);
    function getTotalDuels() view returns (uint256);
    function getTotalDuelsByType(uint256 _type) view returns (uint256);
    function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
    function getTotalPlayerDuels(address _profile, uint256 _type) view returns (uint64);
    function getTotalPlayerWins(address _profile, uint256 _type) view returns (uint64);
    function getWinStreaks(address _player, uint256 _type) view returns (uint256);
            
}
```

```solidity
interface IDuelRankClaim {

    event Claimed(uint256 indexed rankId, address indexed recipient, address token, uint256 amount, uint256 timestamp);

    function _calculateRankId(uint256 _season, uint256 _duelType, uint256 _rank) pure returns (uint256);
    function claimReward(uint256 _season, uint256 _duelType, uint256 _rank);
    function getClaimedRanks(uint256 _season, uint256 _duelType, address _user) view returns (uint256[]);
    function getRewards(uint256 _season, uint256 _duelType, uint256 _rank) view returns (tuple(address tokenAddress, uint256 amount, bool isEquipmentCache, uint8 equipmentType, uint16 displayId, uint8 rarity)[]);
    function getRewardsForSeasonAndDuelType(uint256 _season, uint256 _duelType) view returns (tuple(address tokenAddress, uint256 amount, bool isEquipmentCache, uint8 equipmentType, uint16 displayId, uint8 rarity)[][]);
    function getSeasonInfo(address _player, uint256 _season, uint256 _duelType) view returns (uint64 score, uint256 rank, uint16[] ranks, uint256[] claimedRanks, tuple(address tokenAddress, uint256 amount, bool isEquipmentCache, uint8 equipmentType, uint16 displayId, uint8 rarity)[][] rewards, uint256 startTime, uint256 endTime);
    function getSeasonRankRequirements(uint256 _season, uint256 _duelType) view returns (uint16[]);
    function rankRewards(uint256, uint256) view returns (address tokenAddress, uint256 amount);
    function rankRewardsV2(uint256, uint256) view returns (address tokenAddress, uint256 amount, bool isEquipmentCache, uint8 equipmentType, uint16 displayId, uint8 rarity);
    function userRankClaims(uint256, address) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/DuelS6Diamond.json" %}

{% file src="/assets/devs/files/DuelRankClaim.json" %}

## Related Contracts

{% content-ref url="/pages/4SnUu1Y8A3akXp5hSN35" %}
[Raffle Master](/contracts/dfk-duel/raffle-master.md)
{% endcontent-ref %}

{% content-ref url="/pages/QJfkuQQDjlHvajMZCd8R" %}
[Raffle Tickets](/tokens/miscellaneous-tokens/raffle-tickets.md)
{% endcontent-ref %}
