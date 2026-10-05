> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/collections/potions-and-consumables/potion-migrator.md).

# Potion Migrator

The PotionMigrator contract converts Potion Crates into 4x of the specified [Potion](/collections/potions-and-consumables.md).

{% hint style="info" %}
A Potion Crate will need to be approved to the PotionMigrator contract before calling the `migrate` function.
{% endhint %}

## Contracts

### Addresses

<table><thead><tr><th width="150">Name</th><th width="189.73336520775536">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DFK Chain</td><td><code>0x6755dEBef85929aC4cd541c81147Bc17C4F0CD0e</code></td><td><code>0x5EA8D5021a29814B6B4077b55e673aa1FdCC6Fcd</code></td></tr><tr><td>Klaytn</td><td><code>0x8050156C08b2525D2a83Cb237abD3a7533F06355</code></td><td><code>0x9504EB8c9b6e84eC4659BD14427a6A6352468fb1</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IPotionMigrator {

    event TokensMigrated(address indexed account, address indexed token1, address indexed token2, uint256 amount);
    
    function migrate(address _tokenToMigrate);
    function tokenMappings(address) view returns (address);
    
}
```

### ABIs

{% file src="/assets/devs/files/PotionMigrator.json" %}
