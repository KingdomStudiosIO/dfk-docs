> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/sales-and-rentals/hero-rental.md).

# Hero Rental

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="263.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>AssistingAuction</td><td><code>0x8101CfFBec8E045c3FAdC3877a1D30f97d301209</code></td><td><code>0x846635615609a8dd88eA4A92dA1F1Ba6880a9Eb5</code></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="263.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>AssistingAuction</td><td><code>0xA2cef1763e59198025259d76Ce8F9E60d27B17B5</code></td><td><code>0xAd51199B453075C73FA106aFcAAD59f705EF7872</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IAssistingAuctionUpgradeable {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    
    function auctionIdOffset() view returns (uint256);
    function auctions(uint256) view returns (address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open);
    function bidFor(address _bidder, uint256 _tokenId, uint256 _bidAmount);
    function cancelAuction(uint256 _tokenId);
    function cancelAuctionWhenPaused(uint256 _tokenId);
    function createAuction(uint256 _tokenId, uint128 _startingPrice, uint128 _endingPrice, uint64 _duration, address _winner);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function getAuction(uint256 _tokenId) view returns (tuple(address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open));
    function getAuctions(uint256[] _tokenIds) view returns (tuple(address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open)[]);
    function getCurrentPrice(uint256 _tokenId) view returns (uint256);
    function getUserAuctions(address _address) view returns (uint256[]);
    function isOnAuction(uint256 _tokenId) view returns (bool);
    function ownerCut() view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function totalAuctions() view returns (uint256);
    function userAuctions(address, uint256) view returns (uint256);

}
```

### ABIs

{% file src="/files/FpQBOQk62LK0y4iDlOjs" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="info" %}
From 10/23/2022 until 1/15/2022, the AssistingAuction contract on Harmony also contained the `summonCrystal` and `open` functions and related events for the summoning of all Heroes, including those summoned through an Assisting Auction. On 1/15/2022, these were migrated to the [Hero Summoning](/contracts/summoning/hero-summoning.md) contract.
{% endhint %}

### Addresses

#### Harmony

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| AssistingAuction | `0x65DEA93f7b886c33A78c10343267DD39727778c2` | `0x5f5a567140A4b7A0406f568B152aA4bc3aCda8Ed` |

### Interfaces

```solidity
interface IAssistingAuction {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    
    function auctionHeroCore() view returns (address);
    function bid(uint256 _tokenId, uint256 _bidAmount);
    function cancelAuction(uint256 _tokenId);
    function cancelAuctionWhenPaused(uint256 _tokenId);
    function createAuction(uint256 _tokenId, uint128 _startingPrice, uint128 _endingPrice, uint64 _duration, address _winner);
    function getAuction(uint256 _tokenId) view returns (uint256 auctionId, address seller, uint256 startingPrice, uint256 endingPrice, uint256 duration, uint256 startedAt);
    function getCurrentPrice(uint256 _tokenId) view returns (uint256);
    function getUserAuctions(address _address) view returns (uint256[]);
    function isOnAuction(uint256 _tokenId) view returns (bool);
    function jewelToken() view returns (address);
    function maxPrice() view returns (uint256);
    function minPrice() view returns (uint256);
    function ownerCut() view returns (uint256);
    function paused() view returns (bool);
    function userAuctions(address, uint256) view returns (uint256)

}
```

### ABIs

{% file src="/files/IHp9rKyhGwGV6LirMzZQ" %}
