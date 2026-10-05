> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/jeweler-2.0/jeweler-1.0.md).

# Jeweler 1.0

{% hint style="info" %}
The Bank is based on the SushiSwap SushiBar contract. For more information, please view the Sushi Documentation: <https://docs.sushi.com/docs/Developers/Sushiswap/SushiBar>
{% endhint %}

{% hint style="info" %}
The Banker is based on the SushiSwap SushiMaker contract. For more information, please view the Sushi Documentation: <https://docs.sushi.com/docs/Developers/Sushiswap/SushiMaker>
{% endhint %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="success" %}
Fully Verified Contract: Bank\
<https://explorer.harmony.one/address/0xa9ce83507d872c5e1273e745abcfda849daa654f?activeTab=7>
{% endhint %}

{% hint style="success" %}
Fully Verified Contract: Banker\
<https://explorer.harmony.one/address/0x3685ec75ea531424bbe67db11e07013abeb95f1e?activeTab=7>
{% endhint %}

### Addresses

#### DFK Chain

| Name            | Mainnet                                      | Testnet                                      |
| --------------- | -------------------------------------------- | -------------------------------------------- |
| Bank (xCRYSTAL) | `0x6e7185872bcdf3f7a6cbbe81356e50daffb002d2` | `0x1A516207ABe4A0A636C6bB1C083c9EB46a026131` |
| Banker          | `0x4b1F4C7981465F814c4A78d79be21558A60f57F2` | `0x14b54Bf631c5147a1a59920f89128bE6A5FCe602` |

#### Harmony

| Name          | Mainnet                                      | Testnet                                      |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| Bank (xJEWEL) | `0xA9cE83507D872C5e1273E745aBcfDa849DAA654F` | `0x9bBD946ED9b6e9EA4FD85f3Fa9ADB9CC6f03c2BE` |
| Banker        | `0x3685Ec75Ea531424Bbe67dB11e07013ABeB95f1e` | `0xC617C69089a7f41C4030aC94Cf06dA2722D7ea12` |

### Interfaces

```solidity
interface IBank {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function enter(uint256 _amount);
    function govToken() view returns (address);
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function leave(uint256 _share);
    function name() view returns (string);
    function symbol() view returns (string);
    function totalSupply() view returns (uint256);
    function transfer(address recipient, uint256 amount) returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) returns (bool)

}
```

```solidity
interface IBanker {

    event LogBridgeSet(address indexed token, address indexed bridge);
    event LogConvert(address indexed server, address indexed token0, address indexed token1, uint256 amount0, uint256 amount1, uint256 amountGovToken);
    
    function bank() view returns (address);
    function bridgeFor(address token) view returns (address bridge);
    function convert(address token0, address token1);
    function convertMultiple(address[] token0, address[] token1);
    function factory() view returns (address);
    function owner() view returns (address);
    function setBridge(address token, address bridge);
    
}
```

### ABIs

{% file src="/files/rXAo4Lmzj69CZflTHOdB" %}

{% file src="/files/xvPKqAJtqhAsQyZscUFx" %}

## Related Contracts

{% content-ref url="/pages/oc29UJkT8G2NHEicW8q9" %}
[Governance Tokens](/tokens/governance-tokens.md)
{% endcontent-ref %}
