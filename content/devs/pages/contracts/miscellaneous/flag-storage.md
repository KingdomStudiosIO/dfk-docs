> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/flag-storage.md).

# Flag Storage

{% hint style="info" %}
The Flag Storage contract is used to store supplemental information about Heroes and Wallets that is not contained in other contracts.

The V1 version of this contract, which primarily stored data about the Perilous Journey and CV Gen0 Rerolls, has been deprecated in favor of V2.

Pertinent information that is still stored in the V1 contract will be migrated to the V2 system in the future.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| FlagStorageV2 | `0x75d8ba2E4725633FcdcC165332dCA04c107915cA` | `0x49b145D2164B137a398951a76D069118F2EAfe4a` |

#### Klaytn

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| FlagStorageV2 | `0xeb9ff38209dCC4236DBFb3C275c0AAeEBf0B92Cf` | `0x3f81c3a28c4802E2B1966A5590beEAb895cC01DD` |

### Interfaces

```solidity
interface IFlagStorageV2 {

    event CraftingGenesStorageSet(uint256 heroId, bool value);
    event DarkSummoningStorageSet(uint256 heroId, tuple(uint32 levelCarryover) values);
    
    // The first reroll that took place on Harmony for the CV release
    event Gen0RerollCVStorageSet(uint256 heroId, tuple(address player, uint32 summonRecord, bool rerolledGameGenes, bool rerolledAppearanceGenes) values);
    // The second reroll that took place on CV for the SD2.0 release
    event Gen0RerollSDStorageSet(uint256 heroId, tuple(address player, uint32 summonRecord, bool rerolledGameGenes, bool rerolledAppearanceGenes) values);
    event PerilousJourneyStorageSet(uint256 heroId, address value);
    event HeroPendingReviewAdded(uint256 heroId);
    event HeroTaintedGeneStorageDeleted(uint256 heroId);
    event HeroTaintedGeneStorageSet(uint256 heroId, tuple(uint256 heroId, uint8[] geneIndex, uint8[] rankType, bool hasTaintedGenes, bool mayHaveTaintedGenes) geneValues);
    event HeroesPendingReviewCleared();
    
    function getCraftingGeneFlag(uint256 _heroId) view returns (bool);
    function getCraftingGeneFlags(uint256[] _heroIds) view returns (uint256[], bool[]);
    function getDarkSummoningStorage(uint256 _heroId) view returns (tuple(uint32 levelCarryover));
    // The first reroll that took place on Harmony for the CV release
    function getGen0RerollCVStorage(uint256 _heroId) view returns (tuple(address player, uint32 summonRecord, bool rerolledGameGenes, bool rerolledAppearanceGenes));
    // The second reroll that took place on CV for the SD2.0 release
    function getGen0RerollSDStorage(uint256 _heroId) view returns (tuple(address player, uint32 summonRecord, bool rerolledGameGenes, bool rerolledAppearanceGenes));
    function getPJStorage(uint256 _heroId) view returns (address);

}
```

### ABIs

