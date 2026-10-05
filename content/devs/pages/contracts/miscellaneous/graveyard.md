> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/graveyard.md).

# Graveyard

{% hint style="danger" %}
The Graveyard should only be used by community members for READ operations. Burying heroes is an `ACCESS_CONTROL` operation. Sending heroes to this address through a general transfer function will leave the Hero locked in the contract but will not set the correct data parameters to be viewed in the in-game graveyard.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| Graveyard | `0x280F9Bf2ae2B1AdCe6Cc611F6FD7AE3817888762` | `0x75b11708B6eB68692C7EE01DFeFe216C359Ab9b7` |

### Interfaces

```solidity
interface IGraveyard {

    event DeathRecorded(uint256 heroId, string indexed deathReason, uint256 deathTime);
    
    function buryHero(address _holder, uint256 _heroId, string _deathReason, address _previousOwner);
    function deadHeroes(uint256) view returns (uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner);
    function getDeadHero(uint256 _heroId) view returns (tuple(uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner));
    function getDeadHeroes() view returns (tuple(uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner)[]);
    function getProfileDeadHero(address _profile, uint256 _index) view returns (tuple(uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner));
    function getProfileDeadHeroes(address _profile) view returns (tuple(uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner)[]);
    function heroCore() view returns (address);
    function heroToDeadHero(uint256) view returns (uint256);
    function profileDeadHeroes(address, uint256) view returns (uint256 id, uint256 heroId, uint64 deathTime, string deathReason, address previousOwner);
    
}
```

### ABIs

{% file src="/files/TvZnZcj1W1e7pLnf4wik" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| Graveyard | `0x9CC714059943D5A726fAD11087Bb6d9Ab811A2E3` | `0xACebA5E9b4D6848fDe33853A0cfDA7414a840006` |

## Related Contracts

{% content-ref url="/pages/onSCYq1ddXIRp1syDDKg" %}
[Dark Summoning](/contracts/summoning/hero-summoning/dark-summoning.md)
{% endcontent-ref %}

{% content-ref url="/pages/7ukYI8Cv1S3Ou82fBux6" %}
[Perilous Journey](/contracts/events/perilous-journey.md)
{% endcontent-ref %}
