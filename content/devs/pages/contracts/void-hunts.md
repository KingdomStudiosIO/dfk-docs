> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/void-hunts.md).

# Void Hunts

## Mappings

### Hunt IDs

Use the following

```json
{
  1: "Mad Boar"
  2: "Bad Motherclucker"
}
```

### Potions

The `_amounts` input of `startHuntWithItems` takes an array of item quantities, which **must include `0` values for any items not submitted**. The combined weights of the submitted items must not exceed the Battle Inventory of the selected Hunt.

The order of items submitted to the array is as follows. Additional future items will be appended to this array.

```json
[
  "Health Vial",
  "Full Health Potion",
  "Mana Vial",
  "Full Mana Potion",
  "Anti-Poison Potion",
  "Anti-Blind Potion",
  "Magic Resistance Potion",
  "Toughness Potion",
  "Swiftness Potion",
  [Unused],
  [Unused],
  [Unused],
  [Unused],
  [Unused],
  "Smoke Bomb"
]
```

## Contracts

### Addresses

#### DFK Chain

| Name         | Mainnet                                      | Testnet                                      |
| ------------ | -------------------------------------------- | -------------------------------------------- |
| HuntsDiamond | `0xEaC69796Cff468ED1694A6FfAc4cbC23bbe33aFa` | `0xEF333BfE61d9274549d1b2504c2d52c9F9DB4B83` |

### Interfaces

```solidity
interface IHuntsDiamond {

    // Events
    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDeferred(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event FeeLockedBurned(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event HuntCanceled(uint256 huntId);
    event HuntCompleted(uint256 huntId, (uint256 id, uint256 huntDataId, uint256 startBlock, uint256[] heroIds, address player, uint8 status, uint256 resultSubmittedTimestamp, uint256[] petXpBonuses, uint256 startAtTime, uint256 retries, (address item, uint16 submittedAmount, uint16 usedAmount)[] consumableItems) hunt, bool huntWon, uint256[] heroIds);
    event HuntEquipmentMinted(uint256 indexed huntId, address indexed item, address indexed player, uint8 equipmentType, uint16 displayId, uint8 rarity, uint256 nftId);
    event HuntPetBonusReceived(uint256 indexed questId, address indexed player, uint256 heroId, uint256 petId);
    event HuntPotionBurned(uint256 indexed huntId, address indexed item, address indexed player, uint8 amount);
    event HuntPotionRefunded(uint256 indexed huntId, address indexed item, address indexed player, uint8 tier, uint8 amount);
    event HuntPotionReturned(uint256 indexed huntId, address indexed item, address indexed player, uint8 amount);
    event HuntRaffleAwarded(address winner, uint128 amount, uint64 raffleDay, uint64 totalEntries);
    event HuntResultSubmitted(uint256 huntId, bool result);
    event HuntRetried(uint256 huntId);
    event HuntRewardMinted(uint256 indexed huntId, address indexed player, address indexed item, uint256 amount, uint256 data);
    event HuntSponsoredRaffleAdded((uint256[] rewardAmounts, address rewardToken, uint16 sponsorId, uint16 startDay, uint16 remainingDays, uint32 raffleId) raffleData);
    event HuntSponsoredRaffleAwarded(address[] winners, uint256[] amounts, uint64 raffleDay, uint64 totalEntries, uint16 sponsorId, uint32 raffleId);
    event HuntSponsoredRaffleExpired((uint256[] rewardAmounts, address rewardToken, uint16 sponsorId, uint16 startDay, uint16 remainingDays, uint32 raffleId) raffleData);
    event HuntStarted((uint256 id, uint256 huntDataId, uint256 startBlock, uint256[] heroIds, address player, uint8 status, uint256 resultSubmittedTimestamp, uint256[] petXpBonuses, uint256 startAtTime, uint256 retries, (address item, uint16 submittedAmount, uint16 usedAmount)[] consumableItems) hunt);
    event HuntXP(uint256 indexed huntId, address indexed player, uint256 heroId, uint64 xpEarned);

    // State-Changing Functions
    function cancelHunt(uint256 _huntId);
    function completeHunt(uint256 _huntId);
    function retryHunt(uint256 _huntId);
    function startHunt(uint256 _huntDataId, uint256[] _heroIds);
    function startHuntWithItems(uint256 _huntDataId, uint256[] _heroIds, uint16[] _amounts);

    // View Functions
    function getActiveHunts() view returns (uint256[]);
    function getCurrentRaffleDay() view returns (uint256);
    function getHeroHunt(uint256 _heroId) view returns ((uint256 id, uint256 huntDataId, uint256 startBlock, uint256[] heroIds, address player, uint8 status, uint256 resultSubmittedTimestamp, uint256[] petXpBonuses, uint256 startAtTime, uint256 retries, (address item, uint16 submittedAmount, uint16 usedAmount)[] consumableItems, uint16[] itemWeights));
    function getHeroHuntAvailableAtTimestamps(uint256 _huntDataId, uint256[] _heroIds) view returns (uint256[]);
    function getHunt(uint256 _huntId) view returns ((uint256 id, uint256 huntDataId, uint256 startBlock, uint256[] heroIds, address player, uint8 status, uint256 resultSubmittedTimestamp, uint256[] petXpBonuses, uint256 startAtTime, uint256 retries, (address item, uint16 submittedAmount, uint16 usedAmount)[] consumableItems, uint16[] itemWeights));
    function getHuntCooldown() view returns (uint256);
    function getHuntCounter() view returns (uint256);
    function getLastPromoRaffleWinners() view returns ((address winner, uint16 sponsorId, uint32 raffleId, uint256 rewardQuantity, address rewardToken)[]);
    function getLastRaffleWinner() view returns (address);
    function getPromoRaffleData() view returns ((uint256[] rewardAmounts, address rewardToken, uint16 sponsorId, uint16 startDay, uint16 remainingDays, uint32 raffleId)[]);
    function getRaffleEntryCount() view returns (uint256);
    function getUserHuntIds(address _address) view returns (uint256[]);
    function getUserHunts(address _address) view returns ((uint256 id, uint256 huntDataId, uint256 startBlock, uint256[] heroIds, address player, uint8 status, uint256 resultSubmittedTimestamp, uint256[] petXpBonuses, uint256 startAtTime, uint256 retries, (address item, uint16 submittedAmount, uint16 usedAmount)[] consumableItems, uint16[] itemWeights)[]);
    function huntAtIndex(uint256 _id) view returns (uint256);
   
}
```

### ABIs

{% file src="/files/Pc0vsRwxyLaO1mPjNgm4" %}

{% file src="/files/DXoZzssR622XnGeZy8SK" %}
