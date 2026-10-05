> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/summoning/pet-hatching.md).

# Pet Hatching

## Contracts

### Addresses

<table><thead><tr><th width="157.33333333333331">Name</th><th width="287">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DFK Chain</td><td><code>0x564D03ccF4A9634D97100Ec18d7770A3C4E45541</code></td><td><code>0x0f6A6A3eaAd0C25cc82E1b7dB382bEC1b70eE452</code></td></tr><tr><td>Klaytn</td><td><code>0x22e656419Be8A0abf0B53D0941FfDC3B70Fea36e</code></td><td><code>0x81d9256c24A2b6A5c8602989e4eb11170b459E3f</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IPetHatching {

    event EggCracked(address indexed owner, uint256 indexed eggId, uint256 petId);
    event EggIncubated(address indexed owner, uint256 eggId, uint8 indexed eggType, uint8 indexed tier);
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event PetRerollStarted(uint256 indexed petId);
    event PetRerolled(uint256 indexed petId, tuple(uint256 id, uint8 originId, string name, uint8 season, uint8 eggType, uint8 rarity, uint8 element, uint8 bonusCount, uint8 profBonus, uint8 profBonusScalar, uint8 craftBonus, uint8 craftBonusScalar, uint8 combatBonus, uint8 combatBonusScalar, uint16 appearance, uint8 background, uint8 shiny, uint64 hungryAt, uint64 equippableAt, uint256 equippedTo) petAfter);
    
    function completePetBonusReroll(uint256 _petId);
    function crack(uint256 _eggId) returns (uint256);
    function eggTypeCosts(uint256) view returns (address eggAddress, address itemAddress1, uint16 itemAmount1, address itemAddress2, uint16 itemAmount2);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function getEgg(uint256 _eggId) view returns (tuple(uint256 id, uint256 petId, address owner, uint8 eggType, uint256 seedblock, uint256 finishTime, uint8 tier));
    function getUserEggs(address _address) view returns (uint256[]);
    function incubateEgg(uint8 _eggType, uint8 _tier);
    function incubateEggWithLocked(uint8 _eggType, uint8 _tier);
    function multiCompleteBonusReroll(uint256[] _petIds);
    function multiCrack(uint256[] _eggIds);
    function multiIncubate(uint8[] _eggTypes, uint8[] _tiers, bool[] _useLockedTokens);
    function multiStartBonusReroll(uint256[] _petIds);
    function originId() view returns (uint8);
    function paused() view returns (bool);
    function powerToken() view returns (address);
    function priceTiers(uint256) view returns (uint8 powerTokenCost, uint16 goldCost, uint8 tearCost, uint32 incubationTime, uint16 shinyChance);
    function rerollData(uint256) view returns (uint256 petId, uint256 seedblock, bool needsProfReroll, bool needsCraftReroll, bool needsCombatReroll);
    function season() view returns (uint8);
    function startPetBonusReroll(uint256 _petId);
    function totalEggs() view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/PetHatchingUpgradeable (1).json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| PetHatching | `0x576C260513204392F0eC0bc865450872025CB1cA` | `0x1263B2a59F17b829D2a53d18a2f459EB77f6801c` |
