> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/exchanges/the-bazaar.md).

# The Bazaar

An order book decentralized exchange (DEX)

## Introduction

The Bazaar is a decentralized exchange (DEX) that uses an order book instead of liquidity pools to manage trades. Players can create buy and sell orders for any ERC-20 or ERC-1155 token at the price point of their choosing, which will be filled immediately when able, or placed on the order book for fulfillment later.

All items or tokens traded in the Bazaar use [JEWEL](/tokens/ecosystem-token.md) as the base currency on all realms.

### Orders

[Orders](#order) are the center of the Bazaar contract, created using the [`makeOrders`](#makeorders) function and stored on the contract while they are open. Orders can be created on the buy or sell [side](#side) of the contract, and are executed when an order on the other side meets an existing order's price. Orders at the same price point are executed on a first-in-first-out basis. Completed orders are deleted from the contract, and must be viewed either as [`OrderExecuted`](#orderexecuted) events or as [`BazaarTransactions`](/api/community-graphql-api/bazaar.md#bazaartransactions) in the API.

### Quantity

The Bazaar is token agnostic, and is built to work with tokens of any decimal amount. The `quantity` of an order is entered and stored in `wei`. For DFK's many zero-decimal tokens, a single token will be a single digit. For 18-decimal tokens, all digits must be entered.

{% hint style="info" %}
**Examples**

* 1 Greater Might Stone: `1`
* 123.456 DFK Gold: `123456`
* 10.5 CRYSTAL: `10500000000000000000`
  {% endhint %}

### Price

The price of an order is entered and stored in different ways. Since all orders are placed in JEWEL, the price per unit must be expressed in `wei` (18 digits).

The [`makeOrders`](#makeorders) function requires an input of `totalPrice`, calculated as follows:

* `unitPrice (in wei) * quantity (in wei) / 10^(tokenDecimals)`

Once stored on the contract and in the API, the token price (*per unit, not total*) is multiplied by the contract's `PRICE_FACTOR`, expressed as:

* &#x20;`unitPrice (in wei) * 10^12`

{% hint style="info" %}
**Examples**

* 1 Greater Might Stone @ 250 JEWEL
  * Order Input: `250000000000000000000 * 1 / 10^0 = 250000000000000000000`
  * Held in Contract as: `250000000000000000000 * 10^12 = 250000000000000000000000000000000`
* 123.456 DFK Gold @ 0.001 JEWEL / each
  * Order Input: `1000000000000000 * 123456 / 10^3 = 123456000000000000`
  * Held in Contract as: `1000000000000000 * 10^12 = 1000000000000000000000000000`
* 10.5 CRYSTAL @ 0.16 JEWEL / each
  * Order Input: `160000000000000000 * 10500000000000000000 / 10^18 = 1680000000000000000`
  * Held in Contract as: `160000000000000000 * 10^12 = 160000000000000000000000000000`
    {% endhint %}

### Restrictions

There are a number of restrictions on how orders can be placed:

#### Precision

By default, the price per unit of an order is limited to 4 digits of precision. Exceeding this limit will cause the transaction to revert.

{% hint style="info" %}
**Examples**

* ✅ 123.4 JEWEL
* ✅ 0.000001234 JEWEL
* ✅ 1234000 JEWEL
* ❌ 123.04 JEWEL
* ❌ 1.000000001 JEWEL
* ❌ 123402 JEWEL
  {% endhint %}

Some tokens with larger prices relative to JEWEL have a `precisionOverride` set. Currently these tokens include **Bitcoin** and **Ethereum**, which are set to `6` digits of precision.

#### Minimum & Maximum Order Value

Each Order has a minimum and maximum limit to the total value of the order, that is, the `pricePerUnit * quantity + fee`. Exceeding these limits will cause the transaction to revert.

* **Minimum Order Value**: 0.0001 JEWEL (`100000000000000 wei`)
* **Maximum Order Value**: 50,000,000 JEWEL (`50000000000000000000000000 wei`)

## Contract

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x902F2b740bC158e16170d57528405d7f2a793Ca2` | `0x767A9114B61fb14732Cfca1ccA2d9FD309c74E93` |
| Metis     | `0x4cB622C886c89c0472C0056A7C4c929c98c35D14` | `0xa678d193fEcC677e137a00FEFb43a9ccffA53210` |

### Interface

```solidity
interface IBazaarDiamond {

    // Events
    event DefaultFeeSet(uint8 side, uint256 fee);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event MarketFeeSet(address token, uint8 side, uint256 fee);
    event OrderAdded(uint256 indexed orderId, address indexed token, address baseToken, uint256 tokenId, bool isERC20, uint8 side, address indexed sender, uint256 price, uint256 quantity);
    event OrderCancelled(uint256 orderId, tuple(uint256 orderId, address token, uint256 tokenId, bool isERC20, uint8 side, address owner, uint256 price, uint256 quantity, uint256 feePercent) order);
    event OrderExecuted(uint256 indexed orderId, address indexed initiator, uint256 quantity, uint256 remainingQuantity, uint256 price);

    // Static Functions
    function MIN_ORDER_VALUE() view returns (uint256);
    function PRICE_FACTOR() view returns (uint256);
    function defaultPrecision() view returns (uint256);
    function maxTotalPrice() view returns (uint256);
    function nextOrderId() view returns (uint256);
    function paused() view returns (bool);
    function powerUpManagerAddress() view returns (address);
    function precisionOverride(address) view returns (uint256);
    function useWeth() view returns (bool);

    // Read-Only Functions
    function calcFee(address _token, uint8 _side, uint256 _quantity) view returns (uint256);
    function calcFeePercent(address _user, address _token, uint8 _side) view returns (uint256);
    function getBestOrder(address _token, uint256 _tokenId, uint8 _side) view returns (tuple(uint256 orderId, address token, uint256 tokenId, bool isERC20, uint8 side, address owner, uint256 price, uint256 quantity, uint256 feePercent));
    function getBestOrderId(address _token, uint256 _tokenId, uint8 _side) view returns (uint256, uint256);
    function getBestOrders(address _token, uint256 _tokenId) view returns (tuple(uint256 orderId, address token, uint256 tokenId, bool isERC20, uint8 side, address owner, uint256 price, uint256 quantity, uint256 feePercent) buyOrder, tuple(uint256 orderId, address token, uint256 tokenId, bool isERC20, uint8 side, address owner, uint256 price, uint256 quantity, uint256 feePercent) sellOrder);
    function getCostForQuantity(address _token, uint256 _tokenId, uint8 _side, uint256 _quantity) view returns (uint256, uint256);
    function getNumPrices(address _token, uint256 _tokenId, uint8 _side) view returns (uint256);
    function getOrderIdsAtPrice(address _token, uint256 _tokenId, uint8 _side, uint256 _price) view returns (uint256[], uint256[]);
    function getOrders(uint256[] _orderIds) view returns (tuple(uint256 orderId, address token, uint256 tokenId, bool isERC20, uint8 side, address owner, uint256 price, uint256 quantity, uint256 feePercent)[]);
    function getPrices(address _token, uint256 _tokenId, uint8 _side) view returns (uint256[]);
    function getQuantityUpToPrice(address _token, uint256 _tokenId, uint8 _side, uint256 _price) view returns (uint256);
    function getUserOpenOrderIds(address _user) view returns (uint256[]);

    // State-Changing Functions
    function cancelOrders(uint256[] _orderIds);
    function editOrders(tuple(uint256 orderId, uint256 newTotalPrice, uint256 newQuantity)[] _inputs) payable;
    function makeOrders(tuple(address token, uint256 tokenId, uint8 side, uint256 totalPrice, uint256 quantity, bool addUnfilledOrderToOrderbook, bool isERC20)[] _inputs) payable;

}
```

### ABI

{% file src="/assets/devs/files/BazaarDiamond (2).json" %}

## Types

### Order

An open order book order stored on the blockchain in the Bazaar contract.

```solidity
struct Order {
    uint256 orderId;
    address token;
    uint256 tokenId;
    bool isERC20;
    Side side;
    address owner;
    uint256 price;
    uint256 quantity;
    uint256 feePercent;
}
```

<table><thead><tr><th width="183.33333333333331">Name</th><th width="143">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>orderId</code></strong></td><td><code>uint256</code></td><td>The unique ID of the Order</td></tr><tr><td><strong><code>token</code></strong></td><td><code>address</code></td><td>The contract address of the transacted token</td></tr><tr><td><strong><code>tokenId</code></strong></td><td><code>uint256</code></td><td>The <code>id</code> of an ERC-1155 token, or <code>0</code> for an ERC-20 token</td></tr><tr><td><strong><code>isERC20</code></strong></td><td><code>bool</code></td><td>Whether the token is an ERC-20 (<code>true</code>), as opposed to ERC-1155 (<code>false</code>)</td></tr><tr><td><strong><code>side</code></strong></td><td><a href="#side"><code>Side</code></a></td><td>The side of the order - <code>0</code> for buy; <code>1</code> for sell</td></tr><tr><td><strong><code>owner</code></strong></td><td><code>address</code></td><td>The <code>0x</code> address of the wallet that created the order</td></tr><tr><td><strong><code>price</code></strong></td><td><code>uint256</code></td><td>The price per unit of the <code>token</code> stored as <code>unitPrice (in wei) * 10^12</code></td></tr><tr><td><strong><code>quantity</code></strong></td><td><code>uint256</code></td><td>The quantity of <code>token</code> to be transacted, expressed in <code>wei</code></td></tr><tr><td><strong><code>feePercent</code></strong></td><td><code>uint256</code></td><td>The fee percent paid/to be paid by the order <code>owner</code>, expressed as <code>decimalPercent * 10000</code> (e.g. <code>1500</code> for 1.5%, <code>1400</code> for 1.4%, and <code>1000</code> for 1%)</td></tr></tbody></table>

### OrderInput

The input struct to the `makeOrders` function to create one or more new [Orders](#order).

```solidity
struct OrderInput {
    address token;
    uint256 tokenId;
    Side side;
    uint256 totalPrice;
    uint256 quantity;
    bool addUnfilledOrderToOrderbook;
    bool isERC20;
}
```

<table><thead><tr><th width="206.33333333333331">Name</th><th width="117">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>token</code></strong></td><td><code>address</code></td><td>The contract address of the transacted token</td></tr><tr><td><strong><code>tokenId</code></strong></td><td><code>uint256</code></td><td>The <code>id</code> of an ERC-1155 token, or <code>0</code> for an ERC-20 token</td></tr><tr><td><strong><code>side</code></strong></td><td><a href="#side"><code>Side</code></a></td><td>The side of the order - <code>0</code> for buy; <code>1</code> for sell</td></tr><tr><td><strong><code>totalPrice</code></strong></td><td><code>uint256</code></td><td>The total price of the order expressed as <code>unitPrice (in wei) * quantity (in wei) / 10^(tokenDecimals)</code></td></tr><tr><td><strong><code>quantity</code></strong></td><td><code>uint256</code></td><td>The quantity of <code>token</code> to be transacted, expressed in <code>wei</code></td></tr><tr><td><strong><code>addUnfilledOrderToOrderbook</code></strong></td><td><code>bool</code></td><td>Whether any unfilled portion of the order should be placed on the order book (<code>true</code>) or not (<code>false</code>)</td></tr><tr><td><strong><code>isERC20</code></strong></td><td><code>bool</code></td><td>Whether the token is an ERC-20 (<code>true</code>), as opposed to ERC-1155 (<code>false</code>)</td></tr></tbody></table>

### EditOrderInput

The input struct to the `editOrders` function to edit one or more existing [Orders](#order).

```solidity
struct EditOrderInput {
    uint256 orderId;
    uint256 newTotalPrice;
    uint256 newQuantity;
}
```

<table><thead><tr><th width="206.33333333333331">Name</th><th width="117">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>orderId</code></strong></td><td><code>uint256</code></td><td>The <code>orderId</code> of the <a href="#order">Order</a> to be edited</td></tr><tr><td><strong><code>newTotalPrice</code></strong></td><td><code>uint256</code></td><td>The new total price of the order expressed as <code>unitPrice (in wei) * quantity (in wei) / 10^(tokenDecimals)</code></td></tr><tr><td><strong><code>newQuantity</code></strong></td><td><code>uint256</code></td><td>The new quantity of <code>token</code> to be transacted, expressed in <code>wei</code></td></tr></tbody></table>

### Side

The side (buy or sell) of the order book that an [Order](#order) is created or stored on.

```solidity
enum Side {
    BUY,
    SELL
}
```

<table><thead><tr><th width="139.33333333333331">Name</th><th width="105">Value</th><th>Description</th></tr></thead><tbody><tr><td><code>BUY</code></td><td><code>0</code></td><td>The <code>buy</code> side of the order book</td></tr><tr><td><code>SELL</code></td><td><code>1</code></td><td>The <code>sell</code> side of the order book</td></tr></tbody></table>

## Events

### OrderAdded

{% code fullWidth="false" %}

```solidity
event OrderAdded(
    uint256 indexed orderId,
    address indexed token,
    address baseToken,
    uint256 tokenId,
    bool isERC20,
    uint8 side,
    address indexed sender,
    uint256 price,
    uint256 quantity
);
```

{% endcode %}

Emitted whenever an [Order](#order) is added to the order book by the [makeOrders](#makeorders) or [editOrders](#editorders) functions.

<table><thead><tr><th width="183.33333333333331">Name</th><th width="143">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>orderId</code></strong></td><td><code>uint256</code></td><td>The unique ID of the <a href="#order">Order</a></td></tr><tr><td><strong><code>token</code></strong></td><td><code>address</code></td><td>The contract address of the transacted token</td></tr><tr><td><strong><code>baseToken</code></strong></td><td><code>address</code></td><td>The contract address of the base token (JEWEL)</td></tr><tr><td><strong><code>tokenId</code></strong></td><td><code>uint256</code></td><td>The <code>id</code> of an ERC-1155 token, or <code>0</code> for an ERC-20 token</td></tr><tr><td><strong><code>isERC20</code></strong></td><td><code>bool</code></td><td>Whether the token is an ERC-20 (<code>true</code>), as opposed to ERC-1155 (<code>false</code>)</td></tr><tr><td><strong><code>side</code></strong></td><td><code>uint8</code></td><td>The <a href="#side"><code>Side</code></a> of the order - <code>0</code> for buy; <code>1</code> for sell</td></tr><tr><td><strong><code>sender</code></strong></td><td><code>address</code></td><td>The <code>0x</code> address of the wallet creating the order</td></tr><tr><td><strong><code>price</code></strong></td><td><code>uint256</code></td><td>The price per unit of the <code>token</code> expressed as <code>unitPrice (in wei) * 10^12</code></td></tr><tr><td><strong><code>quantity</code></strong></td><td><code>uint256</code></td><td>The quantity of <code>token</code> being transacted, expressed in <code>wei</code></td></tr></tbody></table>

### OrderCancelled

```solidity
event OrderCancelled(
    uint256 orderId,
    tuple(
        uint256 orderId,
        address token,
        uint256 tokenId,
        bool isERC20,
        uint8 side,
        address owner,
        uint256 price,
        uint256 quantity,
        uint256 feePercent
    ) Order
);
```

Emitted whenever an [Order](#order) is cancelled by the [cancelOrders](#cancelorders) or [editOrders](#editorders) functions.

<table><thead><tr><th width="137.33333333333331">Name</th><th width="115">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>orderId</code></strong></td><td><code>uint256</code></td><td>The unique ID of the <a href="#order">Order</a></td></tr><tr><td><strong><code>order</code></strong></td><td><a href="#order"><code>Order</code></a></td><td>The full <a href="#order">Order</a> struct</td></tr></tbody></table>

### OrderExecuted

```solidity
event OrderExecuted(
    uint256 indexed orderId,
    address indexed initiator,
    uint256 quantity,
    uint256 remainingQuantity,
    uint256 price
);
```

Emitted whenever an [Order](#order) is executed by the [makeOrders](#makeorders) or [editOrders](#editorders) function.

<table><thead><tr><th width="219.33333333333331">Name</th><th width="113">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>orderId</code></strong></td><td><code>uint256</code></td><td>The unique ID of the <a href="#order">Order</a></td></tr><tr><td><strong><code>initiator</code></strong></td><td><code>address</code></td><td>The <code>0x</code> address of the wallet initiating the order execution</td></tr><tr><td><strong><code>quantity</code></strong></td><td><code>uint256</code></td><td>The quantity of <code>token</code> being transacted, expressed in <code>wei</code></td></tr><tr><td><strong><code>remainingQuantity</code></strong></td><td><code>uint256</code></td><td>The remaining quantity of the <code>token</code> left in the order, expressed in <code>wei</code></td></tr><tr><td><strong><code>price</code></strong></td><td><code>uint256</code></td><td>The price per unit of the <code>token</code> expressed as <code>unitPrice (in wei) * 10^12</code></td></tr></tbody></table>

## State-Changing Functions

### cancelOrders

```solidity
function cancelOrders(uint256[] _orderIds);
```

Removes one or more open [Orders](#order) that are owned by the `msg.sender` from the order book.

* Emits [`OrderCancelled`](#ordercancelled)

### editOrders

```solidity
function editOrders(
  tuple(
    uint256 orderId,
    uint256 newTotalPrice,
    uint256 newQuantity
  )[] EditOrderInput
) payable;
```

Given one or more [`EditOrderInput`](#editorderinput) structs, cancels each [Order](#order) and creates a new Order with the same `token` and other parameters, but with a new `totalPrice` and/or `quantity`.

* Editing a `buy` order on DFK Chain must submit the appropriate `totalPrice` + `fee` as `value` with the transaction.
* Editing a `sell` order must have already approved the appropriate `quantity` of `token` to the Bazaar contract.
* Emits [`OrderAdded`](#orderadded), [`OrderCancelled`](#ordercancelled), [`OrderExecuted`](#orderexecuted)

### makeOrders

```solidity
function makeOrders(
  tuple(
    address token,
    uint256 tokenId,
    uint8 side,
    uint256 totalPrice,
    uint256 quantity,
    bool addUnfilledOrderToOrderbook,
    bool isERC20
  )[] OrderInput
) payable;
```

Given one or more [`OrderInput`](#orderinput) structs, creates an [Order](#order) for each and executes on it when possible.

* A `buy` order on DFK Chain must submit the appropriate `totalPrice` + `fee` as `value` with the transaction.
* A `sell` order must have already approved the appropriate `quantity` of `token` to the Bazaar contract.
* Emits [`OrderAdded`](#orderadded), [`OrderExecuted`](#orderexecuted)

## Related Pages

{% content-ref url="/pages/zcWw5HYUjNNTn8srcE6n" %}
[Bazaar](/api/community-graphql-api/bazaar.md)
{% endcontent-ref %}
