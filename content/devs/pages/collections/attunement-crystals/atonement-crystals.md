> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/attunement-crystals/atonement-crystals.md).

# Atonement Crystals

Atonement Crystals are a **subset of Attunement Crystals** that are used during Hero Meditation. These items are limited in quantity and are meant to make players whole if and when bugs are found in the leveling process that impact Hero stat gains.

{% hint style="info" %}
**ERC20:** Atonement Crystals are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="warning" %}
Atonement Crystals have 0 decimals
{% endhint %}

{% hint style="danger" %}
Since Atonement Crystals only exist in limited quantities, these item contracts should only be used for data analysis and tracking purposes.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

<table><thead><tr><th width="251.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-lesser.gif" alt="" data-size="line"> Lesser Atonement Crystal (DFKLATONECR)</td><td><code>0xbFa812214a16EcA7814e5F5c270d7f8F37A110B5</code></td><td><code>0x9D33339a0384418d5964B005EB9E9e75C5103800</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal.gif" alt="" data-size="line"> Atonement Crystal (DFKATONECR)</td><td><code>0xab2B495902f9A6652c382e5f289423929FFF2E65</code></td><td><code>0x2e49740f19f8A0fD3864C45c42883e55DC01f058</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-greater.gif" alt="" data-size="line"> Greater Atonement Crystal (DFKGATONECR)</td><td><code>0x3A28E0D4eCF7558e1ba7357070032C5A6105B0C2</code></td><td><code>0x653D32bEB4D78F698Ed044C9220833b985CAB269</code></td></tr></tbody></table>

### Interfaces

{% hint style="info" %}
Atonement Crystals use the Attunement Crystal Interfaces and ABI, with the addition of the `usedCrystals()` function, which takes a Hero ID, and returns a `bool` for whether the Hero has used that particular Atonement Crystal.
{% endhint %}

```solidity
interface IAtonementCrystal {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function applyBonus(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions) _hero, uint256) returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions));
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function burn(uint256 amount);
    function burnFrom(address account, uint256 amount);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function modifyStatGrowth(tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) _statGrowth, bool, uint256) returns (tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg));
    function name() view returns (string);
    function paused() view returns (bool);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    function use(tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions));
    function usedCrystals(uint256) view returns (bool);
    
}
```

### ABIs

{% file src="/assets/devs/files/AtonementCrystal.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

<table><thead><tr><th width="261.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-lesser.gif" alt="" data-size="line"> Lesser Atonement Crystal (DFKLATONECR)</td><td><code>0x1f3F655079b70190cb79cE5bc5AE5F19dAf2A6Cf</code></td><td><code>0x351D17791c396128163185a8512aC9edC820C03A</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal.gif" alt="" data-size="line"> Atonement Crystal (DFKATONECR)</td><td><code>0x27dC6AaaD95580EdF25F8B9676f1B984e09e413d</code></td><td><code>0x0F798BDA7777F59138Ef8E7Ad03DC98EFa3D207d</code></td></tr><tr><td><img src="https://defi-kingdoms.b-cdn.net/art-assets/items/atonement-crystal-greater.gif" alt="" data-size="line"> Greater Atonement Crystal (DFKGATONECR)</td><td><code>0x17f3B5240C4A71a3BBF379710f6fA66B9b51f224</code></td><td><code>0xE02A5D2b8d08D9Da01164669A4838f7aC040DAEF</code></td></tr></tbody></table>
