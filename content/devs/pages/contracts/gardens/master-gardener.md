> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/gardens/master-gardener.md).

# Master Gardener

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="info" %}
The Master Gardener is based on the SushiSwap MasterChef contact. For more information, please view the Sushi Documentation: <https://docs.sushi.com/docs/Developers/Sushiswap/MasterChef>
{% endhint %}

{% hint style="success" %}
Fully Verified Contract on Harmony <https://explorer.harmony.one/address/0xdb30643c71ac9e2122ca0341ed77d09d5f99f924?activeTab=7>
{% endhint %}

### Addresses

| Network   | Mainnet                                      | Testnet                                      |
| --------- | -------------------------------------------- | -------------------------------------------- |
| DFK Chain | `0x57Dec9cC7f492d6583c773e2E7ad66dcDc6940Fb` | `0xF8eDA301Fe64103DAa18a810527F77Cff674fe14` |
| Klaytn    | `0xad2ea7b7e49be15918E4917736E86ff7feA57a6A` | `0xA00F1B0D04D9a36e356A13459E76c25FAb688271` |
| Harmony   | `0xDB30643c71aC9e2122cA0341ED77d09D5f99F924` | `0x889aB3A26FEFFC204c9c566923D2aBED2236E661` |

### Interfaces

```solidity
interface IMasterGardener {

  event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
  event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount);
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
  event SendGovernanceTokenReward(address indexed user, uint256 indexed pid, uint256 amount, uint256 lockAmount);
  event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);

  function FINISH_BONUS_AT_TIMESTAMP() view returns (uint256);
  function HALVING_AT_TIMESTAMP(uint256) view returns (uint256);
  function PERCENT_FOR_COM() view returns (uint256);
  function PERCENT_FOR_DEV() view returns (uint256);
  function PERCENT_FOR_FOUNDERS() view returns (uint256);
  function PERCENT_FOR_LP() view returns (uint256);
  function PERCENT_LOCK_BONUS_REWARD(uint256) view returns (uint256);
  function REWARD_MULTIPLIER(uint256) view returns (uint256);
  function REWARD_PER_SECOND() view returns (uint256);
  function START_TIMESTAMP() view returns (uint256);
  function add(uint256 _allocPoint, address _lpToken, bool _withUpdate);
  function addAuthorized(address _toAdd);
  function authorized(address) view returns (bool);
  function bonusFinishUpdate(uint256 _newFinish);
  function claimReward(uint256 _pid);
  function claimRewards(uint256[] _pids);
  function comUpdate(address _newCom);
  function comfundaddr() view returns (address);
  function deposit(uint256 _pid, uint256 _amount);
  function dev(address _devaddr);
  function devFeeStage(uint256) view returns (uint256);
  function devaddr() view returns (address);
  function emergencyWithdraw(uint256 _pid);
  function founderUpdate(address _newFounder);
  function founderaddr() view returns (address);
  function getLockPercentage(uint256 _from, uint256 _to) view returns (uint256);
  function getMultiplier(uint256 _from, uint256 _to) view returns (uint256);
  function getNewRewardPerSecond(uint256 pid1) view returns (uint256);
  function getPoolReward(uint256 _from, uint256 _to, uint256 _allocPoint) view returns (uint256 forDev, uint256 forFarmer, uint256 forLP, uint256 forCom, uint256 forFounders);
  function govToken() view returns (address);
  function halvingUpdate(uint256[] _newHalving);
  function liquidityaddr() view returns (address);
  function lockUpdate(uint256[] _newlock);
  function lockcomUpdate(uint256 _newcomlock);
  function lockdevUpdate(uint256 _newdevlock);
  function lockfounderUpdate(uint256 _newfounderlock);
  function locklpUpdate(uint256 _newlplock);
  function lpUpdate(address _newLP);
  function massUpdatePools();
  function owner() view returns (address);
  function pendingReward(uint256 _pid, address _user) view returns (uint256);
  function poolExistence(address) view returns (bool);
  function poolId1(address) view returns (uint256);
  function poolInfo(uint256) view returns (address lpToken, uint256 allocPoint, uint256 lastRewardTimestamp, uint256 accGovTokenPerShare);
  function poolLength() view returns (uint256);
  function reclaimTokenOwnership(address _newOwner);
  function removeAuthorized(address _toRemove);
  function renounceOwnership();
  function rewardMulUpdate(uint256[] _newMulReward);
  function rewardUpdate(uint256 _newReward);
  function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate);
  function setDevFeeStage(uint256[] _devFees);
  function setStageEnds(uint256[] _timeEnds);
  function setStageStarts(uint256[] _timeStarts);
  function setUserFeeStage(uint256[] _userFees);
  function startTimestampUpdate(uint256 _newstarttimestamp);
  function timeDeltaEndStage(uint256) view returns (uint256);
  function timeDeltaStartStage(uint256) view returns (uint256);
  function totalAllocPoint() view returns (uint256);
  function transferOwnership(address newOwner);
  function updatePool(uint256 _pid);
  function usdOracle() view returns (address);
  function userDelta(uint256 _pid) view returns (uint256);
  function userFeeStage(uint256) view returns (uint256);
  function userInfo(uint256, address) view returns (uint256 amount, uint256 rewardDebt, uint256 rewardDebtAtTimestamp, uint256 lastWithdrawTimestamp, uint256 firstDepositTimestamp, uint256 timeDelta, uint256 lastDepositTimestamp);
  function withdraw(uint256 _pid, uint256 _amount)

}
```

