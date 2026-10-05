> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/sales-and-rentals/equipment-auction.md).

# Equipment Auction

## Contracts

### Addresses

#### DFK Chain

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| WeaponAuction    | `0x5C7d6ce011FDFCA8C6DB988206DEfAA6bb7E5269` | `0x5465dA4f04b750E2226Fa7838F9f28A55f3e3B9E` |
| ArmorAuction     | `0xF063bF01075884BdCfD0e16976cE34AFdae2Db3C` | `0xF6227e90c9D81c0911a422e72B25524E30cE6430` |
| AccessoryAuction | `0x5e57E11B319CFb4fb1c3D02231423fDA5aaF2038` | `0x6bFcCca9c0A66F2E9eed79F103498113Bdb0f786` |

#### Kaia

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| WeaponAuction    | `0x4eE3AdD88318c5E0d22c3b4B5C3ae6838146F524` | `0x7BEe3C60Fc30fFce7De1111405d50b07885C0d51` |
| ArmorAuction     | `0xAD5Ee02c8a9b330Ddd04D28d5019351Dc30A9644` | `0x8A46AE82311048D99ad694249630cA03BAaFdcBd` |
| AccessoryAuction | `0xc47Cb5de364D5fe6d0aaA34Af032675bdb5f79e0` | `0xF8AF80251b952A86A174C828d35999F2D94B6897` |

#### Metis

| Name             | Mainnet                                      | Testnet                                      |
| ---------------- | -------------------------------------------- | -------------------------------------------- |
| WeaponAuction    | `0xf4Ad97B1f8855D3e18c614C774E392D7CC70Ac0A` | `0xC60E980721eed7D3bde3e6Ab0E032647394ddB6c` |
| ArmorAuction     | `0xeD20092C3BB5f310FD3597f66286e9df92fb09EC` | `0x2e33Acf05d619080dB31A973F242E77AaCb33499` |
| AccessoryAuction | `0xeD5Ef0dD008D6fFBB9773297ba8Ef185F59ECC88` | `0xEF7ad9f2d6fbE73DCd5A84011196c4bB49A46471` |

### Interfaces

The Interfaces for all three equipment auction contracts are identical.

```solidity
interface IEquipmentAuction {
    
    event AuctionCancelled(uint256 auctionId, uint256 indexed tokenId);
    event AuctionCreated(uint256 auctionId, address indexed owner, uint256 indexed tokenId, uint256 startingPrice, uint256 endingPrice, uint256 duration, address winner);
    event AuctionSuccessful(uint256 auctionId, uint256 indexed tokenId, uint256 totalPrice, address winner);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);

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
    function heroCore() view returns (address);
    function isOnAuction(uint256 _tokenId) view returns (bool);
    function onERC721Received(address, address, uint256, bytes) pure returns (bytes4);
    function ownerCut() view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function totalAuctions() view returns (uint256);
    function userAuctions(address, uint256) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/WeaponAuctionUpgradeable.json" %}

{% file src="/assets/devs/files/ArmorAuctionUpgradeable.json" %}

{% file src="/assets/devs/files/AccessoryAuctionUpgradeable.json" %}
