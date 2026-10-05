> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/quests/historical-contracts/quest-core.md).

# Quest Core

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### DFK Chain

{% hint style="info" %}
With the release on Gardening Quests on DFK Chain (9/2022), the Quest Fund contracts were upgraded. The previous addresses are listed below.
{% endhint %}

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| QuestCoreV2 | `0xE9AbfBC143d7cef74b5b793ec5907fa62ca53154` | `0xAff49531F126bc1296B2dc7d7460770339CF19D2` |
| Quest Fund  | `0x64a3dc745806d9d6e88ea5555F8fdA65B147A31D` | `0x012D7Fe69F280c0d91802988b960F568Aa8Ad4A0` |

#### Klaytn

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| QuestCoreV2 | `0x8dc58d6327E1f65b18B82EDFb01A361f3AAEf624` | `0x542a3903c7F2dD47a7F31b08Bd1C6791e3C43784` |

#### Harmony

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| QuestCoreV2   | `0xAa9a289ce0565E4D6548e63a441e7C084E6B52F6` | `0x359C91d97a8859619f31E2E8A6294B3607053Ad7` |
| QuestCoreV1   | `0x5100Bd31b822371108A0f63DCFb6594b9919Eaf4` | `0x13e4818A1433A7B63f228266d9d5e5c42B015ba5` |
| QuestRewarder | `0x71BCF4EB2FEb164a177184a71715d18989CB15Ef` | `0xc68fcCEB712Cc21547b9F4749C6a7307303dc803` |
| Quest Fund    | `0x5cA5bcd91929c7152ca577e8c001C9b5a185F568` | `0x64d42015b09B88280e6376D9B4C7F442DEDA5a33` |

### Interfaces

#### QuestCoreV2.3

```solidity
interface IQuestCoreV2.3 {

    event QuestCanceled(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address questAddress, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status) quest);
    event QuestCompleted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address questAddress, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status) quest);
    event QuestReward(uint256 indexed questId, address indexed player, uint256 heroId, address rewardItem, uint256 itemQuantity);
    event QuestSkillUp(uint256 indexed questId, address indexed player, uint256 heroId, uint8 profession, uint16 skillUp);
    event QuestStaminaSpent(uint256 indexed questId, address indexed player, uint256 heroId, uint256 staminaFullAt, uint256 staminaSpent);
    event QuestStarted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address questAddress, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status) quest, uint256 startAtTime, uint256 completeAtTime);
    event QuestXP(uint256 indexed questId, address indexed player, uint256 heroId, uint64 xpEarned);
    event QuickStudy(uint256 indexed questId, address indexed player, uint256 heroId, uint256 xpBefore, uint256 xpAfter, uint256 percentage);
    event RewardMinted(uint256 indexed questId, address indexed player, uint256 heroId, address indexed reward, uint256 amount, uint256 data);
    event TokenBonusAwarded(uint256 indexed questId, address indexed player, uint256 heroId, uint256 amount);
    event TrainingAttemptDone(bool success, uint256 attempt, uint256 indexed heroId);
    event TrainingSuccessRatio(uint256 winCount, uint256 attempts, uint256 indexed heroId);
    
    function cancelQuest(uint256 _heroId);
    function clearActiveQuests(address _questAddress);
    function clearActiveQuestsAndHeroes();
    function clearActiveQuestsAndHeroesWithOffset(uint256 _offset, uint256 _amount);
    function completeQuest(uint256 _heroId);
    function getAccountActiveQuests(address _account) view returns (tuple(uint256 id, address questAddress, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status)[]);
    function getCurrentStamina(uint256 _heroId) view returns (uint256);
    function getHeroQuest(uint256 heroId) view returns (tuple(uint256 id, address questAddress, uint8 level, uint256[] heroes, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status));
    function getQuestContracts() view returns (address[]);
    function heroCore() view returns (address);
    function heroToQuest(uint256) view returns (uint256);
    function isQuest(address) view returns (bool);
    function multiCompleteQuest(uint256[] _heroIds);
    function multiStartQuest(address[] _questAddress, uint256[][] _heroIds, uint8[] _attempts, uint8[] _level);
    function paused() view returns (bool);
    function questCounter() view returns (uint256);
    function questLib() view returns (address);
    function questRewarder() view returns (address);
    function quests(uint256) view returns (uint256 id, address questAddress, uint8 level, address player, uint256 startBlock, uint256 startAtTime, uint256 completeAtTime, uint8 attempts, uint8 status);
    function startQuest(uint256[] _heroIds, address _questAddress, uint8 _attempts, uint8 _level);
    function timePerStamina() view returns (uint256);

}
```

#### QuestCoreV2.0 (Harmony)

{% hint style="warning" %}
With the release of Quests on DFK Chain (7/2022), the QuestCore contract underwent a minor upgrade to V2.1 that impacted the `QuestStarted` event logs. This change took place on Harmony around Block #28840730. The contract address did not change as part of this upgrade.

