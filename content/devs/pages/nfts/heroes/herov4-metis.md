> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/heroes/herov4-metis.md).

# HeroV4 (Metis)

The Hero contract on Metis uses a separate ABI and interface for Heroes, that is significantly compressed from what is available on other chains.

Additionally, this Diamond contract is bundled with other functions for [PVP Combat](/contracts/pvp-combat.md), the [Influence/Spectating](/contracts/influence-system.md) system, Patrols, and [Meditations](/contracts/meditation-circle.md).

{% hint style="info" %}
While many of the functions and events on this Diamond use the same interface as the standard HeroCore contract, some getters and events on this contract are emitted as packed bits and must be unpacked in order to read their data.
{% endhint %}

## Contract

### Addresses

| Name  | Mainnet                                      | Testnet                                      |
| ----- | -------------------------------------------- | -------------------------------------------- |
| Metis | `0xc7681698B14a2381d9f1eD69FC3D27F33965b53B` | `0xb2bC817C100a6bd60e8bf8a79dBAD607cE9C3cF2` |

### Interfaces

```solidity
interface IHeroV4 {
    // HEROCORE BASE
    // Events
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event HeroArrived(uint256 indexed heroId, uint256 arrivalChainId);
    event HeroCreatedV4(address indexed owner, uint256 indexed heroId, tuple(uint256 heroV4Pt1, uint256 heroV4Pt2, uint256 heroV4Pt3, uint256 heroV4Pt4, uint256 heroV4Pt5) hero);
    event HeroLZBridgeReceived(uint32 srcEid, bytes32 sender, address receiver, uint256 heroId);
    event HeroLZBridgeSent(uint32 dstEid, address sender, address receiver, uint256 heroId);
    event HeroSent(uint256 indexed heroId, uint256 arrivalChainId);
    event HeroUpdatedV4(uint256 indexed heroId, tuple(uint256 heroV4Pt1, uint256 heroV4Pt2, uint256 heroV4Pt3, uint256 heroV4Pt4, uint256 heroV4Pt5) hero);
    event HeroUpdatedV4Pt1(uint256 indexed heroId, uint256 heroPt1);
    event HeroUpdatedV4Pt2(uint256 indexed heroId, uint256 heroPt2);
    event HeroUpdatedV4Pt3(uint256 indexed heroId, uint256 heroPt3);
    event HeroUpdatedV4Pt4(uint256 indexed heroId, uint256 heroPt4);
    event HeroUpdatedV4Pt5(uint256 indexed heroId, uint256 heroPt5);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    // Hero Getters
    function balanceOf(address _owner) view returns (uint256);
    function getApproved(uint256 _tokenId) view returns (address);
    function isApprovedForAll(address _owner, address _operator) view returns (bool);
    function getHero(uint256 _heroId) view returns (tuple(uint256 id, uint256 realmId, uint256 xp, uint256 level, uint256 class, uint256 subclass, uint256 rarity, uint256 summonsRemaining, uint256 hpSmallGrowth, uint256 hpMediumGrowth, uint256 hpLargeGrowth, uint256 equippedSlots, uint256 petId, uint8 state, uint256 strength, uint256 dexterity, uint256 agility, uint256 vitality, uint256 endurance, uint256 intelligence, uint256 wisdom, uint256 luck, uint256 hp, uint256 mp, uint256 baseSTR, uint256 baseDEX, uint256 baseAGI, uint256 baseVIT, uint256 baseEND, uint256 baseINT, uint256 baseWIS, uint256 baseLCK, uint256 baseHP, uint256 baseMP, uint256 lesserCrystals, uint256 regularCrystals, uint256 greaterCrystals, uint256 stoneTier, uint256 levelResets, uint256 resetFrom, uint256 rerollCost, uint256 levelCarryover, bool perilousJourneySurvivor, uint256 strengthPGrowth, uint256 strengthSGrowth, uint256 dexterityPGrowth, uint256 dexteritySGrowth, uint256 agilityPGrowth, uint256 agilitySGrowth, uint256 vitalityPGrowth, uint256 vitalitySGrowth, uint256 endurancePGrowth, uint256 enduranceSGrowth, uint256 intelligencePGrowth, uint256 intelligenceSGrowth, uint256 wisdomPGrowth, uint256 wisdomSGrowth, uint256 luckPGrowth, uint256 luckSGrowth, uint256 mpSmallGrowth, uint256 mpMediumGrowth, uint256 mpLargeGrowth, uint256 weapon1Id, uint256 weapon1VisageId, uint256 weapon2Id, uint256 weapon2VisageId, uint256 offhand1Id, uint256 offhand1VisageId, uint256 offhand2Id, uint256 offhand2VisageId, uint256 armorId, uint256 armorVisageId, uint256 accessoryId, uint256 accessoryVisageId));
    function getHeroState(uint256 _heroId) view returns (tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) heroState);
    function getHeroV4Packed(uint256 _heroId) view returns (tuple(uint256 heroV4Pt1, uint256 heroV4Pt2, uint256 heroV4Pt3, uint256 heroV4Pt4, uint256 heroV4Pt5));
    function getHeroes(uint256[] _heroIds) view returns (tuple(uint256 id, uint256 realmId, uint256 xp, uint256 level, uint256 class, uint256 subclass, uint256 rarity, uint256 summonsRemaining, uint256 hpSmallGrowth, uint256 hpMediumGrowth, uint256 hpLargeGrowth, uint256 equippedSlots, uint256 petId, uint8 state, uint256 strength, uint256 dexterity, uint256 agility, uint256 vitality, uint256 endurance, uint256 intelligence, uint256 wisdom, uint256 luck, uint256 hp, uint256 mp, uint256 baseSTR, uint256 baseDEX, uint256 baseAGI, uint256 baseVIT, uint256 baseEND, uint256 baseINT, uint256 baseWIS, uint256 baseLCK, uint256 baseHP, uint256 baseMP, uint256 lesserCrystals, uint256 regularCrystals, uint256 greaterCrystals, uint256 stoneTier, uint256 levelResets, uint256 resetFrom, uint256 rerollCost, uint256 levelCarryover, bool perilousJourneySurvivor, uint256 strengthPGrowth, uint256 strengthSGrowth, uint256 dexterityPGrowth, uint256 dexteritySGrowth, uint256 agilityPGrowth, uint256 agilitySGrowth, uint256 vitalityPGrowth, uint256 vitalitySGrowth, uint256 endurancePGrowth, uint256 enduranceSGrowth, uint256 intelligencePGrowth, uint256 intelligenceSGrowth, uint256 wisdomPGrowth, uint256 wisdomSGrowth, uint256 luckPGrowth, uint256 luckSGrowth, uint256 mpSmallGrowth, uint256 mpMediumGrowth, uint256 mpLargeGrowth, uint256 weapon1Id, uint256 weapon1VisageId, uint256 weapon2Id, uint256 weapon2VisageId, uint256 offhand1Id, uint256 offhand1VisageId, uint256 offhand2Id, uint256 offhand2VisageId, uint256 armorId, uint256 armorVisageId, uint256 accessoryId, uint256 accessoryVisageId)[]);
    function getHeroesPt1(uint256[] _heroIds) view returns (tuple(uint256 id, uint256 realmId, uint256 xp, uint256 level, uint256 class, uint256 subclass, uint256 rarity, uint256 summonsRemaining, uint256 hpSmallGrowth, uint256 hpMediumGrowth, uint256 hpLargeGrowth, uint256 equippedSlots, uint256 petId, uint8 state)[]);
    function heroExists(uint256 _heroId) view returns (bool);
    function ownerOf(uint256 _tokenId) view returns (address);

    // State-Changing Functions
    function approve(address _approved, uint256 _tokenId) payable;
    function multiTransferHeroAndEquipmentFrom(address _from, address _newOwner, uint256[] heroIds);
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) payable;
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes) payable;
    function setApprovalForAll(address _operator, bool _approved);
    function transferFrom(address _from, address _to, uint256 _tokenId) payable;
    function transferHeroAndEquipmentFrom(address _from, address _newOwner, uint256 _heroId);
   
    // EQUIPMENT FUNCTIONS
    // Events
    event HeroEquipmentSetV2(uint256 indexed heroId, tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment);
    event PetEquipped(uint256 indexed heroId, uint256 indexed petId);
    event PetUnequipped(uint256 indexed heroId, uint256 indexed petId);
   
    // State-Changing Functions
    function changeEquipment(tuple(uint256 heroId, uint256 equipmentId, uint8 slot) _input);
    function changeEquipmentOnBehalf(tuple(uint256 heroId, uint256 equipmentId, uint8 slot) _input, address _account);
    function getHeroEquipmentV2(uint256 _heroId) view returns (tuple(uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId));
    function multiChangeEquipment(tuple(uint256 heroId, uint256 equipmentId, uint8 slot)[] _inputs);

    // GOVERNANCE FUNCTIONS
    function getCombinedVotingPower(address _player) view returns (uint256);
    function getVotingPower(address _player, uint256 _votingType) view returns (uint256);
         
}
```

