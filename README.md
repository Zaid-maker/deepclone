# 🔄 tiny-deep-clone

[![npm version](https://img.shields.io/npm/v/tiny-deep-clone.svg)](https://www.npmjs.com/package/tiny-deep-clone)
[![Node.js Version](https://img.shields.io/node/v/tiny-deep-clone.svg)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/Zaid-maker/tiny-deep-clone/workflows/Publish%20to%20NPM/badge.svg)](https://github.com/Zaid-maker/tiny-deep-clone/actions)
[![npm downloads](https://img.shields.io/npm/dm/tiny-deep-clone.svg)](https://www.npmjs.com/package/tiny-deep-clone)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/tiny-deep-clone)](https://bundlephobia.com/package/tiny-deep-clone)

🚀 The tiniest, zero-dependency deep cloning utility for JavaScript (< 1KB gzipped).

## ✨ Why Choose tiny-deep-clone?

- 🪶 **Ultra Minimal**: Just 35 lines of clean code
- 📦 **Zero Dependencies**: No bloat, no security risks
- 🎯 **Feature Complete**: Handles all JavaScript data types
- ⚡ **Tiny Footprint**: Less than 1KB gzipped
- 🔒 **Type Safe**: First-class TypeScript support

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
npm install tiny-deep-clone

# 🏃 bun
bun add tiny-deep-clone
```

## 💻 Usage

```javascript
import clone from 'tiny-deep-clone';

// Simple objects
const user = { name: 'John', age: 30 };
const clonedUser = clone(user);

// Nested structures with circular refs
const circular = { name: 'Circular' };
circular.self = circular;
const clonedCircular = clone(circular); // ✨ Just works!

// Special objects
const map = new Map([['key', 'value']]);
const set = new Set([1, 2, 3]);
const date = new Date();
const regex = /test/gi;

const cloned = clone({
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

💫 Star us on [GitHub](https://github.com/yourusername/tiny-deep-clone) if you find this useful!
