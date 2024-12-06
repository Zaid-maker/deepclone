function deepClone(obj, cache = new WeakMap()) {
  // Handle primitive types
  if (obj === null || typeof obj !== "object") return obj;

  // Handle circular references
  if (cache.has(obj)) return cache.get(obj);

  // Handle Arrays
  if (Array.isArray(obj)) {
    const arrCopy = [];
    cache.set(obj, arrCopy);
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, cache);
    });
    return arrCopy;
  }

  // Handle Objects
  const objCopy = {};
  Object.keys(obj).forEach((key) => {
    objCopy[key] = deepClone(obj[key], cache);
  });

  // Handle Symbols
  Object.getOwnPropertySymbols(obj).forEach((symbol) => {
    objCopy[symbol] = deepClone(obj[symbol], cache);
  });

  return objCopy;
}

export default deepClone;
