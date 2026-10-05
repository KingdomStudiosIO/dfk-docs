> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/lands.md).

# Lands

{% hint style="info" %}
**ERC721:** The LandCore contract is based on the ERC721 standard. For more detailed information please view the documentation by OpenZeppelin. <https://docs.openzeppelin.com/contracts/4.x/erc721>
{% endhint %}

## Contracts

### Addresses

#### Klaytn

| Name     | Mainnet                                      | Testnet                                      |
| -------- | -------------------------------------------- | -------------------------------------------- |
| LandCore | `0x07520d5b2a7bf2DD0d48Bf08311Ac598F9ab4D4A` | `0xb719271c689fACC7FbAa7C5546ffb2178655e749` |

### Interfaces

```solidity
interface ILandCore {

    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event LandClaimed(address indexed owner, uint256 landId, uint256 indexed region);
    event LandMoved(uint256 landId, uint256 oldRegion, uint256 newRegion);
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    
    function approve(address to, uint256 tokenId);
    function balanceOf(address owner) view returns (uint256);
    function claimLand(address _to, uint256 _tokenId);
    function getAccountLands(address _account) view returns (tuple(uint256 landId, string name, address owner, uint256 region, uint8 level, uint256 steward, uint64 score)[]);
    function getAllLands() view returns (tuple(uint256 landId, string name, address owner, uint256 region, uint8 level, uint256 steward, uint64 score)[]);
    function getApproved(uint256 tokenId) view returns (address);
    function getLand(uint256 _landId) view returns (tuple(uint256 landId, string name, address owner, uint256 region, uint8 level, uint256 steward, uint64 score));
    function getLandsByRegion(uint32 _region) view returns (tuple(uint256 landId, string name, address owner, uint256 region, uint8 level, uint256 steward, uint64 score)[]);
    function isApprovedForAll(address owner, address operator) view returns (bool);
    function landIdToMeta(uint256) view returns (uint256 landId, string name, address owner, uint256 region, uint8 level, uint256 steward, uint64 score);
    function name() view returns (string);
    function onERC721Received(address, address, uint256, bytes) pure returns (bytes4);
    function ownerOf(uint256 tokenId) view returns (address);
    function paused() view returns (bool);
    function regionToLandCount(uint256) view returns (uint256);
    function regionToLands(uint256, uint256) view returns (uint256);
    function safeMint(address _owner, uint256 _landId, string _name, uint32 _region);
    function safeTransferFrom(address from, address to, uint256 tokenId);
    function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data);
    function setApprovalForAll(address operator, bool approved);
    function symbol() view returns (string);
    function tokenByIndex(uint256 index) view returns (uint256);
    function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256);
    function tokenURI(uint256 tokenId) view returns (string);
    function totalSupply() view returns (uint256);
    function transferFrom(address from, address to, uint256 tokenId);
    function updateLandRegion(uint256 _landId, uint256 _region, uint256 _oldLandIndex);

}
```

### ABIs

{% file src="/assets/devs/files/LandCore.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name     | Mainnet                                      | Testnet                                      |
| -------- | -------------------------------------------- | -------------------------------------------- |
| LandCore | `0xD5f5bE1037e457727e011ADE9Ca54d21c21a3F8A` | `0xDb4C51C17564a2382A17aeCBe9f17e2E64DFB45b` |

## Related Contracts

{% content-ref url="/pages/9g6r22tkHsI44noZcZ0P" %}
[Land Auction](/contracts/sales-and-rentals/land-auction.md)
{% endcontent-ref %}
