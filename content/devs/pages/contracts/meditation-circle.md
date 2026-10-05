> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/meditation-circle.md).

# Meditation Circle

## Stat Mappings

The Meditation Circle contract uses the following mappings for stats:

{% hint style="warning" %}
Note that the order of these mappings is different from those found on the [HeroCore](/nfts/heroes.md) contract, which uses `[Str, Int, Wis, Lck, Agi, Vit, End, Dex]` as the canonical order for Hero Stats and Stat Growth values. We hope to align these values in the future.
{% endhint %}

#### Stat Mappings

```json
{
    0: "Strength",
    1: "Agility",
    2: "Intelligence",
    3: "Wisdom",
    4: "Luck",
    5: "Vitality",
    6: "Endurance",
    7: "Dexterity",
    8: "HP",
    9: "MP",
    10: "Stamina"
}
```

#### Stat-Up Update Types

```json
{
    0: "PRIMARY",
    1: "SECONDARY",
    2: "BONUS",
    3: "RARITY",
    4: "HP",
    5: "MP",
    6: "STAMINA",
    7: "PRIMARY_ATTUNEMENT",
    8: "SECONDARY_ATTUNEMENT"
}
```

## Contracts

### Addresses

#### DFK Chain

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| MeditationCircle | `0xD507b6b299d9FC835a0Df92f718920D13fA49B47` | `0xdC95B65914626be8f2dD3d5D0eCD6842a4Dec722` |

#### Klaytn

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| MeditationCircle | `0xdbEE8C336B06f2d30a6d2bB3817a3Ae0E34f4900` | `0x24DEbA3A73ACF76eDCfcafD75683a6064e01E77c` |

### Interfaces

{% hint style="info" %}
The `MeditationBegunWithLevel` event was added on DFK Chain around Block #11268573 and on Klaytn around Block #109509600.
{% endhint %}

```solidity
interface IMeditationCircle {

    // Events
    event AttunementCrystalAdded(address atunementItemAddress);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event LevelUp(address indexed player, uint256 indexed heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) hero, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) oldHero);
    event MeditationBegun(address indexed player, uint256 indexed heroId, uint256 meditationId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal);
    event MeditationBegunWithLevel(address indexed player, uint256 indexed heroId, uint256 meditationId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint16 toLevel);
    event MeditationCompleted(address indexed player, uint256 indexed heroId, uint256 meditationId);
    event MeditationCompletedV2(address indexed player, uint256 indexed heroId, uint256 meditationId, address attunementCrystal, uint16 toLevel);
    event StatUp(address indexed player, uint256 indexed heroId, uint256 stat, uint8 increase, uint8 updateType);
    event StatUpV2(address indexed player, uint256 indexed heroId, uint256 stat, uint8 increase, uint8 updateType, uint16 toLevel);

    // State-Changing Functions
    function completeMeditation(uint256 _heroId);
    function completeMeditations(uint256[] _heroIds);
    function startMeditation(uint256 _heroId, uint8 _primaryStat, uint8 _secondaryStat, uint8 _tertiaryStat, address _attunementCrystal);
    function startMeditationWithLocked(uint256 _heroId, uint8 _primaryStat, uint8 _secondaryStat, uint8 _tertiaryStat, address _attunementCrystal);
    function startMeditations(tuple(uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, bool useLockedTokens)[] _meditations);

    // View Functions
    function _getRequiredRunes(uint16 _level) pure returns (uint16[10]);
    function activeAttunementCrystals(address) view returns (bool);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function getActiveMeditations(address _address) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status)[]);
    function getHeroMeditation(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status));
    function getMeditation(uint256 _id) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status));
    function heroToMeditation(uint256) view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function profileActiveMeditations(address, uint256) view returns (uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status);
    function runes(uint256) view returns (address);
    function tokenUnlockerAddress() view returns (address);
    
}
```

### ABIs

{% file src="/assets/devs/files/MeditationCircleDiamond.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| MeditationCircle | `0x0594D86b2923076a2316EaEA4E1Ca286dAA142C1` | `0x93E0767a1bbA95068cF91dc8fA4D8bAD79290b76` |

### Interfaces

```solidity
interface IMeditationCircle {

    event AttunementCrystalAdded(address atunementItemAddress)
    event LevelUp(address indexed player, uint256 indexed heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) hero, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) oldHero);
    event MeditationBegun(address indexed player, uint256 indexed heroId, uint256 meditationId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal);
    event MeditationCompleted(address indexed player, uint256 indexed heroId, uint256 meditationId);    
    event StatUp(address indexed player, uint256 indexed heroId, uint256 stat, uint8 increase, uint8 updateType);

    function _getRequiredRunes(uint16 _level) external pure returns (uint16[10]);
    function activeAttunementCrystals(address) external view returns (bool);
    function completeMeditation(uint256 _heroId) external;
    function getActiveMeditations(address _address) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status)[]);
    function getHeroMeditation(uint256 _heroId) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status));
    function getMeditation(uint256 _id) view returns (tuple(uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status));
    function heroToMeditation(uint256) external view returns (uint256);
    function paused() external view returns (bool);
    function profileActiveMeditations(address, uint256) external view returns (uint256 id, address player, uint256 heroId, uint8 primaryStat, uint8 secondaryStat, uint8 tertiaryStat, address attunementCrystal, uint256 startBlock, uint8 status);
    function runes(uint256) external view returns (address);
    function startMeditation(uint256 _heroId, uint8 _primaryStat, uint8 _secondaryStat, uint8 _tertiaryStat, address _attunementCrystal) external;

}
```

### ABIs

{% file src="/assets/devs/files/MeditationCircle.json" %}
