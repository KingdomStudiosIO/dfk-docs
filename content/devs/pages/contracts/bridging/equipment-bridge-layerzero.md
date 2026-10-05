> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/equipment-bridge-layerzero.md).

# Equipment Bridge (LayerZero)

The **LayerZero Equipment Bridge**  processes the cross-chain bridging of Pet and Equipment NFTs. It is available between **DFK Chain and Metis**, and between **Kaia and Metis** only.

{% hint style="info" %}
The Equipment Bridge is built in partnership with [Layer Zero](https://layerzero.network/) using their V2 Messaging protocol. For more information, visit their documentation at: <https://layerzero.gitbook.io/docs/>.

Use [Layer Zero Scan](https://layerzeroscan.com/) (<https://layerzeroscan.com/>) to track the progress of bridged items.
{% endhint %}

### Chain ID

Use the following destination Chain IDs for the Equipment Bridge:

* DFK Chain: `53935`
* Kaia: `8217`
* Metis: `1088`

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. Fees can be estimated by calling `estimateEquipment`.

### Equipment Contract Mapping

Use the following mappings for the `_equipmentType` input on the `sendEquipment` function:

* Weapon: `1`
* Accessory/Offhand: `2`
* Armor: `3`
* Pet: `4`

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x3f6cc9B0E342386618cDc5785Fd4DF82CfB32CCF` | `0x9B1CaACC71672D4843B06cde9AA47B50d7691E0c` |
| Kaia      | `0xfb065ef4257719A99Ce7f1d03A6C22bd28983b77` | `0x5982f5FA37a2d9Da8DB8a76Cb89FA655A17bEcf0` |
| Metis     | `0xBeA7c8BDBc5ab4D5752C597A8DA896C0BD94F6bf` | `0x30e643B8ce2d3B055086bA1AD05dA62d81b79BD5` |

### Interfaces

```solidity
interface IEquipmentBridgeLZ {

    event EquipmentArrived(uint256 indexed equipmentId, uint16 indexed equipmentType, uint256 arrivalChainId);
    event EquipmentSent(uint256 indexed equipmentId, uint16 indexed equipmentType, uint256 arrivalChainId);
    event LZMessageSent(tuple(bytes32 guid, uint64 nonce, tuple(uint256 nativeFee, uint256 lzTokenFee) fee) receipt);
    event PetArrived(uint256 indexed petId, uint256 arrivalChainId);
    event PetSent(uint256 indexed petId, uint256 arrivalChainId);

    function bridgeEquipment(uint32 _dstChainId, address _receiver, uint256 _equipmentId, uint16 _equipmentType) payable;
    function estimateEquipment(uint32 _dstChainId, address _receiver, uint256 _equipmentId, uint16 _equipmentType) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);

}
```

### ABIs

{% file src="/files/JULN7X7OLoQaGwUIGRHQ" %}
