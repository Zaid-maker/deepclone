# 🔄 DeepClone

[![npm version](https://img.shields.io/npm/v/@zaid/deepclone.svg)](https://www.npmjs.com/package/@zaid/deepclone)
[![Node.js Version](https://img.shields.io/node/v/@zaid/deepclone.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/yourusername/deepclone/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/yourusername/deepclone/actions)
[![npm downloads](https://img.shields.io/npm/dm/@zaid/deepclone.svg)](https://www.npmjs.com/package/@zaid/deepclone)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@zaid/deepclone)](https://bundlephobia.com/package/@zaid/deepclone)

🚀 A lightweight JavaScript library for deep cloning objects, arrays, and complex structures with support for circular references and symbols.

## ✨ Features

- 🔄 Deeply clones objects and arrays.
- ⭕ Handles circular references gracefully.
- 🔰 Supports symbol properties.
- 🛡️ Preserves prototypes of objects.
- 📦 Clones special objects like `Date`, `Map`, `Set`, and `RegExp`.
- 🪶 Lightweight and easy to use.

## 🤔 Why You Need to Use This in Your Project?

DeepClone is your solution for handling JavaScript's complex data structures with confidence. Here's why you'll love it:

### 🔄 Perfect for Modern Frameworks
- **⚛️ React & Vue**: Maintain immutable state updates without breaking referential equality
- **📊 Redux & Zustand**: Create clean state copies for predictable state management
- **🌐 Next.js & Nuxt**: Server-side safe cloning with circular reference support

### 🛡️ Data Integrity Guardian
- **🔒 Prevents Mutation Bugs**: Ensures complete isolation between original and cloned data
- **🎯 Handles Edge Cases**: Safely clones circular references that would break `JSON.parse/stringify`
- **💫 Symbol Support**: Preserves symbol properties that are typically lost in serialization

### ⚡ Performance & Reliability
- **🧠 Memory Efficient**: Smart handling of circular references prevents memory leaks
- **📦 Zero Dependencies**: Keeps your project lean and secure
- **🔍 Type Safe**: Works seamlessly with TypeScript projects

By choosing DeepClone, you're not just getting a utility - you're getting a battle-tested solution that handles the complexities of JavaScript data structures, so you can focus on building great features.

## 📥 Installation
Install the library using your preferred package manager:

### 📦 Using npm:
```bash
npm install @zaid/deepclone
```

### 🏃 Using yarn:
```bash
yarn add @zaid/deepclone
```

### 🏃 Using bun:
```bash
bun add @zaid/deepclone
```

## 💻 Importing the Library
Use ES Modules to import the library:
```javascript
import deepClone from '@zaid/deepclone';
```

## 💻 Usage Examples

### 🔰 Example 1: Cloning a Nested Object
```javascript
const original = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};
const copy = deepClone(original);

console.log(copy); // { a: 1, b: { c: 2, d: 3 } }
console.log(copy === original); // false
```

### 🔰 Example 2: Handling Circular References
```javascript
const obj = { name: "Zaid" };
obj.self = obj; // Circular reference
const clone = deepClone(obj);

console.log(clone); // { name: "Zaid", self: [Circular] }
```

### 🔰 Example 3: Preserving Symbols
```javascript
const symbolKey = Symbol("unique");
const symbolObj = { [symbolKey]: "value" };
const clonedSymbolObj = deepClone(symbolObj);

console.log(clonedSymbolObj[symbolKey]); // "value"
```

### 🔰 Example 4: Cloning Special Objects
#### Date Object
```javascript
const date = new Date();
const clonedDate = deepClone(date);

console.log(clonedDate); // Same date as original
console.log(clonedDate === date); // false
```

#### Map Object
```javascript
const map = new Map();
map.set('key1', 'value1');
const clonedMap = deepClone(map);

console.log(clonedMap.get('key1')); // 'value1'
console.log(clonedMap === map); // false
```

#### Set Object
```javascript
const set = new Set([1, 2, 3]);
const clonedSet = deepClone(set);

console.log(clonedSet.has(1)); // true
console.log(clonedSet === set); // false
```

#### RegExp Object
```javascript
const regex = /test/gi;
const clonedRegex = deepClone(regex);

console.log(clonedRegex); // /test/gi
console.log(clonedRegex === regex); // false
```

## 📚 API Reference

### `deepClone(obj)`
#### Parameters:
- `obj` (*any*): The object or array to be cloned.

#### Returns:
- A deep clone of the input object or array.

#### Throws:
- If unsupported data types (e.g., DOM elements or special objects) are passed, it will throw an error.

## 🚫 Limitations
- Does not clone special objects like `WeakMap` or `WeakSet`.
- Does not handle DOM elements or classes.

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](#).

## 📜 License
This library is licensed under the MIT License. See the [LICENSE](#) file for details.

---

For any questions or support, feel free to reach out!