```solidity
interface IMasterGardenerHarmony {

    event Deposit(address indexed user, uint256 indexed pid, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event SendGovernanceTokenReward(address indexed user, uint256 indexed pid, uint256 amount, uint256 lockAmount);
    event Withdraw(address indexed user, uint256 indexed pid, uint256 amount);
    
    function FINISH_BONUS_AT_BLOCK() view returns (uint256);
    function HALVING_AT_BLOCK(uint256) view returns (uint256);
    function PERCENT_FOR_COM() view returns (uint256);
    function PERCENT_FOR_DEV() view returns (uint256);
    function PERCENT_FOR_FOUNDERS() view returns (uint256);
    function PERCENT_FOR_LP() view returns (uint256);
    function PERCENT_LOCK_BONUS_REWARD(uint256) view returns (uint256);
    function REWARD_MULTIPLIER(uint256) view returns (uint256);
    function REWARD_PER_BLOCK() view returns (uint256);
    function START_BLOCK() view returns (uint256);
    function add(uint256 _allocPoint, address _lpToken, bool _withUpdate);
    function addAuthorized(address _toAdd);
    function authorized(address) view returns (bool);
    function blockDeltaEndStage(uint256) view returns (uint256);
    function blockDeltaStartStage(uint256) view returns (uint256);
    function bonusFinishUpdate(uint256 _newFinish);
    function claimReward(uint256 _pid);
    function claimRewards(uint256[] _pids);
    function comUpdate(address _newCom);
    function comfundaddr() view returns (address);
    function deposit(uint256 _pid, uint256 _amount, address _ref);
    function dev(address _devaddr);
    function devDepFee() view returns (uint256);
    function devFeeStage(uint256) view returns (uint256);
    function devaddr() view returns (address);
    function emergencyWithdraw(uint256 _pid);
    function founderUpdate(address _newFounder);
    function founderaddr() view returns (address);
    function getGlobalAmount(address _user) view returns (uint256);
    function getGlobalRefAmount(address _user) view returns (uint256);
    function getLockPercentage(uint256 _from, uint256 _to) view returns (uint256);
    function getMultiplier(uint256 _from, uint256 _to) view returns (uint256);
    function getNewRewardPerBlock(uint256 pid1) view returns (uint256);
    function getPoolReward(uint256 _from, uint256 _to, uint256 _allocPoint) view returns (uint256 forDev, uint256 forFarmer, uint256 forLP, uint256 forCom, uint256 forFounders);
    function getRefValueOf(address _user, address _user2) view returns (uint256);
    function getTotalRefs(address _user) view returns (uint256);
    function govToken() view returns (address);
    function halvingUpdate(uint256[] _newHalving);
    function liquidityaddr() view returns (address);
    function lockUpdate(uint256[] _newlock);
    function lockcomUpdate(uint256 _newcomlock);
    function lockdevUpdate(uint256 _newdevlock);
    function lockfounderUpdate(uint256 _newfounderlock);
    function locklpUpdate(uint256 _newlplock);
    function lpUpdate(address _newLP);
    function massUpdatePools();
    function owner() view returns (address);
    function pendingReward(uint256 _pid, address _user) view returns (uint256);
    function poolExistence(address) view returns (bool);
    function poolId1(address) view returns (uint256);
    function poolInfo(uint256) view returns (address lpToken, uint256 allocPoint, uint256 lastRewardBlock, uint256 accGovTokenPerShare);
    function poolLength() view returns (uint256);
    function reclaimTokenOwnership(address _newOwner);
    function removeAuthorized(address _toRemove);
    function renounceOwnership();
    function reviseDeposit(uint256 _pid, address _user, uint256 _block);
    function reviseWithdraw(uint256 _pid, address _user, uint256 _block);
    function rewardMulUpdate(uint256[] _newMulReward);
    function rewardUpdate(uint256 _newReward);
    function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate);
    function setDevDepFee(uint256 _devDepFees);
    function setDevFeeStage(uint256[] _devFees);
    function setStageEnds(uint256[] _blockEnds);
    function setStageStarts(uint256[] _blockStarts);
    function setUserDepFee(uint256 _usrDepFees);
    function setUserFeeStage(uint256[] _userFees);
    function starblockUpdate(uint256 _newstarblock);
    function totalAllocPoint() view returns (uint256);
    function transferOwnership(address newOwner);
    function updatePool(uint256 _pid);
    function usdOracle() view returns (address);
    function userDelta(uint256 _pid) view returns (uint256);
    function userDepFee() view returns (uint256);
    function userFeeStage(uint256) view returns (uint256);
    function userGlobalInfo(address) view returns (uint256 globalAmount, uint256 totalReferals, uint256 globalRefAmount);
    function userInfo(uint256, address) view returns (uint256 amount, uint256 rewardDebt, uint256 rewardDebtAtBlock, uint256 lastWithdrawBlock, uint256 firstDepositBlock, uint256 blockdelta, uint256 lastDepositBlock);
    function withdraw(uint256 _pid, uint256 _amount, address _ref);

}
```

