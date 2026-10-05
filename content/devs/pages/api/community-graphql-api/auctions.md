> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/auctions.md).

# Auctions

## Queries

### `saleAuction`

Returns a single Sale Auction according to its `id`.

```graphql
saleAuction(id: ID!): Auction
```

### `saleAuctions`

Returns multiple Sale Auctions according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
saleAuctions(
  skip: Int
  first: Int
  orderBy: AuctionOrderBy
  orderDirection: OrderDirection
  where: AuctionFilter
): [Auction]!
```

### `assistingAuction`

Returns a single Assisting Auction according to its `id`.

```graphql
assistingAuction(id: ID!): Auction
```

### `assistingAuctions`

Returns multiple Assisting Auctions according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
assistingAuctions(
  skip: Int
  first: Int
  orderBy: AuctionOrderBy
  orderDirection: OrderDirection
  where: AuctionFilter
): [Auction]!
```

### `petAuction`

Returns a single Pet Auction according to its `id`.

```graphql
petAuction(id: ID!): PetAuction
```

### `petAuctions`

Returns multiple Pet Auctions according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
petAuctions(
  skip: Int
  first: Int
  orderBy: AuctionOrderBy
  orderDirection: OrderDirection
  where: AuctionFilter
): [PetAuction]!
```

## Object Types

### `Auction`

The `Auction` object type contains the following fields:

#### Basic Information

* `id`: `ID` - the Auction ID. Crystalvale IDs are padded by `10000000000000` (ten trillion), and Serendale (Klaytn) IDs are padded by `20000000000000` (twenty trillion).
* `seller`: `Profile` - the `Profile` of the Auction seller
* `tokenId`: `Hero` - the `Hero` being Sold/Rented

{% hint style="warning" %}
The `tokenId` field will return **current** values for the Hero, not its historical values at the time of the Auction.
{% endhint %}

* `startingPrice`: `String` - the price set at the start of the Auction in wei
* `endingPrice`: `String` - the price at the end of the Auction in wei
* `duration`: `Int` - the duration of the Auction in seconds; not currently in use
* `startedAt`: `Int` - the Unix timestamp of the Auction start
* `winner`: `Profile` - the `Profile` of the Auction winner; will be pre-filled for Private Auctions, even when `open`
* `endedAt`: `Int` - the Unix timestamp of the Auction end
* `open`: `Boolean` - whether the Auction is open or not
* `purchasePrice`: `String` - the price paid by the `winner` in wei

### `PetAuction`

The `PetAuction` object type contains the following fields:

#### Basic Information

* `id`: `ID` - the Auction ID
* `seller`: `Profile` - the `Profile` of the Auction seller
* `tokenId`: `Pet` - the `Pet` being Sold
* `startingPrice`: `String` - the price set at the start of the Auction in wei
* `endingPrice`: `String` - the price at the end of the Auction in wei
* `duration`: `Int` - the duration of the Auction in seconds; not currently in use
* `startedAt`: `Int` - the Unix timestamp of the Auction start
* `winner`: `Profile` - the `Profile` of the Auction winner; will be pre-filled for Private Auctions, even when `open`
* `endedAt`: `Int` - the Unix timestamp of the Auction end
* `open`: `Boolean` - whether the Auction is open or not
* `purchasePrice`: `String` - the price paid by the `winner` in wei

## Examples

#### Example 1

The first 100 open, non-private Sale Auctions sorted by lowest priced Hero:

```graphql
{
  saleAuctions(first: 100, orderBy: startingPrice, orderDirection: asc, where: {endedAt: null, winner: null}) {
    id
    startingPrice
    open
    tokenId {
      id
      mainClass
    }
    seller {
      name
    }
  }
}
```

{% hint style="info" %}
Using `where: {open: true`} would generally work as well, but a handful of completed Auctions got stuck with the `open` flag set to `True` and will appear in results otherwise.
{% endhint %}

#### Example 2

The five most expensive Pet sales that were successfully completed:

```graphql
{
  petAuctions(first: 5, orderBy: purchasePrice, orderDirection: desc, where: {purchasePrice_not: null}) {
    id
    tokenId {
      id
    }
    purchasePrice
    winner {
      name
    }
  }
}
```

#### Example 3

The entire Sale history (successful or not) of an individual Hero:

```graphql
{
  saleAuctions(where: {tokenId: 420}) {
    id
    startingPrice
    purchasePrice
    endedAt
    seller {
      name
    }
    winner {
      name
    }
  }
}
```

#### Example 4

All successful Rentals (Assisting Auctions) *purchased* by an individual player:

```graphql
{
  assistingAuctions(where: {winner: "0x2E7669F61eA77F02445A015FBdcFe2DE47083E02"}) {
    id
    purchasePrice
    endedAt
    tokenId {
      id
    }
    seller {
      name
    }
  }
}

```

{% hint style="info" %}
Note that the `tokenId` in this example is that of the Hero that was Hired out, not the one it was *paired* with during summoning, or the Id of the Hero summoned by the transaction.&#x20;
{% endhint %}
