> For the complete documentation index, see [llms.txt](https://devs.defikingdoms.com/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://devs.defikingdoms.com/api/hero-metadata-and-image-api.md).

# Hero Metadata & Image API

You can use the following endpoints to access Hero metadata and static images of DFK Heroes by Hero ID.

#### Hero Metadata

## Returns metadata about the requested Hero

<mark style="color:blue;">`GET`</mark> `https://heroes.defikingdoms.com/token/{id}`

Example - [`https://heroes.defikingdoms.com/token/1`](https://heroes.defikingdoms.com/token/1)

#### Path Parameters

| Name                               | Type    | Description                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <mark style="color:red;">\*</mark> | integer | <p>The ID of the requested Hero.</p><p></p><p>E.g.: <code>1234</code>, <code>1000000001234</code>, <code>2000000001234</code></p><p></p><p><em>Note</em>: Heroes native to Crystalvale have IDs that are padded by <code>1000000000000</code> (one trillion), and those native to Serendale 2.0 are padded by <code>2000000000000</code> (two trillion).</p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="404: Not Found " %}

{% endtab %}
{% endtabs %}

#### Hero Static Image

## Returns a static, transparent png image of the requested Hero.&#x20;

<mark style="color:blue;">`GET`</mark> `https://heroes.defikingdoms.com/image/{id}`

Example - [`https://heroes.defikingdoms.com/image/1`](https://heroes.defikingdoms.com/image/1)

#### Path Parameters

| Name                                 | Type    | Description                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id<mark style="color:red;">\*</mark> | integer | <p>The ID of the requested Hero.</p><p></p><p>E.g.: <code>1234</code>, <code>1000000001234</code>, <code>2000000001234</code></p><p></p><p><em>Note</em>: Heroes native to Crystalvale have IDs that are padded by <code>1000000000000</code> (one trillion), and those native to Serendale 2.0 are padded by <code>2000000000000</code> (two trillion).</p> |

{% tabs %}
{% tab title="200: OK " %}

{% endtab %}

{% tab title="304: Not Modified " %}

{% endtab %}

{% tab title="404: Not Found " %}

{% endtab %}
{% endtabs %}
