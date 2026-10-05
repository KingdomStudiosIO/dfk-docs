> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/equipment/visage-shop.md).

# Visage Shop

## Contracts

### Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x4Ada1D06177D76C431C6A1d41Ef3f6fe193A5B4A` | `0x0A6b3Cbd3b4FD912bBFB164b3a8eC85049540e64` |
| Klaytn    | `0xab2F4b26E1c15ac7276C9F870c5877c0858DCe93` | `0x234ED0Ac7Aa41669B524d79645104F78f445d2a4` |

### Interface

```solidity
interface IVisageShop {

    // Events
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event OfferingPurchased(address indexed player, uint256 indexed offeringId, uint128 price, uint16 quantity, address paymentToken, tuple(address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity)[] items);
    event PromoMessage(uint256 indexed offeringId, string message);

    // Functions
    function buyOfferingWithGovToken(uint256 _offeringId, uint16 _quantity, uint256 _govTokenAmountMax, uint256 _deadline, address _mintTo) payable;
    function buyOfferingWithStablecoin(uint256 _offeringId, uint16 _quantity, address _mintTo);
    function buyOfferingsWithStablecoin(uint256[] _offeringIds, uint16[] _quantities, address _mintTo);
    function buyPromoOfferingWithGovToken(uint256 _offeringId, uint16 _quantity, uint256 _govTokenAmountMax, uint256 _deadline, address _mintTo, string _message) payable;
    function buyPromoOfferingWithStablecoin(uint256 _offeringId, uint16 _quantity, address _mintTo, string _message);
    function getGovTokenPrice() view returns (uint256);
    function getOffering(uint256 _offeringId) view returns (tuple(uint32 id, uint128 price, uint32 maxAvailable, uint64 craftedBy, uint64 startTime, uint64 endTime, bool isPromo, bool isFeatured, tuple(address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity)[] items, uint16 groupId));
    function getOfferingIds() view returns (uint256[]);
    function getOfferings() view returns (tuple(uint32 id, uint128 price, uint32 maxAvailable, uint64 craftedBy, uint64 startTime, uint64 endTime, bool isPromo, bool isFeatured, tuple(address equipmentContract, uint8 equipmentType, uint16 displayId, uint8 rarity)[] items, uint16 groupId)[]);
    function paused() view returns (bool);
    function purchaseCounts(uint256) view returns (uint32);

}
```

### ABI

{% file src="/files/mgtPw5nbJI6Zfspt8qpB" %}
