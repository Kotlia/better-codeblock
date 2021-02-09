// @ts-ignore
import syncFetch from 'sync-fetch';
import fs from "fs";
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js';
import path from "path";
export default class Codeblock {
    constructor(language) {
        this.language = language;
        this.css = defaultCSS;
        load(language);
    }
    code(content) {
        this.content = content;
        return this;
    }
    importCode(url) {
        if (url.startsWith("http")) {
            this.content = syncFetch(url).text();
        }
        else {
            this.content = fs.readFileSync(path.resolve(url)).toString();
        }
        return this;
    }
    applyTheme(name) {
        this.css = syncFetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
            .text()
            .split("\n").filter((it) => {
            return !it.includes("background");
        }).join('\n');
        return this;
    }
    applyOriginalTheme(url) {
        this.css = syncFetch(url);
        return this;
    }
    save(writeStream) {
        return new Promise((resolve, reject) => {
            writeStream.write(SvgGenerator(this), () => {
                resolve();
            });
        });
    }
}
