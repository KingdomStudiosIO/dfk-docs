> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/potions-and-consumables/item-consumer.md).

# Item Consumer

The ItemConsumer contract takes consumable items like [Potions](/collections/potions-and-consumables.md), and uses them on a specified Hero.

{% hint style="info" %}
A consumable item will need to be approved to the ItemConsumer contract before calling the `consumeItem` function.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="150">Name</th><th width="189.73336520775536">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>ItemConsumer</td><td><code>0xc9A9F352Aa188f422A8f8902B547FB3E59D37210</code></td><td><code>0xA71a120931526fC98f1AcC9f769b6b0d690fB8f0</code></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="150">Name</th><th width="189.73336520775536">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>ItemConsumer</td><td><code>0xF78cA21d7Da3227457138714F5bEd08D2604A156</code></td><td><code>0xB6fF23fC946C37720DE4c5682c2f123E44A8Be3B</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IItemConsumer {

    event ItemConsumed(address player, address item, uint256 heroId, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) oldHero, tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) newHero);
    
    function consumeItem(address _consumableAddress, uint256 _heroId);
    function consumeItems(address[] _consumableAddresses, uint256[] _heroIds);
    
}
```

### ABIs

{% file src="/files/Wjhs2XYOpbylc2Rez8lV" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

<table><thead><tr><th width="150">Name</th><th width="189.73336520775536">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>ItemConsumer</td><td><code>0x38e76972BD173901B5E5E43BA5cB464293B80C31</code></td><td><code>0x65A7560d2D3ecD3DA4Fc42cBd11A762F10b1036c</code></td></tr></tbody></table>
