<!-- README for NPM; the one for GitHub is in .github directory. -->

<h1 align="center">better-codeblock</h1>
<p align="center">Just a slightly better code block</p>

<p align="center">
  <img align="center" src="https://cdn.discordapp.com/attachments/718050872663212086/808483432531099658/161281824025953748.png">
</p>
<p align="center">
  <i>▲ Created using better-codeblock.</i>
</p>

## Example
![](https://svgur.com/i/TsH.svg)

## Docs

### Class Codeblock

<dl>
<dt><a href="#code">code(content)</a></dt>
<dd><p>Set the content of the code block</p>
</dd>
<dt><a href="#importCode">importCode(url)</a></dt>
<dd><p>Import the content of the code block</p>
</dd>
<dt><a href="#applyTheme">applyTheme(name)</a></dt>
<dd><p>Apply the theme from default prism themes.</p>
</dd>
<dt><a href="#applyOriginalTheme">applyOriginalTheme(url)</a></dt>
<dd><p>Apply the original theme.
Create your own using based on the default themes.</p>
</dd>
<dt><a href="#save">save(writeStream)</a></dt>
<dd><p>Save the code block.</p>
</dd>
</dl>

<a name="code"></a>

## code(content)
Set the content of the code block

| Param | Type |
| --- | --- |
| content | <code>string</code> |

**Example**
```js
new Codeblock(Language.JAVASCRIPT)
  .code('console.log("Hello, world!")')
  ...
```
<a name="importCode"></a>

## importCode(url)
Import the content of the code block

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | URL or path to the file. |

<a name="applyTheme"></a>

## applyTheme(name)
Apply the theme from default prism themes.
**See**: [https://github.com/PrismJS/prism/tree/master/themes](https://github.com/PrismJS/prism/tree/master/themes)

| Param | Type |
| --- | --- |
| name | <code>string</code> |

**Example**
```js
prism-coy.css -> "coy"
```
<a name="applyOriginalTheme"></a>

## applyOriginalTheme(url)
Create your own using based on the default themes.
**See**: [https://github.com/PrismJS/prism/tree/master/themes](https://github.com/PrismJS/prism/tree/master/themes)

| Param | Type |
| --- | --- |
| url | <code>string</code> |

<a name="save"></a>

## save(writeStream)
Save the code block.

| Param | Type |
| --- | --- |
| writeStream | <code>WriteStream</code> |
