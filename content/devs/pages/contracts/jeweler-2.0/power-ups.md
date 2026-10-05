> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/jeweler-2.0/power-ups.md).

# Power-Ups

## Power-Ups

The following Power-Ups are currently active:

```json
[
    {
        "id": 1,
        "name": "Quick Study",
        "powerUpType": 3,
        "tiers": 1,
        "heroesPerTier": 6,
        "lockTimeRequiredToAcquire": 604800,
        "cancelDelay": 86400,
        "govTokenPerTier": [30000000000000000000]
    },
    {
        "id": 2,
        "name": "Rapid Renewal",
        "powerUpType": 3,
        "tiers": 1,
        "heroesPerTier": 6,
        "lockTimeRequiredToAcquire": 604800,
        "cancelDelay": 86400,
        "govTokenPerTier": [20000000000000000000]
    },
    {
        "name": "Thrifty",
        "id": 3,
        "powerUpType": 2,
        "tiers": 2,
        "heroesPerTier": 0,
        "lockTimeRequiredToAcquire": 604800,
        "cancelDelay": 86400,
        "govTokenPerTier: ["500000000000000000000", "1500000000000000000000"],
    },
    {
        "id": 1001,
        "name": "Premium Provisions",
        "powerUpType": 1,
        "tiers": 1,
        "heroesPerTier": 0,
        "lockTimeRequiredToAcquire": 1209600,
        "cancelDelay": 1209600,
        "govTokenPerTier": [500000000000000000000]
    },
    {
        "id": 2001,
        "name": "Backstage Pass",
        "powerUpType": 1,
        "tiers": 1,
        "heroesPerTier": 0,
        "lockTimeRequiredToAcquire": 604800,
        "cancelDelay": 86400,
        "govTokenPerTier": [50000000000000000000]
    },
    {
        "id": 3001,
        "name": "Master Merchant",
        "powerUpType": 2,
        "tiers": 2,
        "heroesPerTier": 0,
        "lockTimeRequiredToAcquire": 604800,
        "cancelDelay": 86400,
        "govTokenPerTier": [500000000000000000000, 5000000000000000000000]
    },
]
```

## Contracts

### Addresses

#### DFK Chain

| Name           | Mainnet                                      | Testnet                                      |
| -------------- | -------------------------------------------- | -------------------------------------------- |
| PowerUpManager | `0xc20a268bc7c4dB28f1f6e1703676513Db06C1B93` | `0x61810dAbFE1Cf808c9e6dF9ED128b9806B95c33d` |

#### Klaytn

| Name           | Mainnet                                      | Testnet                                      |
| -------------- | -------------------------------------------- | -------------------------------------------- |
| PowerUpManager | `0xcd26DfD7EdAe42eD525266D9a53b466db4Ed4f7b` | `0x60faE1faE8123D3cB8d0e44C2a5c80A8c97d716b` |

### Types

```solidity
struct PowerUp {
    uint256 id; // Power-Up ID
    string name; // Name of the Power-Up
    uint256 powerUpType; // Type 1, 2, or 3. See docs for details
    uint256 tiers; // The number of tiers available; 1 for types 1 and 3, or a defined number for type 2
    uint256 heroesPerTier; // 0 for types 1 and 2, defined number for type 3
    uint256 lockTimeRequiredToAcquire; // Minimum Lock Time - Defined value per Power-Up (usually 7 days)
    uint256 cancelDelay; // Cancellation Hold Time - Defined value per Power-Up (usually 24 hours)
    uint256[] govTokenPerTier; // Array of length 1 for tiers 1 and 3, defined length for type 2
}

struct PowerUpUserData {
    bool isActivated; // Used by verifier to quickly check status of Power-Up
    bool emergencyWithdrawHappened; // Set to true if user performs an emergencyWithdraw while this Power-Up is active
    uint256 tier; // Set to 1 for type 1, one of the tier options for type 2, or a number between 1 and (user.heroesOwned + heroesPerTier - 1) / heroesPerTier for type 3
    uint256 openHeroSlots; // Initially set to heroesPerTier * tier for type 3, 0 for other types
    uint256 cancellationHeldSlots; // Used to hold slots for a time before making them available again
    uint256 heldSlotExpiration; // If in the past then any cancellationHeldSlots will be added back to openHeroSlots
    uint256 govTokenHoldExpiration; // Set upon cancelling a Power-Up or extending an expired Jeweler locking period
    address owner; // Player address
}

struct PowerUpHeroData {
    uint256 powerUpId; // Used to quickly check if a mapping exists for a given Power-Up and HeroID
    uint256 heroId; // The ID of the hero that this data references
    uint256 assignedSlot; // Used as a pointer to where the Hero is listed in PowerUpHeroesAssigned[]
    address owner; // Used to check that the Hero is using a Power-Up assigned by the current owner
}

struct PowerUpLock {
    uint256 powerUpId; // Power-Up ID
    uint256 govTokens; // The number of govTokens locked by the user Power-Up
    uint256 end; // The unlock time of the user's govToken balance
    uint256 govTokenHoldExpiration; // The expiration time of the govToken balance from the Power-Up 
    uint256 usedBalance; // The balance of the user's allocated govTokens
}
```

