> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/equipment-bridge-synapse.md).

# Equipment Bridge (Synapse)

The **Equipment Bridge** (formerly the Pet Bridge) processes the cross-chain bridging of all Pet and Equipment NFTs.

### Chain ID

{% hint style="danger" %}
Bridging Pets is not available directly between Harmony and Kaia and must go through DFK Chain first. Pets cannot be sent to Harmony. Any Pets sent incorrectly may be permanently lost.
{% endhint %}

Use the following destination Chain IDs for the Equipment Bridge:

* DFK Chain: 53935
* Kaia: 8217

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. The fees for bridging Pets/Equipment are as follows:

* Harmony to DFK Chain: 0.016 ONE
* DFK Chain to Kaia: 0.03 JEWEL
* Kaia to DFK Chain: 0.0018 KLAY

### Equipment Contract Mapping

Use the following mappings for the `_equipmentCore` input on the `sendEquipment` function:

* Weapon: `1`
* Accessory/Offhand: `2`
* Armor: `3`
* Pet: `4`

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| Harmony   | `0x4e8e955E40C1Dc09BAfb685ecAdE418214068c42` | N/A                                          |
| DFK Chain | `0x36829ba54e6A0f11fB6e5A45aC5aD2742ec86a0B` | `0xfD5FE9415F82374a05f6f4B47745917723577f5C` |
| Kaia      | `0x5EcB820B32b60cCEd4506bd3b06C80BaFb879446` | `0x8f6F50CfdAB5710102b7B4240B5c97ec0AfcDf4c` |

### Interfaces

```solidity
interface IEquipmentBridge {

    event EquipmentArrived(uint256 indexed equipmentId, uint16 indexed equipmentType, uint256 arrivalChainId);
    event EquipmentSent(uint256 indexed equipmentId, uint16 indexed equipmentType, uint256 arrivalChainId);
    event PetArrived(uint256 indexed petId, uint256 arrivalChainId);
    event PetSent(uint256 indexed petId, uint256 arrivalChainId);

    function equipmentTypes(uint16) view returns (address);
    function heroBridgeAddress() view returns (address);
    function pets() view returns (address);
    function sendEquipment(uint256 _equipmentId, uint16 _equipmentCore, uint256 _dstChainId) payable;
    function sendPet(uint256 _petId, uint256 _dstChainId) payable;

}
```

### ABIs

{% file src="/files/5inbi6vDJoQIhs64YwfR" %}
