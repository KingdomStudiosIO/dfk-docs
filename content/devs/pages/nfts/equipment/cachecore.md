> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/cachecore.md).

# CacheCore

The CacheCore contract is used to open Equipment "Caches," similar to Hero Crystals or incubated Pet Eggs. It is used for equipment airdrops and will be used for crafting in the future.

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x15436d3f5dc3D6799b841c46D8a0bD14eC924651` | `0x60489f6712617055f00e9F7bCF2A0BCa8EafFe2f` |
| Klaytn    | `0xe4E368119A858Ca80750269D4490Bc1978260766` | `0x430546a6f3923B4607DB51E9A82758Cd19F5Fb06` |

### Interface

```solidity
interface ICacheCoreDiamond {

    // Events
    event CacheCreated(address indexed owner, uint256 indexed cacheId, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 createdBlock, uint64 craftedBy);
    event CacheOpened(address indexed owner, uint256 indexed cacheId, uint256 indexed equipmentId, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy);
    event Paused(address account);
    event Unpaused(address account);

    // State-Changing Functions
    function multiOpen(uint256[] _cacheIds);
    function open(uint256 _cacheId) returns (uint256);

    // View Functions
    function getCache(uint256 _cacheId) view returns (tuple(address owner, uint256 createdBlock, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy));
    function getUserCaches(address _address) view returns (uint256[]);
    function getUserCachesData(address _address) view returns (uint256[], tuple(address owner, uint256 createdBlock, address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity, uint64 craftedBy)[]);
    function nextCacheId() view returns (uint256);
    function paused() view returns (bool);
    function totalCaches() view returns (uint256);

}
```

### ABI

{% file src="/assets/devs/files/CacheCoreDiamond.json" %}
