> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/dfk-duel/previous-seasons.md).

# Previous Seasons

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### DFK Chain

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| DFK Duel (S5) | `0x8990EAc13974522e5DAb87241a5002A61b2883d1` | `0x1C1cCB51025444A1411A06aBBC5a2e014fE614d4` |
| DFK Duel (S4) | `0xb7fe0195808E620A71672bcCa853cD848f906621` | `0xDF1772ba8B6f91FcEE6B4d18C1064023B88C5B1b` |
| DFK Duel (S3) | `0x26E47585e93f354864Ad2644fcAc348e3db5a7F3` | `0x290Ae855d535aA515426341B24605f7a8E4B5cA1` |
| DFK Duel (S2) | `0x9EEaBBcf42F0c4900d302544Cce599811C2De2b9` | `0x586b789E6aAFBc9E11FA58E3f721bf7c97C6d832` |
| DFK Duel (S1) | `0xf724FE22b45D519D149477aA2eC5348Cee08Cae3` | `0x1c6225F77A875a6217150595A3437EfA55046197` |

#### Klaytn

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| DFK Duel (S5) | `0x8d68BdfFa8830f9b7Dc36e07175E80286127E597` | `0xC14aa095EF6e56Fad84f0f18A8E5b687597D18d5` |
| DFK Duel (S4) | `0x338D7Dfb8E44c39Bfdfe4967CB79B08188dEA3C0` | `0x0F3455f223148Ba58327887247d47fF2524295E4` |
| DFK Duel (S3) | `0x780AB5bdD18eD8cBB45267e53B11EE72EbF65A21` | `0x856ac3B199Cd778996c19EF5ED92c2166eECf152` |
| DFK Duel (S2) | `0xF719C12a5A7C0f13F3c1B71074960A25E2f9Aa9e` | `0x20f10ef23Cdc11Fa55E6B3703d88f19A7B345D15` |

#### Harmony

| Name                  | Mainnet                                      | Testnet                                      |
| --------------------- | -------------------------------------------- | -------------------------------------------- |
| DFK Duel (Pre-Season) | `0xE97196f4011dc9DA0829dd8E151EcFc0f37EE3c7` | `0x3b1114AF654E022bBDeE927b5dFa5F183b717b0B` |

### Interfaces

#### Season 5

```solidity
interface IDFKDuelS5 {

    // Events
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
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity) hero1Snapshot, tuple(uint256 petId, uint8 petRarity) hero2Snapshot) turnResult);
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

    // Private & Practice Modes
    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function cancelPrivateDuel(uint256 _duelId);
    function startPracticeDuel(uint256 _lobby, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _lobby, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

    // View Functions
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getCurrentClassBonuses() view returns (uint8[6][2]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntries(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity) hero1Snapshot, tuple(uint256 petId, uint8 petRarity) hero2Snapshot)[]);
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
    function getKingInfo(uint256 _lobby) view returns (uint256 _kingId, uint256 _currentBounty, uint256 _challengeCost, uint32 _streakRequired, uint64 _scoreRequired);
    function getLeaderboard(uint256 _type, uint256 _start, uint256 _end) view returns (address[] _addresses, uint256[] _scores, uint256[] _totalDuels, uint256[] _totalWins);
    function getLeaderboardRank(uint64 _score, uint256 _type) view returns (uint256);
    function getNumRanks(uint256 _type) pure returns (uint256);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getPlayerInfo(address _profile) view returns (uint64[] _scores, uint256[] _ranks, uint64[] _totalWins, uint32[] _winStreaks, uint64[] _totalDuels, uint256[] _lbRanks, uint256 _ptBalance);
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

#### Season 4

```solidity
interface IDFKDuelS4 {

