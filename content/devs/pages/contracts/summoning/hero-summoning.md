> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/summoning/hero-summoning.md).

# Hero Summoning

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="262.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>HeroSummoning</td><td><code>0xBc36D18662Bb97F9e74B1EAA1B752aA7A44595A7</code></td><td><code>0x1017c852e3731FaD2e893e80C6916D71Cf0B0A0a</code></td></tr><tr><td>CrystalCore</td><td><code>0x68f6C64786cfCb35108986041D1009c9d27bde22</code></td><td><code>0x51aacFeA9be0d10032aC66dF69F72Cc78730b162</code></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="262.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>HeroSummoning</td><td><code>0xb086584f476Ad21B40aF0672f385a67334A0b294</code></td><td><code>0x2C2D54137350FE5947e5483E0d0B5398cB34B792</code></td></tr><tr><td>CrystalCore</td><td><code>0x13cE9c99E8E2fcDe1632adA7B69b2eCf5BE8ED45</code></td><td><code>0xBC5248B4f50f4c7D2F9A67Be1f1d4b8be44ffc75</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IHeroSummoning {
    
    event CrystalAirdrop(address indexed owner, uint256 crystalId, uint256 createdBlock);
    event CrystalDarkSummoned(uint256 crystalId, address indexed owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint8 summonerTears, uint8 assistantTears, address enhancementStone);
    event CrystalOpen(address indexed owner, uint256 crystalId, uint256 heroId);
    event CrystalSummoned(uint256 crystalId, address indexed owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint8 summonerTears, uint8 assistantTears, address enhancementStone);
    event EnhancementStoneAdded(address atunementItemAddress);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    
    function activeEnhancementStones(address) view returns (bool);
    function approveAuctionSpending(address _address, uint256 _amount);
    function baseCooldown() view returns (uint256);
    function baseSummonFee() view returns (uint256);
    function calculateSummoningCost(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero) view returns (uint256);
    function cooldownPerGen() view returns (uint256);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function increasePerGen() view returns (uint256);
    function increasePerSummon() view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function summonCrystal(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone);
    function summonCrystalWithAuction(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, address _assistingAuctionAddress, uint256 _hireAmount);
    function summonCrystalWithAuctionWithLocked(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, address _assistingAuctionAddress, uint256 _hireAmount);
    function summonCrystalWithLocked(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone);
    
}
```

```solidity
interface ICrystalCore {
    
    event CrystalAirdrop(address indexed owner, uint256 crystalId, uint256 createdBlock);
    event CrystalDarkSummoned(uint256 crystalId, address indexed owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint8 summonerTears, uint8 assistantTears, address enhancementStone);
    event CrystalOpen(address indexed owner, uint256 crystalId, uint256 heroId);
    event CrystalSummoned(uint256 crystalId, address indexed owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint8 summonerTears, uint8 assistantTears, address enhancementStone);
    event EnhancementStoneAdded(address atunementItemAddress);
    
    function airdropCrystal(address _recipient, bool _isShiny);
    function createCrystal(address _owner, uint256 _summonerId, uint256 _assistantId, uint16 _generation, uint8 _summonerBonusTears, uint8 _assistantBonusTears, address _enhancementStone, uint32 _maxSummons, bool _darkSummoned, uint8 _rarityBonusCharges);
    function gen0Cap() view returns (uint256);
    function getCrystal(uint256 _crystalId) view returns (tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address enhancementStone, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle, bool darkSummoned, uint8 rarityBonusCharges));
    function getUserCrystals(address _address) view returns (uint256[]);
    function getUserCrystalsData(address _address) view returns (uint256[], tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address enhancementStone, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle, bool darkSummoned, uint8 rarityBonusCharges)[]);    
    function globalStartTime() view returns (uint256);
    function newSummonCooldown() view returns (uint256);
    function nextCrystalId() view returns (uint256);
    function open(uint256 _crystalId) returns (uint256);
    function paused() view returns (bool);
    function totalCrystals() view returns (uint256);
    function waitBlocks() view returns (uint256);

}
```

### ABIs

{% file src="/files/oOBlnTV31sUim526dfYp" %}

{% file src="/files/vWfU6bPF9UbiFKs8p3CU" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

<table><thead><tr><th width="262.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>HeroSummoningUpgradable</td><td><code>0xf4d3aE202c9Ae516f7eb1DB5afF19Bf699A5E355</code></td><td><code>0x1702c7f5d67C0FDE65a8f3ed1a0C02c9FE4a5b99</code></td></tr></tbody></table>

The Hero Summoning functions on Harmony Mainnet were migrated several times:

<table><thead><tr><th width="460">Contract Address</th><th>From</th><th>Until</th></tr></thead><tbody><tr><td><code>0xf4d3aE202c9Ae516f7eb1DB5afF19Bf699A5E355</code></td><td>1/15/2022</td><td>9/21/2022</td></tr><tr><td><p><code>0x65dea93f7b886c33a78c10343267dd39727778c2</code><br></p><p><em>Note: this was also the</em> <a href="/contracts/sales-and-rentals/hero-rental.md"><em>Assisting Auction</em></a> <em>contract</em></p></td><td>~10/23/2021</td><td>1/15/2022</td></tr><tr><td><code>0xa2D001C829328aa06a2DB2740c05ceE1bFA3c6bb</code></td><td>10/6/2021</td><td>~10/29/2021</td></tr></tbody></table>

### Interfaces

#### Harmony

```solidity
interface IHeroSummoningUpgradeable {

    event CrystalOpen(address indexed owner, uint256 crystalId, uint256 heroId);
    event CrystalSummoned(uint256 crystalId, address indexed owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint8 summonerTears, uint8 assistantTears, address enhancementStone);
    event EnhancementStoneAdded(address atunementItemAddress);
    
    function activeEnhancementStones(address) view returns (bool);
    function approveAuctionSpending(address _address, uint256 _amount);
    function baseCooldown() view returns (uint256);
    function baseSummonFee() view returns (uint256);
    function calculateSummoningCost(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero) view returns (uint256);
    function cooldownPerGen() view returns (uint256);
    function createCrystal(address _owner, uint256 _summonerId, uint256 _assistantId, uint16 _generation, uint8 _summonerBonusTears, uint8 _assistantBonusTears, address _enhancementStone, uint32 _maxSummons);
    function crystalIdOffset() view returns (uint256);
    function crystals(uint256) view returns (address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address enhancementStone, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle);
    function determineRarity(uint256 _rarityRoll, uint256 _rarityMod) pure returns (uint8);
    function enabled() view returns (bool);
    function getCrystal(uint256 _crystalId) view returns (tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address enhancementStone, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle));
    function getUserCrystals(address _address) view returns (uint256[]);
    function increasePerGen() view returns (uint256);
    function increasePerSummon() view returns (uint256);
    function jewelToken() view returns (address);
    function newSummonCooldown() view returns (uint256);
    function open(uint256 _crystalId) returns (uint256);
    function paused() view returns (bool);
    function statScience() view returns (address);
    function summonCrystal(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone);
    function summonCrystalWithAuction(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, address _assistingAuctionAddress, uint256 _hireAmount);
    function summonCrystalWithAuctionOld(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, address _assistingAuctionAddress);
    function totalCrystals() view returns (uint256);
    function userCrystals(address, uint256) view returns (uint256);

}
```

### ABIs

{% file src="/files/AtUK0ykB5PJ3R3m9Qo1E" %}
