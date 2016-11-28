'use strict'

const { resolve } = require('path')
const Koa = require('koa')
const app = new Koa()
const sass = require('../lib')
app.use(sass({
  debug: true, // defult: false
  path: resolve('example/sass'),
  outPath: resolve('example/css') // defult: null
}, {
  includePaths: [resolve('example/sass')]
}))

var tpl = '\
  <!DOCTYPE html>\
  <html lang="en">\
  <head>\
    <meta charset="UTF-8">\
    <title></title>\
    <link rel="stylesheet" href="./index.css">\
  </head>\
  <body>\
    Hello World\
  </body>\
  </html>\
'

app.use(async(ctx, next) => {
  ctx.body = tpl
})

app.listen(3000)