### ABIs

{% file src="/files/Qlo0WbRlefVzNNDjRmd6" %}

{% file src="/files/Qv1tOe7vHjZWDIdXeE2Z" %}

## Types

### HeroV4

```solidity
struct HeroV4 {
    uint256 id;
    uint256 realmId;
    uint256 xp;
    uint256 level;
    uint256 class;
    uint256 subclass;
    uint256 rarity;
    uint256 summonsRemaining; // a value of 11 means Gen0
    uint256 hpSmallGrowth;
    uint256 hpMediumGrowth;
    uint256 hpLargeGrowth;
    uint256 equippedSlots;
    uint256 petId;
    State state;
    uint256 strength;
    uint256 dexterity;
    uint256 agility;
    uint256 vitality;
    uint256 endurance;
    uint256 intelligence;
    uint256 wisdom;
    uint256 luck;
    uint256 hp;
    uint256 mp;
    uint256 baseSTR;
    uint256 baseDEX;
    uint256 baseAGI;
    uint256 baseVIT;
    uint256 baseEND;
    uint256 baseINT;
    uint256 baseWIS;
    uint256 baseLCK;
    uint256 baseHP;
    uint256 baseMP;
    uint256 lesserCrystals;
    uint256 regularCrystals;
    uint256 greaterCrystals;
    uint256 stoneTier;
    uint256 levelResets;
    uint256 resetFrom;
    uint256 rerollCost;
    uint256 levelCarryover; // levelCarryover > 0 means darkSummoned
    bool perilousJourneySurvivor;
    uint256 strengthPGrowth;
    uint256 strengthSGrowth;
    uint256 dexterityPGrowth;
    uint256 dexteritySGrowth;
    uint256 agilityPGrowth;
    uint256 agilitySGrowth;
    uint256 vitalityPGrowth;
    uint256 vitalitySGrowth;
    uint256 endurancePGrowth;
    uint256 enduranceSGrowth;
    uint256 intelligencePGrowth;
    uint256 intelligenceSGrowth;
    uint256 wisdomPGrowth;
    uint256 wisdomSGrowth;
    uint256 luckPGrowth;
    uint256 luckSGrowth;
    uint256 mpSmallGrowth;
    uint256 mpMediumGrowth;
    uint256 mpLargeGrowth;
    uint256 weapon1Id;
    uint256 weapon1VisageId;
    uint256 weapon2Id;
    uint256 weapon2VisageId;
    uint256 offhand1Id;
    uint256 offhand1VisageId;
    uint256 offhand2Id;
    uint256 offhand2VisageId;
    uint256 armorId;
    uint256 armorVisageId;
    uint256 accessoryId;
    uint256 accessoryVisageId;
}
```

