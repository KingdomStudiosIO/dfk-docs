> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/sales-and-rentals/hero-auction.md).

# Hero Auction

## Contracts

### Addresses

#### DFK Chain

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0xc390fAA4C7f66E4D62E59C231D5beD32Ff77BEf0` | `0xb9b4C20165a421E7208494A38a37679c7F334770` |
| Kaia      | `0x7F2B66DB2D02f642a9eb8d13Bc998d441DDe17A8` | `0x72e4bBe95Af9fA4A94627974EF738f3A8E0103e7` |
| Metis     | `0xD035eb0ebDf22eD8B9B4309a3f72C7CAC03dca8F` | `0x4a737026ba0f4e4c75675AEaE46E97A2A8F649D1` |

### Interfaces

```solidity
interface IHeroAuctionUpgradeable {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);    
    
    function ERC721() view returns (address);
    function assistingAuction() view returns (address);
    function auctionIdOffset() view returns (uint256);
    function auctions(uint256) view returns (address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open);
    function bid(uint256 _tokenId, uint256 _bidAmount);
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

{% file src="/assets/devs/files/HeroAuctionUpgradeable.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| SaleAuction | `0x13a65B9F8039E2c032Bc022171Dc05B30c3f2892` | `0xC839907F3341540C29F1F583e65A111847cc9203` |

### Interfaces

```solidity
interface ISaleAuction {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    
    function assistingAuction() view returns (address);
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
    function userAuctions(address, uint256) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/SaleAuction.json" %}
