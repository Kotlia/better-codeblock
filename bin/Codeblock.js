// @ts-ignore
import syncFetch from 'sync-fetch';
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js';
export class Codeblock {
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
        this.content = syncFetch(url).text();
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
