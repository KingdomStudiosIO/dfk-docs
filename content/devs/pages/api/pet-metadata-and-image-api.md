> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/pet-metadata-and-image-api.md).

# Pet Metadata & Image API

You can use the following endpoints to access Pet metadata and static images of DFK Pets by Pet ID.

#### Pet Metadata

## Returns metadata about the requested Pet

<mark style="color:blue;">`GET`</mark> `https://pets.defikingdoms.com/token/{id}`

Example - [`https://pets.defikingdoms.com/token/1`](https://pets.defikingdoms.com/token/1)

#### Path Parameters

| Name                               | Type    | Description                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <mark style="color:red;">\*</mark> | integer | <p>The ID of the requested Pet.</p><p></p><p>E.g.: <code>1234</code>, <code>1000000001234</code>, <code>2000000001234</code></p><p></p><p><em>Note</em>: Pets native to Crystalvale have IDs that are padded by <code>1000000000000</code> (one trillion), and those native to Serendale 2.0 are padded by <code>2000000000000</code> (two trillion).</p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="404: Not Found " %}

{% endtab %}
{% endtabs %}

#### Pet Static Image

## Returns a static, transparent png image of the requested Pet

<mark style="color:blue;">`GET`</mark> `https://pets.defikingdoms.com/image/{id}?{queryParams}`

**Examples**

Full Image - [`https://pets.defikingdoms.com/image/1`](https://pets.defikingdoms.com/image/1)

No Frame - [`https://pets.defikingdoms.com/image/1?frame=false`](https://pets.defikingdoms.com/image/1?frame=false)

#### Path Parameters

| Name                                 | Type    | Description                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id<mark style="color:red;">\*</mark> | integer | <p>The ID of the requested Pet.</p><p></p><p>E.g.: <code>1234</code>, <code>1000000001234</code>, <code>2000000001234</code></p><p></p><p><em>Note</em>: Pets native to Crystalvale have IDs that are padded by <code>1000000000000</code> (one trillion), and those native to Serendale 2.0 are padded by <code>2000000000000</code> (two trillion).</p> |

#### Query Parameters

| Name       | Type    | Description                                                                                |
| ---------- | ------- | ------------------------------------------------------------------------------------------ |
| frame      | Boolean | <p>Default: <code>true</code></p><p>Includes the Pet frame in the image response.</p>      |
| background | Boolean | <p>Default: <code>true</code></p><p>Includes the Pet background in the image response.</p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="404: Not Found " %}

{% endtab %}
{% endtabs %}