{% file src="/assets/devs/files/FlagStorageDiamond.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### DFK Chain

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| FlagStorageV1 | `0x659D6F1Ba11c388A55091dc83e77808081201D5D` | `0xfD892302248D97626bF61Ea5C4308cFaF2b4dA1C` |

#### Harmony

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| FlagStorageV1 | `0x284F756A212Afd072E5a6033Ace9BE0Eed1d8811` | `0x2e0B652a5BBc6547DD11aA7A25235dd92d2Fde23` |

### Interfaces

```solidity
interface IFlagStorageV1 {

    event UpdatedHeroStorage(uint256 indexed heroId, uint256 indexed storageId, uint32[] data);
    event UpdatedWalletStorage(address indexed wallet, uint256 indexed storageId, uint32[] data);

    function getHeroStorageData(uint256 _heroId, uint256 _storageId) view returns (uint32[]);
    function getHeroStorageDataAtIndex(uint256 _heroId, uint256 _storageId, uint256 _index) view returns (uint32);
    function getHeroStorageFlag(uint256 _heroId, uint256 _storageId, uint256 _dataIndex, uint8 _bitIndex) view returns (bool);
    function getHeroStorageLower16BitValue(uint256 _heroId, uint256 _storageId, uint256 _index) view returns (uint32);
    function getHeroStorageUpper16BitValue(uint256 _heroId, uint256 _storageId, uint256 _index) view returns (uint32);
    function getHeroStorageWalletAddress(uint256 _heroId, uint256 _storageId, uint256 _startIndex) view returns (address);
    function getWalletStorageData(address _wallet, uint256 _storageId) view returns (uint32[]);
    function getWalletStorageDataAtIndex(address _wallet, uint256 _storageId, uint256 _index) view returns (uint32);
    function getWalletStorageFlag(address _wallet, uint256 _storageId, uint256 _dataIndex, uint8 _bitIndex) view returns (bool);
    function getWalletStorageLower16BitValue(address _wallet, uint256 _storageId, uint256 _index) view returns (uint32);
    function getWalletStorageUpper16BitValue(address _wallet, uint256 _storageId, uint256 _index) view returns (uint32);, uint32 summonRecord, bool rerolledGameGenes, bool rerolledAppearanceGenes));

}
```

### ABIs

{% file src="/assets/devs/files/FlagStorage.json" %}

### FlagStorageV1

The V1 FlagStorage system is constructed from a two layer mapping, where the first layer is indexed by keys that correspond to wallet addresses or Hero IDs. The second layer is indexed by storage IDs and return an array of `uint32` values. These `uint` values can be broken down into their individual bits for `boolean` storage, or split into lower and upper `uint16` values.

To retrieve this data, use `getWalletStorageFlag` or `getHeroStorageFlag` for `boolean` values, and `getWallet`/`HeroStorageLower`/`Upper16BitValue` for `uint16` values.

This is not a complete list of Flag Storage data, as the remainder can be retrieved from the [Perilous Journey](/contracts/events/perilous-journey.md) and [Gen0 Reroll](/contracts/events/gen0-reroll.md) contracts. All relevant data will eventually be migrated to the V2 contract.

#### Wallet Storage

<table><thead><tr><th width="131.33333333333331">Storage ID</th><th width="75">Index</th><th width="64">Bits</th><th width="116">DataType</th><th width="242">Data</th><th>Network</th></tr></thead><tbody><tr><td>2</td><td>1</td><td>0</td><td><code>boolean</code></td><td>Donated to Philippines hurricane relief (2021)</td><td>Harmony</td></tr><tr><td>2</td><td>1</td><td>1</td><td><code>boolean</code></td><td>Donated to UNICEF campaign (April 2022)</td><td>Harmony<br>DFK Chain</td></tr></tbody></table>

#### Hero Storage

<table><thead><tr><th width="133.33333333333331">Storage ID</th><th width="77">Index</th><th width="65">Bits</th><th width="112">DataType</th><th width="245">Data</th><th>Network</th></tr></thead><tbody><tr><td>4</td><td>0</td><td>0</td><td><code>boolean</code></td><td>Perilous Journey Survivor</td><td>Harmony</td></tr><tr><td>4</td><td>0</td><td>1</td><td><code>boolean</code></td><td>Gen0 Reroll (CV) Game Genes</td><td>Harmony</td></tr><tr><td>4</td><td>0</td><td>2</td><td><code>boolean</code></td><td>Gen0 Reroll (CV) Visual Genes</td><td>Harmony</td></tr><tr><td>5</td><td>0</td><td>0</td><td><code>boolean</code></td><td>Hero survived the Perilous Journey</td><td>Harmony</td></tr><tr><td>5</td><td>0</td><td>1</td><td><code>boolean</code></td><td>Hero died on the Perilous Journey</td><td>Harmony</td></tr><tr><td>5</td><td>0</td><td>2</td><td><code>boolean</code></td><td>Hero is eligible for 3x +5 Stat Ups from the Perilous Journey</td><td>Harmony</td></tr><tr><td>5</td><td>0</td><td>3</td><td><code>boolean</code></td><td>Hero received 3x +5 Stat Ups from the Perilous Journey</td><td>Harmony</td></tr></tbody></table>
