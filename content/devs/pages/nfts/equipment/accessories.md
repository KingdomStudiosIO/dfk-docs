> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/accessories.md).

# Accessories

The AccessoryCore contract holds NFTs and data for items that are used in both the Offhand1 and Offhand2 Hero Equipment slots, as well as the Accessory slot. Both of these item types share the same base types.

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x8E32DDD6B75314aA78fd99952299f21Ff4441839` | `0xc03a74F4707BD3084CbC8736CbF1dE8C57ac4F88` |
| Kaia      | `0xa505EE303D5Ab53AFc392a06f08758fC83A07209` | `0x03b19e0095899D6311f29F054D6590383d9997Cb` |
| Metis     | `0xb16838fc6eAE51FaeA13FBeB655BDe8Bf702d5c2` | `0xCD3BC364173D5961C55b2f26D0d93402976b3b7B` |

### Interface

```solidity
interface IAccessoryCoreDiamond {

    // Events
    event AccessoryCreated(address indexed owner, uint256 indexed accessoryId, tuple(uint256 id, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments) accessory);
    event AccessoryUpdated(address indexed owner, uint256 indexed accessoryId, tuple(uint256 id, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments) accessory);
    event Approval(address indexed owner, address indexed operator, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event DisplayBonusInfoUpdated(address indexed owner, uint256 accessoryId, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo);
    event Paused(address account);
    event StateEnchantmentsUpdated(address indexed owner, uint256 accessoryId, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Unpaused(address account);

    // Functions
    function approve(address operator, uint256 tokenId) payable;
    function balanceOf(address account) view returns (uint256);
    function getAccessories(uint256[] _ids) view returns (tuple(uint256 id, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments)[]);
    function getAccessory(uint256 _id) view returns (tuple(uint256 id, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments));
    function getApproved(uint256 tokenId) view returns (address);
    function getStateEnchantments(uint256 _id) view returns (tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3));
    function getUserAccessories(address _address) view returns (tuple(uint256 id, tuple(uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy, uint8 dye1, uint8 dye2, uint8 bonus1, uint8 bonus2, uint8 bonus3, uint8 bonus4, uint8 bonus5, uint16 bonusScalar1, uint16 bonusScalar2, uint16 bonusScalar3, uint16 bonusScalar4, uint16 bonusScalar5, uint16 uniqueSettings, uint8 restorationCount) displayBonusInfo, tuple(uint64 equippedTo, uint64 equippableAt, uint16 maxDurability, uint16 durability, uint8 maxRepairs, uint8 remainingRepairs, uint8 equipRequirement, uint8 enchantmentType1, uint8 enchantmentType2, uint8 enchantmentType3, uint16 enchantmentScalar1, uint16 enchantmentScalar2, uint16 enchantmentScalar3) stateEnchantments)[]);
    function getUserAccessoryIds(address _address) view returns (uint256[]);
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

}
```

### ABI

{% file src="/files/W37F4p3MxfCZF6ha05uq" %}

## Types

### Accessory

The primary `Accessory` struct contains the item's unique ID on the contract, and two sub-structs that hold the item data.

```solidity
struct Accessory {
    uint256 id;
    DisplayBonusInfo displayBonusInfo;
    StateEnchantments stateEnchantments;
}
```

### DisplayBonusInfo

```solidity
struct DisplayBonusInfo {
    EquipmentType equipmentType;
    uint16 displayId;
    uint8 rarity;
    uint64 craftedBy;
    uint8 dye1;
    uint8 dye2;
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
}
```

<table data-full-width="true"><thead><tr><th width="235.33333333333331">Name</th><th width="188">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>EquipmentType</code></strong></td><td><a href="#equipmenttype"><code>EquipmentType</code></a></td><td>The numeric ID defining the equipment type (e.g. <code>1</code> = Accessory, etc.)</td></tr><tr><td><strong><code>displayId</code></strong></td><td><code>uint16</code></td><td>Defines the item's base appearance</td></tr><tr><td><strong><code>rarity</code></strong></td><td><code>uint8</code></td><td>The item's rarity (<code>0</code>-<code>12</code>). See <a href="/nfts/equipment/shared-equipment-mappings.md#rarity">Rarity</a>.</td></tr><tr><td><strong><code>craftedBy</code></strong></td><td><code>uint64</code></td><td>The Hero ID of the crafting Hero, or a unique ID for dropped items. See <a href="/nfts/equipment/shared-equipment-mappings.md#craftedby">CraftedBy</a>.</td></tr><tr><td><strong><code>dye1</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the primary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye1">Dye1</a>.</td></tr><tr><td><strong><code>dye2</code></strong></td><td><code>uint8</code></td><td>A unique mapping indicating the secondary color variation for some items (<code>0</code> = no dye). See <a href="/nfts/equipment/shared-equipment-mappings.md#dye2">Dye2</a>.</td></tr><tr><td><strong><code>bonus1</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus2</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus3</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus4</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonus5</code></strong></td><td><code>uint8</code></td><td>A mapping of an item bonus ID (<code>0</code> = no bonus)</td></tr><tr><td><strong><code>bonusScalar1</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonusScalar2</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonusScalar3</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonusScalar4</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>bonusScalar5</code></strong></td><td><code>uint16</code></td><td>The scalar value of the corresponding bonus</td></tr><tr><td><strong><code>uniqueSettings</code></strong></td><td><code>uint16</code></td><td>Currently unused</td></tr><tr><td><strong><code>restorationCount</code></strong></td><td><code>uint8</code></td><td>The number of times the item's <code>remainingRepairs</code> have been restored</td></tr></tbody></table>

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

### EquipmentType

```solidity
enum EquipmentType {
    None,
    Accessory,
    Shield,
    Focus
}
```

<table data-full-width="true"><thead><tr><th width="175.33333333333331">Name</th><th width="90">Value</th><th width="149">Description</th><th width="127">Type</th><th>Usable By</th></tr></thead><tbody><tr><td><strong><code>None</code></strong></td><td><code>0</code></td><td>None</td><td>N/A</td><td>N/A</td></tr><tr><td><strong><code>Accessory</code></strong></td><td><code>1</code></td><td>Accessory</td><td>Accessory</td><td><ul><li>All Classes</li></ul></td></tr><tr><td><strong><code>Shield</code></strong></td><td><code>2</code></td><td>Shield</td><td>Offhand</td><td><ul><li>Knight</li><li>Legionnaire</li><li>Paladin</li><li>Warrior</li></ul></td></tr><tr><td><strong><code>Focus</code></strong></td><td><code>3</code></td><td>Focus</td><td>Offhand</td><td><ul><li>Paladin</li><li>Priest</li><li>Sage</li><li>Scholar</li><li>Seer</li><li>Summoner</li><li>Wizard</li></ul></td></tr></tbody></table>

## Mappings

### Equipment Details

The equipment details correspond to a two-layer mapping by `equipmentType` and `displayId`. Most base data can be found on-chain or through the API. Mappings for additional string data are as follows:

```json
{
  "1": {
    "1": {
      "name": "Skali's Eye",
      "description": "An ancient medallion fashioned from the fragments of an emerald blessed by Skali herself. Your vision seems to sharpen while wearing it..."
    },
    "2": {
      "name": "Tal's Curio",
      "description": "A silver medallion worn by Tal's Disciples that wards off evil."
    },
    "3": {
      "name": "Elgrin's Aegis",
      "description": "Elgrin's High Priests were considered invulnerable in battle while wielding enchanted totems. Similarly, this Aegis hardens the skin of anyone who wears it."
    },
    "4": {
      "name": "Secondhand Pants",
      "description": "A fine pair of pre-digested pants. They're a bit loose around the waist."
    },
    "5": {
      "name": "Charger's Mask",
      "description": "Even with decreased visibility, this mask fills the wearer with an overpowering thirst for vengeance. Its style could most appropriately be categorized as \"crazy chic\"."
    },
    "6": {
      "name": "Conical Cap of Remembrance",
      "description": "A ceremonial hat worn at parties, celebrations and, less appropriately, in battle."
    },
    "7": {
      "name": "Gored Gourd",
      "description": "A gourd gored by a bored boar."
    },
    "8": {
      "name": "Ring of Dueling",
      "description": "A lustrous gold ring which surrounds its wearer with a palpable aura of luck."
    },
    "9": {
      "name": "Bronze Champion's Crown",
      "description": "A prized emerald-hued crown awarded to the Duel Champion with the third-longest Champion streak for the season. Heroes adorned with this accessory seem to have greater control over their environments."
    },
    "10": {
      "name": "Silver Champion's Crown",
      "description": "A prized royal blue crown awarded to the Duel Champion with the second-longest Champion streak for the season. Heroes adorned with this accessory seem to have greater control over their environments."
    },
    "11": {
      "name": "Gold Champion's Crown",
      "description": "A prized burgundy crown awarded to the Duel Champion with the longest Champion streak for the season. Heroes adorned with this accessory appear to have greater control over their environments."
    },
    "12": {
      "name": "Champion's Medal",
      "description": "A badge of honor for those brave enough to claim it and a warning for those foolish enough to challenge them."
    },
    "13": {
      "name": "Cooler Head",
      "description": "Its wearers always seem to prevail."
    },
    "14": {
      "name": "Boc-Knight Helm",
      "description": "This protective headgear fashioned from the beak of a mighty rocboc fills its wearer with the inexplicable urge to peck."
    },
    "15": {
      "name": "Ancient Wood Dragon Mask",
      "description": "This lovingly crafted mask celebrates the enduring spirit of Gaia's fierce and primal dragon warriors from ages long past."
    },
    "16": {
      "name": "Bunbun Bonnet",
      "description": "An exquisite bonnet made from the finest faux fur and featured in Yara's latest line of bunbun fashions."
    },
    "17": {
      "name": "Melville's Spectacular Spectacles",
      "description": "A truly spectacular feat of engineering, these unique spectacles provide modest protection from the sun and a myriad of sharp objects."
    },
    "18": {
      "name": "Mister Birthday",
      "description": "An austere cake that exudes confidence and longevity. A strange force seems to invite you to place it atop your head."
    },
    "19": {
      "name": "Swearing Hat",
      "description": "On cold, moonless nights, this hat whispers curses in a long-forgotten tongue."
    },
    "20": {
      "name": "Drunkard's Bandana",
      "description": "This old red rag smells like a brothel and fits like a glove... on your head... like a hat."
    },
    "21": {
      "name": "Octohood",
      "description": "The limp and mangled corpse of an octopilot who, even in death, is still along for the ride."
    },
    "22": {
      "name": "Cowl of Eternal Hunger",
      "description": "Wearing this hood makes you feel hollow and... desperately hungry."
    },
    "23": {
      "name": "Crown of Submersia",
      "description": "Only legendary champions of the Colosseum receive the coveted Crown of Submersia, an intricate coral crown reflecting the pioneering spirit of Submersians past and present."
    },
    "24": {
      "name": "Shellmet",
      "description": "You can take the Hero out of the egg but you can't take the egg off the Hero."
    },
    "25": {
      "name": "Cerulean Helm of Ascension",
      "description": "A cerulean ceremonial headdress worn by the priestesses of ascension and those who follow their teachings."
    },
    "50000": {
      "name": "Bloater Mask",
      "description": "This iconic fish mask exudes an air of sophistication and mystique. No bloaters were harmed in the making of this item."
    },
    "50001": {
      "name": "Plague Mask",
      "description": "A clever mask designed to keep the plague out and the good vibes in."
    },
    "50002": {
      "name": "Super Blub Defender: Red Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Red Defender, who is known for his bravery, virtue, and mastery of Togwan-do."
    },
    "50003": {
      "name": "Super Blub Defender: Pink Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Pink Defender, who is known for her biting wit, nibbling charm, and chomping mastication."
    },
    "50004": {
      "name": "Super Blub Defender: Blue Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Blue Defender, who is known for his honesty, compassion, and excellent taste in music."
    },
    "50005": {
      "name": "Super Blub Defender: Yellow Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Yellow Defender, who is known for her lucky dodges, uncanny lunges, and otherwordly Bloater cakes."
    },
    "50006": {
      "name": "Super Blub Defender: Black Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Black Defender, who is known for his firm handshake, next-level stealth, and unprompted backflips."
    },
    "50007": {
      "name": "Super Blub Defender: Green Mask",
      "description": "A mask made by the Super Blub Defender (SBD) Fan Club. This one represents the Green Defender, who is known for his boastfulness, gambling acumen, and violently unfunny dad jokes."
    },
    "50008": {
      "name": "Yellow Panther Mask",
      "description": "The mysterious Yellow Panther Clan lives and fights in the shadows. Don their ceremonial mask and join the movement."
    },
    "50009": {
      "name": "Chef Hat",
      "description": "A chef should always be prepared for furious fighting or fierce fileting. This is the perfect hat for adventures both in and out of the kitchen."
    },
    "50010": {
      "name": "Dark Summoner Mask",
      "description": "When they're not sacrificing Heroes in a nonstop stream of dark rituals that push Gaia further and further towards an inescapable corruption, the Dark Summoner is looking fit and fancy-free in this sleek mask wrap."
    },
    "50011": {
      "name": "Rolando Mask",
      "description": "Show your Rolando pride by walking a mile in his head! Perfect for adding a ribbit of fun to any occasion."
    },
    "50012": {
      "name": "Doug Hype Shades",
      "description": "Get a fresh view of the world with these stylish, hype-tinted glasses."
    },
    "50013": {
      "name": "Big Red Bear Head",
      "description": "It's big, it's red, it's beautiful! Don this furry fashion statement before battle for a healthy dose of ursine intimidation."
    },
    "50014": {
      "name": "Frost Bloater Mask",
      "description": "Cold as ice and twice as nice, this frozen fish mask channels the least threatening creature in the frozen tundras of Crystalvale."
    },
    "50015": {
      "name": "Axolotl Mask",
      "description": "A musty Axolotl mask with bulging eyes that has gained popularity amongst certain fringe groups. It is very... pink."
    },
    "50016": {
      "name": "Crown of Wisdom",
      "description": "A laurel leaf crown of immense power that imbues wisdom and light."
    },
    "50017": {
      "name": "Mannish Cap",
      "description": "Instead of letting a manshroom get inside your head, wear its head on your head! Be the fungi you've always dreamt of being."
    },
    "50018": {
      "name": "God of the Arena Mask",
      "description": "This mask contains the sacred visage of the God of the Arena himself, the venerable and forever respected Sharkules."
    },
    "50019": {
      "name": "Metisian Gladiator Helm",
      "description": "The most skilled gladiators in the colosseum wear this classic Metisian helmet to strike fear into the hearts of their foes."
    }
  },
  "2": {
    "1": {
      "name": "Yolked Bockler",
      "description": "A mysterious shield whose dubious origin raises questions about its durability and usefulness."
    },
    "2": {
      "name": "Cutting Board",
      "description": "Repurposed wooden planks trying to pass as a shield."
    },
    "3": {
      "name": "Bronze Shield",
      "description": "A bronze round-shield with gaps designed to allow a spear or sword to pass through comfortably."
    },
    "4": {
      "name": "Squire's Shield",
      "description": "A simple heater shield made of iron. Blocks everything but criticism."
    },
    "5": {
      "name": "Reefwall",
      "description": "A sturdy yet light shield made from interlocking coral and supported by a gold-plated frame."
    }
  }
}

```

### Accessory Bonuses

Accessory Bonus descriptions correspond to the following mappings. The `X` in each mapping represents the corresponding `bonusScalar` value.

{% hint style="info" %}
For Bonuses with both `X` and `Y` values, these are determined by using bitwise operators against the `uint16` `bonusScalar` value as follows:

* `X = bonusScalar & 255`
* `Y = bonusScalar >> 8`
  {% endhint %}

```json
{
    1: "Increase Physical Accuracy by +X%",
    2: "Increase Magical Accuracy by +X%",
    3: "Increase Block chance by +X%",
    4: "Increase Spell Block chance by +X%",
    5: "Increase Speed by X%",
    6: "Increase Evasion by X%",
    7: "Increase Status Effect Resistance by +X%",
    8: "Increase Banish Resistance by +X%",
    9: "Increase Bleed Resistance by +X%",
    10: "Increase Blind Resistance by +X%",
    11: "Increase Burn Resistance by +X%",
    12: "Increase Chill Resistance by +X%",
    13: "Increase Confuse Resistance by +X%",
    14: "Increase Daze Resistance by +X%",
    15: "Increase Disarm Resistance by +X%",
    16: "Increase Fear Resistance by +X%",
    17: "Increase Intimidate Resistance by +X%",
    18: "Increase Poison Resistance by +X%",
    19: "Increase Pull Resistance by +X%",
    20: "Increase Push Resistance by +X%",
    21: "Increase Silence Resistance by +X%",
    22: "Increase Sleep Resistance by +X%",
    23: "Increase Slow Resistance by +X%",
    24: "Increase Stun Resistance by +X%",
    25: "Increase Taunt Resistance by +X%",
    26: "Increase Critical Hit Multiplier by +X",
    27: "Increase Physical Defense by +X%",
    28: "Increase Magical Defense by +X%",
    29: "Decrease Physical Accuracy by -X%",
    30: "Decrease Magical Accuracy by -X%",
    31: "Increase Physical Damage by +X%",
    32: "Increase Magical Damage by +X%",
    33: "Gain +X% Riposte",
    34:	"Increase ATTACK by +X%",
    35:	"Increase SPELL by +X%",
    36: "Gain Ability: X",
    37: "Increase Physical Damage Reduction by +X%",
    38: "Increase Magical Damage Reduction by +X%",
    39: "Gain X% chance to reduce the battle budget cost of any consumable used by this Hero by 2.",
    230: "Add +X to Duel Score when Dueling",
    231: "Gain a roll for +X-Y added to Duel Score when Dueling",
    232: "Gain +X% chance for matching background to appear when defending Duel champion",
    233: "Add +X to Duel Score when defending Duel champion",
    234: "Gain a roll for +X-Y added to Duel Score when defending Duel champion"
}
```

### Offhand Bonuses

Offhand Bonus descriptions correspond to the following mappings. The `X` in each mapping represents the corresponding `bonusScalar` value.

```json
{
    1: "Increase Block chance by +X%",
    2: "Increase Block damage reduction by +X%",
    3: "Increase Spell Block chance by +X%",
    4: "Increase Spell Block damage reduction by +X%",
    5: "Gain +X% Riposte",
    6: "Increase P.DEF by X",
    7: "Increase M.DEF by X",
    8: "Increase Pull Resistance by +X%",
    9: "Increase Push Resistance by +X%"
}
```
