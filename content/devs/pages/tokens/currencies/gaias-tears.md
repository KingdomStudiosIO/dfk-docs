> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/tokens/currencies/gaias-tears.md).

# Gaia's Tears

Description

{% hint style="info" %}
**ERC20:** Currencies are based on the ERC20 standard. For more information, please view the documentation by OpenZeppelin: <https://docs.openzeppelin.com/contracts/4.x/erc20>
{% endhint %}

{% hint style="warning" %}
Gaia's Tears has 0 decimals.
{% endhint %}

{% hint style="warning" %}
A new version of Gaia’s Tears was introduced on DFK Chain. Summoning on DFK Chain uses the new V2 token. V1 tokens can be migrated through the in-game inventory or the TokenMigrator contract. V2 Gaia's Tears cannot be bridged back to Harmony.
{% endhint %}

### Suggested Use Cases

* RNG-based fees for Gaia's blessings
* Anything to do with summoning NFTs

## Contracts

### Addresses

#### DFK Chain

| Name                                                                                                                              | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png" alt="" data-size="line"> Gaia's Tears (DFKTEARS) \[V2] | `0x79fE1fCF16Cc0F7E28b4d7B97387452E3084b6dA` | `0xbE191ba492b5B2B9845A4801Ebd1940B5f772EE2` |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png" alt="" data-size="line"> Gaia's Tears (DFKTEARS)       | `0x58E63A9bbb2047cd9Ba7E6bB4490C238d271c278` | `0x5829A860284f4c800a60ccDa4157e8dde0C32D30` |
| TokenMigrator                                                                                                                     | `0xBF956B8B9cBE8af30CE923dF24C339ecA7589a61` | `0x8487C9eB554F88e2e40FF32654b5A44BBB575875` |

#### Kaia

| Name                                                                                                                        | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png" alt="" data-size="line"> Gaia's Tears (DFKTEARS) | `0x8Be0cbA3c8c8F392408364ef21dfCF714A918234` | `0xbb8ac0BB95E433204217b0478B3f6d815EcB2d8C` |

#### Metis

| Name                                                                                                                        | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png" alt="" data-size="line"> Gaia's Tears (DFKTEARS) | `0x9d05F8289F0eA7D1993B316F45b8e6E29F7e5D16` | `0x02F334C88C6811d5B7609716a02fa6F4415e518d` |

### Interfaces

```solidity
interface IInventoryItem {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function burn(uint256 amount);
    function burnFrom(address account, uint256 amount);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function name() view returns (string);
    function paused() view returns (bool);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    
}
```

```solidity
interface ITokenMigrator {

    event TokensMigrated(address indexed account, address indexed token1, address indexed token2, uint256 amount);
    
    function migrate();
    function tokenV1() view returns (address);
    function tokenV2() view returns (address);
    
}
```

### ABIs

{% file src="/assets/devs/files/GaiaTears.json" %}

{% file src="/assets/devs/files/tokenMigrator.json" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

#### Harmony

| Name                                                                                                                        | Mainnet                                      | Testnet                                      |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| <img src="https://defi-kingdoms.b-cdn.net/art-assets/items/gaias-tear.png" alt="" data-size="line"> Gaia's Tears (DFKTEARS) | `0x24eA0D436d3c2602fbfEfBe6a16bBc304C963D04` | `0xf0e28E7c46F307954490fB1134c8D437e23D55fb` |
