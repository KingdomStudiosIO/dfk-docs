> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/pets.md).

# Pets

## Queries

### `pet`

Returns a single Pet according to its `id`.

```graphql
pet(id: ID!): Pet
```

### `pets`

Returns multiple Pets according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
pets(
  skip: Int
  first: Int
  orderBy: PetOrderBy
  orderDirection: OrderDirection
  where: PetFilter
): [Pet]!
```

## Object Types

### `Pet`

The `Pet` object type contains the following fields:

#### Basic Information

* `id`: `ID` - the Pet's ID. Crystalvale Pet IDs are padded by `1000000000000` (one trillion), and Serendale (Klaytn) IDs are padded by `2000000000000` (two trillion).
* `normalizedId`: `String` - the ID that appears in-game without realm padding.
* `owner`: `Profile` - the current owner of the Pet. Pets held in the [PetAuction contract](/contracts/sales-and-rentals/pet-auction.md) will still return the Profile of their owner.
* `previousOwner`: `Profile` - the most immediate recent owner of the Pet. Will return `null` if the Pet has not changed wallets since hatching.
* `creator`: `Profile`  - the player who originally hatched the Pet
* `createdAt`: `Int` -  the Unix timestamp of the Pet's hatching
* `originId`: `Int` - deprecated
* `originRealm`: `String` - the origin realm of the Pet; returns `SER1`, `CRY`, or `SER2`
* `currentRealm`: `String` - the current realm of the Pet; returns `SER1`, `CRY`, or `SER2`
* `name`: `String` - not currently in use
* `season`: `Int` - returns the Pet's Season number
* `eggType`: `Int` - returns `0` for Blue Egg and `1` for Grey Egg. The Pet's `eggType` determines the type of Profession Bonus that it will receive.
* `rarity`: `Int` - maps from `0` (Common) to `4` (Mythic)
* `element`: `Int` - maps from `0` to `7` - multiply by 2 and use the Hero element mapping. The Pet's `element` determines the type of Crafting Bonus that it may receive.
* `appearance`: `Int` - a mapping of the appearance of the Pet; combines with `eggType` and `season` to determine Name, Variant, Family, and other details
* `background`: `Int` - a mapping of the background image for the Pet
* `shiny`: `Boolean` - whether the Pet card is Shiny or not

#### Bonuses

{% hint style="info" %}
Until specific bonuses are implemented, the number of stars on the Pet card maps as follows for the Rarity of each bonus:

* `0`: no stars / no bonus
* `1`: 1 star  / Common bonus
* `80`: 2 stars / Rare bonus
* `160`: 3 stars / Mythic bonus
  {% endhint %}

{% hint style="info" %}
The three `Scalar` fields for `craftBonus` and `combatBonus` are not currently in use, but will indicate the scale of the specific bonus.
{% endhint %}

* `bonusCount`: `Int` - the number of bonuses that the Pet received

{% hint style="info" %}
The `profBonus` field is padded by `10000 * eggType`, as outlined [here](/nfts/pets.md#gathering-profession-bonus).
{% endhint %}

* `profBonus`: `Int`
* `profBonusScalar`: `Int`

{% hint style="info" %}
The `craftBonus` field is padded by `10000 * element`, as outlined [here](/nfts/pets.md#crafting-bonus).
{% endhint %}

* `craftBonus`: `Int`
* `craftBonusScalar`: `Int`
* `combatBonus`: `Int`
* `combatBonusScalar`: `Int`

#### Pet State

* `hungryAt`: `Int` - the Unix timestamp when the Pet will need to be fed to provide its bonuses to a Hero; not currently in use
* `equippableAt`: `Int` - the Unix timestamp when the Pet will be available for equipping to a Hero; not currently in use
* `equippedTo`: `Hero` - the Hero that the Pet is equipped to; not currently in use
* `fedBy`: `Profile` - the Profile that last fed the Pet
* `foodType`: `Int` - range of `0-4`, indicating Pet Treat Type (`0`: Regular; `1`: Premium), and presence of the Premium Provisions Power-Up (`2`: Regular + PU; `3`: Premium + PU)

#### Auction Details

* `saleAuction`: `PetAuction` - if the Pet has been placed for Sale, returns the corresponding `PetAuction`
* `salePrice`: `String` - if the Pet has been placed for Sale, returns the Sale price in wei
* `privateAuctionProfile`: `Profile` - if the Pet has been placed for Private Sale, returns the corresponding `Profile` of the future buyer

## Examples

#### Example 1

All Uncommon Pets hatched from Grey Eggs with a two-star Armorsmithing bonus:

```graphql
{
  pets(where: {eggType: 1, element: 2, craftBonus: 80}) {
    id
    appearance
    rarity
    profBonus
    craftBonus
    combatBonus
  }
}
```

#### Example 2

All Pets from the Penguin family (by `eggType`/`Appearance`) with the "Vithraven Outskirts" background, sorted by ascending Sale Price:

```graphql
{
  pets(orderBy: salePrice, where: {eggType: 0, appearance_in: [19, 60, 61, 62, 63, 88, 101, 126], background: 3}) {
    id
    salePrice
    rarity
    appearance
    owner {
      name
    }
  }
}
```

#### Example 3

The 10 lowest-priced Rare Pets for Sale, sorted by ascending Sale Price:

```graphql
{
  pets(first:10, orderBy:salePrice, where: {rarity: 2, salePrice_not:null}) {
    id
    salePrice
    eggType
    profBonus
    craftBonus
    combatBonus
  }
}
```

{% hint style="info" %}
Because `Auction` and `PetAuction` queries can't filter on subfields of `tokenId`, use complex `Heroes` and `Pets` queries with a `salePrice_not: null` filter instead.
{% endhint %}
