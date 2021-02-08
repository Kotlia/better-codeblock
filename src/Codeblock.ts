// @ts-ignore
import syncFetch from 'sync-fetch'
import fs from "fs";
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js'
import Language from "./Language.js";

export class Codeblock {

    language: string
    content: string | undefined
    css: string

    constructor(language: string) {
        this.language = language
        this.css = defaultCSS
        load(language)
    }

    code(content: string) {
        this.content = content
        return this
    }

    importCode(url: string) {
        this.content = syncFetch(url).text()
        return this
    }

    applyTheme(name: string) {
        this.css = syncFetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
            .text()
                .split("\n").filter((it: string) => {
                return !it.includes("background")
        }).join('\n')
        return this
    }

    applyOriginalTheme(url: string) {
        this.css = syncFetch(url)
        return this
    }

    save(writeStream: fs.WriteStream) {
        return new Promise<void>((resolve, reject) => {
            writeStream.write(SvgGenerator(this), () => {
                resolve()
            })
        })
    }

}