> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/quests/quest-core.md).

# Quest Core

{% hint style="info" %}
The `QuestRewarder` contract mints reward items for QuestCoreV3, and should not be directly interacted with. It emits the `RewardMinted` event log as part of Quest Completion transactions.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| QuestCoreV3   | `0x530fff22987E137e7C8D2aDcC4c15eb45b4FA752` | `0x08BDdaB7d681c6406fE61d261c26Da80678874f6` |
| QuestRewarder | `0x08D93Db24B783F8eBb68D7604bF358F5027330A6` | `0xE79C79564A74DC75b9B0476a8500773f83e73590` |
| Quest Fund    | `0x1137643FE14b032966a59Acd68EBf3c1271Df316` | `0x36a0f2Bf04BCDBd38b2d97CA785B266dd39BF21c` |

#### Klaytn

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| QuestCoreV3   | `0x1Ac6Cd893EDdb6Cac15E5A9FC549335b8b449015` | `0x00746dF5d408ff9c0021867Eb0776Bc60A1C043A` |
| QuestRewarder | `0x3fAB563BD19CaFbf8717Cd99a605b3661Cf3391f` | `0x931aB25e12dF3bd881985ACFa1b25d7424357757` |
| Quest Fund    | `0x24D557a1C580ec8B78E6e0de910df5E0CE090049` | `0x298Ae561513ee00eA120c596919d4187CA1557dD` |

### Interfaces

