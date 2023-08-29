const pug = require("pug");

export default function pugCompile(source: string): Function {
	return pug.compileFile(source);
}
