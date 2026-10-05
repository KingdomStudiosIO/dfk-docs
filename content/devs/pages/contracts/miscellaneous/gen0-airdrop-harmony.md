> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/miscellaneous/gen0-airdrop-harmony.md).

# Gen0 Airdrop (Harmony)

{% hint style="info" %}
This contract was used for airdropping 75 Serendale Gen0 Hero crystals on Harmony to winners of the original Gen0 raffle and other partners and influencers. It is listed here for data analysis and tracking purposes only.
{% endhint %}

## Historical Contracts

### Addresses

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| Gen0Airdrop | `0xBd1f65e7f350C614d364AEFeB2d87F829b0E465d` | `0x631E44cf093F7B532Fed94C50f32F1025ad92BFa` |

### Interfaces

```solidity
interface IGen0Airdrop {

    event CrystalAirdrop(address indexed owner, uint256 crystalId, uint256 createdBlock);
    event CrystalOpen(address indexed owner, uint256 crystalId, uint256 heroId);
    
    function airdropCrystal(address _recipient);
    function crystals(uint256) view returns (address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address bonusItem, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle);
    function enabled() view returns (bool);
    function extractNumber(uint256 randomNumber, uint256 digits, uint256 offset) pure returns (uint256 result);
    function getCrystal(uint256 _crystalId) view returns (tuple(address owner, uint256 summonerId, uint256 assistantId, uint16 generation, uint256 createdBlock, uint256 heroId, uint8 summonerTears, uint8 assistantTears, address bonusItem, uint32 maxSummons, uint32 firstName, uint32 lastName, uint8 shinyStyle));
    function getUserCrystals(address _address) view returns (uint256[]);
    function open(uint256 _crystalId) returns (uint256);
    function userCrystals(address, uint256) view returns (uint256);
    function vrf(uint256 blockNumber) view returns (bytes32 result);

}
```

### ABIs

{% file src="/files/o0WQ0ywAp0EPfwzfkzXz" %}
