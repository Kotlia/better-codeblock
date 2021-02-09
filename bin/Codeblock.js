// @ts-ignore
import syncFetch from 'sync-fetch';
import fs from "fs";
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js';
import path from "path";
export default class Codeblock {
    /**
     * Language to be used in the codeblock.
     * You can use members of {@code Language}.
     * In most cases, it is the file extension.
     * @param   { string }    language
     */
    constructor(language) {
        this.language = language;
        this.css = defaultCSS;
        this.content = "";
        load(language);
    }
    /**
     * Set the content of the code block
     * @param   {string }   content
     * @example new Codeblock(Language.JAVASCRIPT)
                    .code('console.log("Hello, world!")')
                    ...
     */
    code(content) {
        this.content = content;
        return this;
    }
    /**
     * Import the content of the code block
     * @param   {string }   url     URL or path to the file.
     */
    importCode(url) {
        if (url.startsWith("http")) {
            this.content = syncFetch(url).text();
        }
        else {
            this.location = path.resolve(url);
            this.content = fs.readFileSync(this.location).toString();
        }
        return this;
    }
    /**
     * Apply the theme from default prism themes.
     * @see {@link https://github.com/PrismJS/prism/tree/master/themes}
     * @example prism-coy.css -> "coy"
     * @param   { string }  name
     */
    applyTheme(name) {
        this.css = syncFetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
            .text()
            .split("\n").filter((it) => {
            return !it.includes("background");
        }).join('\n');
        return this;
    }
    /**
     * Apply the original theme.
     * Create your own using based on the default themes.
     * @see {@link https://github.com/PrismJS/prism/tree/master/themes}
     * @param   { string }  url
     */
    applyOriginalTheme(url) {
        this.css = syncFetch(url);
        return this;
    }
    /**
     * Save the code block.
     * @param { WriteStream }   writeStream
     */
    save(writeStream) {
        return new Promise((resolve, reject) => {
            writeStream.write(SvgGenerator(this), () => {
                resolve();
            });
        });
    }
}
