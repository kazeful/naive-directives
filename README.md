# Quick start

## Installation

```bash
npm i naive-directives
```

## Usage

### On-demand

Support tree-shaking

```js
import { copy } from 'naive-directives'

export default {
  directives: {
    copy,
  },
}
```

### Fully import

```js
import Vue from 'vue'
import directive from 'naive-directives'
Vue.use(directive)
```

## Use

```html
<div v-copy="text"><div>
<div v-copy.icon="text"><div>
<div v-copy.icon.dblclick="text"><div>
```
