"use strict";

const { resolve } = require("path");
const Koa = require("koa");
const app = new Koa();
const sass = require("../lib");
app.use(
  sass(
    {
      debug: true, // defult: false
      path: resolve("example/sass"),
      outPath: resolve("example/css") // defult: null
    },
    {
      includePaths: [resolve("example/sass")]
    }
  )
);

var tpl = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>koa2-sass</title>
  </head>
  <body>
    <h1>say ~~~ hi</h1>
  </body>
  </html>
`;

app.use(async (ctx, next) => {
  ctx.body = tpl;
});

app.listen(3000);
