function deepClone(obj, cache = new WeakMap()) {
  // Handle primitives and special cases
  if (obj === null || typeof obj !== 'object') return obj;
  if (cache.has(obj)) return cache.get(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  
  // Handle Map
  if (obj instanceof Map) {
    const mapCopy = new Map();
    cache.set(obj, mapCopy);
    obj.forEach((value, key) => mapCopy.set(deepClone(key, cache), deepClone(value, cache)));
    return mapCopy;
  }
  
  // Handle Set
  if (obj instanceof Set) {
    const setCopy = new Set();
    cache.set(obj, setCopy);
    obj.forEach(value => setCopy.add(deepClone(value, cache)));
    return setCopy;
  }
  
  // Handle Arrays and Objects
  const copy = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
  cache.set(obj, copy);
  
  return Object.assign(copy, 
    ...Object.entries(obj).map(([key, value]) => ({[key]: deepClone(value, cache)})),
    ...Object.getOwnPropertySymbols(obj).map(sym => ({[sym]: deepClone(obj[sym], cache)}))
  );
}

export default deepClone;
