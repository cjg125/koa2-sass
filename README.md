#  Koa2 middleware of sass.
## Install

```bash
$ npm install --save koa2-sass
```

## Usage

```js
const Koa = require('koa')
const app = new Koa()
const sass = require('koa2-sass')
app.use(sass({
  path: /* sass file path */
  // outPath: null
  // debug: false
}, {
  /* Config Options */
}))

```

## Examples
```sh
$ git clone https://github.com/cjg125/koa2-sass.git demo
$ cd demo
$ npm install
$ node --harmony example/
# http://127.0.0.1:3000/
```

## Config Options
[node-sass](https://github.com/sass/node-sass)

