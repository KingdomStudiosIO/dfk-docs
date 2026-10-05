> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/events/gen0-reroll.md).

# Gen0 Reroll

## Stat Mappings

The Gen0 Reroll contract uses the following mappings for stats:

{% hint style="warning" %}
Note that the order of these mappings is different from those found on the [HeroCore](/nfts/heroes.md) contract, which uses `[Str, Int, Wis, Lck, Agi, Vit, End, Dex]` as the canonical order for Hero Stats and Stat Growth values. We hope to align these values in the future.
{% endhint %}

```json
{
    0: "Strength",
    1: "Agility",
    2: "Intelligence",
    3: "Wisdom",
    4: "Luck",
    5: "Vitality",
    6: "Endurance",
    7: "Dexterity"
}
```

## Contracts

### Addresses

#### DFK Chain

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| Gen0 Reroll | `0x51577EC9644853c5d1B99d5045C133BBfa9a6a60` | `0xbf9AD3451955EAf8D0E1Bf0b34DdF8A9efd4027F` |

### Interfaces

{% hint style="info" %}
The `HeroRerollStarted` event was added for DFK Chain, and is not present in the Harmony Contract.
{% endhint %}

```solidity
interface IGen0Reroll {

    event HeroReroll(uint256 indexed heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) heroBefore, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) heroAfter, uint8 indexed choice);
    event HeroRerollStarted(uint256 indexed heroId, uint8 indexed choice);
    event RewardMinted(address indexed player, uint256 indexed heroId, address indexed rewardAddress, uint256 amount);
    event StatUp(address indexed player, uint256 indexed heroId, uint256 indexed stat, uint8 increase, uint8 updateType);
    event SummonsReset(uint256 indexed heroId, uint32 oldSummonCount, uint32 newSummonCount);
    event XpUp(address indexed player, uint256 indexed heroId, uint256 increase);
    
    function campaign() view returns (uint256);
    function cancelReroll(uint256 _heroId);
    function crystals(uint256) view returns (address);
    function endRoll(uint256 _heroId);
    function endTime() view returns (uint256);
    function heroToRerollData(uint256) view returns (uint256 campaign, uint256 seedblock, uint8 choice, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) beforeHero, uint8 status, uint256 finishTime);
    function initialize(uint256 _startTime, uint256 _endTime, address _heroCoreAddress, address _statScienceAddress, address _flagStorageAddress, address _assistingAuction, address _rerollModifier);
    function startRoll(uint256 _heroId, uint8 _choice);
    function startTime() view returns (uint256);
    function stones(uint256) view returns (address);

}
```

### ABIs

{% file src="/files/HUSTEnNCcbCIqbjPzSyR" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| Gen0 Reroll | `0x74934378840D77E36AeF1f031D301549b4e1a225` | `0x25F67e57349AF9CcC188D8F5e1f64363c8A0973f` |
