> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/bazaar.md).

# Bazaar

## Queries

### `bazaarOrder`

Returns a single Bazaar Order according to its `orderId`.

```graphql
bazaarOrder(orderId: ID!): BazaarOrder
```

### `bazaarOrders`

Returns multiple Bazaar Orders according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
bazaarOrders(
  skip: Int
  first: Int
  orderBy: BazaarOrderOrderBy
  orderDirection: OrderDirection
  where: BazaarOrderFilter
): [BazaarOrder]!
```

### `bazaarTransactions`

Returns multiple Bazaar Transactions according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
bazaarTransactions(
  skip: Int
  first: Int
  orderBy: BazaarTransactionOrderBy
  orderDirection: OrderDirection
  where: BazaarTransactionFilter
): [BazaarTransaction]!
```

## Object Types

### `BazaarOrder`

The `BazaarOrder` object type contains the following fields:

* `orderId`: `ID` - the order ID - Crystalvale IDs are padded by `1000000000000` (one trillion), and Serendale (Klaytn) IDs are padded by `2000000000000` (two trillion).
* `network`: `String` - the network of the order, either `dfk` or `kla`
* `open`: `Boolean` - whether the order is currently open (`true`) or closed (`false`)
* `cancelledStamp`: `Int` - if the order was cancelled, the Unix timestamp of the cancellation
* `createdStamp`: `Int` - the Unix timestamp at which the order was created
* `tokenAddress`: `String` - the contract address of the order token
* `tokenId`: `Int` - for ERC-1155 tokens, the `tokenId`; for ERC-20 tokens, `0`
* `isErc20`: `Boolean` - whether the order token is an ERC-20 token (`true`) or an ERC-1155 token (`false`)
* `side`: `Int` - whether the order is submitted to the buy (`0`) or sell (`1`) side of the order book
* `price`: `String` - the `pricePerUnit (in wei) * 10^12`

{% hint style="info" %}
Note: The JEWEL Price per Unit (in ether) is equal to: `price / 10^30`.
{% endhint %}

* `initialQuantity`: `String` - the quantity of tokens initially submitted with the order
* `remainingQuantity`: `String` - the remaining quantity of items that are unfulfilled in the order
* `baseTokenAddress`: `String` - the contract address of the base token (always JEWEL)
* `owner`: `Profile` - the `Profile` of the owner/creator of the order

### `Bazaar Transaction`

The `BazaarTransaction` object type contains the following fields:

* `orderId`: `ID` - the order ID that is being transacted upon - Crystalvale IDs are padded by `1000000000000` (one trillion), and Serendale (Klaytn) IDs are padded by `2000000000000` (two trillion).
* `network`: `String` - the network of the order/transaction, either `dfk` or `kla`
* `txHash`: `String` - the blockchain transaction hash of the transaction
* `executedStamp`: `Int` - the Unix timestamp at which the transaction was executed
* `quantity`: `String` - the quantity of tokens executed in the transaction
* `price`: `String` - the `pricePerUnit (in wei) * 10^12`

{% hint style="info" %}
Note: The JEWEL Price per Unit (in ether) is equal to: `price / 10^30`.
{% endhint %}

* `side`: `Int` - whether the order being transacted upon is on the buy (`0`) or sell (`1`) side of the order book
* `tokenAddress`: `String` - the contract address of the transacted token
* `tokenId`: `Int` - for ERC-1155 tokens, the `tokenId`; for ERC-20 tokens, `0`
* `initiator`: `Profile` - the `Profile` of the initiator of the transaction
* `owner`: `Profile` - the `Profile` of the owner/creator of the order that is being transacted upon

## Examples

#### Example 1

The first 100 open Bazaar Orders sorted by most recently created:

```graphql
{
  bazaarOrders(
    first: 100,
    orderBy: createdStamp,
    orderDirection: desc,
    where: {
      open: true
    }
  ) {
    orderId
    tokenAddress
    price
    side
  }
}
```

#### Example 2

All Bazaar Transactions for Bloaters executed against buy orders on DFK Chain

```graphql
{
  bazaarTransactions(
    where: {
      network: "dfk",
      side: 0,
      tokenAddress: "0x268CC8248FFB72Cd5F3e73A9a20Fa2FF40EfbA61"
    }
  ) {
    orderId
    price
    executedStamp
    quantity
  }
}
```

{% hint style="info" %}
Note: The results returned will be for *sell* transactions (side `1`), since they are being executed *against* open buy orders (side `0`).
{% endhint %}
