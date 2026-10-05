> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/bridging/item-bridge-v2.md).

# Item Bridge V2

The **LayerZeroV2 Item Bridge** processes the cross-chain bridging of ERC-20 and ERC-1155 tokens. It is available between **DFK Chain, Kaia, and Metis**.

{% hint style="info" %}
The Item Bridge is built in partnership with [Layer Zero](https://layerzero.network/) using their V2 Messaging protocol. For more information, visit their documentation at: <https://layerzero.gitbook.io/docs/>.

Use [Layer Zero Scan](https://layerzeroscan.com/) (<https://layerzeroscan.com/>) to track the progress of bridged items.
{% endhint %}

### Chain ID

Use the following mainnet destination Chain IDs for the Item Bridge:

* DFK Chain: `53935`
* Kaia: `8217`
* Metis: `1088`

### Fees

Bridging has a fee associated with each transaction. This fee must be included in the `value` field of the transaction. The fees for bridging Items are as follows:

* ERC-20: Use `estimateFeeSendERC20` or `multiEstimateFeeSendERC20`
* ERC-1155: Use `estimateFeeSendERC1155`

### Contract Addresses

| Name      | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x409E6CDE3119584074E162dcCC6C86433251C36f` | `0x46B76162C36D97a8347C21fd85fd662e87F6ea28` |
| Kaia      | `0x1679b50950aFF40983716b91862BB49eeE9718b9` | `0xc209aDB7d839921060CF425bA7F72524A356EcFd` |
| Metis     | `0x3E5b5826A8670DB5157c257d5e001F9C73141514` | `0x82995f66e9c6eC23069eE040Dc86dfcc1A2fa5fD` |

### Interfaces

```solidity
interface IItemBridgeLZ {

    event ERC1155Received(uint32 _srcChainId, address _srcAddress, address receiver, address item, uint256 amount, uint256 id);
    event ERC1155Sent(uint32 _dstChainId, address sender, address item, uint256 amount, uint256 id);
    event ItemReceived(uint32 _srcChainId, address _srcAddress, address receiver, address item, uint256 amount);
    event ItemSent(uint32 _dstChainId, address sender, address item, uint256 amount);

    function estimateFeeSendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);
    function estimateFeeSendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);
    function multiEstimateFeeSendERC20(uint16 _dstChainId, address _receiver, address[] _items, uint256[] _amounts) view returns (tuple(uint256 nativeFee, uint256 lzTokenFee) fee);
    function multiSendERC1155(uint16 _dstChainId, address _receiver, address[] _items, uint256[] _amounts, uint256[] _ids) payable;
    function multiSendERC20(uint16 _dstChainId, address _receiver, address[] _items, uint256[] _amounts) payable;
    function sendERC1155(uint16 _dstChainId, address _receiver, address _item, uint256 _amount, uint256 _id) payable;
    function sendERC20(uint16 _dstChainId, address _receiver, address _item, uint256 _amount) payable;

    
}
```

### ABIs

{% file src="/files/blPnXNhAkRYE88yzGxcX" %}