```solidity
interface IQuestCoreV3 {

    // Events
    event ExpeditionCanceled(uint256 indexed expeditionId, address indexed player, uint256 feeRefunded, uint16 petTreats, uint32 staminaPotions);
    event ExpeditionClaimStarted(uint256 indexed expeditionId, address indexed player, tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina) expedition);
    event ExpeditionCompleted(uint256 indexed expeditionId, address indexed player);
    event ExpeditionExtended(uint256 indexed expeditionId, address indexed player, uint256 additionalIterations, uint256 additionalFee, uint256 additionalTreats);
    event ExpeditionInProgressHeroUpdate(uint256 indexed expeditionId, address indexed player, uint256 indexed heroId, uint32 currentXP, uint16 currentProfessionSkill, uint8 profession);
    event ExpeditionIterationProcessed(uint256 indexed expeditionId, uint256 indexed questId, address indexed player, uint256[] heroIds, uint256 iterationsProcessed, uint256 totalFee, uint40 lastClaimedAt, uint16 staminaPotions, uint16 petTreats);
    event ExpeditionStarted(uint256 indexed expeditionId, address indexed player, uint256 indexed heroId, tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina) expedition, uint256 fee, uint8 foodType);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event PetBonusReceived(uint256 indexed questId, address indexed player, uint256 heroId, uint256 petId);
    event PetBonusReceivedExpedition(uint256 indexed questId, address indexed player, uint256 heroId);
    event PetFed(address indexed fedBy, uint256 petId, uint8 foodType, uint256 hungryAt);
    event QuestCanceled(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType) quest);
    event QuestCompleted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType) quest);
    event QuestSkillUp(uint256 indexed questId, address indexed player, uint256 heroId, uint8 profession, uint16 skillUp);
    event QuestStaminaSpent(uint256 indexed questId, address indexed player, uint256 heroId, uint256 staminaFullAt, uint256 staminaSpent);
    event QuestStarted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType) quest, uint256 startAtTime, uint256 completeAtTime);
    event QuestXP(uint256 indexed questId, address indexed player, uint256 heroId, uint64 xpEarned);
    event RewardMinted(uint256 indexed questId, address indexed player, uint256 heroId, address indexed reward, uint256 amount, uint256 data);
    event TokenBonusAwarded(uint256 indexed questId, address indexed player, uint256 heroId, uint256 amount);
    event TrainingAttemptDone(bool success, uint256 attempt, uint256 indexed heroId);
    event TrainingSuccessRatio(uint256 winCount, uint256 attempts, uint256 indexed heroId);

    // State-Changing Functions - Quests
    function clearActiveQuests(uint256 _questInstanceId);
    function clearActiveQuestsAndHeroes();
    function clearActiveQuestsAndHeroesWithOffset(uint256 _offset, uint256 _amount);
    function clearActiveQuestsByType(uint256 _questInstanceId, uint8 _level, uint8 _type);
    function cancelQuest(uint256 _heroId);
    function completeQuest(uint256 _heroId);
    function multiCompleteQuest(uint256[] _heroIds);
    function multiStartQuest(uint256[][] _heroIds, uint256[] _questInstanceId, uint8[] _attempts, uint8[] _level, uint8[] _type);
    function startQuest(uint256[] _heroIds, uint256 _questInstanceId, uint8 _attempts, uint8 _level, uint8 _type);

    // State-Changing Functinos - Expeditions
    function cancelExpedition(uint256 _expeditionId);
    function extendExpedition(uint256 _expeditionId, uint24 _additionalIterations) payable;
    function multiCancelExpedition(uint256[] _expeditionIds);
    function multiProcessExpeditionClaim(uint256[] _expeditionIds);
    function multiProcessExpeditionClaimWithCustomIterationCap(uint256[] _expeditionIds, uint24[] _requestedIterations);
    function multiStartExpeditionClaim(uint256[] _expeditionIds);
    function processExpeditionClaim(uint256 _expeditionId);
    function processExpeditionClaimWithCustomIterationCap(uint256 _expeditionId, uint24 _requestedIterations);
    function startExpedition(tuple(uint256[] heroIds, uint256 questInstanceId, uint8 attempts, uint8 level, uint8 questType, uint24 iterations, uint16 staminaPotions, uint8 petFoodType) _inputs) payable;
    function startExpeditionClaim(uint256 _expeditionId);

    // View Functions - Quests/General
    function getAccountActiveQuests(address _account) view returns (tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType)[]);
    function getCurrentStamina(uint256 _heroId) view returns (uint256);
    function getCurrentStaminaForMultiple(uint256[] _heroIds) view returns (uint256[]);
    function getFormattedQuestAddress(uint8 _format, uint8 _instanceId, uint8 _level, uint8 _type) pure returns (address);
    function getHeroQuest(uint256 heroId) view returns (tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType));
    function getQuestInstanceIds() view returns (uint256[]);
    function heroToQuest(uint256 _heroId) view returns (uint256);
    function quests(uint256 _id) view returns (tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType));
    function timePerStamina() view returns (uint256);

    // View Functions - Expeditions
    function getRequiredFeeForExtension(uint256 _expeditionId, uint24 _additionalIterations) view returns (uint256);
    function getRequiredTreatsForExtension(uint256 _expeditionId, uint24 _additionalIterations) view returns (uint256);
    function getAccountExpeditionIds(address _playerAddress) view returns (uint256[]);
    function getAccountExpeditionIdsWithOffset(uint256 _offset, uint256 _amount, address _playerAddress) view returns (uint256[]);
    function getAccountExpeditions(address _playerAddress) view returns (tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina)[]);
    function getAccountExpeditionsCounts(address _playerAddress) view returns (uint256);
    function getAccountExpeditionsWithAssociatedQuests(address _playerAddress) view returns (tuple(uint256 expeditionId, tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina) expedition, tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType) quest, uint256 escrowedFee, uint8 foodType)[]);
    function getAccountExpeditionsWithAssociatedQuestsWithOffset(uint256 _offset, uint256 _amount, address _playerAddress) view returns (tuple(uint256 expeditionId, tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina) expedition, tuple(uint256 id, uint256 questInstanceId, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status, uint8 questType) quest, uint256 escrowedFee, uint8 foodType)[]);
    function getAccountExpeditionsWithOffset(uint256 _offset, uint256 _amount, address _playerAddress) view returns (tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina)[]);
    function getEstimatedExpeditionCompletionTime(uint256 _expeditionId) view returns (uint64);
    function getExpedition(uint256 _id) view returns (tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina));
    function getExpeditionEscrowedFee(uint256 _expeditionId) view returns (uint256);
    function getExpeditionGardeningPoolCounts(address _account, uint8 _questType) view returns (tuple(uint8 questLength, uint8 count));
    function getExpeditionTokenMiningCounts(address _account) view returns (tuple(uint8 questLength, uint8 count));
    function getExpeditionHeroData(uint256 _heroId) view returns (tuple(uint8 heroSettings, uint16 statScores, uint16 professionSkill, uint16 luck, uint8 foodType, uint8 eggType, uint8 rarity, uint8 professionBonus, uint8 scalar, uint8 level, uint64 petHungryAt, uint32 xp));
    function getHeroExpedition(uint256 _heroId) view returns (tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina));
    function getHeroesExpeditions(uint256[] _heroIds) view returns (tuple(uint40 lastClaimedAt, uint24 iterationsToProcess, uint24 remainingIterations, uint16 escrowedPetTreats, uint32 escrowedStaminaPotions, uint16 globalSettings, uint40 iterationTime, uint40 claimStartBlock, uint24 feePerStamina)[]);
    function getIterationDuration(tuple(uint256[] heroIds, uint256 questInstanceId, uint8 attempts, uint8 level, uint8 questType, uint24 iterations, uint16 staminaPotions, uint8 petFoodType) _inputs) view returns (uint256);
    function getIterationDurationForCurrentExpedition(uint256 _expeditionId) view returns (uint64);
    function getNextIterationStartTime(uint256 _expeditionId) view returns (uint64);
    function getRequiredFee(tuple(uint256[] heroIds, uint256 questInstanceId, uint8 attempts, uint8 level, uint8 questType, uint24 iterations, uint16 staminaPotions, uint8 petFoodType) _inputs) view returns (uint256);
    function getRequiredTreats(tuple(uint256[] heroIds, uint256 questInstanceId, uint8 attempts, uint8 level, uint8 questType, uint24 iterations, uint16 staminaPotions, uint8 petFoodType) _inputs) view returns (uint64);
    function getTotalExpeditionDuration(tuple(uint256[] heroIds, uint256 questInstanceId, uint8 attempts, uint8 level, uint8 questType, uint24 iterations, uint16 staminaPotions, uint8 petFoodType) _inputs) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/QuestCoreV3DiamondExpeditionsCondensed.json" %}

## Types

### Quest

The primary struct for a Quest that has been created on the contract.

```solidity
struct Quest {
    uint256 id;
    uint256 questInstanceId;
    uint8 level;
    uint256[] heroes;
    address player;
    uint256 startBlock;
    uint256 startAtTime;
    uint256 completeAtTime;
    uint8 attempts;
    QuestStatus status;
    uint8 questType;
}
```

<table><thead><tr><th width="207">Name</th><th width="166">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>id</code></strong></td><td><code>uint256</code></td><td>The unique <code>id</code> of the Quest on the contract</td></tr><tr><td><strong><code>questInstanceId</code></strong></td><td><code>uint256</code></td><td>A unique mapping indicating which category of Quest the Heroes are on (e.g. Fishing, Mining, Training). See <a href="#quest-instance">Quest Instance</a>.</td></tr><tr><td><strong><code>level</code></strong></td><td><code>uint8</code></td><td>The skill level of the Quest. Current values include:<br>- Fishing, Foraging, Gardening: <code>0</code> or <code>10</code><br>- Token Mining, Gold Mining: <code>0</code><br>- Training Quests: <code>1</code></td></tr><tr><td><strong><code>heroes</code></strong></td><td><code>uint256[]</code></td><td>An array of the questing <a href="/nfts/heroes.md">Hero</a> <code>id</code>s </td></tr><tr><td><strong><code>player</code></strong></td><td><code>address</code></td><td>The <code>0x</code> address of the wallet creating the Quest</td></tr><tr><td><strong><code>startBlock</code></strong></td><td><code>uint256</code></td><td>The block height at which the Quest was started</td></tr><tr><td><strong><code>startAtTime</code></strong></td><td><code>uint256</code></td><td>The UNIX timestamp at which the Quest was started</td></tr><tr><td><strong><code>completeAtTime</code></strong></td><td><code>uint256</code></td><td>The UNIX timestamp at which the Quest was/will be completed</td></tr><tr><td><strong><code>attempts</code></strong></td><td><code>uint8</code></td><td>The number of Quest attempts that the Heroes will perform</td></tr><tr><td><strong><code>status</code></strong></td><td><a href="#quest-status"><code>QuestStatus</code></a></td><td>The current status of the Quest on the contract</td></tr><tr><td><strong><code>questType</code></strong></td><td><code>uint8</code></td><td>A unique mapping for Quests that have additional varieties, currently including Gardening and Training Quests. See <a href="#quest-type">Quest Type</a>.</td></tr></tbody></table>

### Quest Status

Indicates the current status of the [Quest](#quest) on the contract.

```solidity
enum QuestStatus {
    NONE,
    STARTED,
    COMPLETED,
    CANCELED,
    EXPEDITION
}
```

## Mappings

### Quest Instance

Quests in QuestCore V3 are routed to the correct diamond facets by using **Instance IDs** that are unique to each Quest category. These IDs are also stored in each Hero's `currentQuest` state, padded as an `0x` address (e.g. `0x0000000000000000000000000000000000000001`).

```json
{
  1: "Fishing",
  2: "Foraging",
  3: "Gold Mining",
  4: "Token Mining",
  5: "Gardening",
  6: "Training"
}
```

### Quest Type

For Quests that have additional varieties, the `type` input determines which Quest the Hero is ultimately is sent to. Currently Gardening and Training Quests use these mappings.

#### Gardening Quests

The Quest `type` for Gardening Quests matches the `poolId` of the Garden, as defined [here](/contracts/gardens.md#incentivized-gardens). PID `255` is the Unlimited Gardening Pool for Expeditions only.

#### Training Quests

The Quest `type` for Training Quests uses the following mapping, matching the **stat order used on the** [**HeroCore**](/nfts/heroes.md) **contract**, which is **not the same order as the mapping** used for stat growth and in the [MeditationCircle](/contracts/meditation-circle.md#stat-mappings) and similar contracts.

```json
{
  0: "Strength",
  1: "Intelligence",
  2: "Wisdom",
  3: "Luck",
  4: "Agility",
  5: "Vitality",
  6: "Endurance",
  7: "Dexterity"
}
```
