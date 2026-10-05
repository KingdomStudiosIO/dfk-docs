> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/token-supply-api.md).

# Token Supply API

You can use the following endpoints to access supply data for DeFi Kingdoms [Ecosystem](/tokens/ecosystem-token.md) and [Power Tokens](/tokens/power-tokens.md).

#### All Token Supply

## Returns JSON supply data for JEWEL, CRYSTAL, and JADE

<mark style="color:blue;">`GET`</mark> `https://supply.defikingdoms.com/`

**Example**

<https://supply.defikingdoms.com/>

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="500: Internal Server Error " %}

{% endtab %}
{% endtabs %}

#### Single Token Supply

## Returns JSON supply data for a specific token

<mark style="color:blue;">`GET`</mark> `https://supply.defikingdoms.com/{token}`

**Examples**

JEWEL - <https://supply.defikingdoms.com/jewel/>

CRYSTAL - <https://supply.defikingdoms.com/crystal/>

JADE - <https://supply.defikingdoms.com/jade/>

#### Path Parameters

| Name                                    | Type   | Description                                                                                                                   |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| token<mark style="color:red;">\*</mark> | string | <p>The string name of the requested token.</p><p></p><p>E.g.: <code>jewel</code>, <code>crystal</code>, <code>jade</code></p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="500: Internal Server Error " %}

{% endtab %}
{% endtabs %}

#### Single Token Total Supply

## Returns the Total Supply of a specific token in plain text

<mark style="color:blue;">`GET`</mark> `https://supply.defikingdoms.com/{token}/totalsupply`

**Examples**

JEWEL - [https://supply.defikingdoms.com/jewel/totalsupply](https://supply.defikingdoms.com/jewel/totalSupply)

CRYSTAL - [https://supply.defikingdoms.com/crystal/totalsupply](https://supply.defikingdoms.com/crystal/totalSupply)

JADE - [https://supply.defikingdoms.com/jade/totalsupply](https://supply.defikingdoms.com/jade/totalSupply)

#### Path Parameters

| Name                                    | Type   | Description                                                                                                                   |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| token<mark style="color:red;">\*</mark> | string | <p>The string name of the requested token.</p><p></p><p>E.g.: <code>jewel</code>, <code>crystal</code>, <code>jade</code></p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="500: Internal Server Error " %}

{% endtab %}
{% endtabs %}

#### Single Token Circulating Supply

## Returns the Circulating Supply of a specific token in plain text

<mark style="color:blue;">`GET`</mark> `https://supply.defikingdoms.com/{token}/circulatingsupply`

**Examples**

JEWEL - <https://supply.defikingdoms.com/jewel/circulatingsupply>

CRYSTAL - <https://supply.defikingdoms.com/crystal/circulatingsupply>

JADE - <https://supply.defikingdoms.com/jade/circulatingsupply>

#### Path Parameters

| Name                                    | Type   | Description                                                                                                                   |
| --------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| token<mark style="color:red;">\*</mark> | string | <p>The string name of the requested token.</p><p></p><p>E.g.: <code>jewel</code>, <code>crystal</code>, <code>jade</code></p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="500: Internal Server Error " %}

{% endtab %}
{% endtabs %}
