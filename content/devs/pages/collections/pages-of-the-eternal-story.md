> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/pages-of-the-eternal-story.md).

# Pages of the Eternal Story

Pages of the Eternal Story are lore-based items that will be upgradable into a collectable NFT.

{% hint style="info" %}
**ERC1155:** Pages of the Eternal Story are based on the ER1155 standard. For more information you can view the docs by OpenZeppelin. <https://docs.openzeppelin.com/contracts/4.x/erc1155>
{% endhint %}

{% hint style="info" %}
Individual Pages are indexed sequentially with a URI beginning at 0.
{% endhint %}

## Contracts

### Addresses

#### DFK Chain

| Name                                                                                                                                                      | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://game.defikingdoms.com/static/media/eternal-story-page-1.5a5c934a.png" alt="" data-size="line"> Pages of the Eternal Story (DFKETRNLSTY) | `0xA37851cCE4B2b65c0b290AA4cC2DFF00314ec85a` | `0xa03f472F72dc0A5928096521e935fdA7c6342E96` |

#### Klaytn

| Name                                                                                                                                                      | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://game.defikingdoms.com/static/media/eternal-story-page-1.5a5c934a.png" alt="" data-size="line"> Pages of the Eternal Story (DFKETRNLSTY) | `0x26bdcB310313eFf8D580e43762e2020B23f3e728` | `0xe606f6548Ae34DA9065B4fee88990F239b445403` |

### Interfaces

```solidity
interface IEternalStory {

    event ApprovalForAll(address indexed account, address indexed operator, bool approved);
    event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values);
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);
    event URI(string value, uint256 indexed id);
    
    function balanceOf(address account, uint256 id) view returns (uint256);
    function balanceOfBatch(address[] accounts, uint256[] ids) view returns (uint256[]);
    function burn(address account, uint256 id, uint256 value);
    function burnBatch(address account, uint256[] ids, uint256[] values);
    function decimals() view returns (uint8);
    function isApprovedForAll(address account, address operator) view returns (bool);
    function name() view returns (string);
    function paused() view returns (bool);
    function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data);
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data);
    function setApprovalForAll(address operator, bool approved);
    function symbol() view returns (string);
    function uri(uint256) view returns (string);

}
```

### ABIs

{% file src="/assets/devs/files/EternalStory.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name                                                                                                                                                      | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://game.defikingdoms.com/static/media/eternal-story-page-1.5a5c934a.png" alt="" data-size="line"> Pages of the Eternal Story (DFKETRNLSTY) | `0x909EF175d58d0e17d3Ceb005EeCF24C1E5C6F390` | `0x241fEEb8B29e2A46C08b1C3ceefc632085baFc6B` |