    // Events
    event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds, tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata) duelEntry);
    event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
    event DuelMatchReshuffle(uint256 indexed duelEntryId, uint256 indexed duelType);
    event EntriesRecharged(uint256 indexed heroId, uint256 indexed lobby, uint256 day, uint256 rechargeCount, uint256 amount);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event HeroLockedToWallet(uint256 heroId, address indexed lastHeroDuelOwner, uint256 indexed lastHeroDuelTime);
    event PassiveEntryRemoved(uint256 indexed duelEntryId, uint256 indexed duelType);
    event PlayerScoreChanged(uint256 indexed duelId, address indexed player, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) playerScoreChange);
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity) hero1Snapshot, tuple(uint256 petId, uint8 petRarity) hero2Snapshot) turnResult);
    event UpdatedCrossChainData(uint256 indexed _heroId, address indexed _address, uint256 indexed time);

    // Ranked Duels
    function completeDuel(uint256 _duelId);
    function completeDuels(uint256 _numToComplete);
    function completeDuelAdmin(uint256 _duelId);
    function enterDuelLobby(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function enterDuelLobbyWithLocked(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function matchMake();
    function rechargeEntries(uint8 _lobby, uint256 _heroId);

    // Private & Practice Duels
    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function cancelPrivateDuel(uint256 _duelId);
    function startPracticeDuel(uint256 _type, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _type, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);
    
    // View Functions
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getCurrentClassBonuses() view returns (uint8[6][2]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntries(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 equipmentBonus, uint16 total, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero2Score, uint256 winnerHeroId, address winnerPlayer, tuple(uint256 petId, uint8 petRarity) hero1Snapshot, tuple(uint256 petId, uint8 petRarity) hero2Snapshot)[]);
    function getDuels(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getHeroAddress(uint256[] _heroIds) view returns (address[]);
    function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getHeroDuelCountForDay(uint256[] _heroIds, uint256 _duelType) view returns (uint256[]);
    function getHeroDuelEntry(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getHeroLastTimePlayed(uint256 _heroId) view returns (uint256);
    function getHeroRechargeInfo(uint256 _heroId, uint256 _lobby) view returns (uint256 _rechargeCount, uint256 _rechargeCost, uint256 _day, uint64 _secondsUntilNextDay);
    function getHighestScore(uint256 _type) view returns (uint64);
    function getLeaderboard(uint256 _type, uint256 _start, uint256 _end) view returns (address[] _addresses, uint256[] _scores, uint256[] _totalDuels, uint256[] _totalWins);
    function getLeaderboardRank(uint64 _score, uint256 _type) view returns (uint256);
    function getNumRanks(uint256 _type) pure returns (uint256);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata)[]);
    function getPlayerInfo(address _profile) view returns (uint64[] _scores, uint256[] _ranks, uint64[] _totalWins, uint32[] _winStreaks, uint64[] _totalDuels, uint256[] _lbRanks);
    function getPlayerRank(address _profile, uint256 _type) view returns (uint256);
    function getPlayerScore(address _profile, uint256 _type) view returns (uint64);
    function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    function getRankLevels(uint256 _type) pure returns (uint16[]);
    function getSeasonInfo() view returns (uint256, uint256);
    function getTotalDuelEntries() view returns (uint256);
    function getTotalDuelEntriesByType(uint256 _type) view returns (uint256);
    function getTotalDuels() view returns (uint256);
    function getTotalDuelsByType(uint256 _type) view returns (uint256);
    function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
    function getTotalPlayerDuels(address _profile, uint256 _type) view returns (uint64);
    function getTotalPlayerWins(address _profile, uint256 _type) view returns (uint64);
    function getWinStreaks(address _player, uint256 _type) view returns (uint256);
    function getDuelEntryMatch(uint256 _id, uint256 _randomDistance) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched, tuple(uint256 boostedBackground, uint256 boostedStat) metadata));
    
}
```

#### Season 3

```solidity
interface IDFKDuelS3 {

