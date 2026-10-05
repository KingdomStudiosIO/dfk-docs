> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/crafting/nutritionist.md).

# Nutritionist

The Nutritionist assists users in crafting [Pet Treats](/collections/pet-treats.md) used in feeding [Pets](/nfts/pets.md). This contract is a facet on the [PetCore](/nfts/pets.md) diamond.

## Contracts

### Addresses

<table><thead><tr><th width="226.64356435643566">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DFK Chain</td><td><code>0x1990F87d6BC9D9385917E3EDa0A7674411C3Cd7F</code></td><td><code>0x5C827fa180B26d61DA3c89DD39D1b945DfBA7Dda</code></td></tr><tr><td>Kaia</td><td><code>0x6362b205b539afb5FC369277365441c1dC6fAa28</code></td><td><code>0x71901994A6269aC8F787F70FAC7c5783C1e0B0B2</code></td></tr><tr><td>Metis</td><td><code>0x74cE6E7cEF79F5ae6363c6CB1F6c2b528E92D7c7</code></td><td><code>0x0FAD77111b78B1dF31B12522Fb9298171bb2c55f</code></td></tr></tbody></table>

### Interfaces

```solidity
interface INutritionist {

    event BonusTreatsAwarded(address indexed player, uint8 treatType, uint256 quantity);
    event PetFed(address indexed fedBy, uint256 petId, uint8 foodType, uint256 hungryAt);
    event TreatCrafted(address indexed player, uint8 treatType, uint256 quantity, address item1, address item2);
    
    function craftTreats(tuple(uint8 treatType, uint256 treatQuantity, address item1, address item2)[] _treatData);
    function feedPets(tuple(uint256 petId, uint8 treatType)[] _feedData);
    function treatInfo(uint8) view returns (address treatAddress, uint256 goldCost, bool isActive);
    function treatIngredientRequirements(uint8, address) view returns (uint256);

}
```

### ABIs

{% file src="/assets/devs/files/nutritionist/PetCoreDiamond.json" %}

## Types

### Treat Type

Use the following Treat Types when crafting Pet Treats and feeding Pets.

```solidity
enum TreatType {
    REGULAR,
    PREMIUM
}
```

## Related Contracts

{% content-ref url="/pages/ko1qoh2zncFAVdAaOBzk" %}
[Pets](/nfts/pets.md)
{% endcontent-ref %}

{% content-ref url="/pages/mI7ULr73G0wwaljyEWQF" %}
[Pet Treats](/collections/pet-treats.md)
{% endcontent-ref %}
