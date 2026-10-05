> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/jeweler-2.0.md).

# Jeweler 2.0

## Contracts

### Addresses

#### DFK Chain

| Name                         | Mainnet                                      | Testnet                                      |
| ---------------------------- | -------------------------------------------- | -------------------------------------------- |
| VoteEscrowTokenPool (cJEWEL) | `0x9ed2c155632C042CB8bC20634571fF1CA26f5742` | `0xD5b38Cb2B174ce5E8B183C4c369ED224BeE24AF8` |
| Jeweler2                     | `0x39DE24fA396eE8F94C8E01530cfdd57B195bDd7D` | `0x81c0FB3D00247cf259089B5954d9D03628AD1092` |
| FeeCollector                 | `0x8DEd102aAc620320ECc643603932117ed697091A` | `0x4f0ADF739aC417d8b04108239A26f5538B619dAc` |

#### Klaytn

| Name                         | Mainnet                                      | Testnet                                      |
| ---------------------------- | -------------------------------------------- | -------------------------------------------- |
| VoteEscrowTokenPool (sJEWEL) | `0xaA8548665bCC12C202d5d0C700093123F2463EA6` | `0x4419F44043301a38Ae6b6384c454740fe4DfB6eA` |
| Jeweler                      | `0x1AE44dbBf06025E4F72c632Aced1a5195233FA71` | `0x02D2441614119079Fb219691c51964E01bDa7693` |
| FeeCollector                 | `0xF34D3Cd4BB06b81D28f15068Bb8Dd0e078B7a6f7` | `0x75b0d1370161D34560eA895865Bae3b8C34AB067` |

### Interfaces

```solidity
interface IVoteEscrowTokenPool {

    event Approval(address indexed owner, address indexed spender, uint256 value);
    event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);
    event DelegateVotesChanged(address indexed delegate, uint256 previousBalance, uint256 newBalance);
    event Deposit(address indexed provider, tuple(uint256 amount, uint256 govTokenBalance, uint256 end, uint256 rewardDebt, uint256 availableSubBalance, uint32 subscriptionCount) user, uint256 govTokenReceived, uint256 timestamp);
    event EarlyWithdrawPenaltySet(uint256 indexed penalty);
    event FeeCollectorSet(address indexed addr);
    event MinLockedAmountSet(uint256 indexed amount);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event PenaltyCollectorSet(address indexed addr);
    event RewardClaimed(address indexed user, uint256 amount);
    event RewardCollected(uint256 amount, uint256 accGovTokenPerShare, uint256 govTokenSupply, uint256 timestamp);
    event SendGovernanceTokenReward(address indexed user, uint256 amount);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Withdraw(address indexed provider, uint256 value, uint256 timestamp);
    
    function DOMAIN_SEPARATOR() view returns (bytes32);
    function MAXDAYS() view returns (uint256);
    function MAXTIME() view returns (uint256);
    function MAX_WITHDRAWAL_PENALTY() view returns (uint256);
    function MINDAYS() view returns (uint256);
    function PRECISION() view returns (uint256);
    function REWARD_PRECISION() view returns (uint256);
    function _votingPowerLockedDays(uint256 _value, uint256 _days) pure returns (uint256);
    function _votingPowerUnlockTime(uint256 _value, uint256 _unlockTime) view returns (uint256);
    function accGovTokenPerShare() view returns (uint256);
    function allowance(address owner, address spender) view returns (uint256);
    function approve(address spender, uint256 amount) returns (bool);
    function balanceOf(address account) view returns (uint256);
    function burn() view returns (address);
    function checkpoints(address account, uint32 pos) view returns (tuple(uint32 fromBlock, uint224 votes));
    function claimReward();
    function createLock(uint256 _value, uint256 _days) payable;
    function dailyBalances(uint256) view returns (uint256);
    function dailyRewards(uint256) view returns (uint256);
    function decimals() view returns (uint8);
    function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool);
    function delegate(address delegatee);
    function delegateBySig(address delegatee, uint256 nonce, uint256 expiry, uint8 v, bytes32 r, bytes32 s);
    function delegates(address account) view returns (address);
    function deploymentTime() view returns (uint256);
    function earlyWithdrawPenaltyRate() view returns (uint256);
    function emergencyWithdraw();
    function feeCollector() view returns (address);
    function getAPRData(uint256 _day) view returns (uint256, uint256);
    function getPastTotalSupply(uint256 blockNumber) view returns (uint256);
    function getPastVotes(address account, uint256 blockNumber) view returns (uint256);
    function getTotalGovTokenAmount() view returns (uint256);
    function getTotalLockedAmount() view returns (uint256);
    function getUserInfo(address _addr) view returns (tuple(uint256 amount, uint256 govTokenBalance, uint256 end, uint256 rewardDebt, uint256 availableSubBalance, uint32 subscriptionCount));
    function getVotes(address account) view returns (uint256);
    function getYesterdayAPRData() view returns (uint256, uint256);
    function govTokenSupply() view returns (uint256);
    function increaseAllowance(address spender, uint256 addedValue) returns (bool);
    function increaseLock(uint256 _value, uint256 _days) payable;
    function initialize(string _name, string _symbol, address _lockedToken, uint256 _minLockedAmount, bool _isGasToken);
    function isGasToken() view returns (bool);
    function lastRewardBlock() view returns (uint256);
    function lockedToken() view returns (address);
    function lockedTokenSupply() view returns (uint256);
    function minLockedAmount() view returns (uint256);
    function name() view returns (string);
    function nonces(address owner) view returns (uint256);
    function numCheckpoints(address account) view returns (uint32);
    function owner() view returns (address);
    function penaltyCollector() view returns (address);
    function pendingReward(address _user) view returns (uint256);
    function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s);
    function renounceOwnership();
    function symbol() view returns (string);
    function today() view returns (uint256);
    function totalSupply() view returns (uint256);
    function transfer(address to, uint256 amount) returns (bool);
    function transferFrom(address from, address to, uint256 amount) returns (bool);
    function transferOwnership(address newOwner);
    function updatePool();
    function userInfo(address) view returns (uint256 amount, uint256 govTokenBalance, uint256 end, uint256 rewardDebt, uint256 availableSubBalance, uint32 subscriptionCount);
    function withdraw();
    
}
```

```solidity
interface IJeweler {

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

```solidity
interface IFeeCollector {

    event Trade(address fromToken, address toToken, uint256 soldAmount, uint256 boughtAmount);
    
    function collectRewards();
    
}
```

### ABIs

{% file src="/assets/devs/files/VoteEscrowRewardPool.json" %}

{% file src="/assets/devs/files/Jeweler.json" %}

{% file src="/assets/devs/files/FeeCollector.json" %}

## Related Contracts

{% content-ref url="/pages/oc29UJkT8G2NHEicW8q9" %}
[Governance Tokens](/tokens/governance-tokens.md)
{% endcontent-ref %}
