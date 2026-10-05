> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/sales-and-rentals/land-auction.md).

# Land Auction

## Contracts

### Addresses

#### Klaytn

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| LandAuction | `0xE74D437d5F4893dB0A5758f5EaeB5B3Af6096036` | `0x573E2A90bF86Cff5DBA03b1782C09e89cdb5573B` |

### Interfaces

```solidity
interface ILandAuction {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);

    function ERC721() view returns (address);
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

{% file src="/assets/devs/files/LandAuctionUpgradeable.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| LandAuction | `0x77D991987ca85214f9686131C58c1ABE4C93E547` | `0xE54D5904F20Df8305cE7318bAD431c450106254A` |

### Interfaces

```solidity
interface ILandAuction {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);

    function auctionIdOffset() view returns (uint256);
    function auctions(uint256) view returns (address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open);
    function bid(uint256 _tokenId, uint256 _bidAmount);
    function bidFor(address _bidder, uint256 _tokenId, uint256 _bidAmount);
    function cancelAuction(uint256 _tokenId);
    function cancelAuctionWhenPaused(uint256 _tokenId);
    function createAuction(uint256 _tokenId, uint128 _startingPrice, uint128 _endingPrice, uint64 _duration, address _winner);
    function getAuction(uint256 _tokenId) view returns (tuple(address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open));
    function getAuctions(uint256[] _tokenIds) view returns (tuple(address seller, uint256 tokenId, uint128 startingPrice, uint128 endingPrice, uint64 duration, uint64 startedAt, address winner, bool open)[]);
    function getCurrentPrice(uint256 _tokenId) view returns (uint256);
    function getUserAuctions(address _address) view returns (uint256[]);
    function isOnAuction(uint256 _tokenId) view returns (bool);
    function jewelToken() view returns (address);
    function maxPrice() view returns (uint256);
    function minPrice() view returns (uint256);
    function ownerCut() view returns (uint256);
    function paused() view returns (bool);
    function totalAuctions() view returns (uint256);
    function userAuctions(address, uint256) view returns (uint256);
    
}
```

### ABIs

{% file src="/assets/devs/files/LandAuction.json" %}