### Interfaces

```solidity
interface IPowerUpManager {

    // Events
    event Canceled(address player, uint256 powerUpId);
    event Deactivated(address player, uint256 powerUpId);
    event Expired(address player, uint256 powerUpId);
    event HeroAssigned(address player, uint256 powerUpId, uint256 heroId);
    event HeroRemoved(address player, uint256 powerUpId, uint256 heroId);
    event IncreasedTier(address player, uint256 powerUpId, tuple(bool isActivated, bool emergencyWithdrawHappened, uint256 tier, uint256 openHeroSlots, uint256 cancellationHeldSlots, uint256 heldSlotExpiration, uint256 govTokenHoldExpiration, address owner) userData);
    event PowerUpAdded(tuple(uint256 id, string name, uint256 powerUpType, uint256 tiers, uint256 heroesPerTier, uint256 lockTimeRequiredToAcquire, uint256 cancelDelay, uint256[] govTokenPerTier) powerup);
    event PowerUpRemoved(tuple(uint256 id, string name, uint256 powerUpType, uint256 tiers, uint256 heroesPerTier, uint256 lockTimeRequiredToAcquire, uint256 cancelDelay, uint256[] govTokenPerTier) powerup);
    event PowerUpUpdated(tuple(uint256 id, string name, uint256 powerUpType, uint256 tiers, uint256 heroesPerTier, uint256 lockTimeRequiredToAcquire, uint256 cancelDelay, uint256[] govTokenPerTier) powerup);
    event Subscribed(address player, uint256 powerUpId, tuple(bool isActivated, bool emergencyWithdrawHappened, uint256 tier, uint256 openHeroSlots, uint256 cancellationHeldSlots, uint256 heldSlotExpiration, uint256 govTokenHoldExpiration, address owner) userData);
    
    // State-Changing Functions
    function assignHero(uint256 _powerUpId, uint256 _heroId);
    function assignHeroes(uint256[] _powerUpIds, uint256[] _heroIds);
    function cancel(uint256 _powerUpId);
    function increaseTier(uint256 _powerUpId, uint256 _tier);
    function multiRemoveHeroFromAllType3ForSender(uint256[] _heroIds);
    function multiSendAndRemove(uint256[] _heroIds, address _recipient);
    function removeHero(uint256 _powerUpId, uint256 _heroId);
    function removeHeroFromAllType3ForSender(uint256 _heroId);
    function removeHeroes(uint256[] _powerUpIds, uint256[] _heroIds);
    function subscribe(uint256 _powerUpId, uint256 _tier);
    function verifyAllPowerUps();
    function verifyPowerUp(uint256 _powerUpId);
    function verifyPowerUpForUser(address _user, uint256 _powerUpId);
    function verifyPowerUpsForUser(address _user, uint256[] _powerUpIds);

    // View Methods
    function activePowerUps(uint256) view returns (uint256);
    function getActivePowerUps() view returns (tuple(uint256 id, string name, uint256 powerUpType, uint256 tiers, uint256 heroesPerTier, uint256 lockTimeRequiredToAcquire, uint256 cancelDelay, uint256[] govTokenPerTier)[]);
    function getAssignedHeroIds(address _account, uint256 _powerUpId) view returns (uint256[]);
    function getAssignedHeroes(address _account, uint256 _powerUpId) view returns (tuple(uint256 id, tuple(uint256 summonedTime, uint256 nextSummonTime, uint256 summonerId, uint256 assistantId, uint32 summons, uint32 maxSummons) summoningInfo, tuple(uint256 statGenes, uint256 visualGenes, uint8 rarity, bool shiny, uint16 generation, uint32 firstName, uint32 lastName, uint8 shinyStyle, uint8 class, uint8 subClass) info, tuple(uint256 staminaFullAt, uint256 hpFullAt, uint256 mpFullAt, uint16 level, uint64 xp, address currentQuest, uint8 sp, uint8 status) state, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hp, uint16 mp, uint16 stamina) stats, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) primaryStatGrowth, tuple(uint16 strength, uint16 intelligence, uint16 wisdom, uint16 luck, uint16 agility, uint16 vitality, uint16 endurance, uint16 dexterity, uint16 hpSm, uint16 hpRg, uint16 hpLg, uint16 mpSm, uint16 mpRg, uint16 mpLg) secondaryStatGrowth, tuple(uint16 mining, uint16 gardening, uint16 foraging, uint16 fishing) professions)[]);
    function getPowerUpHeroData(uint256 _powerUpId, uint256 _heroId) view returns (tuple(uint256 powerUpId, uint256 heroId, uint256 assignedSlot, address owner));
    function getPowerUpStatusesAndTiers(uint256[] _powerUpIds, uint256[] _heroIds, address _user) view returns (tuple(uint64 powerUpId, uint8 tier, bool isActive, bool[6] heroStates)[]);
    function getUserPowerUpData(address _address, uint256 _powerUpId) view returns (tuple(bool isActivated, bool emergencyWithdrawHappened, uint256 tier, uint256 openHeroSlots, uint256 cancellationHeldSlots, uint256 heldSlotExpiration, uint256 govTokenHoldExpiration, address owner));
    function getUserPowerUpDataForActivePowerUps(address _address) view returns (tuple(bool isActivated, bool emergencyWithdrawHappened, uint256 tier, uint256 openHeroSlots, uint256 cancellationHeldSlots, uint256 heldSlotExpiration, uint256 govTokenHoldExpiration, address owner)[], tuple(uint256 powerUpId, uint256 govTokens, uint256 end, uint256 govTokenHoldExpiration, uint256 usedBalance)[]);
    function isHeroPowerUpActive(address _user, uint256 _powerUpId, uint256 _heroId) view returns (bool);
    function isUserPowerUpActive(address _user, uint256 _powerUpId) view returns (bool);
    function powerUpHeroData(uint256, uint256) view returns (uint256 powerUpId, uint256 heroId, uint256 assignedSlot, address owner);
    function powerUpHeroesAssigned(address, uint256, uint256) view returns (uint256);
    function powerUps(uint256) view returns (uint256 id, string name, uint256 powerUpType, uint256 tiers, uint256 heroesPerTier, uint256 lockTimeRequiredToAcquire, uint256 cancelDelay);
    function userPowerUpData(address, uint256) view returns (bool isActivated, bool emergencyWithdrawHappened, uint256 tier, uint256 openHeroSlots, uint256 cancellationHeldSlots, uint256 heldSlotExpiration, uint256 govTokenHoldExpiration, address owner);

}
```

### ABIs

{% file src="/files/2ML78tDb8t0BPUnbOL8z" %}

## Related Contracts

{% content-ref url="/pages/Z5n4cFVkwQvw7AULh6jf" %}
[Jeweler 2.0](/contracts/jeweler-2.0.md)
{% endcontent-ref %}

{% content-ref url="/pages/oc29UJkT8G2NHEicW8q9" %}
[Governance Tokens](/tokens/governance-tokens.md)
{% endcontent-ref %}