The V2.0 version of the `QuestStarted` event is shown below.
{% endhint %}

```solidity
interface IQuestCoreV2 {

  event QuestStarted(
    uint256 indexed questId, 
    address indexed player, 
    uint256 indexed heroId, 
    tuple(
      uint256 id, 
      address questAddress, 
      uint8 level, 
      uint256[] heroes, 
      address player, 
      uint256 startBlock, 
      uint256 startAtTime, 
      uint256 completeAtTime, 
      uint8 attempts, 
      uint8 status
    ) quest
  );

}
```

#### QuestCoreV1 (Harmony)

```solidity
interface IQuestCoreV1 {

  event QuestAdded(uint256 indexed questTypeId, address indexed questAddress, tuple(uint256 id, address quest, uint8 status, uint8 minHeroes, uint8 maxHeroes, uint256 level, uint8 maxAttempts) questType);
  event QuestCanceled(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) quest);
  event QuestCompleted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) quest);
  event QuestReward(uint256 indexed questId, address indexed player, uint256 heroId, address rewardItem, uint256 itemQuantity);
  event QuestSkillUp(uint256 indexed questId, address indexed player, uint256 heroId, uint8 profession, uint16 skillUp);
  event QuestStaminaSpent(uint256 indexed questId, address indexed player, uint256 heroId, uint256 staminaFullAt, uint16 staminaSpent);
  event QuestStarted(uint256 indexed questId, address indexed player, uint256 indexed heroId, tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) quest);
  event QuestUpdated(uint256 indexed questTypeId, address indexed questAddress, tuple(uint256 id, address quest, uint8 status, uint8 minHeroes, uint8 maxHeroes, uint256 level, uint8 maxAttempts) questType);
  event QuestXP(uint256 indexed questId, address indexed player, uint256 heroId, uint64 xpEarned);
  
  function adminClearActiveQuests(address _profile, address _questAddress);
  function cancelQuest(uint256 _heroId);
  function cleanQuests();
  function completeQuest(uint256 _heroId);
  function getActiveQuests(address _address) view returns (tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status)[]);
  function getCurrentStamina(uint256 _heroId) view returns (uint256);
  function getFutureStamina(uint256 _heroId, uint256 _timestamp) view returns (uint256);
  function getGeneBonus(uint256 _genes, uint8 _pos, uint8 _val) returns (uint64);
  function getHero(uint256 _heroId) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions));
  function getHeroQuest(uint256 _heroId) view returns (tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status));
  function getQuest(uint256 _id) view returns (tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status));
  function getQuestData(uint256 _questId) view returns (tuple(uint256 uint1, uint256 uint2, uint256 uint3, uint256 uint4, int256 int1, int256 int2, string string1, string string2, address address1, address address2, address address3, address address4));
  function heroToQuest(uint256) view returns (uint256);
  function logReward(tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) _quest, uint256 _heroId, tuple(address item, int64 expBonus, int64 skillUpChance, int64 smallSkillUpMod, int64 mediumSkillUpMod, int64 largeSkillUpMod, int64 baseChance, int64 skillMod, int64 statMod, int64 luckMod) _reward, uint256 _quantity);
  function logSkillUp(tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) _quest, uint256 _heroId, uint8 _profession, uint16 _skillUp);
  function logXp(tuple(uint256 id, address quest, uint256[] heroes, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status) _quest, uint256 _heroId, uint64 _xpEarned);
  function paused() view returns (bool);
  function profileActiveQuests(address, uint256) view returns (uint256 id, address quest, address player, uint256 startTime, uint256 startBlock, uint256 completeAtTime, uint8 attempts, uint8 status);
  function questAddressToType(address) view returns (uint256);
  function questTypes(uint256) view returns (uint256 id, address quest, uint8 status, uint8 minHeroes, uint8 maxHeroes, uint256 level, uint8 maxAttempts);
  function saveQuestData(uint256 _questId, tuple(uint256 uint1, uint256 uint2, uint256 uint3, uint256 uint4, int256 int1, int256 int2, string string1, string string2, address address1, address address2, address address3, address address4) _questData);
  function startQuest(uint256[] _heroIds, address _questAddress, uint8 _attempts);
  function startQuestWithData(uint256[] _heroIds, address _questAddress, uint8 _attempts, tuple(uint256 uint1, uint256 uint2, uint256 uint3, uint256 uint4, int256 int1, int256 int2, string string1, string string2, address address1, address address2, address address3, address address4) _questData);
  function timePerStamina() view returns (uint256);
  function updateHero(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero);
  function updateQuestType(address _questAddress, uint8 _status);

}
```

### ABIs

{% file src="/assets/devs/files/QuestCoreUpgradeable.json" %}

{% file src="/assets/devs/files/QuestCoreV2.2.json" %}

{% file src="/assets/devs/files/QuestCoreV2.1.json" %}

{% file src="/assets/devs/files/QuestCore.json" %}

{% file src="/assets/devs/files/QuestCoreV1.json" %}
