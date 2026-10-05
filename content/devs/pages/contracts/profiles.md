> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/contracts/profiles.md).

# Profiles

## Contracts

### Addresses

#### DFK Chain

| Name                | Mainnet                                      | Testnet                                      |
| ------------------- | -------------------------------------------- | -------------------------------------------- |
| Profiles            | `0xC4cD8C09D1A90b21Be417be91A81603B03993E81` | `0x8BCa36AA967b7ab0158D1eE1453A9de47Af71D78` |
| Stylist             | `0xf697D08Fba8db26EA8B9868aB3214f9E072F8f1c` | `0xCdeCB1A8B17de0b3C8D1D1a3AB50232d0c39275E` |
| IdentityTokenRouter | `0xD598F17d4Bcdf30E6fBE6f7dCF7A45c3ee662850` | `0xD598F17d4Bcdf30E6fBE6f7dCF7A45c3ee662850` |

#### Kaia

| Name                | Mainnet                                      | Testnet                                      |
| ------------------- | -------------------------------------------- | -------------------------------------------- |
| Profiles            | `0xe1b8C354BE50357c2ab90A962254526d08aF0D2D` | `0x8Bb052D91895868a13fde5698814Bbbbc497497F` |
| Stylist             | `0x2dB164A65BB10BBbde7Aa441EAfDAED67AbE08EE` | `0x5Ee8F510c1C7E82c48b22915016f3F70fEbff3C0` |
| IdentityTokenRouter | `0x15D9833EfcEce2E7877aca20f4140AE71c9e2394` | `0xDD1EC3228e854D6B159a3438F9D65c6c42Cf4cc7` |

#### Metis

| Name                | Mainnet                                      | Testnet                                      |
| ------------------- | -------------------------------------------- | -------------------------------------------- |
| Profiles            | `0x5477D7f1539aDC67787AEA54306700196B81E7c4` | `0xa06E6c2c4Ac7163e9c5beC56aF79ae483177d1bC` |
| IdentityTokenRouter | `0xDB850023dDc7E086D6f09c77C546cd867E872ecB` | `0x091cfc85d2e20b110Cd754c6c410A67c925C55ED` |

### Interfaces

```solidity
interface IProfiles {

    event ProfileCreated(address owner, string name, uint64 created, uint256 nftId, uint256 collectionId);
    event ProfileUpdated(address owner, string name, uint256 nftId, uint256 collectionId);
    
    function addressToProfile(address) view returns (address owner, string name, uint64 created, uint256 nftId, uint256 collectionId, string picUri);
    function changeName(address _profileAddress, string _name);
    function changePic(address _profileAddress, uint256 _nftId, uint256 _collectionId);
    function createProfile(string _name, uint256 _nftId, uint256 _collectionId);
    function getNames(address[] _addresses) view returns (string[]);
    function getProfile(address _profileAddress) view returns (tuple(address owner, string name, uint64 created, uint256 nftId, uint256 collectionId, string picUri));
    function getProfileByAddress(address _profileAddress) view returns (uint256 _id, address _owner, string _name, uint64 _created, uint8 _picId, uint256 _heroId, uint256 _points);
    function getProfileByName(string _name) view returns (tuple(address owner, string name, uint64 created, uint256 nftId, uint256 collectionId, string picUri));
    function getTokenUrisHeldByAddress(address _profileAddress, uint256 _collectionId) view returns (string[]);
    function heroesNftContract() view returns (address);
    function identityTokenRouter() view returns (address);
    function maxChar() view returns (uint8);
    function maxPic() view returns (uint8);
    function minChar() view returns (uint8);
    function nameToAddress(string) view returns (address);
    function picUris(uint256) view returns (string);

}
```

```solidity
interface IStylist {

    event FeeAddressAdded(address indexed feeAddress, uint256 indexed feePercent);
    event FeeDisbursed(address indexed source, address indexed from, address indexed to, address token, uint256 amount, uint64 timestamp);
    event NameChange(address profileAddress, string oldName, string newName);
    event PicChange(address profileAddress, uint256 nftId, uint256 collectionId);
    
    function changeName(string _name);
    function changePic(uint256 _nftId, uint256 _collectionId);
    function feeAddresses(uint256) view returns (address);
    function feePercents(uint256) view returns (uint256);
    function nameChangeFee() view returns (uint256);
    function paused() view returns (bool);
    function picChangeFee() view returns (uint256);
    function powerToken() view returns (address);
    function profilesContract() view returns (address);

}
```

