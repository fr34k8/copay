//localstorage Mock

function FakeLocalStorage() {
  this.ls = {};
};
FakeLocalStorage.prototype.removeItem = function(key, cb) {
  delete this.ls[key];
  cb();
};

FakeLocalStorage.prototype.getItem = function(k, cb) {
  return cb(this.ls[k]);
};


FakeLocalStorage.prototype.allKeys = function(cb) {
  return cb(Object.keys(this.ls));
};

FakeLocalStorage.prototype.setItem = function(k, v, cb) {
  this.ls[k] = v;
  return cb();
};
FakeLocalStorage.prototype.clear = function() {
  this.ls = {};
}

module.exports = FakeLocalStorage;

module.exports.storageParams = {
  storage: new FakeLocalStorage(),
  sessionStorage:  new FakeLocalStorage(),
};
