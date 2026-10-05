> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/dfk-chain/nodes-and-validators.md).

# Nodes & Validators

## Nodes

For information about DFK Chain updates, follow [@dfkchain](https://twitter.com/dfkchain) on Twitter.

### Running a Mainnet Node

The basic instructions for setting up a DFK Chain mainnet node can by found in the Avalanche Subnet Docs at: <https://docs.avax.network/nodes/run/subnet-node>

The AvaLabs `subnet-evm` repository is located at: <https://github.com/ava-labs/subnet-evm>.

### Subnet Upgrades

The DFK Chain upgrade settings are located at: <https://github.com/ava-labs/public-chain-assets/blob/main/chains/53935/upgrade.json>.

If you are using default directories, add the `upgrade.json` file to: `:$HOME/.avalanchego/configs/chains/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi`.

Otherwise, for details on adding the file to your node's configuration settings, see: <https://docs.avax.network/subnets/customize-a-subnet#network-upgrades-enabledisable-precompiles>.

#### Previous Upgrades

<table><thead><tr><th width="131.33333333333331">Date</th><th width="137">Timestamp</th><th>Description</th></tr></thead><tbody><tr><td>3/17/2023</td><td><code>1679072400</code></td><td><a href="https://github.com/ava-labs/public-chain-assets/pull/29">State upgrade</a> to increase CRYSTAL Hard Cap and Manual Mint Limit</td></tr><tr><td>9/22/2022</td><td><code>1662134400</code></td><td>Add <a href="https://docs.avax.network/subnets/customize-a-subnet#configuring-dynamic-fees"><code>FeeManagerConfig</code></a> precompile</td></tr></tbody></table>

### State Sync

Node operators who are only interested in current state of DFK Chain (i.e. not an archive node) can turn on State Sync for both DFK Chain and C-Chain, allowing your node to sync much faster.

To turn on State Sync, add the following to your `config.json` files, which by default are located in:

* C-Chain: `{chain-config-dir}/C/config.json`&#x20;
* DFK Chain: `{chain-config-dir}/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/config.json`

```json
{
  "state-sync-enabled": true
}
```

Additional instructions can be found at: <https://docs.avax.network/nodes/maintain/chain-config-flags#state-sync>.

### Node Snapshots

Snapshots for DFK Chain Mainnet State Sync and Archival Nodes can be downloaded from the following Torrent files:

<table><thead><tr><th width="144">Node Type</th><th width="95">Size</th><th width="113">Date</th><th data-type="files">Torrent Link</th></tr></thead><tbody><tr><td>State Sync</td><td>300 GB</td><td>June 2024</td><td><a href="https://2908426948-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlZLlRJsOJCqm10zUsKr6%2Fuploads%2FjJAcP8B9ZQnVn2qDGIuc%2Fdfk-mainnet-state-sync-snapshot-2024-06.tar.gz.torrent?alt=media&amp;token=04b25b4f-913b-412a-8a26-a71439220c5a">dfk-mainnet-state-sync-snapshot-2024-06.tar.gz.torrent</a></td></tr><tr><td>Archival</td><td>5.2 TB</td><td>May 2024</td><td><a href="https://2908426948-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlZLlRJsOJCqm10zUsKr6%2Fuploads%2FOroNCupnoMcxa1IBzCKL%2Fdfk-mainnet-archival-snapshot-2024-05.tar.torrent?alt=media&amp;token=a0c38509-772b-4bb8-920a-260d5976c9df">dfk-mainnet-archival-snapshot-2024-05.tar.torrent</a></td></tr></tbody></table>

## Validators

Information about DFK Chain validators and an application to become a validator can be found at: <https://validators.dfkchain.com/>.

### Gas Fee Distribution

Gas fees are collected by the Validator Fund smart contract and then distributed as follows:

* 50% - Burned
* 25% - Held in the Validator Fund and designated for the chain validators
* 25% - Held in the Reward Fund and designated to the [Quest Fund](/contracts/quests/quest-core.md#dfk-chain)

### Contracts

#### Addresses

<table><thead><tr><th width="202.21333393332526">Name</th><th width="271.09206342742226">Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>Validator Fund</td><td><code>0xED6dC9FD092190C08e4afF8611496774Ded19D54</code></td><td><code>0x1465e00a408edA9acd34B9F310317C12214b7c4b</code></td></tr><tr><td>Reward Fund</td><td><code>0x31de6B0819BC420c3137BE2CE3Ac5414ffBFB7d1</code></td><td><code>0x8D90c2Cc1C1AF0e9b71A412d46347Ba214078947</code></td></tr></tbody></table>

### Interfaces

```solidity
interface IValidatorFund {

    event AddValidator(address validator, string nodeID);
    event Disbursement(address indexed validator, uint256 amount);
    event Process(uint256 amount);
    event RemoveValidator(address validator, string nodeID);
    event Slash(address indexed validator, uint256 amount);
    event Stake(address indexed validator, uint256 amount, uint256 endTime);
    event Unstake(address indexed validator, uint256 amount);
    
    function addressToValidator(address) view returns (address owner, string nodeID, address rewardAddress, uint256 stakeAmount, uint256 stakeStartAt, uint256 stakeEndAt, uint256 balance, uint256 lifetimeBalance, bool exists);
    function allocatedAmount() view returns (uint256);
    function burnPercentage() view returns (uint256);
    function claimBalance();
    function fundAddress() view returns (address);
    function fundPercentage() view returns (uint256);
    function getValidator(address _validator) view returns (tuple(address owner, string nodeID, address rewardAddress, uint256 stakeAmount, uint256 stakeStartAt, uint256 stakeEndAt, uint256 balance, uint256 lifetimeBalance, bool exists));
    function getValidators() view returns (tuple(address owner, string nodeID, address rewardAddress, uint256 stakeAmount, uint256 stakeStartAt, uint256 stakeEndAt, uint256 balance, uint256 lifetimeBalance, bool exists)[]);
    function govToken() view returns (address);
    function lastDistribution() view returns (uint256);
    function maxStakeAmount() view returns (uint256);
    function maxStakeDuration() view returns (uint256);
    function minStakeAmount() view returns (uint256);
    function minStakeDuration() view returns (uint256);
    function processFunds();
    function rewardPercentage() view returns (uint256);
    function totalBurn() view returns (uint256);
    function totalFund() view returns (uint256);
    function totalReward() view returns (uint256);
    function totalStake() view returns (uint256);
    function unallocated() view returns (uint256);
    function unstake();
    function validators(uint256) view returns (address);

}
```

### ABIs

{% file src="/files/2yycXKye4XVd6fQvsguF" %}
