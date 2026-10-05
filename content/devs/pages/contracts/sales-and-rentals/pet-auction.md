> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/sales-and-rentals/pet-auction.md).

# Pet Auction

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x49744F76caA3B63CccE9CE7de5C8282C92c891e5` | `0x3dF6453a977d6e946E2229d03e4feD7f8ad950f3` |
| Kaia      | `0x7aB1C574A8762bEde901F32670481c0427DdF626` | `0xD0582fDAfB3f569D5Ef8E243cc312176a7c2C5dc` |
| Metis     | `0xB03CD47153Fbb111Fc8e4356b4fd86c614f7832E` | `0x869B64EEE22B6e9A9a59D2Bd5a3f8629DF063888` |

### Interfaces

```solidity
interface IPetAuction {

    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    
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
    function maxPrice() view returns (uint256);
    function minPrice() view returns (uint256);
    function ownerCut() view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function totalAuctions() view returns (uint256);
    function userAuctions(address, uint256) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/PetAuctionUpgradeable.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name       | Mainnet                                      | Testnet                                      |
| ---------- | -------------------------------------------- | -------------------------------------------- |
| PetAuction | `0x72F860bF73ffa3FC42B97BbcF43Ae80280CFcdc3` | `0x13A757e733535B1827dBD6Aa9E9B6D51B1578B69` |
