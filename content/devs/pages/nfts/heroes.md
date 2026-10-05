> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/heroes.md).

# Heroes

{% hint style="info" %}
**ERC721:** The HeroCore contract is based on the ERC721 standard. For more detailed information please view the documentation by OpenZeppelin. <https://docs.openzeppelin.com/contracts/4.x/erc721>
{% endhint %}

## Contracts

{% hint style="warning" %}
The **HeroCore** contract was upgraded to an ERC2535 Diamond in May 2023 with the addition of new items to the Hero struct. At this time, methods and events using the new struct began to migrate to V2 versions. Legacy methods have been left in place, but will not return the new data.

In December 2023, the Hero struct and HeroEquipment structs were upgraded to V3 and V2 versions, respectively. Legacy methods remain in place.

The contract addresses did not change during these upgrades.
{% endhint %}

{% hint style="info" %}
The Hero contract on Metis uses a separate ABI and interface. See [HeroV4](https://app.gitbook.com/o/-MfzWIcQKNVkQQhxiNQM/s/lZLlRJsOJCqm10zUsKr6/~/changes/146/nfts/heroes/herov4-metis) for details.
{% endhint %}

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0xEb9B61B145D6489Be575D3603F4a704810e143dF` | `0x3bcaCBeAFefed260d877dbE36378008D4e714c8E` |
| Klaytn    | `0x268CC8248FFB72Cd5F3e73A9a20Fa2FF40EfbA61` | `0x38bDed7C399bbD214a19De35260766b130cAFd2F` |
| Metis     | `0xc7681698B14a2381d9f1eD69FC3D27F33965b53B` | `0xb2bC817C100a6bd60e8bf8a79dBAD607cE9C3cF2` |

### Interfaces

```solidity
interface IHeroCoreDiamond {

    // Events
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event HeroDarkSummoned(address indexed owner, uint256 heroId, uint256 summonerId, uint256 assistantId, uint256 statGenes, uint256 visualGenes);
    event HeroEquipmentSet(uint256 indexed heroId, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment);
    event HeroEquipmentSetV2(uint256 indexed heroId, tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment);
    event HeroQuestCompleteUpdated(address indexed owner, uint256 heroId, uint256 staminaFullAt, uint64 xp, uint16 fishing, uint16 foraging, uint16 gardening, uint16 mining);
    event HeroQuestUpdated(address indexed owner, uint256 heroId, address quest);
    event HeroStaminaFullAtUpdated(address indexed owner, uint256 heroId, uint256 staminaFullAt);
    event HeroStateUpdated(address indexed owner, uint256 heroId, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) heroState);
    event HeroSummoned(address indexed owner, uint256 heroId, uint256 summonerId, uint256 assistantId, uint256 statGenes, uint256 visualGenes);
    event HeroUpdated(address indexed owner, uint256 heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) hero);
    event HeroUpdatedV2(address indexed owner, uint256 heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) hero);
    event HeroUpdatedV3(address indexed owner, uint256 heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment) hero);
    event PetEquipped(uint256 indexed heroId, uint256 indexed petId);
    event PetUnequipped(uint256 indexed heroId, uint256 indexed petId);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    
    // View Methods
    function accessoryCoreAddress() view returns (address);
    function armorCoreAddress() view returns (address);
    function balanceOf(address owner) view returns (uint256);
    function getApproved(uint256 tokenId) view returns (address);
    function isApprovedForAll(address owner, address operator) view returns (bool);
    function name() view returns (string);
    function nextHeroId() view returns (uint256);
    function ownerOf(uint256 tokenId) view returns (address);
    function paused() view returns (bool);
    function petCoreAddress() view returns (address);
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function weaponCoreAddress() view returns (address);

    // Hero Getters
    function getHero(uint256 _id) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions));
    function getHeroV2(uint256 _id) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment));
    function getHeroV3(uint256 _id) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment));        
    function getHeroesV2(uint256[] _ids) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment)[]);
    function getHeroesV3(uint256[] _ids) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment)[]);        
    function getHeroDuelInfo(uint256 _id, uint8 _stat) view returns (tuple(uint16 statValue, uint8 class, uint8 subClass, uint8 element, uint8 background) heroDuelInfo);
    function getHeroDuelInfos(uint256[] _ids, uint8[] _stats) view returns (tuple(uint16 statValue, uint8 class, uint8 subClass, uint8 element, uint8 background)[] heroDuelInfos);
    function getHeroDuelSnapshot(uint256 _id) view returns (tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) heroDuelSnapshot);
    function getHeroDuelSnapshots(uint256[] _ids) view returns (tuple(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, uint8 class, uint8 subClass, uint8 element, uint8 background, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment)[] heroDuelSnapshots);      
    function getHeroEquipment(uint256 _id) view returns (tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId));
    function getHeroEquipmentV2(uint256 _id) view returns (tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId));
    function getHeroInfo(uint256 _id) view returns (tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass));
    function getHeroPrimaryStatGrowth(uint256 _id) view returns (tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg));
    function getHeroProfessionsV2(uint256 _id) view returns (tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2));
    function getHeroSecondaryStatGrowth(uint256 _id) view returns (tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg));
    function getHeroState(uint256 _id) view returns (tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status));
    function getHeroStats(uint256 _id) view returns (tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina));
    function getHeroSummoningInfo(uint256 _id) view returns (tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons));
    function getUserHeroes(address _address) view returns (uint256[]);
    function heroesAreOwnedByAddress(uint256[] _heroIds, address _address) view returns (bool);
    
    // State-Changing Functions
    function approve(address to, uint256 tokenId);
    function changeEquipment(tuple(uint256 heroId, uint256 equipmentId, uint8 slot) _input);
    function multiChangeEquipment(tuple(uint256 heroId, uint256 equipmentId, uint8 slot)[] _inputs);
    function multiSafeTransferFrom(address _from, address _newOwner, uint256[] heroIds);
    function multiTransferHeroAndEquipmentFrom(address _from, address _newOwner, uint256[] heroIds);
    function safeTransferFrom(address from, address to, uint256 tokenId);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data);
    function transferFrom(address from, address to, uint256 tokenId);
    function transferHeroAndEquipmentFrom(address _from, address _newOwner, uint256 _heroId);
    
}
```

### ABIs

{% file src="/files/fNWElIqLj8vOguFdcnAH" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name     | Mainnet                                      | Testnet                                      |
| -------- | -------------------------------------------- | -------------------------------------------- |
| HeroCore | `0x5F753dcDf9b1AD9AabC1346614D1f4746fd6Ce5C` | `0xC57971c3EC0Fc2450FC5CC9c4398ac08ff09e6ED` |

### Interfaces

```solidity
interface IHeroCore {

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event HeroDarkSummoned(address indexed owner, uint256 heroId, uint256 summonerId, uint256 assistantId, uint256 statGenes, uint256 visualGenes);
    event HeroSummoned(address indexed owner, uint256 heroId, uint256 summonerId, uint256 assistantId, uint256 statGenes, uint256 visualGenes);
    event HeroUpdated(address indexed owner, uint256 heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) hero);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    
    function approve(address to, uint256 tokenId);
    function balanceOf(address owner) view returns (uint256);
    function bridgeMint(uint256 _id, address _to);
    function createHero(uint256 _statGenes, uint256 _visualGenes, uint8 _rarity, bool _shiny, tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address enhancementStone, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle, bool darkSummoned, uint8 rarityBonusCharges) _crystal, uint256 _crystalId) returns (uint256);
    function getApproved(uint256 tokenId) view returns (address);
    function getHero(uint256 _id) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions));
    function getUserHeroes(address _address) view returns (uint256[]);
    function heroes(uint256) view returns (uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions);
    function isApprovedForAll(address owner, address operator) view returns (bool);
    function name() view returns (string);
    function nextHeroId() view returns (uint256);
    function ownerOf(uint256 tokenId) view returns (address);
    function paused() view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data);
    function setApprovalForAll(address operator, bool approved)
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function transferFrom(address from, address to, uint256 tokenId);
    function updateHero(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero)

}
```

### ABIs

{% file src="/files/6fr6vq6UHKhYYdTo8Cxw" %}

## Data Tables

Use these tables to parse the blockchain and API Hero data.

### Hero Info

#### Class

```json
{
    0: "Warrior",
    1: "Knight",
    2: "Thief",
    3: "Archer",
    4: "Priest",
    5: "Wizard",
    6: "Monk",
    7: "Pirate",
    8: "Berserker",
    9: "Seer",
    10: "Legionnaire",
    11: "Scholar",
    16: "Paladin",
    17: "DarkKnight",
    18: "Summoner",
    19: "Ninja",
    20: "Shapeshifter",
    21: "Bard",
    24: "Dragoon",
    25: "Sage",
    26: "SpellBow",
    28: "DreadKnight"
}
```

#### Rarity

```json
{
    0: "Common",
    1: "Uncommon",
    2: "Rare",
    3: "Legendary",
    4: "Mythic"
}
```

#### Profession

```json
{
    0: "Mining",
    2: "Gardening",
    4: "Fishing",
    6: "Foraging"
}
```

#### Stats

{% hint style="warning" %}
The mapping below is currently used for the `StatBoost` genes and is the same order (but not mapping) in other contracts modifying Hero stats ([MeditationCircle](/contracts/meditation-circle.md), [Gen0Reroll](/contracts/events/gen0-reroll.md), etc.). Technically, this is a bug, as the Hero contract itself uses `[Str, Int, Wis, Lck, Agi, Vit, End, Dex]` as the canonical order for Hero Stats and Stat Growth values. We hope to align these values in the future.
{% endhint %}

```json
{
    0: "Strength",
    2: "Agility",
    4: "Intelligence",
    6: "Wisdom",
    8: "Luck",
    10: "Vitality",
    12: "Endurance",
    14: "Dexterity"
}
```

### Stat Traits

#### Stat Traits

```json
{
    0: "Class",
    1: "SubClass",
    2: "Profession",
    3: "Passive1",
    4: "Passive2",
    5: "Active1",
    6: "Active2",
    7: "StatBoost1",
    8: "StatBoost2",
    9: "Crafting1",
    10: "Element",
    11: "Crafting2"
}
```

#### Active/Passive Ability

```json
{
    0: "Basic1",
    1: "Basic2",
    2: "Basic3",
    3: "Basic4",
    4: "Basic5",
    5: "Basic6",
    6: "Basic7",
    7: "Basic8",
    16: "Advanced1",
    17: "Advanced2",
    18: "Advanced3",
    19: "Advanced4",
    24: "Elite1",
    25: "Elite2",
    28: "Exalted1"
}
```

#### Element

```json
{
    0: "Fire",
    2: "Water",
    4: "Earth",
    6: "Wind",
    8: "Lightning",
    10: "Ice",
    12: "Light",
    14: "Dark"
}
```

#### Crafting

```json
{
    0: "Blacksmithing",
    2: "Goldsmithing",
    4: "Armorsmithing",
    6: "Woodworking",
    8: "Leatherworking",
    10: "Tailoring",
    12: "Enchanting",
    14: "Alchemy"
}
```

### Visual Traits

#### Visual Traits

```json
{
    0: "Gender",
    1: "HeadAppendage",
    2: "BackAppendage",
    3: "Background",
    4: "HairStyle",
    5: "HairColor",
    6: "VisualUnknown1",
    7: "EyeColor",
    8: "SkinColor",
    9: "AppendageColor",
    10: "BackAppendageColor",
    11: "VisualUnknown2"
}
```

#### Gender

```json
{
    1: "Male",
    3: "Female"
}
```

#### Head Appendage

```json
{
    0: "None",
    1: "Kitsune Ears",
    2: "Satyr Horns",
    3: "Ram Horns",
    4: "Imp Horns",
    5: "Cat Ears",
    6: "Minotaur Horns",
    7: "Faun Horns",
    8: "Draconic Horns",
    9: "Fae Circlet",
    10: "Ragfly Antennae",
    11: "Royal Crown",
    16: "Jagged Horns",
    17: "Spindle Horns",
    18: "Bear Ears",
    19: "Antennae",
    20: "Fallen Angel Coronet",
    21: "Power Horn",
    24: "Wood Elf Ears",
    25: "Snow Elf Ears",
    26: "Cranial Wings",
    28: "Insight Jewel"
}
```

#### Back Appendage

```json
{
    0: "None",
    1: "Monkey Tail",
    2: "Cat Tail",
    3: "Imp Tail",
    4: "Minotaur Tail",
    5: "Daishō",
    6: "Kitsune Tail",
    7: "Zweihänder",
    8: "Skeletal Wings",
    9: "Skeletal Tail",
    10: "Afflicted Spikes",
    11: "Traveler's Pack",
    16: "Gryphon Wings",
    17: "Draconic Wings",
    18: "Butterfly Wings",
    19: "Phoenix Wings",
    20: "Fallen Angel",
    21: "Crystal Wings",
    24: "Aura of the Inner Grove",
    25: "Ancient Orbs",
    26: "Arachnid Legs",
    28: "Cecaelia Tentacles"
}
```

#### Background

```json
{
    0: "Desert",
    2: "Forest",
    4: "Plains",
    6: "Island",
    8: "Swamp",
    10: "Mountains",
    12: "City",
    14: "Arctic"
}
```

#### Hair Style

```json
{
  "male": {
    0: "Battle Hawk",
    1: "Wolf Mane",
    2: "Enchanter",
    3: "Wild Growth",
    4: "Pixel",
    5: "Sunrise",
    6: "Bouffant",
    7: "Agleam Spike",
    8: "Wayfinder",
    9: "Faded Topknot",
    10: "Side Shave",
    11: "Ronin",
    16: "Gruff",
    17: "Rogue Locs",
    18: "Stone Cold",
    19: "Zinra's Tail",
    20: "Hedgehog",
    21: "Delinquent",
    24: "Skegg",
    25: "Shinobi",
    26: "Sanjo",
    28: "Perfect Form"
  },
  
  "female": {
    0: "Windswept",
    1: "Fauna",
    2: "Enchantress",
    3: "Pineapple Top",
    4: "Pixie",
    5: "Darkweave Plait",
    6: "Dejanira",
    7: "Courtly Updo",
    8: "Centaur Tail",
    9: "Lamia",
    10: "Casual Ponytail",
    11: "Wild Ponytail",
    16: "Vogue Locs",
    17: "Twin Vine Loops",
    18: "Sweeping Willow",
    19: "Odango",
    20: "Goddess Locks",
    21: "Lioness",
    24: "Ethereal Waterfall",
    25: "Kunoichi",
    26: "Bowlcut",
    28: "Lunar Light Odango"
  }
}
```

#### Hair Color

```json
{
    0: "#ab9159",
    1: "#af3853",
    2: "#578761",
    3: "#068483",
    4: "#48321e",
    5: "#66489e",
    6: "#ca93a7",
    7: "#62a7e6",
    8: "#c34b1e",
    9: "#326988",
    10: "#513f4f",
    11: "#d48b41",
    16: "#d7bc65",
    17: "#9b68ab",
    18: "#8d6b3a",
    19: "#566377",
    20: "#275435",
    21: "#77b23c",
    24: "#880016",
    25: "#353132",
    26: "#dbfbf5",
    28: "#8f9bb3"
}
```

#### Eye Color

```json
{
    0: "#203997",
    2: "#896693",
    4: "#bb3f55",
    6: "#0d7634",
    8: "#8d7136",
    10: "#613d8a",
    12: "#2494a2",
    14: "#a41e12"
}
```

#### Skin Color

```json
{
    0: "#c58135",
    2: "#f1ca9e",
    4: "#985e1c",
    6: "#57340c",
    8: "#e6a861",
    10: "#7b4a11",
    12: "#e5ac91",
    14: "#aa5c38",
    16: "#7db44f", // Limited: "Plague-Touched"
    18: "#7786b8" // Limited: "Void-Touched"
}
```

#### Appendage Color

The mappings are the same for both `HeadAppendageColor` and `BackAppendageColor`.

```json
{ 
    0: "#c5bfa7",
    1: "#a88b47",
    2: "#58381e",
    3: "#566f7d",
    4: "#2a386d",
    5: "#3f2e40",
    6: "#830e18",
    7: "#6f3a3c",
    8: "#cddef0",
    9: "#df7126",
    10: "#835138",
    11: "#86a637",
    16: "#6b173c",
    17: "#a0304d",
    18: "#78547c",
    19: "#352a51",
    20: "#147256",
    21: "#cf7794",
    24: "#c29d35",
    25: "#211f1f",
    26: "#77b5cf",
    28: "#d7d7d7"
}
```

### Equipment

The Equipment slot enum used to equip and unequip equipment is as follows:

```solidity
enum HeroEquipmentSlot {
    NONE,
    PET,
    PREMIUM_PET,
    WEAPON1,
    WEAPON2,
    OFFHAND1,
    OFFHAND2,
    ARMOR,
    ACCESSORY,
    WEAPON1_VISAGE,
    WEAPON2_VISAGE,
    OFFHAND1_VISAGE,
    OFFHAND2_VISAGE,
    ARMOR_VISAGE,
    ACCESSORY_VISAGE
}
```

### Names

{% file src="/files/sbCKkuLpcRJ1uXrqxUOC" %}

{% file src="/files/HmeQcLJO6k7Qf81uL6o5" %}

{% file src="/files/9KxZEKZZuFA0ul8bvQlD" %}

## Related Contracts

{% content-ref url="/pages/VQipJ4xZiNKOTwnyWJpf" %}
[Hero Summoning](/contracts/summoning/hero-summoning.md)
{% endcontent-ref %}

{% content-ref url="/pages/xV0olsFwR7e0EhC0FiRB" %}
[Hero Auction](/contracts/sales-and-rentals/hero-auction.md)
{% endcontent-ref %}

{% content-ref url="/pages/ldDsli8fdYLq1cIxkUoW" %}
[Meditation Circle](/contracts/meditation-circle.md)
{% endcontent-ref %}

{% content-ref url="/pages/YEcxiXRb3Xtu7SYZb28w" %}
[Flag Storage](/contracts/miscellaneous/flag-storage.md)
{% endcontent-ref %}
