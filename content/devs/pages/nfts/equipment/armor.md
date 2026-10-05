> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/armor.md).

# Armor

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0xE60480B4083cA9F4d07034Eb30Bc7894114adAC1` | `0x630706B99c053C727094C952ca685637dFE89c0a` |
| Kaia      | `0x8740c7509dC22Fc1a2e1Da7d0067A563E4A66f63` | `0xF7dD05C65537Bb289Ecd737868b4dc978569cc1F` |
| Metis     | `0x4Bc4BBDF294eeb3017FB4bD7806b6D61D74e85bb` | `0x7Cb74b35eeE262ca1960E67Dcac6fd47ECbbA6bF` |

### Interface

```solidity
interface IArmorCoreDiamond {

    // Events
    event Approval(address indexed owner, address indexed operator, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event ArmorCreated(address indexed owner, uint256 indexed armorId, tuple(uint256 id, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras) armor);
    event ArmorUpdated(address indexed owner, uint256 indexed armorId, tuple(uint256 id, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras) armor);
    event BonusInfoExtrasUpdated(address indexed owner, uint256 armorId, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras);
    event DisplayDefenseInfoUpdated(address indexed owner, uint256 armorId, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo);
    event Paused(address account);
    event StateEnchantmentsUpdated(address indexed owner, uint256 armorId, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Unpaused(address account);

    // Functions
    function approve(address operator, uint256 tokenId) payable;
    function balanceOf(address account) view returns (uint256);
    function getApproved(uint256 tokenId) view returns (address);
    function getArmor(uint256 _id) view returns (tuple(uint256 id, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras));
    function getArmors(uint256[] _ids) view returns (tuple(uint256 id, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras)[]);
    function getEquipmentBytes(uint256 _id) view returns (tuple(uint256 id, uint16 equipmentCore, bytes generic1, bytes enchantments, bytes generic3));
    function getStateEnchantments(uint256 _id) view returns (tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3));
    function getUserArmors(address _address) view returns (tuple(uint256 id, tuple(uint8 armorType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint16 rawPhysDefense, uint16 physDefScalar, uint16 pDefScalarMax, uint16 rawMagicDefense, uint16 magicDefScalar, uint16 mDefScalarMax, uint16 evasion, uint16 spare1, uint16 spare2) displayDefenseInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments, tuple(uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount, uint16 misc1, uint32 misc2, uint32 misc3, uint32 misc4) bonusInfoExtras)[]);
    function isApprovedForAll(address account, address operator) view returns (bool);
    function name() view returns (string);
    function ownerOf(uint256 tokenId) view returns (address);
    function pause();
    function paused() view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId) payable;
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) payable;
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function transferFrom(address from, address to, uint256 tokenId) payable;
    function unpause();
    function validateEquipping(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing, uint16 craft1, uint16 craft2) professions, tuple(uint256 equippedSlots, uint256 petId, uint256 weapon1Id, uint256 weapon2Id, uint256 offhand1Id, uint256 offhand2Id, uint256 armorId, uint256 accessoryId) equipment) _hero, uint256 _equipmentId, uint8) view returns (bool);
    
}
```

### ABI

{% file src="/files/wilQ1LXS4x8zDLnqtS6C" %}

## Types

### Armor

The primary `Armor` struct contains the item's unique ID on the contract, and three sub-structs that hold the item data.

```solidity
struct Armor {
    uint256 id;
    DisplayDefenseInfo displayDefenseInfo;
    StateEnchantments stateEnchantments;
    BonusInfoExtras bonusInfoExtras;
}
```

### DisplayDefenseInfo

```solidity
struct DisplayDefenseInfo {
    ArmorType armorType;
    uint16 displayId;
    uint8 rarity;
    uint64 craftedBy;
    uint8 dye1;
    uint8 dye2;
    uint16 rawPhysDefense;
    uint16 physDefScalar;
    uint16 pDefScalarMax;
    uint16 rawMagicDefense;
    uint16 magicDefScalar;
    uint16 mDefScalarMax;
    uint16 evasion;
    uint16 spare1;
    uint16 spare2;
}
```

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>armorType</code></strong></td><td><a href="#armortype"><code>ArmorType</code></a></td><td>The numeric ID defining the armor type (e.g. <code>1</code> = Light Armor, etc.)</td></tr><tr><td><strong><code>displayId</code></strong></td><td><code>uint16</code></td><td>Defines the item's base appearance</td></tr><tr><td><strong><code>rarity</code></strong></td><td><code>uint16</code></td><td>The item's rarity (<code>0</code>-<code>12</code>). See <a href="/nfts/equipment/shared-equipment-mappings.md#rarity">Rarity</a>.</td></tr><tr><td><strong><code>craftedBy</code></strong></td><td><code>uint64</code></td><td>The Hero ID of the crafting Hero, or a unique ID for dropped items. See <a href="/nfts/equipment/shared-equipment-mappings.md#craftedby">CraftedBy</a>.</td></tr><tr><td><strong><code>dye1</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the primary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye1">Dye1</a>.</td></tr><tr><td><strong><code>dye2</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the secondary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye2">Dye2</a>.</td></tr><tr><td><strong><code>rawPhysDefense</code></strong></td><td><code>uint16</code></td><td>The base <code>P.DEF</code> of the armor</td></tr><tr><td><strong><code>physDefScalar</code></strong></td><td><code>uint16</code></td><td>The scalar value for <code>rawPhysDefense</code> (two-decimal precision multiplier, e.g. <code>5</code> = <code>0.05x</code>)</td></tr><tr><td><strong><code>pDefScalarMax</code></strong></td><td><code>uint16</code></td><td>The maximum value that can be obtained from the Hero's <code>END * physDefScalar</code></td></tr><tr><td><strong><code>rawMagicDefense</code></strong></td><td><code>uint16</code></td><td>The base <code>M.DEF</code> of the armor</td></tr><tr><td><strong><code>magicDefScalar</code></strong></td><td><code>uint16</code></td><td>The scalar value for <code>rawMagicDefense</code> (two-decimal precision multiplier, e.g. <code>5</code> = <code>0.05x</code>)</td></tr><tr><td><strong><code>mDefScalarMax</code></strong></td><td><code>uint16</code></td><td>The maximum value that can be obtained from the Hero's <code>WIS * magicDefScalar</code></td></tr><tr><td><strong><code>evasion</code></strong></td><td><code>uint16</code></td><td>The base <code>evasion</code> percent granted by the armor. Two-decimal precision with range of -327.67% to 327.67%.<br><br>Conversion logic is: <code>(1 - 2 * floor(evasion / 32768)) * (evasion % 32768)</code>.</td></tr><tr><td><strong><code>spare1</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr><tr><td><strong><code>spare2</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr></tbody></table>

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

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>equippedTo</code></strong></td><td><code>uint64</code></td><td>The Hero ID of the Hero that the item is equipped to</td></tr><tr><td><strong><code>equippableAt</code></strong></td><td><code>uint64</code></td><td>The Unix timestamp when the item is next equippable</td></tr><tr><td><strong><code>maxDurability</code></strong></td><td><code>uint16</code></td><td>The maximum durability of the item</td></tr><tr><td><strong><code>durability</code></strong></td><td><code>uint16</code></td><td>The current durability of the item</td></tr><tr><td><strong><code>maxRepairs</code></strong></td><td><code>uint8</code></td><td>The maximum number of repairs for the item</td></tr><tr><td><strong><code>remainingRepairs</code></strong></td><td><code>uint8</code></td><td>The remaining number of repairs for the item</td></tr><tr><td><strong><code>equipRequirement</code></strong></td><td><code>uint8</code></td><td>The Level requirement to equip the item</td></tr><tr><td><strong><code>enchantmentType1</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentType2</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentType3</code></strong></td><td><code>uint8</code></td><td><p>A mapping of the enchantment type:</p><ul><li><code>0</code> = no enchantment slot available</li><li><code>1</code> = empty enchantment slot</li></ul></td></tr><tr><td><strong><code>enchantmentScalar1</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr><tr><td><strong><code>enchantmentScalar2</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr><tr><td><strong><code>enchantmentScalar3</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding enchantment</td></tr></tbody></table>

### BonusInfoExtras

```solidity
struct BonusInfoExtras {
    uint8 bonus1;
    uint8 bonus2;
    uint8 bonus3;
    uint8 bonus4;
    uint8 bonus5;
    uint16 bonusScalar1;
    uint16 bonusScalar2;
    uint16 bonusScalar3;
    uint16 bonusScalar4;
    uint16 bonusScalar5;
    uint16 uniqueSettings;
    uint8 restorationCount;
    uint16 misc1;
    uint32 misc2;
    uint32 misc3;
    uint32 misc4;
}
```

<table data-full-width="true"><thead><tr><th width="267.3333333333333">Name</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>bonus1</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus2</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus3</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus4</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus5</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus1Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus2Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus3Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus4Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonus5Scalar</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>uniqueSettings</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr><tr><td><strong><code>restorationCount</code></strong></td><td><code>uint8</code></td><td>The number of times the item's <code>remainingRepairs</code> have been restored</td></tr><tr><td><strong><code>misc1</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr><tr><td><strong><code>misc2</code></strong></td><td><code>uint32</code></td><td>Currently unused</td></tr><tr><td><strong><code>misc3</code></strong></td><td><code>uint32</code></td><td>Currently unused</td></tr><tr><td><strong><code>misc4</code></strong></td><td><code>uint32</code></td><td>Currently unused</td></tr></tbody></table>

### ArmorType

```solidity
enum ArmorType {
    None,
    Light,
    Medium,
    Heavy
}
```

<table><thead><tr><th width="217">Armor Type</th><th width="140">Value</th><th>Usable By</th></tr></thead><tbody><tr><td>Light</td><td><code>1</code></td><td><ul><li>All Classes</li></ul></td></tr><tr><td>Medium</td><td><code>2</code></td><td><ul><li>Archer</li><li>Bard</li><li>Berserker</li><li>DarkKnight</li><li>Dragoon</li><li>DreadKnight</li><li>Knight</li><li>Legionnaire</li><li>Paladin</li><li>Pirate</li><li>Shapeshifter</li><li>SpellBow</li><li>Warrior</li></ul></td></tr><tr><td>Heavy</td><td><code>3</code></td><td><ul><li>DarkKnight</li><li>Dragoon</li><li>DreadKnight</li><li>Knight</li><li>Legionnaire</li><li>Paladin</li><li>Warrior</li></ul></td></tr></tbody></table>

{% hint style="info" %}
All Visages are considered Light Armor, and can by used by any class, regardless of what type of Armor that Hero may be wearing.
{% endhint %}

## Mappings

### Armor Details

The armor details correspond to a two-layer mapping by `armorType` and `displayId`. Most base data can be found on-chain or through the API. Mappings for additional string data are as follows:

```json
{
  "1": {
    "1": {
      "name": "Feather Duster",
      "description": "A lightweight armor fashioned from the feathers of a ravenous and cunning rocboc."
    },
    "2": {
      "name": "Hempen Jacket",
      "description": "Light and breathable. The bare minimum to protect you from the elements."
    },
    "3": {
      "name": "Reinforced Toga",
      "description": "A fashionable toga reinforced with bronze studs in key locations."
    },
    "4": {
      "name": "Squire's Light Armor",
      "description": "Layered comfortable garments that are great for adventures or a night on the town."
    },
    "5": {
      "name": "Rags of the Nameless",
      "description": "A pile of discolored and frayed wrappings worn by the acolytes of the Nameless God."
    },
    "6": {
      "name": "Abyssal Tunic",
      "description": "A light tunic interwoven with Submersian Coral."
    },
    "50000": {
      "name": "Bloater Suit",
      "description": "A fashionable fish fit that shows just the right amount of skin. Perfect camo against the realm's least threatening creature."
    },
    "50001": {
      "name": "Karate Gi",
      "description": "This elegant gi provides the comfort and flexibility to kick ass, take names, and get home in time for dinner. Popular amongst masters of Togwan Do."
    },
    "50002": {
      "name": "Super Blub Defender: Red Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Red Defender, who is known for his bravery, virtue, and mastery of Togwan-do."
    },
    "50003": {
      "name": "Super Blub Defender: Pink Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Pink Defender, who is known for her biting wit, nibbling charm, and chomping mastication."
    },
    "50004": {
      "name": "Super Blub Defender: Blue Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Blue Defender, who is known for his honesty, compassion, and excellent taste in music."
    },
    "50005": {
      "name": "Super Blub Defender: Yellow Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Yellow Defender, who is known for her lucky dodges, uncanny lunges, and otherwordly Bloater cakes."
    },
    "50006": {
      "name": "Super Blub Defender: Black Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Black Defender, who is known for his firm handshake, next-level stealth, and unprompted backflips."
    },
    "50007": {
      "name": "Super Blub Defender: Green Suit",
      "description": "A suit made by the Super Blub Defender (SBD) Fan Club. This one represents the Green Defender, who is known for his boastfulness, gambling acumen, and violently unfunny dad jokes."
    },
    "50008": {
      "name": "Yellow Panther Suit",
      "description": "The mysterious Yellow Panther Clan lives and fights in the shadows. Don their ceremonial armor and join the movement."
    },
    "50009": {
      "name": "Chef Suit",
      "description": "A chef should always be prepared for furious fighting or fierce fileting. This is the perfect outfit for adventures both in and out of the kitchen."
    },
    "50010": {
      "name": "Dark Summoner Suit",
      "description": "When they're not sacrificing Heroes in a nonstop stream of dark rituals that push Gaia further and further towards an inescapable corruption, the Dark Summoner is looking fit and fancy-free in this sleek jumper wrap."
    },
    "50011": {
      "name": "Champion Gi",
      "description": "This champion gi provides the comfort and flexibility to kick ass, take names, and get home in time for dinner. Popular amongst masters of Togwan Do."
    },
    "50012": {
      "name": "Fishing Vest",
      "description": "Brought to you by Tom Threads™, this dapper fishing vest is both fashionable and functional. It strikes fear in the hearts of bloaters everywhere."
    },
    "50013": {
      "name": "Padded Archivist Tunic",
      "description": "Stay comfortable and organized with this stylish archivist tunic, meticulously crafted with padded lining for extended wear. Complete the ensemble with a pair of vibrant green gloves that will make any archival task seem trivial."
    },
    "50014": {
      "name": "Doug Hype Fur Coat",
      "description": "Bring the hype with every step you take in these immaculate duds."
    },
    "50015": {
      "name": "Foraging Raiments",
      "description": "Fashioned by Druids and beloved by outdoorsmen, these comfortable raiments truly embrace the elegance of the natural world."
    },
    "50016": {
      "name": "Frost Bloater Suit",
      "description": "Cold as ice and twice as nice, this frozen fish fit channels the least threatening creature in the frozen tundras of Crystalvale."
    },
    "50017": {
      "name": "Gardening Gear",
      "description": "Don this tactical gardening gear to truly embody the qualities of a green thumb: patience, resolve, and the ability to squash errant blubs."
    },
    "50018": {
      "name": "Axolotl Suit",
      "description": "A musty Axolotl suit that has gained popularity amongst certain fringe groups. It is very... pink."
    },
    "50019": {
      "name": "Metisian Toga",
      "description": "This lightweight toga fashioned by the gods transforms its wearer into an agile and extremely comfortable warrior."
    },
    "50020": {
      "name": "Hercules Muscle Suit",
      "description": "Get the body you want without all the effort! This snug rubber muscle suit shows that you're not afraid of a little exercise, even if that exercise happens to be squeezing into a tight rubber muscle suit."
    },
    "50021": {
      "name": "Miner's Overalls",
      "description": "Don't even think about hiding these chic mining overalls underground! Show the surface world you mean business with a style they'll dig."
    },
    "50022": {
      "name": "Fungal Frock",
      "description": "Skip the damp and the dark with this stylish frock modeled after the bright plumage of the infamous manshroom."
    },
    "50023": {
      "name": "God of the Arena Suit",
      "description": "HIS FINS WILL CUT THE SKY, HIS ARMS WILL LIFT THE WORLD! Wear this suit to channel your inner Sharkules, the undisputed God of the Arena."
    },
    "50024": {
      "name": "Yield Guild Garb",
      "description": "Lightweight and stylish armor imbued with a powerful symbol of community and cooperation."
    },
    "50024": {
      "name": "Metisian Gladiator Raiments",
      "description": "The fearless gladiators of the colosseum don these fashionable yet functional raiments to aid them in combat."
    }
  },
  "2": {
    "1": {
      "name": "Wishbone Breastplate",
      "description": "A fine armor fashioned from the feathers of a ravenous rocboc and cured leather."
    },
    "2": {
      "name": "Leather Jerkin",
      "description": "A shabby leather vest with cloth accents for easy mobility."
    },
    "3": {
      "name": "Leather Cingulum",
      "description": "A thick leather belt with bronze studs and plates to protect vital organs."
    },
    "4": {
      "name": "Squire's Medium Armor",
      "description": "Studded leather armor that protects your body without slowing you down."
    },
    "5": {
      "name": "Seawarden's Mail",
      "description": "A gilded leather vest adorned with protective Submersian Coral."
    }
  },
  "3": {
    "1": {
      "name": "Boc-Knight Mail",
      "description": "Fashioned from the feathers and beak of a massive rocboc, this heavy armor allows its wearer to take a beating and keep on flapping."
    },
    "2": {
      "name": "Tin Plate",
      "description": "A shabby (and heavy) plate draped over your torso. It appears to flex as you poke it."
    },
    "3": {
      "name": "Bronze Cuirass",
      "description": "Bronze armor that is molded to look like you have abs. Easier than the gym."
    },
    "4": {
      "name": "Squire's Heavy Armor",
      "description": "Imposing iron armor to protect you on the battlefield."
    },
    "5": {
      "name": "Armor of the Drowned",
      "description": "A rusty heap of platemail with the left arm missing. It serves as a poignant reminder of the unforgiving perils of the sea."
    },
    "6": {
      "name": "Coral Brigandine",
      "description": "A golden breastplate covered in several layers of durable Submersian Coral."
    }
  }
}

