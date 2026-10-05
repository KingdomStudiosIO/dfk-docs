> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/weapons.md).

# Weapons

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x41A73e10B92d6e81D758D74b0c8eB7a8DD3df9a8` | `0x0d75F786ec7D0554311aE3DcA45CF5B9DABE642D` |
| Kaia      | `0x4b5629B044248185bDc2C829AF460D2D9ded0b47` | `0xa87a43B1EB0478512Ff1c62C946f195C1dd8902a` |
| Metis     | `0xA4f8D1b4F8f1363F0FC8d6189089ff068c800AB4` | `0x5e33cd66876dBE739f7Af430559E1CC856a3Ff2d` |

### Interface

```solidity
interface IWeaponCoreDiamond {

    event Approval(address indexed owner, address indexed operator, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event BonusInfoPhysicalAttackUpdated(address indexed owner, uint256 weaponId, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack);
    event DisplayInfoMagicAttackUpdated(address indexed owner, uint256 weaponId, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack);
    event StateEnchantmentsUpdated(address indexed owner, uint256 weaponId, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event WeaponCreated(address indexed owner, uint256 indexed weaponId, (uint256 id, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack) weapon);
    event WeaponUpdated(address indexed owner, uint256 indexed weaponId, (uint256 id, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack) weapon);

    // View Functions
    function balanceOf(address account) view returns (uint256);
    function getApproved(uint256 tokenId) view returns (address);
    function getStateEnchantments(uint256 _id) view returns ((uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3));
    function getUserWeaponIds(address _address) view returns (uint256[]);
    function getUserWeapons(address _address) view returns ((uint256 id, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack)[]);
    function getWeapon(uint256 _id) view returns ((uint256 id, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack));
    function getWeapons(uint256[] _ids) view returns ((uint256 id, (uint8 weaponType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 basePotency, uint8 focusRequirement, uint16 mAccuracyAtRequirement, uint8 mScalarStat1, uint8 mScalarStat2, uint8 mScalarStat3, uint8 mScalarValue1, uint8 mScalarValue2, uint8 mScalarValue3, uint16 mScalarMax1, uint16 mScalarMax2, uint16 mScalarMax3, uint8 restorationCount) displayInfoMagicAttack, (uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, (uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 baseDamage, uint8 accuracyRequirement, uint16 pAccuracyAtRequirement, uint8 pScalarStat1, uint8 pScalarStat2, uint8 pScalarStat3, uint8 pScalarValue1, uint8 pScalarValue2, uint8 pScalarValue3, uint16 pScalarMax1, uint16 pScalarMax2, uint16 pScalarMax3, uint16 uniqueSettings, uint8 speedModifier) bonusInfoPhysicalAttack)[]);
    function isApprovedForAll(address account, address operator) view returns (bool);
    function name() view returns (string);
    function ownerOf(uint256 tokenId) view returns (address);
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function validateEquipmentVisageTypeMatch(uint256 _equipmentId, uint256 _visageId) view returns (bool);
    function validateEquipping((uint256 id, (uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, (uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, (uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, (uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, (uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, (uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, (uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, (uint256 equippedSlots, uint256 petId, uint128 weapon1Id, uint128 weapon1VisageId, uint128 weapon2Id, uint128 weapon2VisageId, uint128 offhand1Id, uint128 offhand1VisageId, uint128 offhand2Id, uint128 offhand2VisageId, uint128 armorId, uint128 armorVisageId, uint128 accessoryId, uint128 accessoryVisageId) equipment) _hero, uint256 _equipmentId, uint8 _slot) view returns (bool);

    // State-Changing Functions
    function approve(address operator, uint256 tokenId) payable;
    function safeTransferFrom(address from, address to, uint256 tokenId) payable;
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) payable;
    function setApprovalForAll(address operator, bool status);
    function transferFrom(address from, address to, uint256 tokenId) payable;

}
```

### ABI

{% file src="/files/9C2vzwhE0m4qGHWLmol2" %}

{% file src="/files/vx3Loli2HagJyCHZYaUO" %}

## Types

### Weapon

The primary `Weapon` struct contains the item's unique ID on the contract, and three sub-structs that hold the item data.

```solidity
struct Weapon {
    uint256 id;
    DisplayInfoMagicAttack displayInfoMagicAttack;
    StateEnchantments stateEnchantments;
    BonusInfoPhysicalAttack bonusInfoPhysicalAttack;
}
```

### DisplayInfoMagicAttack

```solidity
struct DisplayInfoMagicAttack {
    WeaponType weaponType;
    uint16 displayId;
    uint8 rarity;
    uint64 craftedBy;
    uint8 dye1;
    uint8 dye2;
    uint16 basePotency;
    uint8 focusRequirement;
    uint16 mAccuracyAtRequirement;
    uint8 mScalarStat1;
    uint8 mScalarStat2;
    uint8 mScalarStat3;
    uint8 mScalarValue1;
    uint8 mScalarValue2;
    uint8 mScalarValue3;
    uint16 mScalarMax1;
    uint16 mScalarMax2;
    uint16 mScalarMax3;
    uint8 restorationCount;
}
```

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>weaponType</code></strong></td><td><a href="#weapontype"><code>WeaponType</code></a></td><td>The numeric ID defining the weapon type (e.g. <code>1</code> = One-Handed Axe, etc.)</td></tr><tr><td><strong><code>displayId</code></strong></td><td><code>uint16</code></td><td>Defines the item's base appearance</td></tr><tr><td><strong><code>rarity</code></strong></td><td><code>uint16</code></td><td>The item's rarity (<code>0</code>-<code>12</code>). See <a href="/nfts/equipment/shared-equipment-mappings.md#rarity">Rarity</a>.</td></tr><tr><td><strong><code>craftedBy</code></strong></td><td><code>uint64</code></td><td>The Hero ID of the crafting Hero, or a unique ID for dropped items. See <a href="/nfts/equipment/shared-equipment-mappings.md#craftedby">CraftedBy</a>.</td></tr><tr><td><strong><code>dye1</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the primary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye1">Dye1</a>.</td></tr><tr><td><strong><code>dye2</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the secondary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye2">Dye2</a>.</td></tr><tr><td><strong><code>basePotency</code></strong></td><td><code>uint16</code></td><td>The base <code>Potency</code> of the weapon</td></tr><tr><td><strong><code>focusRequirement</code></strong></td><td><code>uint8</code></td><td>The required <code>Focus</code> for a Hero to meet the base Magical Accuracy of the weapon (one-decimal precision)</td></tr><tr><td><strong><code>mAccuracyAtRequirement</code></strong></td><td><code>uint8</code></td><td>The base Magical Accuracy of the weapon when the Hero meets the given <code>focusRequirement</code> (one-decimal precision)</td></tr><tr><td><strong><code>mScalarStat1</code></strong></td><td><code>uint8</code></td><td>Magical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>mScalarStat2</code></strong></td><td><code>uint8</code></td><td>Magical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>mScalarStat3</code></strong></td><td><code>uint8</code></td><td>Magical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>mScalarValue1</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>mScalarStat1</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>mScalarValue2</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>mScalarStat2</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>mScalarValue3</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>mScalarStat3</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>mScalarMax1</code></strong></td><td><code>uint16</code></td><td>The maximum value that can be obtained from the Hero's <code>mScalarStat1 * mScalarValue1</code> </td></tr><tr><td><strong><code>mScalarMax2</code></strong></td><td><code>uint16</code></td><td>The maximum value that can be obtained from the Hero's <code>mScalarStat2 * mScalarValue2</code> </td></tr><tr><td><strong><code>mScalarMax3</code></strong></td><td><code>uint16</code></td><td>The maximum value that can be obtained from the Hero's <code>mScalarStat3 * mScalarValue3</code> </td></tr><tr><td><strong><code>restorationCount</code></strong></td><td><code>uint8</code></td><td>The number of times the item's <code>remainingRepairs</code> have been restored</td></tr></tbody></table>

### StateEnchantments

```solidity
struct StateEnchantments {
    uint64 equippedTo;
    uint64 equippableAt;
    uint16 maxDurability;
    uint16 durability;
    uint8 maxRepairs;
    uint8 remainingRepairs;
    uint8 equipRequirement;
    uint8 enchantmentType1;
    uint8 enchantmentType2;
    uint8 enchantmentType3;
    uint16 enchantmentScalar1;
    uint16 enchantmentScalar2;
    uint16 enchantmentScalar3;
}
```

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>equippedTo</code></strong></td><td><code>uint64</code></td><td>The Hero ID of the Hero that the item is equipped to</td></tr><tr><td><strong><code>equippableAt</code></strong></td><td><code>uint64</code></td><td>The Unix timestamp when the item is next equippable</td></tr><tr><td><strong><code>maxDurability</code></strong></td><td><code>uint16</code></td><td>The maximum durability of the item</td></tr><tr><td><strong><code>durability</code></strong></td><td><code>uint16</code></td><td>The current durability of the item</td></tr><tr><td><strong><code>maxRepairs</code></strong></td><td><code>uint8</code></td><td>The maximum number of repairs for the item</td></tr><tr><td><strong><code>remainingRepairs</code></strong></td><td><code>uint8</code></td><td>The remaining number of repairs for the item</td></tr><tr><td><strong><code>equipRequirement</code></strong></td><td><code>uint8</code></td><td>The Strength requirement to equip the item</td></tr><tr><td><strong><code>enchantmentType1</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentType2</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentType3</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentScalar1</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr><tr><td><strong><code>enchantmentScalar2</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr><tr><td><strong><code>enchantmentScalar3</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr></tbody></table>

### BonusInfoPhysicalAttack

```solidity
struct BonusInfoPhysicalAttack {
    uint8 bonus1;
    uint8 bonus2;
    uint8 bonus3;
    uint8 bonus4;
    uint16 bonusScalar1;
    uint16 bonusScalar2;
    uint16 bonusScalar3;
    uint16 bonusScalar4;
    uint16 baseDamage;
    uint8 accuracyRequirement;
    uint16 pAccuracyAtRequirement;
    uint8 pScalarStat1;
    uint8 pScalarStat2;
    uint8 pScalarStat3;
    uint8 pScalarValue1;
    uint8 pScalarValue2;
    uint8 pScalarValue3;
    uint16 pScalarMax1;
    uint16 pScalarMax2;
    uint16 pScalarMax3;
    uint16 uniqueSettings;
    uint8 speedModifier;
}
```

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>bonus1</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus2</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus3</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus4</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus1Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus2Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus3Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus4Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>baseDamage</code></strong></td><td><code>uint16</code></td><td>The base damage of the weapon</td></tr><tr><td><strong><code>accuracyRequirement</code></strong></td><td><code>uint8</code></td><td>The required <code>Accuracy</code> for a Hero to meet the base Physical Accuracy of the weapon (one-decimal precision)</td></tr><tr><td><strong><code>pAccuracyAtRequirement</code></strong></td><td><code>uint16</code></td><td>The base Accuracy of the weapon when the Hero meets the given <code>accuracyRequirement</code> (one-decimal precision)</td></tr><tr><td><strong><code>pScalarStat1</code></strong></td><td><code>uint16</code></td><td>Physical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>pScalarStat2</code></strong></td><td><code>uint16</code></td><td>Physical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>pScalarStat3</code></strong></td><td><code>uint16</code></td><td>Physical damage Scalar Stat mapping (<code>0</code> = <code>none</code>)</td></tr><tr><td><strong><code>pScalarValue1</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>pScalarStat1</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>pScalarValue2</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>pScalarStat2</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>pScalarValue3</code></strong></td><td><code>uint8</code></td><td>The scalar value for <code>pScalarStat3</code> (one-decimal precision multiplier, e.g. <code>5</code> = <code>0.5x</code>)</td></tr><tr><td><strong><code>pScalarMax1</code></strong></td><td><code>uint8</code></td><td>The maximum value that can be obtained from the Hero's <code>pScalarStat1 * pScalarValue1</code> </td></tr><tr><td><strong><code>pScalarMax2</code></strong></td><td><code>uint8</code></td><td>The maximum value that can be obtained from the Hero's <code>pScalarStat2 * pScalarValue2</code> </td></tr><tr><td><strong><code>pScalarMax3</code></strong></td><td><code>uint8</code></td><td>The maximum value that can be obtained from the Hero's <code>pScalarStat3 * pScalarValue3</code> </td></tr><tr><td><strong><code>uniqueSettings</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr><tr><td><strong><code>speedModifier</code></strong></td><td><code>uint8</code></td><td>Modifies the Hero's <code>speed</code> by the given percent While wielding the Weapon. Zero-decimal precision with range of -128% to 128%.<br><br>Conversion logic is: <code>(1 - 2 * floor(speedModifier / 128)) * (speedModifier % 128)</code>.</td></tr></tbody></table>

### WeaponType

```solidity
enum WeaponType {
    None,
    OneHandedAxe,
    TwoHandedAxe,
    Bow,
    Dagger,
    Gloves,
    OneHandedMace,
    TwoHandedMace,
    OneHandedSpear,
    TwoHandedSpear,
    Staff,
    OneHandedSword,
    TwoHandedSword,
    Wand
}
```

<table data-full-width="true"><thead><tr><th width="191.33333333333331">Name</th><th width="90">Value</th><th width="186">Description</th><th width="85" data-type="number">Hands</th><th>Usable By</th></tr></thead><tbody><tr><td><strong><code>None</code></strong></td><td><code>0</code></td><td>None (unused)</td><td>0</td><td>N/A</td></tr><tr><td><strong><code>OneHandedAxe</code></strong></td><td><code>1</code></td><td>One-Handed Axe</td><td>1</td><td><ul><li>Pirate</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>TwoHandedAxe</code></strong></td><td><code>2</code></td><td>Two-Handed Axe</td><td>2</td><td><ul><li>Berserker</li><li>DarkKnight</li><li>DreadKnight</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>Bow</code></strong></td><td><code>3</code></td><td>Bow</td><td>2</td><td><ul><li>Archer</li><li>Bard</li><li>SpellBow</li></ul></td></tr><tr><td><strong><code>Dagger</code></strong></td><td><code>4</code></td><td>Dagger</td><td>1</td><td><ul><li>Bard</li><li>Ninja</li><li>Pirate</li><li>Thief</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>Gloves</code></strong></td><td><code>5</code></td><td>Gloves</td><td>2</td><td><ul><li>Monk</li><li>Shapeshifter</li></ul></td></tr><tr><td><strong><code>OneHandedMace</code></strong></td><td><code>6</code></td><td>One-Handed Mace</td><td>1</td><td><ul><li>Knight</li><li>Paladin</li><li>Pirate</li><li>Priest</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>TwoHandedMace</code></strong></td><td><code>7</code></td><td>Two-Handed Mace</td><td>2</td><td><ul><li>Berserker</li><li>DarkKnight</li><li>DreadKnight</li><li>Paladin</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>OneHandedSpear</code></strong></td><td><code>8</code></td><td>One-Handed Spear</td><td>1</td><td><ul><li>Legionnaire</li></ul></td></tr><tr><td><strong><code>TwoHandedSpear</code></strong></td><td><code>9</code></td><td>Two-Handed Spear</td><td>2</td><td><ul><li>Dragoon</li></ul></td></tr><tr><td><strong><code>Staff</code></strong></td><td><code>10</code></td><td>Staff</td><td>2</td><td><ul><li>Priest</li><li>Sage</li><li>Summoner</li><li>Wizard</li></ul></td></tr><tr><td><strong><code>OneHandedSword</code></strong></td><td><code>11</code></td><td>One-Handed Sword</td><td>1</td><td><ul><li>Bard</li><li>Knight</li><li>Ninja</li><li>Paladin</li><li>Pirate</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>TwoHandedSword</code></strong></td><td><code>12</code></td><td>Two-Handed Sword</td><td>2</td><td><ul><li>Berserker</li><li>DarkKnight</li><li>DreadKnight</li><li>Paladin</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>Wand</code></strong></td><td><code>13</code></td><td>Wand</td><td>1</td><td><ul><li>Sage</li><li>Scholar</li><li>Seer</li><li>Summoner</li><li>Wizard</li></ul></td></tr></tbody></table>

## Mappings

### Weapon Details

The weapon details correspond to a two-layer mapping by `weaponType` and `displayId`. Most base data can be found on-chain or through the API. Mappings for additional string data are as follows:

```json
{
  "2": {
    "1": {
      "name": "Gore Axe",
      "description": "A formidable axe fashioned from the spine and rib cage of a mighty boar."
    },
    "2": {
      "name": "Savage Axe",
      "description": "A double blade made from battlefield salvage and attached to a bedpost."
    },
    "3": {
      "name": "Bronze Half-Moon Axe",
      "description": "A peculiar bronze great-axe that is conveniently shaped for digging graves..."
    },
    "4": {
      "name": "Squire's Halbard",
      "description": "A favorite for castle-guards, the giant halberd doubles as a combat deterrant."
    },
    "5": {
      "name": "Leviathan's Rage",
      "description": "A massive coral cleaver that hums with ancient fury."
    },
    "50000": {
      "name": "Miner's Pickaxe",
      "description": "You can pick your friends. You can pick your foes. And with this sturdy weapon, you can even pickaxe your friend's foes!"
    }
  },
  "3": {
    "1": {
      "name": "Gore Bow",
      "description": "A crude recurve bow fashioned from the bones of a mighty boar."
    },
    "2": {
      "name": "Stick 'n String",
      "description": "A crude branch-bow with leaves (and berries?) still attached. Blubs beware!"
    },
    "3": {
      "name": "Maple Longbow",
      "description": "A stiff bow made of treated maple wood. A bun-hunter's dream!"
    },
    "4": {
      "name": "Squire's Recurve Bow",
      "description": "A standard military-issue recurve bow, strung to provide additonal energy on release."
    },
    "5": {
      "name": "Gore Longbow",
      "description": "A crude recurve longbow fashioned from the bones of a mighty boar."
    },
    "6": {
      "name": "Farstriker",
      "description": "A gilded composite bow crafted from Submersian Coral."
    }
  },
  "4": {
    "1": {
      "name": "Flint Knife",
      "description": "Technically a knife, but more accurately a bit of sharp flint attached to a handle with string."
    },
    "2": {
      "name": "Bronze Gladius",
      "description": "A bronze small-sword. A popular weapon for gladiators."
    },
    "3": {
      "name": "Squire's Dagger",
      "description": "A handy iron dagger designed sturdy for parrying and stabbing."
    },
    "4": {
      "name": "Ripfang",
      "description": "A razor-sharp Submersian Coral dagger with an edge that never dulls."
    },
    "50000": {
      "name": "Gardening Trowel",
      "description": "This perfectly balanced gardening trowel has been sharpened to a fine point. Dig a hole and bury your enemies in the dirt!"
    }
  },
  "5": {
    "1": {
      "name": "Wooden Knuckles",
      "description": "Protect your fists with something slightly softer than your fists!"
    },
    "2": {
      "name": "Bronze Caesti",
      "description": "Heavy bronze plated gloves reinforced for punching armor."
    },
    "3": {
      "name": "Squire's Gloves",
      "description": "Comfortable fitted gloves with sharpened iron knuckle reinforcements."
    }
  },
  "6": {
    "1": {
      "name": "Driftwood Shillelagh",
      "description": "Colloquially known as a bonk-stick, it gets the job done... if the job is bonking."
    },
    "2": {
      "name": "Maple Club",
      "description": "A favorite among trolodytes and goblins."
    },
    "3": {
      "name": "Squire's Mace",
      "description": "A hard iron mace designed to concuss beasts and men alike."
    },
    "4": {
      "name": "Claw Cudgel",
      "description": "The repurposed claw of a lumbering crusted crab. It smells... buttery?"
    },
    "5": {
      "name": "Deepmaul",
      "description": "A wicked mace barbed with razor-sharp Submersian Coral."
    }
  },
  "8": {
    "1": {
      "name": "Sharpened Stick",
      "description": "It's a stick. Try not to poke your eye out."
    },
    "2": {
      "name": "Bronze Shortspear",
      "description": "A bronze bladed spear that can be easily wielded with a shield."
    },
    "3": {
      "name": "Squire's Light Spear",
      "description": "A sharp tipped iron shortspear that is light enough to use with one hand."
    }
  },
  "9": {
    "1": {
      "name": "Driftwood Pike",
      "description": "Someone has sharpened a shabby piece of driftwood for some reason."
    },
    "2": {
      "name": "Bronze Longspear",
      "description": "A bronze spear with a triangular blade. Long enough to get the job done."
    },
    "3": {
      "name": "Squire's Heavy Spear",
      "description": "An iron longspear that really helps get your point across."
    }
  },
  "10": {
    "1": {
      "name": "Gore Staff",
      "description": "A long and savage staff fashioned out of several bones bound with tanned leather."
    },
    "2": {
      "name": "Gnarled Staff",
      "description": "A long knobby tree branch that has been whittled down and taped for comfort."
    },
    "3": {
      "name": "Maple Staff",
      "description": "A wooden staff that forks to hold an orb of natural peridot. Great for beginners!"
    },
    "4": {
      "name": "Squire's Staff",
      "description": "A sturdy staff with metal embellishments and topped with an amethyst focus."
    },
    "5": {
      "name": "Corrupted Staff",
      "description": "A gnarled branch wrapped in the luminescent tentacle of some corrupted eldritch horror."
    },
    "6": {
      "name": "Sirensong",
      "description": "A staff with a massive lustrous pearl mounted in Submersian Coral."
    },
    "50000": {
      "name": "Walking Stick",
      "description": "A sturdy and perfectly balanced oak walking stick. An essential accessory for lengthy foraging trips or fighting off territorial basilisks."
    }
  },
  "11": {
    "1": {
      "name": "Gore Blade",
      "description": "A blade fashioned from the sharpened rib bone of a massive boar."
    },
    "2": {
      "name": "Toy Sword",
      "description": "A hastily assembled dull wooden sword. Strikes fear into schoolyard bullies!"
    },
    "3": {
      "name": "Bronze Spatha",
      "description": "A broad blade of bronze with a heavy pommel and good balance."
    },
    "4": {
      "name": "Squire's Sword",
      "description": "A plain looking iron longsword with a crossguard."
    },
    "5": {
      "name": "Coralbrand",
      "description": "An ornate one-handed blade made from fine Submersian Coral."
    },
    "50000": {
      "name": "Fishing Rod",
      "description": "A sleek fishing rod designed for two purposes: catching fish and kicking ass. And you already caught all the fish."
    }
  },
  "12": {
    "1": {
      "name": "Eggscalibur",
      "description": "A finely crafted greatsword fashioned from the sturdy, sharpened feathers of a hardened rocboc."
    },
    "2": {
      "name": "Igneous Butcher",
      "description": "As a joke someone has attached a boulder to a sword hilt. Hard to swing."
    },
    "3": {
      "name": "Bronze Greatsword",
      "description": "An extremely heavy bronze blade forged in a single mold, blade and all."
    },
    "4": {
      "name": "Squire's Greatsword",
      "description": "A well-crafted iron claymore. The handle is long enough to hold in both hands."
    },
    "5": {
      "name": "Living Blade",
      "description": "A massive blade purloined from the remains of a now very dead suit of armor."
    },
    "6": {
      "name": "Tidecleaver",
      "description": "A colossal blade made from venomous Submersian Coral."
    }
  },
  "13": {
    "1": {
      "name": "Demon's Drumstick",
      "description": "A true oddity of craftsmanship that is equally mouth-watering and powerful."
    },
    "2": {
      "name": "Gnarled Wand",
      "description": "A suspicious wand. Why do all the nearby trees seem so bare?"
    },
    "3": {
      "name": "Maple Wand",
      "description": "A lacquered maple branch fitted with a small peridot for focusing magic."
    },
    "4": {
      "name": "Squire's Wand",
      "description": "An amethyst topped wand. It looks sturdy."
    },
    "5": {
      "name": "Hydra's Gaze",
      "description": "A pearl-topped wand made from Submersian Coral."
    }
  }
}

```

### Weapon Bonuses

Weapon Bonus descriptions correspond to the following mappings. The `X` in each mapping represents the corresponding `bonusScalar` value.

```json
{
    1: "Gain X% chance to inflict Banish on hit",
    2: "Gain X% chance to inflict Bleed on hit",
    3: "Gain X% chance to inflict Blind on hit",
    4: "Gain X% chance to inflict Burn on hit",
    5: "Gain X% chance to inflict Chill on hit",
    6: "Gain X% chance to inflict Confuse on hit",
    7: "Gain X% chance to inflict Daze on hit",
    8: "Gain X% chance to inflict Disarm on hit",
    9: "Gain X% chance to inflict Fear on hit",
    10: "Gain X% chance to inflict Intimidate on hit",
    11: "Gain X% chance to inflict Poison on hit",
    12: "Gain X% chance to inflict Pull on hit",
    13: "Gain X% chance to inflict Push on hit",
    14: "Gain X% chance to inflict Silence on hit",
    15: "Gain X% chance to inflict Sleep on hit",
    16: "Gain X% chance to inflict Slow on hit",
    17: "Gain X% chance to inflict Stun on hit",
    18: "Gain X% chance to inflict Taunt on hit",
    19: "Gain X% chance to inflict Daze on basic attack when targeting a channeling enemy",
    20: "Increase Block chance by +X%",
    21: "Increase Spell Block chance by +X%",
    22: "Increase Critical Hit damage multiplier by +X",
    23: "Increase Critical Hit chance by +X%",
    24: "Critical Hits gain X% Lifesteal",
    25: "Gain X% Pierce",
    26: "Increase Block damage reduction by X%",
    27: "Increase Spell Block damage reduction by X%",
    28: "Increase Magical Damage dealt and reduce Healing Potency by X% each",
    29: "Increase Healing Potency and reduce Magical Damage dealt by X% each",
    30: "Decrease Physical and Magical Defense by X% each",
    31: "Decrease Healing Potency by X%",
    32: "Increase Magical Damage by X%",
    33: "Increase Physical Damage by X%",
    34: "Gain X% chance to Retaliate 1 upon receiving damage.",
    35: "Gain X% chance to Retaliate 1 upon receiving physical damage.",
    36: "Gain X% chance to Retaliate 1 upon receiving magical damage.",
    37: "Critical Hits gain X% chance to inflict Bleed",
    38: "Critical Hits gain X% chance to inflict Poison",
    39: "Critical Hits gain X% chance to inflict Daze",
    40: "Critical Heals gain X% chance to Cleanse",
    41: "Increase Critical Heal chance by +X%"
}
```

## See Also

{% content-ref url="/pages/hWGZbJUj7sUW8SapAXIm" %}
[Shared Equipment Mappings](/nfts/equipment/shared-equipment-mappings.md)
{% endcontent-ref %}
