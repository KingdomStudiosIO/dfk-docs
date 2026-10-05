> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/pets.md).

# Pets

{% hint style="info" %}
**ERC721:** The PetCore contract is based on the ERC721 standard. For more detailed information please view the documentation by OpenZeppelin. <https://docs.openzeppelin.com/contracts/4.x/erc721>
{% endhint %}

## Contracts

{% hint style="warning" %}
The **PetCore** contract was upgraded to an ERC-2535 Diamond in May 2023 with the addition of new items to the Pet struct. At this time, methods and events using the new struct began to migrate to V2 versions. Legacy methods have been left in place, but will not return the new data.

The contract addresses did not change during this upgrade.
{% endhint %}

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x1990F87d6BC9D9385917E3EDa0A7674411C3Cd7F` | `0x5C827fa180B26d61DA3c89DD39D1b945DfBA7Dda` |
| Kaia      | `0x6362b205b539afb5FC369277365441c1dC6fAa28` | `0x71901994A6269aC8F787F70FAC7c5783C1e0B0B2` |
| Metis     | `0x74cE6E7cEF79F5ae6363c6CB1F6c2b528E92D7c7` | `0x0FAD77111b78B1dF31B12522Fb9298171bb2c55f` |

### Interfaces

<pre class="language-solidity"><code class="lang-solidity">interface IPetCoreDiamond {

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event PetHatched(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) pet);
    event PetHatchedV2(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo, address fedBy, uint8 foodType) pet);
    event PetUpdated(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) pet);
    event PetUpdatedV2(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo, address fedBy, uint8 foodType) pet);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

    function approve(address to, uint256 tokenId);
    function balanceOf(address owner) view returns (uint256);
    function baseHungryTime() view returns (uint64);
    function bonusCount() view returns (uint32);
    function getApproved(uint256 tokenId) view returns (address);
    function getDuelPetData(uint256[] _heroIds) view returns (uint256[], uint8[]);
    function getPet(uint256 _id) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo));
    function getPetQuestData(uint256 _id) view returns (tuple(uint64 hungryAt, uint8 rarity, uint8 profBonus, uint8 profBonusScalar, uint8 eggType, uint8 foodType));
    function getPetV2(uint256 _id) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo, address fedBy, uint8 foodType));
    function getPetsV2(uint256[] _ids) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo, address fedBy, uint8 foodType)[]);
    function getUserPets(address _address) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo)[]);
    function getUserPetsV2(address _address) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo, address fedBy, uint8 foodType)[]);
    function gold() view returns (address);
    function heroCore() view returns (address);
    function heroToPet(uint256) view returns (uint256);
    function isApprovedForAll(address owner, address operator) view returns (bool);
    function name() view returns (string);
    function nextPetId() view returns (uint256);
    function ownerOf(uint256 tokenId) view returns (address);
    function paused() view returns (bool);
    function powerUpManager() view returns (address);
    function safeTransferFrom(address from, address to, uint256 tokenId);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data);
    function setApprovalForAll(address operator, bool approved);
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function transferFrom(address from, address to, uint256 tokenId);

    // Pet Feeding
    event BonusTreatsAwarded(address indexed player, uint8 treatType, uint256 quantity);
    event PetFed(address indexed fedBy, uint256 petId, uint8 foodType, uint256 hungryAt);
    event TreatCrafted(address indexed player, uint8 treatType, uint256 quantity, address item1, address item2);

    function PREMIUM_PROVISIONS() view returns (uint256);
    function baseHungryTime() view returns (uint64);
    function craftTreats(tuple(uint8 treatType, uint256 treatQuantity, address item1, address item2)[] _treatData);
    function feedPets(tuple(uint256 petId, uint8 treatType)[] _feedData);
    function getPetFedState(uint256 _id) view returns (bool);
<strong>    function isHeroPetHungry(uint256 _heroId) view returns (bool);
</strong>    function isPetHungry(uint256 _petId) view returns (bool);
    function treatInfo(uint8) view returns (address treatAddress, uint256 goldCost, bool isActive);
    function treatIngredientRequirements(uint8, address) view returns (uint256);
    
}
</code></pre>

### ABIs

{% file src="/files/qyrtM4v41yHML1pYf6ba" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name    | Mainnet                                      | Testnet                                      |
| ------- | -------------------------------------------- | -------------------------------------------- |
| PetCore | `0xAC9AFb5900C8A27B766bCad3A37423DC0F4C22d3` | `0x63F0AFcb278fD6A1f8A9Fa679880f22B580B18D2` |

### Interfaces

```solidity
interface IPetCore {

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event PetHatched(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) pet);
    event PetUpdated(address indexed owner, uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) pet);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    
    function approve(address to, uint256 tokenId);
    function balanceOf(address owner) view returns (uint256);
    function getApproved(uint256 tokenId) view returns (address);
    function getPet(uint256 _id) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo));
    function getUserPets(address _address) view returns (tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo)[]);
    function hatchPet(tuple(uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny) _petOptions, address owner) returns (uint256);
    function isApprovedForAll(address owner, address operator) view returns (bool);
    function name() view returns (string);
    function nextPetId() view returns (uint256);
    function ownerOf(uint256 tokenId) view returns (address);
    function paused() view returns (bool);
    function safeTransferFrom(address from, address to, uint256 tokenId);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data);
    function setApprovalForAll(address operator, bool approved);
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function transferFrom(address from, address to, uint256 tokenId);
    function updatePet(tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) _pet);

}
```

### ABIs

{% file src="/files/nijYuQpDTEHDbA5ScMa5" %}

## Data Tables

Use these tables to parse the blockchain and API Pet data.

### Pet Info

#### Egg Type

```json
{
    0: "Blue Pet Egg",
    1: "Grey Pet Egg",
    2: "Green Pet Egg",
    3: "Yellow Pet Egg",
    4: "Golden Pet Egg"
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

#### Element

```json
{
    0: "Fire",
    1: "Water",
    2: "Earth",
    3: "Wind",
    4: "Lightning",
    5: "Ice",
    6: "Light",
    7: "Dark"
}
```

#### Appearance / Family / Variant

{% file src="/files/Fw98y2STi594t6UBZ7fc" %}

{% file src="/files/gHLansDD63cZLruTjbH3" %}

{% file src="/files/lGNmlqvxoUPkgX2SflP9" %}

#### Background

```json
{
    0: "Stillwood Meadow",
    1: "Forest Trail",
    2: "Swamp of Eoxis",
    3: "Vithraven Outskirts",
    4: "Path of Fire",
    5: "Reyalin Mountain Pass",
    6: "Adelyn Side Street",
    7: "Bloater Falls",
    8: "Haywood Farmstead",
    9: "Inner Grove",
    10: "Vuhlmira Ruins"
}
```

### Pet Bonuses

#### Bonus Rarity

```json
{
    1: "Common",
    80: "Rare",
    160: "Mythic"
}
```

#### Gathering Profession Bonus Type

Key mapping is by [Egg Type](#egg-type).

```json
{
    0: "Fishing",
    1: "Foraging",
    2: "Gardening"
}
```

#### Gathering Profession Bonus

{% hint style="warning" %}
Note that in the API, these values are padded by `10000 * eggType`.
{% endhint %}

```json
{
    // Blue Pet Bonuses
    0: { 
        1: "Unrevealed",
        80: "Unrevealed",
        160: "Unrevealed",
        2: "Efficient Angler",
        81: "Efficient Angler",
        161: "Efficient Angler",
        3: "Bountiful Catch",
        82: "Bountiful Catch",
        162: "Bountiful Catch",
        4: "Keen Eye",
        83: "Keen Eye",
        163: "Keen Eye",
        5: "Fortune Seeker",
        84: "Fortune Seeker",
        164: "Fortune Seeker",
        6: "Clutch Collector",
        85: "Clutch Collector",
        165: "Clutch Collector",
        7: "Runic Discoveries",
        86: "Runic Discoveries",
        166: "Runic Discoveries",
        8: "Skilled Angler",
        87: "Skilled Angler",
        167: "Skilled Angler",
        9: "Astute Angler",
        88: "Astute Angler",
        168: "Astute Angler",
        10: "Bonus Bounty",
        89: "Bonus Bounty",
        169: "Bonus Bounty",
        11: "Gaia's Chosen",
        90: "Gaia's Chosen",
        170: "Gaia's Chosen",
        171: "Innate Angler"
    },

    // Grey Pet Bonuses
    1: {
        1: "Unrevealed",
        80: "Unrevealed",
        160: "Unrevealed",
        2: "Efficient Scavenger",
        81: "Efficient Scavenger",
        161: "Efficient Scavenger",
        3: "Bountiful Haul",
        82: "Bountiful Haul",
        162: "Bountiful Haul",
        4: "Keen Eye",
        83: "Keen Eye",
        163: "Keen Eye",
        5: "Fortune Seeker",
        84: "Fortune Seeker",
        164: "Fortune Seeker",
        6: "Clutch Collector",
        85: "Clutch Collector",
        165: "Clutch Collector",
        7: "Runic Discoveries",
        86: "Runic Discoveries",
        166: "Runic Discoveries",
        8: "Skilled Scavenger",
        87: "Skilled Scavenger",
        167: "Skilled Scavenger",
        9: "Astute Scavenger",
        88: "Astute Scavenger",
        168: "Astute Scavenger",
        10: "Bonus Bounty",
        89: "Bonus Bounty",
        169: "Bonus Bounty",
        11: "Gaia's Chosen",
        90: "Gaia's Chosen",
        170: "Gaia's Chosen",
        171: "Innate Scavenger"
    },

    // Green Pet Bonuses
    2: {
        1: "Unrevealed",
        80: "Unrevealed",
        160: "Unrevealed",
        2: "Efficient Greenskeeper",
        81: "Efficient Greenskeeper",
        161: "Efficient Greenskeeper",
        3: "Bountiful Harvest",
        82: "Bountiful Harvest",
        162: "Bountiful Harvest",
        4: "Second Chance",
        83: "Second Chance",
        163: "Second Chance",
        5: "Clutch Collector",
        84: "Clutch Collector",
        164: "Clutch Collector",
        6: "Runic Discoveries",
        85: "Runic Discoveries",
        165: "Runic Discoveries",
        7: "Skilled Greenskeeper",
        86: "Skilled Greenskeeper",
        166: "Skilled Greenskeeper",
        8: "Astute Greenskeeper",
        87: "Astute Greenskeeper",
        167: "Astute Greenskeeper",
        9: "Bonus Bounty",
        88: "Bonus Bounty",
        168: "Bonus Bounty",
        10: "Gaia's Chosen",
        89: "Gaia's Chosen",
        169: "Gaia's Chosen",
        90: "Power Surge",
        170: "Power Surge",
        171: "Innate Greenskeeper"
    }
}
```

#### Crafting Bonus Type

Key mapping is by [Element](#element).

```json
{  
    0: "Blacksmithing",
    1: "Goldsmithing",
    2: "Armorsmithing",
    3: "Woodworking",
    4: "Leatherworking",
    5: "Tailoring",
    6: "Enchanting",
    7: "Alchemy"
}
```

#### Crafting Bonus

{% hint style="warning" %}
Note that in the API, these values are padded by `10000 * element`.
{% endhint %}

```json
{
    0: "None",
    1: "Undefined Common",
    80: "Undefined Rare",
    160: "Undefined Mythic"
}
```

### Pet Lore

#### Pet Descriptions

{% file src="/files/7cSaVVINCNxrIVf41yWR" %}

#### Pet Rarity Descriptors

{% file src="/files/nBgapj0DYEAPsaYFwAMI" %}

## Related Contracts

{% content-ref url="/pages/6QBc31Mb4Pslz5weaknb" %}
[Pet Hatching](/contracts/summoning/pet-hatching.md)
{% endcontent-ref %}

{% content-ref url="/pages/GBOgX1xoW4ICk9sTxtfU" %}
[Pet Exchange](/nfts/pets/pet-exchange.md)
{% endcontent-ref %}

{% content-ref url="/pages/5JO76C8WtGImBJRWyS2t" %}
[Pet Auction](/contracts/sales-and-rentals/pet-auction.md)
{% endcontent-ref %}

{% content-ref url="/pages/eN20ge2suvEWs00kkNM8" %}
[Pet Eggs](/collections/pet-eggs.md)
{% endcontent-ref %}

{% content-ref url="/pages/Nwx7cA57nGOLKaHfZwvN" %}
[Nutritionist](/crafting/nutritionist.md)
{% endcontent-ref %}

{% content-ref url="/pages/mI7ULr73G0wwaljyEWQF" %}
[Pet Treats](/collections/pet-treats.md)
{% endcontent-ref %}