    event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds);
    event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
    event DuelMatchReshuffle(uint256 indexed duelEntryId, uint256 indexed duelType);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event HeroLockedToWallet(uint256 heroId, address indexed lastHeroDuelOwner, uint256 indexed lastHeroDuelTime);
    event PassiveEntryRemoved(uint256 indexed duelEntryId, uint256 indexed duelType);
    event PlayerScoreChanged(uint256 indexed duelId, address indexed player, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) playerScoreChange);
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer) turnResult);
    event UpdatedCrossChainData(uint256 indexed _heroId, address indexed _address, uint256 indexed time);
    
    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function cancelPrivateDuel(uint256 _duelId);
    function completeDuel(uint256 _duelId);
    function completeDuels(uint256 _numToComplete);
    function enterDuelLobby(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function enterDuelLobbyWithLocked(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat, uint8 _entries);
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getCurrentClassBonuses() view returns (uint8[6][2]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntries(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched)[]);
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer)[]);
    function getDuels(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getHeroAddress(uint256[] _heroIds) view returns (address[]);
    function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getHeroDuelCountForDay(uint256[] _heroIds, uint256 _duelType) view returns (uint256[]);
    function getHeroDuelEntry(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched));
    function getHeroLastTimePlayed(uint256 _heroId) view returns (uint256);
    function getHighestScore(uint256 _type) view returns (uint64);
    function getLeaderboard(uint256 _type, uint256 _start, uint256 _end) view returns (address[] _addresses, uint256[] _scores, uint256[] _totalDuels, uint256[] _totalWins);
    function getLeaderboardRank(uint64 _score, uint256 _type) view returns (uint256);
    function getNumRanks(uint256 _type) pure returns (uint256);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched)[]);
    function getPlayerInfo(address _profile) view returns (uint64[] _scores, uint256[] _ranks, uint64[] _totalWins, uint32[] _winStreaks, uint64[] _totalDuels, uint256[] _lbRanks);
    function getPlayerRank(address _profile, uint256 _type) view returns (uint256);
    function getPlayerScore(address _profile, uint256 _type) view returns (uint64);
    function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak, bool useLockedTokens, uint8 numEntries, uint8 matched));
    function getRankLevels(uint256 _type) pure returns (uint16[]);
    function getSeasonInfo() view returns (uint256, uint256);
    function getTotalDuelEntries() view returns (uint256);
    function getTotalDuels() view returns (uint256);
    function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
    function getTotalPlayerDuels(address _profile, uint256 _type) view returns (uint64);
    function getTotalPlayerWins(address _profile, uint256 _type) view returns (uint64);
    function getWinStreaks(address _player, uint256 _type) view returns (uint256);
    function matchMake(uint256 _lobby);
    function startPracticeDuel(uint256 _type, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _type, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

}
```

#### Season 2

```solidity
interface IDFKDuelS2 {

    event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds);
    event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
    event DuelMatchReshuffle(uint256 indexed duelEntryId, uint256 indexed duelType);
    event HeroLockedToWallet(uint256 heroId, address indexed lastHeroDuelOwner, uint256 indexed lastHeroDuelTime);
    event PassiveEntryRemoved(uint256 indexed duelEntryId, uint256 indexed duelType);
    event PlayerScoreChanged(uint256 indexed duelId, address indexed player, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) playerScoreChange);
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer) turnResult);
    event UpdatedCrossChainData(uint256 indexed _heroId, address indexed _address, uint256 indexed time);

    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function completeDuel(uint256 _duelId);
    function enterDuelLobby(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat);
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getCurrentClassBonuses() view returns (uint8[6][2]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntries(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak)[]);
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 classBonus, uint16 subclassBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer)[]);
    function getDuels(uint256 _start, uint256 _end) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getHeroAddress(uint256[] _heroIds) view returns (address[]);
    function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getHeroDuelCountForDay(uint256[] _heroIds, uint256 _duelType) view returns (uint256[]);
    function getHeroDuelEntry(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getHeroLastTimePlayed(uint256 _heroId) view returns (uint256);
    function getHighestScore(uint256 _type) view returns (uint64);
    function getNumRanks(uint256 _type) pure returns (uint256);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak)[]);
    function getPlayerRank(address _profile, uint256 _type) view returns (uint256);
    function getPlayerScore(address _profile, uint256 _type) view returns (uint64);
    function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getRankLevels(uint256 _type) view returns (uint16[]);
    function getSeasonInfo() view returns (uint256, uint256);
    function getTotalDuelEntries() view returns (uint256);
    function getTotalDuels() view returns (uint256);
    function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
    function getTotalPlayerDuels(address _profile, uint256 _type) view returns (uint64);
    function getTotalPlayerWins(address _profile, uint256 _type) view returns (uint64);
    function getWinStreaks(address _player, uint256 _type) view returns (uint256);
    function matchMake(uint256 _lobby);
    function startPracticeDuel(uint256 _type, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _type, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

}
```

#### Season 1

```solidity
interface IDFKDuelS1 {

