// @ts-ignore
import syncFetch from 'sync-fetch'
import fetch from 'node-fetch'
import fs from "fs";
import SvgGenerator from "./SvgGenerator";
import { defaultCSS } from "./DefaultCSS";

export default class Codeblock {

    language: string
    content: string | undefined
    css: string

    constructor(language: string) {
        this.language = language
        this.css = defaultCSS
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