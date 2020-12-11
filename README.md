# Quick start

## Installation

```bash
npm i naive-directives
```

## Usage

### Fully import

```js
import Vue from 'vue'
import directive from 'naive-directives'
import 'naive-directives/lib/style.css'
Vue.use(directive)
```

### On-demand

```js
import { copy } from 'naive-directives'
import 'naive-directives/lib/style.css' // Import only when using v-waves and v-spring

export default {
  directives: {
    copy
  }
}
```

## use
```html
<div v-copy="text"><div>
<div v-copy.icon="text"><div>
<div v-copy.icon.dblclick="text"><div>
```