> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/nfts/pets/pet-exchange.md).

# Pet Exchange

## Contracts

### Addresses

#### DFK Chain

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| PetExchange | `0x50142D9e3FA508C424B3ef37BD195b4086CC3DCA` | `0xcF884770B942118d1d2df5A1CdC121e789056901` |
| Pasture     | `0xE959cbddB8616BDFFa5464279664CCbb9EA10317` | `0x1263B2a59F17b829D2a53d18a2f459EB77f6801c` |

#### Klaytn

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| PetExchange | `0xe5D563F7e4144955FCFa8b90da45825426a05bD4` | `0x87924b65065B80f856873efFB38626fa6ce80f67` |
| Pasture     | `0x4aBb1cDe7a0C55850495E80E1806993b1B92F742` | `0x244BCc7a02b07Ae56B549A6181e353d8D69Fc4Cc` |

### Interfaces

```solidity
interface IPetExchange {

    event CompletedPetExchange(address indexed owner, uint256 indexed eggId1, uint256 indexed eggId2, uint8 eggTypeRecieved, uint256 exchangeId);
    event StartedPetExchange(address indexed owner, uint256 indexed eggId1, uint256 indexed eggId2, uint256 exchangeId);
    
    function completeExchange(uint256 _exchangeId);
    function eggs(uint256) view returns (address);
    function getPetExchange(uint256 _exchangeId) view returns (tuple(uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status));
    function getUserPetExchanges(address _address) view returns (tuple(uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status)[]);
    function idToPetExchange(uint256) view returns (uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status);
    function paused() view returns (bool);
    function profileExchangedPets(address, uint256) view returns (uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status);
    function startExchange(uint256 _petId1, uint256 _petId2);
    function totalExchanges() view returns (uint256);

}
```

```solidity
interface IPasture {

    event PetReleased(uint256 petId, string indexed releaseReason, uint256 releaseTime);
    
    function getProfileReleasedPet(address _profile, uint256 _index) view returns (tuple(uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner));
    function getProfileReleasedPets(address _profile) view returns (tuple(uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner)[]);
    function getReleasedPet(uint256 _petId) view returns (tuple(uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner));
    function getReleasedPets() view returns (tuple(uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner)[]);
    function petCore() view returns (address);
    function petToReleasedPet(uint256) view returns (uint256);
    function profileReleasedPets(address, uint256) view returns (uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner);
    function releasePet(address _holder, uint256 _petId, string _releaseReason, address _previousOwner);
    function releasedPets(uint256) view returns (uint256 id, uint256 petId, uint64 releaseTime, string releaseReason, address previousOwner);

}
```

### ABIs

{% file src="/files/RnGaLhvhVSTp4i2BGhwv" %}

{% file src="/files/iN8l7rwz7LfEdkCZxGuz" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

### Addresses

#### Harmony

| Name        | Mainnet                                      | Testnet                                      |
| ----------- | -------------------------------------------- | -------------------------------------------- |
| PetExchange | `0xeaF833A0Ae97897f6F69a728C9c17916296cecCA` | `0x8e307808546922f09Ad1b6bc0677cF8Db7E3b558` |
| Pasture     | `0xE408814828f2b51649473c1a05B861495516B920` | `0x782bA5bfA06e8b5537e95AeaD2784cc7B920facb` |

### Interfaces

```solidity
interface IPetExchangeHarmony {

    event PetExchangeCompleted(address indexed owner, uint256 indexed eggId1, uint256 indexed eggId2, uint8 eggTypeRecieved);
    event PetExchangeStarted(address indexed owner, uint256 indexed eggId1, uint256 indexed eggId2);
    
    function completeExchange(uint256 _exchangeId);
    function eggs(uint256) view returns (address);
    function getPetExchange(uint256 _exchangeId) view returns (tuple(uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status));
    function getUserPetExchanges(address _address) view returns (tuple(uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status)[]);
    function idToPetExchange(uint256) view returns (uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status);
    function paused() view returns (bool);
    function profileExchangedPets(address, uint256) view returns (uint256 id, address owner, uint256 petId1, uint256 petId2, uint256 seedblock, uint256 finishTime, uint8 status);
    function startExchange(uint256 _petId1, uint256 _petId2);
    function totalExchanges() view returns (uint256);

}
```

### ABIs

{% file src="/files/xSNUV4ep9zRU2ZdMDiBL" %}

## Related Contracts

{% content-ref url="/pages/eN20ge2suvEWs00kkNM8" %}
[Pet Eggs](/collections/pet-eggs.md)
{% endcontent-ref %}
