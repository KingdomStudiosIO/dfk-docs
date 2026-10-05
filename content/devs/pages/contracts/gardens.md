> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/gardens.md).

# Gardens

{% hint style="info" %}

* On January 15, 2024, the [MasterGardener](/contracts/gardens/master-gardener.md) contract on **DFK Chain** was deprecated and replaced with the LP Staking contract.
* On March 6, 2024, [MasterGardener](/contracts/gardens/master-gardener.md) contract on **Klaytn** was deprecated and replaced with the LP Staking contract.
  {% endhint %}

## LP Staking

<table><thead><tr><th width="157.33333333333331">Name</th><th>Mainnet</th><th>Testnet</th></tr></thead><tbody><tr><td>DFK Chain</td><td><code>0xB04e8D6aED037904B77A9F0b08002592925833b7</code></td><td><code>0x68c343846913163A356e353fEB56695031eb3D2a</code></td></tr><tr><td>Klaytn</td><td><code>0xcce557DF36a6E774694D5071FC1baF19B9b07Fdc</code></td><td><code>0x53Def60bE82255eAaA3451b923b083F4A0deF7B3</code></td></tr></tbody></table>

### Interface

```solidity
interface ILPStaking {

    // Events
    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event FeeRecipientSet(address indexed feeRecipient);
    event FeeStagesSet(uint256[] feeTimeStages, uint256[] feePercentStages);
    event PoolAdded(uint256 indexed pid, uint256 allocPoint, address lpToken);
    event PoolUpdated(uint256 indexed pid, uint256 allocPoint);
    event RewardClaimed(address indexed user, uint256 indexed pid, uint256 amount);
    event RewardCollected(uint256 indexed pid, uint256 amount, uint256 accRewardPerShare, uint256 govTokenSupply, uint256 timestamp);
    event RewardsProcessed(uint256 timestamp, uint256 amount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);

    // State-Changing Functions
    function claimAllRewards();
    function claimRewards(uint256 _pid);
    function deposit(uint256 _pid, uint256 _amount);
    function processRewards();
    function withdraw(uint256 _pid, uint256 _amount);

    // View Functions
    function getAllPendingRewards(address _user) view returns (uint256 _pendingRewards);
    function getFeeRecipient() view returns (address _feeRecipient);
    function getFeeStageForUserAndPool(address _user, uint256 _pid) view returns (uint256 _timeSinceDeposit, uint256 _currentFeePercent);
    function getFeeStages() view returns (uint256[] _feeTimeStages, uint256[] _feePercentStages);
    function getPendingRewards(uint256 _pid, address _user) view returns (uint256 _pendingRewards);
    function getPoolInfo(uint256 _pid) view returns (tuple(address lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accRewardPerShare, uint256 totalStaked) _poolInfo);
    function getPoolLength() view returns (uint256 _poolLength);
    function getTotalAllocPoint() view returns (uint256 _totalAllocPoint);
    function getUserInfo(uint256 _pid, address _user) view returns (tuple(uint256 amount, uint256 rewardDebt, uint256 lastDepositTimestamp) _userInfo);
    function getWithdrawalFeePercentage(uint256 _timeDelta) view returns (uint256 _feePercentage);
    function poolInfo(uint256 _pid) view returns (tuple(address lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accGovTokenPerShare) _poolInfoLegacy);
    function totalAllocPoint() view returns (uint256 _totalAllocPoint);
    function userInfo(uint256 _pid, address _user) view returns (tuple(uint256 amount, uint256 rewardDebt, uint256 rewardDebtAtBlock, uint256 lastWithdrawBlock, uint256 firstDepositBlock, uint256 blockdelta, uint256 lastDepositBlock) _userInfoLegacy);

}
```

### ABI

{% file src="/assets/devs/files/LPStakingDiamond.json" %}

## Incentivized Garden Pairs

{% hint style="warning" %}
Archived Garden pairs no longer receive token rewards and have been removed from the primary game interface.
{% endhint %}

#### DFK Chain

