# FileCache

`FileCache` is a library to manage cache files for Scriptable.

## Usage

```javascript
// Constructs instance.
const FileCache = importModule('file-cache');
const fcache = new FileCache({
  on: 'icloud', // default
  root: 'documents' // default
  dir: 'file-cache-test-dir'
});

// basic read/write method
const path1 = fcache.write({
  type: 'string',
  key: 'meta.txt',
  value: 'foobar-fizzbuzz-hogefuga'
});
console.log(path1);
// '/private/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/file-cache-test-dir/meta.txt'

const text = await fcache.read({
  type: 'string',
  key: 'meta.txt',
  age: 1000 * 60 * 60 // 1 hour
});
console.log(text);
// 'foobar-fizzbuzz-hogefuga'


// json alias
const path2 = fcache.writeJSON(
   'awesome.json',
   { hello: 'world' }
);
console.log(path2);
// '/private/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/file-cache-test-dir/awesome.json'

const json = await fcache.readJSON(
  'awesome.json',
  1000 * 60 * 42 // 42 min
);
console.log(json);
// { "hello": "world" }


// image alias
const path3 = fcache.writeImage(
  'latest.png',
  await Photos.latestPhoto(),
  { dir: 'file-cache-test-dir/photos' }
);
console.log(path3);
// '/private/var/mobile/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/file-cache-test-dir/photos/latest.png'

const image = await fcache.readImage(
  'latest.png',
  1000 * 60 * 42,
  { dir: 'file-cache-test-dir/photos' }
);
await QuickLook.present(image);
```

## Reference

See [REFERENCE.md](./REFERENCE.md).

## License

[MIT license](../LICENSE)