```

### Armor Bonuses

Armor Bonus descriptions correspond to the following mappings. The `X` in each mapping represents the corresponding `bonusScalar` value.

```json
{
    1: "Increase Block chance by +X%",
    2: "Increase Spell Block chance by +X%",
    3: "Increase Block damage reduction by X%",
    4: "Increase Spell Block damage reduction by X%",
    5: "Increase Physical Accuracy by +X%",
    6: "Increase Magical Accuracy by +X%",
    7: "Increase Speed by X%",
    8: "Increase Evasion by X%",
    9: "Increase Status Effect Resistance by +X%",
    10: "Increase Banish Resistance by +X%",
    11: "Increase Bleed Resistance by +X%",
    12: "Increase Blind Resistance by +X%",
    13: "Increase Burn Resistance by +X%",
    14: "Increase Chill Resistance by +X%",
    15: "Increase Confuse Resistance by +X%",
    16: "Increase Daze Resistance by +X%",
    17: "Increase Disarm Resistance by +X%",
    18: "Increase Fear Resistance by +X%",
    19: "Increase Intimidate Resistance by +X%",
    20: "Increase Poison Resistance by +X%",
    21: "Increase Pull Resistance by +X%",
    22: "Increase Push Resistance by +X%",
    23: "Increase Silence Resistance by +X%",
    24: "Increase Sleep Resistance by +X%",
    25: "Increase Slow Resistance by +X%",
    26: "Increase Stun Resistance by +X%",
    27: "Increase Taunt Resistance by +X%",
    28: "Increase Critical Hit Multiplier by +X",
    29: "Increase Physical Defense by +X%",
    30: "Increase Magical Defense by +X%",
    31: "Decrease Physical Accuracy by -X%",
    32: "Decrease Magical Accuracy by -X%",
    33: "Increase Physical Damage by +X%",
    34: "Increase Magical Damage by +X%",
    35: "Gain +X% Riposte",
    36: "Double the bonuses above this bonus when equipped with X accessory.",
    37: "Double the bonuses above this bonus when equipped with X off-hand.",
    38: "Double the bonuses above this bonus when equipped with X 1H Sword.",
    39: "Gain X% chance to Retaliate 1 upon receiving physical damage.",
    40: "Gain X Initiative after each successful Block",
    41: "Increase Recovery chance by +X%",
    42: "Double the bonuses above this bonus when equipped with X 2H Sword.",
    43: "Double the bonuses above this bonus when equipped with X 1H Axe.",
    44: "Double the bonuses above this bonus when equipped with X 2H Axe.",
    45: "Double the bonuses above this bonus when equipped with X 1H Mace.",
    46: "Double the bonuses above this bonus when equipped with X 2H Mace.",
    47: "Double the bonuses above this bonus when equipped with X 1H Spear.",
    48: "Double the bonuses above this bonus when equipped with X 2H Spear.",
    49: "Double the bonuses above this bonus when equipped with X Wand.",
    50: "Double the bonuses above this bonus when equipped with X Staff.",
    51: "Double the bonuses above this bonus when equipped with X Gloves.",
    52: "Double the bonuses above this bonus when equipped with X Bow.",
    53: "Double the bonuses above this bonus when equipped with X Dagger.",
    54: "Decrease Speed by X%",
    55:	"Decrease Healing Potency by X%",
    56:	"Critical Hits gain X% Lifesteal",
    57:	"Increase Critical Hit chance by +X%",
    58: "Reduce Channeling times by X%"
}
```
