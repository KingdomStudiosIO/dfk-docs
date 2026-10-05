> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/summoning/hero-summoning/dark-summoning.md).

# Dark Summoning

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="262.3333333333333">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DarkSummoning</td><td><code>0x70908Fd7278aab183C7EfC4f3449184E98e2e305</code></td><td><code>0xf366B5706c2C3caAe87107a04e73965eAd47988B</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IDarkSummoning {
    
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
    function addEnhancementStone(address _address);
    function baseCooldown() view returns (uint256);
    function baseSummonFee() view returns (uint256);
    function calculateRarityBonusCost(uint8 _rarityBonusCharges) pure returns (uint256);
    function calculateSummoningCost(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero) view returns (uint256);
    function cooldownPerGen() view returns (uint256);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function increasePerGen() view returns (uint256);
    function increasePerSummon() view returns (uint256);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function summonCrystal(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, uint8 _rarityBonusCharges);
    function summonCrystalWithLocked(uint256 _summonerId, uint256 _assistantId, uint16 _summonerTears, uint16 _assistantTears, address _enhancementStone, uint8 _rarityBonusCharges);
    
}
```

### ABIs

{% file src="/files/2zXcnvG5hjSy8kpjy4Dw" %}

## Related Contracts

{% content-ref url="/pages/VQipJ4xZiNKOTwnyWJpf" %}
[Hero Summoning](/contracts/summoning/hero-summoning.md)
{% endcontent-ref %}

{% content-ref url="/pages/UPDPwyYapDkXsoTyK4TQ" %}
[Graveyard](/contracts/miscellaneous/graveyard.md)
{% endcontent-ref %}
