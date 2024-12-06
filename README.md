# 🔄 DeepClone

[![npm version](https://img.shields.io/npm/v/deepclone.svg)](https://www.npmjs.com/package/deepclone)
[![Node.js Version](https://img.shields.io/node/v/deepclone.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/yourusername/deepclone/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/yourusername/deepclone/actions)
[![npm downloads](https://img.shields.io/npm/dm/deepclone.svg)](https://www.npmjs.com/package/deepclone)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/deepclone)](https://bundlephobia.com/package/deepclone)

🚀 A minimal, zero-dependency deep cloning utility for JavaScript (< 1KB gzipped).

## ✨ Why Choose DeepClone?

- 🪶 **Truly Minimal**: Less than 35 lines of code
- 📦 **Zero Dependencies**: No external packages needed
- 🎯 **Full Featured**: Handles all JavaScript data types
- ⚡ **Lightweight**: Less than 1KB gzipped
- 🔒 **Type Safe**: Works with TypeScript out of the box

## 🛠️ Features

- 🔄 Deep clones everything:
  ```javascript
  ✓ Objects & Arrays
  ✓ Dates & RegExp
  ✓ Map & Set
  ✓ Symbols
  ✓ Circular References
  ```
- ⭕ Handles circular references automatically
- 🛡️ Preserves prototype chain
- 💫 Maintains symbol properties
- 🌐 Works in all modern environments

## 📥 Installation

```bash
# 📦 npm
npm install deepclone

# 🏃 bun
bun add deepclone
```

## 💻 Usage

```javascript
import deepClone from 'deepclone';

// Simple objects
const user = { name: 'John', age: 30 };
const clonedUser = deepClone(user);

// Nested structures with circular refs
const circular = { name: 'Circular' };
circular.self = circular;
const clonedCircular = deepClone(circular); // ✨ Just works!

// Special objects
const map = new Map([['key', 'value']]);
const set = new Set([1, 2, 3]);
const date = new Date();
const regex = /test/gi;

const cloned = deepClone({
  map,    // ✓ Fully supported
  set,    // ✓ Fully supported
  date,   // ✓ Fully supported
  regex   // ✓ Fully supported
});
```

## 🎯 Perfect For

- 📊 State Management Libraries
- ⚛️ React/Vue Components
- 🔄 Data Transformation
- 🧪 Testing Utilities
- 🎮 Game State Management

## 🚀 Performance

Optimized for both speed and size:
- 🏃‍♂️ Fast execution
- 📦 Tiny bundle size
- 🧠 Efficient memory usage

## 🔍 Browser Support

Works in all modern browsers and Node.js environments:
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Node.js 20+
- ✅ Deno & Bun

## 📜 License

[MIT](LICENSE) © Your Name

---

💫 Star us on [GitHub](https://github.com/yourusername/deepclone) if you find this useful!
