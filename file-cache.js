/*
 * file-cache.js v1.0.0
 * author: Kynako
 *   github: https://github.com/Kynako
 * repo: https://github.com/Kynako/file-cache
 * license: MIT license
 *   link: https://github.com/Kynako/file-cache/blob/main/LICENSE
*/

class FileCache {
  
  constructor(options) {
    this.default = {
      on: 'icloud',
      root: 'documents',
      debugMode: false
      ...options
    };
  };
  
  static create(options) {
    return new this(options);
  };
  
  async read(options) {
    const merged = { ...this.default, ...options };
    const {
      on,
      root,
      dir,
      type,
      key,
      age
    } = merged;
    const fm = this._fm(on);
    const filePath = this._buildFilePath(on, root, dir, key);
    //
    const creationDate = fm.creationDate(filePath);
    const isPassed = (new Date() - creationDate) > age; 
    if(isPassed) {
      try {
        fm.remove(filePath);
      } catch (e) {};
      return null;
    };
    // 
    if(on === 'icloud' && !fm.isFileDownloaded(filePath)) {
      await fm.downloadFileFromiCloud(filePath);
    };
    const file = this._readFile(on, type, filePath);
    return file;
  };
  
  write(options) {
    const merged = { ...this.default, ...options };
    const {
      on,
      root,
      dir, // relative
      type,
      key,
      value
    } = merged;
    const fm = this._fm(on);
    const filePath = this._buildFilePath(on, root, dir, key);
    //
    this._writeFile(on, type, filePath, value);
    return filePath;
  };
  
  _fm(on) {
    if(on !== 'icloud' && on !== 'local') {
      throw new Error(`WRONG VALUE: on, '${on}'`);
    };
    if(on === 'icloud') return FileManager.iCloud();
    if(on === 'local') return FileManager.local();
  };
  
  _buildFilePath(on, root, dir, key) {
    const fm = this._fm(on);
    // root path
    let obj;
    if(on === 'icloud') {
      obj = {
        documents: fm.documentsDirectory(),
        library: fm.libraryDirectory()
      };
    };
    if(on === 'local') {
      obj = {
        documents: fm.documentsDirectory(),
        library: fm.libraryDirectory(),
        cache: fm.cacheDirectory()
      };
    };
    const rootPath = obj[root];
    // directory path
    const dirPath = fm.joinPath(rootPath, dir);
    if(!fm.fileExists(dirPath)) {
      fm.createDirectory(dirPath, false);
    };
    // file path
    const filePath = fm.joinPath(dirPath, key);
    return filePath;
  };
  
  _readFile(on, type, path) {
    const fm = this._fm(on);
    switch(type) {
      case 'data': return fm.read(path); break;
      case 'image': return fm.readImage(path); break;
      case 'json': {
        const jsonStr = fm.readString(path);
        return JSON.parse(jsonStr);
        break;
      };
      case 'string': return fm.readString(path); break;
      default: throw new Error(`WRONG VALUE: type, '${type}'`);
    };
  };
  
  _writeFile(on, type, path, content) {
    const fm = this._fm(on);
    switch(type) {
      case 'data': fm.write(path, content); break;
      case 'image': fm.writeImage(path, content); break;
      case 'json': {
        const jsonStr = JSON.stringify(content);
        fm.writeString(path, jsonStr);
        break;
      };
      case 'string': fm.writeString(path, content); break;
      default: throw new Error(`WRONG VALUE: type, '${type}'`);
    };
  };
};

['Data', 'Image', 'JSON', 'String'].forEach(suffix => {
  FileCache.prototype['read' + suffix] = function(key, age, options) {
    return this.read({
      ...options,
      type: suffix.toLowerCase(),
      key: key,
      age: age
    });
  };
  FileCache.prototype['write' + suffix] = function(key, value, options) {
    return this.write({
      ...options,
      type: suffix.toLowerCase(),
      key: key,
      value, value
    });
  };
});

module.exports = FileCache;