### HeroV4Pt1

```solidity
struct HeroV4Pt1 {
    uint256 id;
    uint256 realmId;
    uint256 xp;
    uint256 level;
    uint256 class;
    uint256 subclass;
    uint256 rarity;
    uint256 summonsRemaining;
    uint256 hpSmallGrowth;
    uint256 hpMediumGrowth;
    uint256 hpLargeGrowth;
    uint256 equippedSlots;
    uint256 petId;
    State state;
}
```

{% hint style="info" %}
See [State](#state) for details about this enum value.
{% endhint %}

#### Parsing

Use the following function to parse packed HeroV4Pt1 data:

```javascript
function parseHeroV4Pt1(heroId: string, packedData: string) {
  const h = BigInt(packedData)

  return {
    id: heroId,
    realmId: Number((h >> 248n) & 255n),
    xp: Number((h >> 224n) & 16777215n),
    level: Number((h >> 217n) & 127n),
    class: Number((h >> 212n) & 31n),
    subclass: Number((h >> 207n) & 31n),
    rarity: Number((h >> 204n) & 7n),
    summonsRemaining: Number((h >> 200n) & 15n),
    hpSmallGrowth: Number((h >> 187n) & 8191n),
    hpMediumGrowth: Number((h >> 174n) & 8191n),
    hpLargeGrowth: Number((h >> 161n) & 8191n),
    equippedSlots: Number((h >> 157n) & 15n),
    petId: Number((h >> 115n) & 4398046511103n),
    pvpStatus: Number((h >> 110n) & 31n),
  }
}
```

### HeroV4Pt2

```solidity
struct HeroV4Pt2 {
    uint256 strength;
    uint256 dexterity;
    uint256 agility;
    uint256 vitality;
    uint256 endurance;
    uint256 intelligence;
    uint256 wisdom;
    uint256 luck;
    uint256 hp;
    uint256 mp;
    uint256 baseSTR;
    uint256 baseDEX;
    uint256 baseAGI;
    uint256 baseVIT;
    uint256 baseEND;
    uint256 baseINT;
    uint256 baseWIS;
    uint256 baseLCK;
    uint256 baseHP;
    uint256 baseMP;
    uint256 lesserCrystals;
    uint256 regularCrystals;
    uint256 greaterCrystals;
    uint256 stoneTier;
    uint256 levelResets;
    uint256 resetFrom;
    uint256 rerollCost;
    uint256 levelCarryover;
    bool perilousJourneySurvivor;
}
```

### HeroV4Pt3

```solidity
struct HeroV4Pt3 {
    uint256 strengthPGrowth;
    uint256 strengthSGrowth;
    uint256 dexterityPGrowth;
    uint256 dexteritySGrowth;
    uint256 agilityPGrowth;
    uint256 agilitySGrowth;
    uint256 vitalityPGrowth;
    uint256 vitalitySGrowth;
    uint256 endurancePGrowth;
    uint256 enduranceSGrowth;
    uint256 intelligencePGrowth;
    uint256 intelligenceSGrowth;
    uint256 wisdomPGrowth;
    uint256 wisdomSGrowth;
    uint256 luckPGrowth;
    uint256 luckSGrowth;
    uint256 mpSmallGrowth;
    uint256 mpMediumGrowth;
    uint256 mpLargeGrowth;
}
```

### HeroV4Pt4

```solidity
struct HeroV4Pt4 {
    uint256 weapon1Id;
    uint256 weapon1VisageId;
    uint256 weapon2Id;
    uint256 weapon2VisageId;
    uint256 offhand1Id;
    uint256 offhand1VisageId;
}
```

### HeroV4Pt5

```solidity
struct HeroV4Pt5 {
    uint256 offhand2Id;
    uint256 offhand2VisageId;
    uint256 armorId;
    uint256 armorVisageId;
    uint256 accessoryId;
    uint256 accessoryVisageId;
}
```

### State

This enum represents the Hero's activity status on Metis. It acts in a similar way to `currentQuest` on HeroCoreV3, in that the Hero will be restricted from certain activities when this value is set.

```solidity
enum State {
    IDLE,
    FIGHTING,
    MEDITATING,
    SPECTATING,
    SPECTATOR_FIGHTING,
    SPECTATOR_MEDITATING
}
```