```solidity
interface IIdentityTokenRouter {

    event CollectionSet(uint256 collectionId, string collectionName, address externalTokenContract);
    
    function collections(uint256) view returns (uint256 collectionId, string collectionName, address collectionContract);
    function getTokenUrisHeldByAddress(address _owner, uint256 _collectionId) view returns (string[]);
    function ownerOf(uint256 _tokenId, uint256 _collectionId) view returns (address);
    function paused() view returns (bool);
    function tokenURI(uint256 _tokenId, uint256 _collectionId) view returns (string)

}
```

### ABIs

{% file src="/files/4BmnYRJs72GDmh7gcc7m" %}

{% file src="/files/PF3A2sIv4AzSu1mBFmrH" %}

{% file src="/files/0x7VfKlwZgL4X9e8gVv5" %}

## Historical Contracts

{% hint style="danger" %}
These contracts have been deprecated and should not be used. They are listed here for data analysis and tracking purposes only.
{% endhint %}

{% hint style="info" %}
The ProfilesV2 contract on Harmony was introduced on 2/15/2022.
{% endhint %}

### Addresses

#### Harmony

| Name                | Mainnet                                      | Testnet                                      |
| ------------------- | -------------------------------------------- | -------------------------------------------- |
| Profiles (V2)       | `0x6391F796D56201D279a42fD3141aDa7e26A3B4A5` | `0x729Fcb5f7C17Def718BC2D96b779742e1818fd06` |
| Profiles (V1)       | `0xabD4741948374b1f5DD5Dd7599AC1f85A34cAcDD` | `0xC9e3D669E51b9a77e214F94156DAB9B33Faadd08` |
| Stylist             | `0x8f1CeD3ABa6893E65DE59452C466B2CBb7Cd690b` | `0x703cadA8b820A0C7e22B424DAd7B2937A7afFD68` |
| IdentityTokenRouter | `0x51887a8271D50Ff1bc90C3c6befd47c65aeAa6C6` | `0xC9e3D669E51b9a77e214F94156DAB9B33Faadd08` |

### Interfaces

```solidity
interface IProfilesV1 {

    event ProfileCreated(uint256 profileId, address owner, string name, uint64 created, uint8 picId);
    event ProfileUpdated(uint256 profileId, address owner, string name, uint64 created, uint8 picId, uint256 heroId);
    
    function addressToIndex(address) view returns (uint256);
    function addresses(uint256) view returns (address);
    function changeHeroPic(uint256 profileId, uint256 _heroId) returns (bool success);
    function changeName(uint256 profileId, string _name) returns (bool success);
    function changePic(uint256 profileId, uint8 _picId) returns (bool success);
    function createProfile(string _name, uint8 _picId) returns (bool success);
    function getAddressByName(string name) view returns (address profileAddress);
    function getProfileByAddress(address profileAddress) view returns (uint256 _id, address _owner, string _name, uint64 _created, uint8 _picId, uint256 _heroId);
    function getProfileByName(string name) view returns (uint256 _id, address _owner, string _name, uint64 _created, uint8 _picId, uint256 _heroId);
    function getProfileCount() view returns (uint256 count);
    function heroesNftContract() view returns (address);
    function nameTaken(string name) view returns (bool taken);
    function nameToIndex(string) view returns (uint256);
    function profileExists(address profileAddress) view returns (bool exists);
    function profiles(uint256) view returns (uint256 id, address owner, string name, uint64 created, uint8 picId, uint256 heroId, bool set);

}
```

```solidity
interface IStylistHarmony {

    event NameChange(address profileAddress, string oldName, string newName);
    event PicChange(address profileAddress, uint256 nftId, uint256 collectionId);
    
    function changeName(string _name); // Currently Unavailable
    function changePic(uint256 _nftId, uint256 _collectionId);
    function jewelToken() view returns (address);
    function nameChangeFee() view returns (uint256);
    function paused() view returns (bool);
    function picChangeFee() view returns (uint256);
    function profilesContract() view returns (address);

}
```

### ABIs

{% file src="/files/YroKZIKBsbt6r8H0ubfu" %}

{% file src="/files/EnSL1a59BWiAJ1vuCh30" %}
