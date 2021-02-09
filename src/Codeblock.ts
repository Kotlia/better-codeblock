// @ts-ignore
import syncFetch from 'sync-fetch'
import fs from "fs";
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js'
import Language from "./Language.js";
import path from "path";

export default class Codeblock {

    language: string
    css: string
    content: string
    location: string | undefined

    constructor(language: string) {
        this.language = language
        this.css = defaultCSS
        this.content = ""
        load(language)
    }

    code(content: string) {
        this.content = content
        return this
    }

    importCode(url: string) {
        if (url.startsWith("http")) {
            this.content = syncFetch(url).text()
        } else {
            this.location = path.resolve(url)
            this.content = fs.readFileSync(this.location).toString()
        }
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