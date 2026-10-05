> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/item-bridge-v2/item-bridge-v1-deprecated.md).

# Item Bridge V1 (Deprecated)

{% hint style="info" %}
The Item Bridge is built in partnership with [Layer Zero](https://layerzero.network/). For more information, visit their documentation at: <https://layerzero.gitbook.io/docs/>.
{% endhint %}

{% hint style="info" %}
Layer Zero has released [Layer Zero Scan](https://layerzeroscan.com/) (<https://layerzeroscan.com/>), a message explorer that can be used to track the progress of bridged items.
{% endhint %}

{% hint style="warning" %}
The Item Bridge from Harmony only allows bridging to DFK Chain, but not in the other direction.
{% endhint %}

### Chain ID

Use the following destination Chain IDs for the Item Bridge:

* DFK Chain Mainnet: `115` / Testnet: `10015`
* Klaytn Mainnet: `150` / Testnet: `10050`

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. The fees for bridging Items are as follows:

* ERC-20: Use `estimateFeeSendERC20`
* ERC-1155: Use `estimateFeeSendERC1155`

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| Harmony   | `0x091cfc85d2e20b110Cd754c6c410A67c925C55ED` | N/A                                          |
| DFK Chain | `0x501CdC4ef10b63219704Bf6aDb785dfccb06deE2` | `0xDA02dC6419A1CcEF04C041Cd792A6fe5AF327a44` |
| Klaytn    | `0x6d5B86EaC9097EA4a94B2b69Cd4854678B89f839` | `0x3D9d84801A0580a9C17B5FfAE0D7AcD73C8a3Ff7` |

### Interfaces

```solidity
interface IItemBridge {

    event ERC1155Received(uint16 _srcChainId, bytes _srcAddress, address receiver, address item, uint256 amount, uint256 id);
    event ItemReceived(uint16 _srcChainId, bytes _srcAddress, address receiver, address item, uint256 amount);
    event MessageFailed(uint16 _srcChainId, bytes _srcAddress, uint64 _nonce, bytes _payload);
    event SetTrustedRemote(uint16 _srcChainId, bytes _srcAddress);

    function estimateFeeSendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id, bool _useZro, bytes _adapterParams) view returns (uint256);
    function estimateFeeSendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id) view returns (uint256);
    function estimateFeeSendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount) view returns (uint256);
    function estimateFeeSendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, bool _useZro, bytes _adapterParams) view returns (uint256);
    function lzEndpoint() view returns (address);
    function owner() view returns (address);
    function paused() view returns (bool);
    function sendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id, address _zroPaymentAddress, bytes _adapterParams) payable;
    function sendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id) payable;
    function sendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, address _zroPaymentAddress, bytes _adapterParams) payable;
    function sendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount) payable;

}
```

### ABIs

{% file src="/files/lfgqX6FkLBo6Fn8FzoyH" %}
