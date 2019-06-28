const { basename, join } = require("path");
const sass = require("node-sass");

module.exports = (config, opts = {}) => {
  let { debug, path, outPath } = Object.assign(
    {
      debug: false,
      outPath: null
    },
    config
  );

  return async (ctx, next) => {
    let csspath = ctx.path;

    if (!/\.css$/.test(csspath)) {
      return await next();
    }

    let name = basename(csspath, ".css");
    let file = join(path, name + ".scss");
    let outFile = join(outPath || join(path, "../", "css"), name + ".css");
    let cssStr = "";
    try {
      cssStr = await new Promise((resolve, reject) => {
        sass.render(
          Object.assign(
            {
              file: file,
              outFile: outFile,
              sourceMap: true,
              sourceMapEmbed: true
            },
            opts
          ),
          (error, result) => {
            if (error) {
              return reject(error.message);
            }
            resolve(error || result.css);
          }
        );
      });
    } catch (error) {
      debug && console.log(error);
      ctx.status = 500;
      cssStr = error;
    }

    ctx.type = "text/css";
    ctx.body = cssStr;
  };
};
