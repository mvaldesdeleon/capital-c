const util = require('util');

const handler = {
  get: function(target, property) {
    if (property === util.inspect.custom) return () => target().slice(1).join('.');
    return new Proxy(() => [...target(), property], handler);
  },
  apply: function(target, thisArg, args) {
    const [map, ...keys] = target();

    return keys.map(key => map[key]).reduceRight((args, fn) => [ fn.call(thisArg, ...args) ], args)[0];
  }
};

const proxyFn = (map, key) => new Proxy(() => [map, key], handler);

const C = map => Object.keys(map).reduce((proxyMap, key) => Object.assign(proxyMap, {[key]: proxyFn(map, key)}), {});

module.exports = C;
