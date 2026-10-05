> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/heroes.md).

# Heroes

## Queries

### `hero`

Returns a single Hero according to its `id`.

```graphql
hero(id: ID!): Hero
```

### `heroes`

Returns multiple Heroes according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
heroes(
  skip: Int
  first: Int
  orderBy: HeroOrderBy
  orderDirection: OrderDirection
  where: HeroFilter
): [Hero]!
```

## Object Types

### `Hero`

The `Hero` object type contains the following fields:

#### Basic Information

* `id`: `ID` - the Hero's ID. Crystalvale Hero IDs are padded by `1000000000000` (one trillion), and Serendale (Klaytn) IDs are padded by `2000000000000` (two trillion).
* `numberId`: `String` - deprecated, as `id` now sorts as `Int.`
* `normalizedId`: `String` - the ID that appears in-game without realm padding.
* `owner`: `Profile` - the current owner of the Hero. Heroes held in the [Tavern contract](/contracts/sales-and-rentals/hero-auction.md) will still return the Profile of their owner.
* `previousOwner`: `Profile` - the most immediate recent owner of the Hero. May return `null` if the Hero has not changed wallets since the Perilous Journey.
* `creator`: `Profile`  - currently not in use and will return `null`
* `network`: `String` - the current network of the Hero; returns `hmy`, `dfk`, or `kla`
* `originRealm`: `String` - the origin realm of the Hero; returns `SER`, `CRY`, or `SER2`
* `statGenes`: `String` - the encrypted string of the Hero's dominant and recessive stat genes
* `visualGenes`: `String` - the encrypted string of the Hero's dominant and recessive visual genes
* `rarity`: `Int` - maps from `0` (Common) to `4` (Mythic)
* `shiny`: `Boolean`&#x20;
* `generation`: `Int`&#x20;
* `firstName`: `Int` - parsed by the Hero First Name tables according to `gender`
* `lastName`: `Int` - parsed by the Hero Last Name table
* `shinyStyle`: `Int` - ranging from `0` to `13`
* `mainClassStr`: `String`&#x20;
* `subClassStr`: `String`
* `professionStr`: `String`

#### Summoning Details

* `summonedTime`: `Int` - the Unix timestamp of the Hero's summoning
* `nextSummonTime`: `Int` - the Unix timestamp of the Hero's next available summon
* `summonerId`: `Hero` - the `Hero` object of the Hero's Summoner
* `assistantId`: `Hero` - the `Hero` object of the Hero's Assistant Summoner
* `summons`: `Int` - the number of summons used by the Hero
* `maxSummons`: `Int` - the maximum number of summons by the Hero; returns `11` for Gen0 Heroes
* `summonsRemaining`: `Int` - the number of summons remaining for the Hero; returns `11` for Gen0 Heroes
* `darkSummoned`: `Bool` - whether the Hero was Dark Summoned or not
* `darkSummonLevels`: `Int` - the maximum level a Hero can attain from Dark Summoning level boosts (Default: 1 for Dark Summoned Heroes; 0 for non-DS Heroes)

#### Hero State

* `staminaFullAt`: `Int` - the Unix timestamp when the Hero's Stamina will be full
* `hpFullAt`: `Int` - the Unix timestamp when the Hero's HP will be full; not currently in use
* `mpFullAt`: `Int` - the Unix timestamp when the Hero's MP will be full; not currently in use
* `level`: `Int`
* `xp`: `Int` - the Hero's current XP toward their next level
* `currentQuest`: `String` - the [contract address](/contracts/quests.md) of the Hero's current quest
* `sp`: `Int` - not currently in use
* `status`: `String` - not currently in use

#### Stats and Stat Growth

**Hero Stats**

* `strength`: `Int`&#x20;
* `intelligence`: `Int`&#x20;
* `wisdom`: `Int`&#x20;
* `luck`: `Int`&#x20;
* `agility`: `Int`&#x20;
* `vitality`: `Int`&#x20;
* `endurance`: `Int`&#x20;
* `dexterity`: `Int`&#x20;
* `hp`: `Int`&#x20;
* `mp`: `Int`&#x20;
* `stamina`: `Int` - the Hero's maximum stamina

**Primary Stat Growth**

{% hint style="info" %}
Stat Growth, HP Growth, and MP Growth Values are returned as integers representing percentage values to two decimal places of precision (e.g. `1725` is 17.25%). To convert these values to percents represented in decimals, divide by 10000 (ten thousand).
{% endhint %}

* `strengthGrowthP`: `Int`&#x20;
* `intelligenceGrowthP`: `Int`&#x20;
* `wisdomGrowthP`: `Int`&#x20;
* `luckGrowthP`: `Int`&#x20;
* `agilityGrowthP`: `Int`
* `vitalityGrowthP`: `Int`
* `enduranceGrowthP`: `Int`
* `dexterityGrowthP`: `Int`

**Secondary Stat Growth**

* `strengthGrowthS`: `Int`
* `intelligenceGrowthS`: `Int`
* `wisdomGrowthS`: `Int`
* `luckGrowthS`: `Int`
* `agilityGrowthS`: `Int`
* `vitalityGrowthS`: `Int`
* `enduranceGrowthS`: `Int`
* `dexterityGrowthS`: `Int`

**HP and MP Growth**

* `hpSmGrowth`: `Int`
* `hpRgGrowth`: `Int`&#x20;
* `hpLgGrowth`: `Int`&#x20;
* `mpSmGrowth`: `Int`
* `mpRgGrowth`: `Int`
* `mpLgGrowth`: `Int`&#x20;

#### Profession Skills

{% hint style="info" %}
Profession Skill values are stored as integers and should be divided by 10 to return the value on the back of the Hero card.
{% endhint %}

* `mining`: `Int`&#x20;
* `gardening`: `Int`
* `foraging`: `Int`
* `fishing`: `Int`

#### Stat Genes

* `hasValidCraftingGenes`: `Bool` - whether the Hero has valid Crafting Genes (e.g. `StatsUnknown1` and `StatsUnknown2` are rolled correctly for crafting)

{% hint style="info" %}
The API only displays the Hero's dominant genes. Recessive stat genes must be parsed from the Hero's `statGenes` string.
{% endhint %}

* `mainClass`: `Int`
* `subClass`: `Int`
* `profession`: `Int`
* `passive1`: `Int`
* `passive2`: `Int`
* `active1`: `Int`
* `active2`: `Int`
* `statBoost1`: `Int`
* `statBoost2`: `Int`
* `statsUnknown1`: `Int`
* `element`: `Int`
* `statsUnknown2`: `Int`

#### Visual Genes

{% hint style="info" %}
The API only displays the Hero's dominant genes. Recessive visual genes must be parsed from the Hero's `visualGenes` string.
{% endhint %}

* `gender`: `Int`
* `headAppendage`: `Int`
* `backAppendage`: `Int`
* `background`: `Int`
* `hairStyle`: `Int`
* `hairColor`: `Int`
* `visualUnknown1`: `Int`
* `eyeColor`: `Int`
* `skinColor`: `Int`
* `appendageColor`: `Int`
* `backAppendageColor`: `Int`
* `visualUnknown2`: `Int`

#### Auction Details

* `assistingAuction`: `Auction` - if the Hero is currently placed for Hire, returns the corresponding `Auction`
* `assistingPrice`: `String` - if the Hero is currently placed for Hire, returns the Hire price in wei
* `saleAuction`: `Auction` - if the Hero is currently placed for Sale, returns the corresponding `Auction`
* `salePrice`: `String` - if the Hero is currently placed for Sale, returns the Sale price in wei
* `privateAuctionProfile`: `Profile` - if the Hero is currently placed for Private Sale or Hire, returns the corresponding `Profile` of the future buyer/renter

#### Perilous Journey

* `pjStatus`: `String` - the Perilous Journey status of the Hero; returns `null`, `SURVIVED`, `ON_JOURNEY`, or `DIED`
* `pjLevel`: `Int` - the Level of the Hero when & if it was sent on the Perilous Journey
* `pjOwner`: `Profile` - the `Profile` of the player who sent the Hero on the Perilous Journey
* `pjClaimStamp`: `Int` - the Unix timestamp of the Hero's Perilous Journey claim transaction

## Examples

#### Example 1

All Heroes owned by an individual user:

```graphql
{
  heroes(where: {owner: "0x2E7669F61eA77F02445A015FBdcFe2DE47083E02"}) {
    id
    mainClass
    rarity
  }
}
```

#### Example 2

All Level 1, Gen0 Heroes currently located on the Harmony network:

```graphql
{
  heroes(where: {generation: 0, level: 1, network: "hmy"}) {
    id
    mainClass
    owner {
      name
    }
  }
}
```

#### Example 3

All Heroes with at least 23 Endurance that died on the Perilous Journey

```graphql
{
  heroes(orderBy: endurance, orderDirection: desc, where: {endurance_gte: 23, pjStatus: "DIED"}) {
    id
    mainClass
    endurance
    pjStatus
  }
}
```

#### Example 4

All Paladins currently for Sale that were summoned with a Might Enhancement Stone (assumes that Primary Strength Growth rate is at least 83%), sorted by ascending Sale Price:

```graphql
{
  heroes(orderBy: salePrice, orderDirection: asc, where: {mainClass: "Paladin", strengthGrowthP_gte: 8300, salePrice_not: null}) {
    id
    rarity
    level
    strengthGrowthP
    statBoost2
    salePrice
  }
}
```

{% hint style="info" %}
Because `Auction` and `PetAuction` queries can't filter on subfields of `tokenId`, use complex `Heroes` and `Pets` queries with a `salePrice_not: null` filter instead.
{% endhint %}

#### Example 5

The Top 3 Heroes of each profession ordered by that profession skill, using *aliases* and *fragments*:

```graphql
query topProfessionHeroes {
  foraging: heroes(first: 3, orderBy: foraging, orderDirection: desc) {
    ...heroDetails
    foraging
  }
  fishing: heroes(first: 3, orderBy: fishing, orderDirection: desc) {
    ...heroDetails
    fishing
  }
  gardening: heroes(first: 3, orderBy: gardening, orderDirection: desc) {
    ...heroDetails
    gardening
  }
  mining: heroes(first: 3, orderBy: mining, orderDirection: desc) {
    ...heroDetails
    mining
  }
}

fragment heroDetails on Hero {
  id
  mainClass
  rarity
  level
  owner {
    name
  }
}
```
