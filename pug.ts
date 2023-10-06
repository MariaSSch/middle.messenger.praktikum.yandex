const pug = require("pug"); //eslint-disable-line

export default function pugCompile(source: string): Function { //eslint-disable-line
  return pug.compileFile(source);
}
