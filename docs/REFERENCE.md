# Reference

---

- [Constructor](#constructor)
- [Properties](#properties)
  - [-default](#-default)
- [Methods](#methods)
  - [+create(options)](#create)
  - [-read(options)](#-readoptions)
  - [Read Aliases](#read-aleases)
    - -readData(key, age, options?)
    - -readImage(key, age, options?)
    - -readJSON(key, age, options?)
    - -readString(key, age, options?)
  - [-write(options)](#-writeoptions)
  - [Write Aliases](#write-aleases)
    - -writeData(key, data, options?)
    - -writeImage(key, image, options?)
    - -writeJSON(key, object, options?)
    - -writeString(key, string, options?)
- [Types](#types)
  - [DefaultOptionObject](#defaultoptionobject)
  - [ReadOptionObject](#readoptionobject)
  - [WriteOptionObject](#writeoptionobject)

---

## Constructor

```typescript
new FileCache(options?: DefaultOptionObject);
```

<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>options</td>
    <td><a href="#defaultoptionobject">DefaultOptionObject</a></td>
    <td>&#9745</td>
    <td>none</td>
    <td>Options for default</td>
  </tr>
</table>

## Properties

### -default

The property that has Default options for reading/writing methods. It is merged into options when reading/writing method are run.

```typescript
-default: DefaultOptionObject<{ on: 'icloud', root: 'documents' }>
```

## Methods

### +create(options?)

Constructs an instance that inherits [`-default`](#-default) property.
```typescript
+create(options?: DefaultOptionObject): FileCache
```
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>options</td>
    <td><a href="#defaultoptionobject">DefaultOptionObject</a></td>
    <td>&#9745;</td>
    <td>none</td>
    <td>Options for default.</td>
  </tr>
</table>

---

### -read(options)

Reads cache.

#### Returns

Cached file.
```typescript
-read(options: ReadOptionObject): Promise<Data|Image|Object|String): Promise<Data|Image|Object|String>
```
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <a href="#readoptionobject">ReadOptionObject</a>
    </td>
    <td></td>
    <td></td>
    <td>options to read cache.</td>
  </tr>
</table>

---

### Read Aliases

Reads cache as Data, Image, JSON or String.

#### Returns

Read cached file as Data, Image, JSON, or String.
```typescript
-readData(key: String, age: Number, options?: ReadOptionObject): Promise<Data>
-readImage(key: String, age: Number, options?: ReadOptionObject): Promise<Image>
-readJSON(key: String, age: Number, options?: ReadOptionObject): Promise<Object>
-readString(key: String, age: Number, options?: ReadOptionObject): Promise<String>
```
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>key</td>
    <td>String</td>
    <td></td>
    <td></td>
    <td>The key of cache to read. It equals Cache’s filename.</td>
  </tr>
  <tr>
    <td>age</td>
    <td>Number</td>
    <td></td>
    <td></td>
    <td>The age of cache in milliseconds.</td>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <a href="#readoptionobject">ReadOptionObject</a>
    </td>
    <td></td>
    <td></td>
    <td>options to read cache.</td>
  </tr>
</table>

---

### -write(options)

Writes cache.

#### Returns

The path meaning the place of the wrriten cache in.
```typescript
-write(options: ReadOptionObject): String
```
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <a href="#readoptionobject">WriteOptionObject</a>
    </td>
    <td></td>
    <td></td>
    <td>options to write cache.</td>
  </tr>
</table>

---

### Write Aliases

Write cache as Data, Image, JSON or String.

#### Returns

The path meaning the place of the wrriten cache in.
```typescript
-writeData(key: String, data: Data, options?: WriteOptionObject): String
-writeImage(key: String, image: Image, options?: WriteOptionObject): String
-writeJSON(key: String, json: Object, options?: WriteOptionObject): String
-writeString(key: String, string: String, options?: WriteOptionObject): String
```
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>key</td>
    <td>String</td>
    <td></td>
    <td></td>
    <td>The key of cache to read. It equals Cache’s filename.</td>
  </tr>
  <tr>
    <td>data, image, json, string</td>
    <td>Data, Image, Object, String</td>
    <td></td>
    <td></td>
    <td>The value to write.</td>
  </tr>
  <tr>
    <td>options</td>
    <td>
      <a href="#writeoptionobject">WriteOptionObject</a>
    </td>
    <td>&#9745;</td>
    <td>none</td>
    <td>options to write cache.</td>
  </tr>
</table>

## Types

### DefaultOptionObject

Options for default.
- Type: Object
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>OPTIONAL</th>
    <th>DEFAULT</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>on</td>
    <td><code>'icloud'</code> | <code>'local'</code></td>
    <td>&#9745;</td>
    <td><code>'icloud'</code></td>
    <td>Where you want to operate with files.
  </tr>
  <tr>
    <td>root</td>
    <td><code>'documents'</code> | <code>'library</code> | <code>'cache'</code></td>
    <td>&#9745;</td>
    <td><code>'documents'</code></td>
    <td>Where root you want to use.</td>
  </tr>
  <tr>
    <td>dir</td>
    <td>String</td>
    <td>&#9745;</td>
    <td>none</td>
    <td>Relative directory path in the root directory you specified.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>
      <code>'data'</code> | <code>'image'</code> | <code>'json'</code> | <code>'string'</code>
    </td>
    <td>&#9745;</td>
    <td>none</td>
    <td>The string thay means what to read a content as.</td>
  </tr>
  <tr>
    <td>key</td>
    <td>String</td>
    <td>&#9745;</td>
    <td>none</td>
    <td>The key for cache. It equals Cache’s filename.</td>
  </tr>
  <tr>
    <td>age</td>
    <td>Number</td>
    <td>&#9745;</td>
    <td>none</td>
    <td>The age of cache when read in milliseconds.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Any</td>
    <td>&#9745;</td>
    <td>none</td>
    <td>The value to write.</td>
  </tr>
</table>

---

### ReadOptionObject

Options for reading methods.
- Type: Object
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>on</td>
    <td><code>'icloud'</code> | <code>'local'</code></td>
    <td>Where you want to operate with files.
  </tr>
  <tr>
    <td>root</td>
    <td><code>'documents'</code> | <code>'library</code> | <code>'cache'</code></td>
    <td>Where root you want to use.</td>
  </tr>
  <tr>
    <td>dir</td>
    <td>String</td>
    <td>Relative directory path in the root directory you specified.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>
      <code>'data'</code> | <code>'image'</code> | <code>'json'</code> | <code>'string'</code>
    </td>
    <td>The string thay means what to read a content as.</td>
  </tr>
  <tr>
    <td>key</td>
    <td>String</td>
    <td>The key for cache. It equals Cache’s filename.</td>
  </tr>
  <tr>
    <td>age</td>
    <td>Number</td>
    <td>The age of cache when read in milliseconds.</td>
  </tr>
</table>

---

### WriteOptionObject

Options for writing methods.
- Type: Object
<table>
  <tr>
    <th>PARAMETER</th>
    <th>TYPE</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>on</td>
    <td><code>'icloud'</code> | <code>'local'</code></td>
    <td>Where you want to operate with files.
  </tr>
  <tr>
    <td>root</td>
    <td><code>'documents'</code> | <code>'library</code> | <code>'cache'</code></td>
    <td>Where root you want to use.</td>
  </tr>
  <tr>
    <td>dir</td>
    <td>String</td>
    <td>Relative directory path in the root directory you specified.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>
      <code>'data'</code> | <code>'image'</code> | <code>'json'</code> | <code>'string'</code>
    </td>
    <td>The string thay means what to read a content as.</td>
  </tr>
  <tr>
    <td>key</td>
    <td>String</td>
    <td>The key of cache to read. It equals Cache’s filename.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Any</td>
    <td>The value to cache.</td>
  </tr>
</table>