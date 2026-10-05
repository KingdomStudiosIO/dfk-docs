> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/events/perilous-journey.md).

# Perilous Journey

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name                           | Mainnet                                    | Testnet                                    |
| ------------------------------ | ------------------------------------------ | ------------------------------------------ |
| Perilous Journey (Crystalvale) | 0xE92Db3bb6E4B21a8b9123e7FdAdD887133C64bb7 | 0x795F6AF5Aa45Ec351A8fC74705F0874CA5f67F42 |

### Interfaces

```solidity
interface IJourney {

    event HeroClaimed(address indexed player, uint256 heroId, uint256 submissionId, uint256 indexed groupId, bool isGenZero, bool addedSurvivalChance, bool indexed heroSurvived, uint16 heroLevel, uint256 crystalAmount, uint256 jewelAmount);
    event HeroSubmitted(address indexed player, uint256 heroId, uint256 submissionId, uint256 groupId, bool isGenZero, bool submittedWithGenZero);
    event JourneyReward(uint256 indexed heroId, address indexed player, address rewardItem, uint256 itemQuantity);
    event StatUp(address indexed player, uint256 indexed heroId, uint256 stat, uint8 increase, uint8 updateType);
    
    function applySurvivalStatBonus(uint256 _heroId, uint8 stat1, uint8 stat2, uint8 stat3);
    function assistingAuction() view returns (address);
    function cancelSubmission(uint256 _heroId);
    function claimEnd() view returns (uint64);
    function claimHero(uint256 _heroId);
    function claimHeroes(uint256[] _heroes);
    function claimStart() view returns (uint64);
    function crystals(uint256) view returns (address);
    function flagStorage() view returns (address);
    function getHeroSubmission(uint256 _heroId) view returns (tuple(uint256 id, address owner, uint256 groupId, uint256 heroId, uint256 startBlock, bool addedSurvivalChance));
    function getSubmission(uint256 _id) view returns (tuple(uint256 id, address owner, uint256 groupId, uint256 heroId, uint256 startBlock, bool addedSurvivalChance));
    function getUserSubmissions(address _address) view returns (tuple(uint256 id, address owner, uint256 groupId, uint256 heroId, uint256 startBlock, bool addedSurvivalChance)[]);
    function graveyard() view returns (address);
    function heroCore() view returns (address);
    function heroToSubmission(uint256) view returns (uint256);
    function paused() view returns (bool);
    function profileUserSubmissions(address, uint256) view returns (uint256 id, address owner, uint256 groupId, uint256 heroId, uint256 startBlock, bool addedSurvivalChance);
    function questFund() view returns (address);
    function runes(uint256) view returns (address);
    function statBonusEnd() view returns (uint64);
    function stones(uint256) view returns (address);
    function submissionEnd() view returns (uint64);
    function submissionStart() view returns (uint64);
    function submitHeroes(uint256[] _heroIds);
    function submitHeroesWithGenZero(uint256 genZeroId, uint256[] _heroIds);
    
}
```

### ABIs

{% file src="/assets/devs/files/Journey.json" %}

## Related Contracts

{% content-ref url="/pages/UPDPwyYapDkXsoTyK4TQ" %}
[Graveyard](/contracts/miscellaneous/graveyard.md)
{% endcontent-ref %}
