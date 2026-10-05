> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/profiles.md).

# Profiles

## Queries

### `profile`

Returns a single Profile according to its `id`.

```graphql
profile(id: ID!): Profile
```

### `profiles`

Returns multiple Profiles according to the [arguments](/api/community-graphql-api/getting-started.md#arguments) passed.

```graphql
profiles(
  skip: Int
  first: Int
  orderBy: ProfileOrderBy
  orderDirection: OrderDirection
  where: ProfileFilter
): [Profile]!
```

## Object Types

### `Profile`

The `Profile` object type contains the following fields:

#### Basic Information

* `id`: `ID` - the Profile's `0x`-style wallet address expressed as a `String`
* `owner`: `String` - the Profile's `0x`-style wallet address (same as `id`)
* `name`: `String` - the in-game name associated with the Profile
* `created`: `Int` - the UNIX timestamp of the Profile's creation; may return `null` depending on when the Profile was last updated

**Profile Image Fields (Old)**

* `picId`: `Int` - the id of the original in-game pfp; deprecated and only used by Profiles that have not been migrated to the newer version
* `heroId`: `Int` - the id of a Hero image chosen as an in-game pfp; deprecated and only used by Profiles that have not been migrated to the newer version

**Profile Image Fields (New)**

* `collectionId`: `Int` - a mapping of Profile pfp collection options; returns `0` for built-in options, `1` for Hero pfps, and `2` for BAYC pfps.
* `nftId`: `Int` - the specific NFT/image ID corresponding to the `collectionId` (e.g. Hero ID, BAYC ID)
* `picUri`: `String` - a URI pointing to the pfp image; note that the Hero image URIs are not active

## Examples

#### Example 1

Query a Profile by wallet address

```graphql
{
  profile(id: "0x2E7669F61eA77F02445A015FBdcFe2DE47083E02") {
    id
    name
    nftId
    collectionId
    picUri
  }
}
```

#### Example 2

Query a Profile by in-game Profile name

```graphql
{
  profiles(where: {name: "FriskyFox"}) {
    id
    name
    nftId
    collectionId
    picUri
  }
}
```

#### Example 3

Query all Profiles using a BAYC in-game pfp

```graphql
{
  profiles(where: {collectionId: 2}) {
    id
    name
    nftId
    collectionId
    picUri
  }
}
```