    event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange) duel);
    event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds);
    event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
    event PlayerScoreChanged(uint256 indexed duelId, address indexed player, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter));
    event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer) turnResult);
    
    function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
    function completeDuel(uint256 _duelId);
    function enterDuelLobby(uint256 _type, uint256[] _heroIds, uint256 _tokenFee, uint8 _background, uint8 _stat);
    function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[]);
    function getCurrentHeroScoreDuelId(uint256 _heroId) view returns (uint256);
    function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange)[100]);
    function getDuelIndexP1(uint256 _duelId) view returns (uint256);
    function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
    function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer)[]);
    function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status, tuple(uint256 duelId, uint16 base, uint32 streakBonus, uint16 miscBonus, uint32 diffBonus, uint64 scoreBefore, uint64 scoreAfter) player1ScoreChange));
    function getHeroDuelEntry(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getHighestScore(uint256 _type) view returns (uint64);
    function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak)[]);
    function getPlayerScore(address _profile, uint256 _type) view returns (uint64);
    function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 heroPower, uint256 score, uint256 scoreAfter, uint256 tokenFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status, uint64 winStreak, uint64 loseStreak));
    function getTotalDuelEntries() view returns (uint256);
    function getTotalDuels() view returns (uint256);
    function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
    function getTotalPlayerDuels(address _profile, uint256 _type) view returns (uint64);
    function getTotalPlayerWins(address _profile, uint256 _type) view returns (uint64);
    function getWinStreaks(address _player, uint256 _type) view returns (uint256);
    function matchMake(uint256 _lobby);
    function startPracticeDuel(uint256 _type, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
    function startPrivateDuel(uint256 _type, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

}
```

#### Pre-Season

```solidity
interface IDFKDuel {

  event DuelCompleted(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status) duel);
  event DuelCreated(uint256 indexed duelId, address indexed player1, address indexed player2, tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status) duel);
  event DuelEntryCreated(uint256 id, address indexed player, uint256[] heroIds);
  event DuelEntryMatched(uint256 indexed duelId, uint256 indexed duelEntryId, address indexed player1, address player2);
  event TurnOutcome(uint256 indexed duelId, uint256 indexed player1HeroId, uint256 indexed player2HeroId, tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer) turnResult);

  function completeDuel(uint256 _duelId);
  function enterDuelLobby(uint256 _type, uint256[] _heroIds, uint256 _jewelFee, uint8 _background, uint8 _stat);  
  function getActiveDuels(address _address) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status)[]);
  function getChallenges(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status)[]);
  function getDuel(uint256 _id) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status));
  function getDuelEntry(uint256 _id) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 score, uint256 scoreAfter, uint256 jewelFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status));
  function getDuelHistory(address _profile) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status)[100]);
  function getDuelIndexP1(uint256 _duelId) view returns (uint256);
  function getDuelRewards(uint256 _id) view returns (tuple(address item, address recipient, uint256 qty)[]);
  function getDuelTurns(uint256 _id) view returns (tuple(uint16 turn, uint256 player1HeroId, uint256 player2HeroId, uint8 stat, uint8 background, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero1Score, tuple(uint8 roll, uint16 elementBonus, uint16 statValue, uint16 backgroundBonus, uint16 total) hero2Score, uint256 winnerHeroId, address winnerPlayer)[]);
  function getHeroDuel(uint256 _heroId) view returns (tuple(uint256 id, address player1, address player2, uint256 player1DuelEntry, uint256 player2DuelEntry, address winner, uint256[] player1Heroes, uint256[] player2Heroes, uint256 startBlock, uint8 duelType, uint8 status));
  function getHighestScore() view returns (uint64);
  function getPlayerDuelEntries(address _profile) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 score, uint256 scoreAfter, uint256 jewelFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status)[]);
  function getPlayerScore(address _profile) view returns (uint64);
  function getPracticeEntry(uint256 _type, uint8 _rank) view returns (tuple(uint256 id, address player, uint256[] heroes, uint256 startBlock, uint256 score, uint256 scoreAfter, uint256 jewelFee, uint256 duelId, uint256 custom1, uint256 custom2, uint8 duelType, uint8 status));
  function getTotalDuelEntries() view returns (uint256);
  function getTotalDuels() view returns (uint256);
  function getTotalOpenDuelEntries(uint256 _lobby) view returns (uint256);
  function getTotalPlayerDuels(address _profile) view returns (uint64);
  function getTotalPlayerWins(address _profile) view returns (uint64);
  function _heroMMScore(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero) view returns (uint64);
  function _partyMMScore(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions)[] _heroes) view returns (uint64);
  function matchMake(uint256 _lobby);
  function acceptChallenge(uint256 _duelId, uint256[] _heroIds, uint8 _background, uint8 _stat);
  function startPracticeDuel(uint256 _type, uint256[] _heroIds, uint8 _rank, uint8 _background, uint8 _stat);
  function startPrivateDuel(uint256 _type, uint256[] _heroIds, address _opponent, uint8 _background, uint8 _stat);

}
```

### ABIs

{% file src="/assets/devs/files/DuelS5Diamond.json" %}

{% file src="/assets/devs/files/DuelS4Diamond.json" %}

{% file src="/assets/devs/files/DuelS3Diamond.json" %}

{% file src="/assets/devs/files/DFKDuelS2.json" %}

{% file src="/assets/devs/files/DFKDuelS1.json" %}

{% file src="/assets/devs/files/dfkDuel.json" %}
