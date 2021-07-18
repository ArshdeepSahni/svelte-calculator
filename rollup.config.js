import svelte from "rollup-plugin-svelte"
import resolve from "rollup-plugin-node-resolve"
import css from "rollup-plugin-css-only"

const pkg = require("./package.json");

export default {
    input: "src/Calculator.svelte",
    output: [
        { file: pkg.module, format: "es" },
        { file: pkg.main, format: "umd", name: "Calculator" },
    ],
    plugins: [svelte(), css({ output: 'tags.css' }), resolve()],
};