### ABIs

{% file src="/files/cTh1a99FP6jI0N9CcBNV" %}

{% file src="/files/OdkemUr8jklkejhiyHZl" %}

## Garden Pairs

#### Harmony

<table><thead><tr><th width="116" align="right">Pool ID (PID)</th><th width="179">Pair</th><th>LP Contract Address</th></tr></thead><tbody><tr><td align="right">0</td><td>JEWEL-WONE</td><td><code>0xEb579ddcD49A7beb3f205c9fF6006Bb6390F138f</code></td></tr><tr><td align="right">1</td><td>JEWEL-BUSD</td><td><code>0xE01502Db14929b7733e7112E173C3bCF566F996E</code></td></tr><tr><td align="right">2</td><td>JEWEL-bscBNB</td><td><code>0xE7d0116Dd1DBBBA2EFBAd58f097D1FFbbeDc4923</code></td></tr><tr><td align="right">3</td><td>1ETH-JEWEL</td><td><code>0xEaB84868f6c8569E14263a5326ECd62F5328a70f</code></td></tr><tr><td align="right">4</td><td>WONE-BUSD</td><td><code>0x3a0C4D87BdE442150779d63c1c695d003184dF52</code></td></tr><tr><td align="right">5</td><td>JEWEL-XYA</td><td><code>0x3733062773B24F9bAfa1e8f2e5A352976f008A95</code></td></tr><tr><td align="right">6</td><td>JEWEL-1USDC</td><td><code>0xA1221A5BBEa699f507CC00bDedeA05b5d2e32Eba</code></td></tr><tr><td align="right">7</td><td>1WBTC-JEWEL</td><td><code>0x0AcCE15D05B4BA4dBEdFD7AFD51EA4FA1592f75E</code></td></tr><tr><td align="right">8</td><td>UST-JEWEL</td><td><code>0xb91A0dFA0178500FEDC526f26A89803C387772E8</code></td></tr><tr><td align="right">9</td><td>1ETH-WONE</td><td><code>0x864fcd9a42a5f6e0f76BC309Ee26c8fab473FC3e</code></td></tr><tr><td align="right">10</td><td>1USDC-WONE</td><td><code>0x66C17f5381d7821385974783BE34c9b31f75Eb78</code></td></tr><tr><td align="right">11</td><td>1WBTC-1ETH</td><td><code>0x997f00485B238c83f7e58C2Ea1866DFD79f04A4b</code></td></tr><tr><td align="right">12</td><td>1SUPERBID-JEWEL</td><td><code>0x95f2409a44a9B989F8C5601037C513890E90cd06</code></td></tr><tr><td align="right">13</td><td>1SUPERBID-WONE</td><td><code>0x68a73f563ba14d51f070A6ddD073177FB794190A</code></td></tr><tr><td align="right">14</td><td>JEWEL-MIS</td><td><code>0x751606585FcAa73bf92Cf823b7b6D8A0398a1c99</code></td></tr><tr><td align="right">15</td><td>JEWEL-AVAX</td><td><code>0x093956649D43f23fe4E7144fb1C3Ad01586cCf1e</code></td></tr><tr><td align="right">16</td><td>JEWEL-FTM</td><td><code>0x7f89b5F33138C89FAd4092a7C079973C95362D53</code></td></tr><tr><td align="right">17</td><td>JEWEL-LUNA</td><td><code>0xB6e9754b90b338ccB2a74fA31de48ad89f65ec5e</code></td></tr><tr><td align="right">18</td><td>JEWEL-WMATIC</td><td><code>0x3E81154912E5E2Cc9B10Ad123BF14aeb93aE5318</code></td></tr></tbody></table>