<table><thead><tr><th width="91.66815322866361" align="right">Pool ID (PID)</th><th width="178.35953522508254">Token Pair</th><th width="365">LP Contract Address</th><th data-type="checkbox">Archived Garden</th><th data-hidden data-type="checkbox">Archived</th><th data-hidden></th></tr></thead><tbody><tr><td align="right">0</td><td>wJEWEL-xJEWEL</td><td><code>0x6AC38A4C112F125eac0eBDbaDBed0BC8F4575d0d</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">1</td><td>CRYSTAL-AVAX</td><td><code>0x9f378F48d0c1328fd0C80d7Ae544C6CadB5Ba99E</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">2</td><td>CRYSTAL-wJEWEL</td><td><code>0x48658E69D741024b4686C8f7b236D3F1D291f386</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">3</td><td>CRYSTAL-USDC</td><td><code>0x04Dec678825b8DfD2D0d9bD83B538bE3fbDA2926</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">4</td><td>ETH-USDC</td><td><code>0x7d4daa9eB74264b082A92F3f559ff167224484aC</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">5</td><td>wJEWEL-USDC</td><td><code>0xCF329b34049033dE26e4449aeBCb41f1992724D3</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">6</td><td>CRYSTAL-ETH</td><td><code>0x78C893E262e2681Dbd6B6eBA6CCA2AaD45de19AD</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">7</td><td>CRYSTAL-BTC.b</td><td><code>0x00BD81c9bAc29a3b6aea7ABc92d2C9a3366Bb4dD</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">8</td><td>CRYSTAL-KLAY</td><td><code>0xaFC1fBc3F3fB517EB54Bb2472051A6f0b2105320</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">9</td><td>wJEWEL-KLAY</td><td><code>0x561091E2385C90d41b4c0dAef651A4b33E1a5CfE</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">10</td><td>wJEWEL-AVAX</td><td><code>0xF3EabeD6Bd905e0FcD68FC3dBCd6e3A4aEE55E98</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">11</td><td>wJEWEL-BTC.b</td><td><code>0xfAa8507e822397bd56eFD4480Fb12ADC41ff940B</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">12</td><td>wJEWEL-ETH</td><td><code>0x79724B6996502afc773feB3Ff8Bb3C23ADf2854B</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">13</td><td>BTC.b-USDC</td><td><code>0x59D642B471dd54207Cb1CDe2e7507b0Ce1b1a6a5</code></td><td>false</td><td>false</td><td></td></tr></tbody></table>

#### Klaytn

<table><thead><tr><th width="90.66815322866361" align="right">Pool ID (PID)</th><th width="182.35953522508254">Token Pair</th><th width="362">LP Contract Address</th><th data-type="checkbox">Archived Garden</th><th data-hidden data-type="checkbox">Archived</th><th data-hidden></th></tr></thead><tbody><tr><td align="right">0</td><td>JADE-JEWEL</td><td><code>0x85DB3CC4BCDB8bffA073A3307D48Ed97C78Af0AE</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">1</td><td>JADE-wKLAY</td><td><code>0xd08A937a67eb5613ccC8729C01605E0320f1B216</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">2</td><td>JADE-AVAX</td><td><code>0x63b67d4a0f553D436B0a511836A7A4bDF8Af376A</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">3</td><td>JADE-oUSDT</td><td><code>0x509d49AC90EF180363269E35b363E10b95c983AF</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">4</td><td>JADE-oWBTC</td><td><code>0x50943e1E500D7D62cc4c6904FBB3957fAfaEbEd5</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">5</td><td>JADE-oETH</td><td><code>0x6fc625D907b524475887524b11DE833feF460698</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">6</td><td>JEWEL-wKLAY</td><td><code>0x0d9d200720021F9de5C8413244f81087ecB4AdcC</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">7</td><td>JEWEL-AVAX</td><td><code>0x6CE5bb25A4E7aBF7214309F7b8D7cceCEF60867E</code></td><td>false</td><td>false</td><td></td></tr><tr><td align="right">8</td><td>JEWEL-oUSDT</td><td><code>0xB32839faF3826158995aF72d7824802840187f19</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">9</td><td>JEWEL-oWBTC</td><td><code>0x7828926761e7a6E1f9532914A282bf6631EA3C81</code></td><td>true</td><td>false</td><td></td></tr><tr><td align="right">10</td><td>JEWEL-oETH</td><td><code>0xd3e2Fd9dB41Acea03f0E0c22d85D3076186f4f24</code></td><td>true</td><td>false</td><td></td></tr></tbody></table>
