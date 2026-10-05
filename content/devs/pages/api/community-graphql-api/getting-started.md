> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/community-graphql-api/getting-started.md).

# Getting Started

## Usage

The GraphQL API can be queried either through a GUI interface or programmatically.

### Graph*i*QL (GUI)

The Graphical User Interface maintained at <https://api.defikingdoms.com/graphql> is a great way to get started using the API and learning its syntax, as well as for quick lookups.

![GraphiQL interface for the community API](https://2908426948-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlZLlRJsOJCqm10zUsKr6%2Fuploads%2FPspIJbTMs8qV29TNCYhC%2FScreen%20Shot%202022-06-01%20at%207.30.49%20PM.png?alt=media\&token=70c64bdc-f226-40cc-9495-79a21bfa97fe)

The `Docs` section in the top right-hand corner contains the full schema for the API, and the code editor will auto-complete.

### Javascript

Basic query implementation using the [`graphql-request`](https://github.com/prisma-labs/graphql-request) library.

```javascript
import { GraphQLClient, gql } from 'graphql-request'

const url = 'https://api.defikingdoms.com/graphql'
const query = gql`
  query getHero($heroId: ID!){
    hero(id: $heroId) {
      id
      mainClass
      owner {
        id
        name
      }
    }
  }`
const variables = {heroId: 1}

const client = new GraphQLClient(url)
client.request(query, variables).then((data) => console.log(data))
```

### Python

Basic query implementation using the [`requests`](https://pypi.org/project/requests/) library.

```python
import requests

url = 'https://api.defikingdoms.com/graphql'
query = """
  query getHero($heroId: ID!){
    hero(id: $heroId) {
      id
      mainClass
      owner {
        id
        name
      }
    }
  }
"""
variables = {'heroId': 1}

result = requests.post(url, json={'query': query, 'variables': variables})
print(result.json())
```

## Syntax

### Basic Query Syntax

```graphql
{
  queryField(arg1: argument, arg2: argument) {
    subfield1
    subfield2
    subfield3 {
      sub-subfield1
      sub-subfield2
    }
  }
}
```

Example query on the `hero` object:

```graphql
{
  hero(id: 1) {
    id
    mainClass
    owner {
      id
      name
    }
  }
}
```

{% hint style="info" %}
Because subfields may be an *object* type themselves (e.g. `Hero`, `Profile`), you can access the object's own fields without multiple queries or cumbersome joins, as in the example above, where `owner` is a `Profile` object.
{% endhint %}

{% hint style="warning" %}
Note that the GraphQL server has a recursion limit on accessing object type subfields, in most cases limited to 3 levels of depth.
{% endhint %}

### Arguments

All top-level query fields take arguments, set by the particular field. Every operation has two varieties: one that returns a single result and one that returns multiple results (e.g. `hero`/`heroes`, `saleAuction`/`saleAuctions`).

{% hint style="info" %}
*Only* top-level query fields can take arguments.
{% endhint %}

#### **Single-Result** Queries

These fields only take a single argument:

* `id`: `Int`/`String` - the id of the `Hero`, `Auction`, `Pet`, or `Profile`.

#### **Multiple-Result Queries**

These fields take any of the following *optional* arguments:

* `first`: `Int` - the number of requested results. Default: `1000`; Max: `1000`.
* `skip`: `Int` - skip the first *x* results. Default: `0`. Use to iterate beyond the 1000 result maximum per query.
* `orderBy`: `Subfield` - the subfield to order results by. Default: `id`.
* `orderDirection`: `asc`/`desc` - the order direction of the results. Default: `asc`.
* `where`: {`ObjectArray`} - Adds a [Filter](#filters) to the results.

*Example:* a `heroes` query using default arguments

```graphql
{
  heroes(first: 1000, skip: 0, orderBy: id, orderDirection: asc) {
    id
  }
}
```

### Filters

The optional `where` argument on a multi-result query allows for a high degree of flexibility. Any number of field/value pairs can be added to the array, with optional operators using the following syntax: `field_operator: value`.

{% hint style="info" %}
A filter used on an object field (e.g. `Hero`, `Auction`, `Pet`) will filter on that object's `id`, and cannot be used to access any of its other subfields.
{% endhint %}

#### **Operators**

* \[`none`] - equal to
* `_not` - not equal to
* `_gt` - greater than
* `_gte` - greater than or equal to
* `_lt` - less than
* `_lte` - less than or equal to
* `_in` - found in `[List]`
* `_not_in` - not found in `[List]`

*Example:* the Top 5 Ninja/Thief Heroes with the Fishing gene (ordered descending by Fishing skill)

```graphql
{
  heroes(
    first: 5, 
    orderBy: fishing, 
    orderDirection: desc, 
    where: {
      profession: "fishing", 
      mainClassStr_in: ["Ninja", "Thief"]
    })
  {
    id
    fishing
  }
}
```

### Variables

To add a variable to a query, three things are required:

1. Replace the static value in the query with `$variableName`
2. Declare `$variableName` as one of the variables accepted by the query and assign it a type (e.g. `ID`, `Int`, `String`, `Boolean`)
3. Pass `variableName: value` in a separate variables dictionary

```graphql
# Query with declared variable
query getHero($heroId: ID!) {
  hero(id: $heroId) {
    id
    mainClass
  }
}

# Variable passed as dictionary
{
  "heroId": 1
}
```

The example above also includes an expanded syntax beginning with the `query` *operation type*, and a user-declared *operation name* (`getHero`) for the function. The operation type is required to use variables, while the operation name is optional.

### Aliases and Fragments

#### Aliases

Using an *alias* allows you to include the same field type in your query multiple times with different arguments.&#x20;

*Example:* a single query that separately returns Pets hatched from Blue and Grey Eggs, respectively.

```graphql
{
  blueEggs: pets(where: {eggType: 0}) {
    id
  }
  greyEggs: pets(where: {eggType: 1}) {
    id
  }
}
```

#### Fragments

*Fragments* allow you to reuse the same subfields on multiple operations in a single query, without having to re-type them for each instance.

*Example:* expanding on the previous query to request a range of fields for each operation.

```graphql
query {
  blueEggs: pets(where: {eggType: 0}) {
    ...petInfo
  }
  greyEggs: pets(where: {eggType: 1}) {
    ...petInfo
  }
}

fragment petInfo on Pet {
  id
  rarity
  appearance
  owner {
    name
  }
}
```

{% hint style="info" %}
For more on Aliases, Fragments, and other advanced syntax like Mutations and Directives, see the [GraphQL Documentation](https://graphql.org/learn/).
{% endhint %}
