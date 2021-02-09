// @ts-ignore
import syncFetch from 'sync-fetch'
// @ts-ignore
import fs from "fs";
import SvgGenerator from "./SvgGenerator.js";
import { defaultCSS } from "./DefaultCSS.js";
// @ts-ignore
import load from 'prismjs/components/index.js'
import path from "path";

export default class Codeblock {

    language: string
    css: string
    content: string
    location: string | undefined

    /**
     * Language to be used in the codeblock.
     * You can use members of {@code Language}.
     * In most cases, it is the file extension.
     * @param   { string }    language
     */
    constructor(language: string) {
        this.language = language
        this.css = defaultCSS
        this.content = ""
        load(language)
    }

    /**
     * Set the content of the code block
     * @param   {string }   content
     * @example new Codeblock(Language.JAVASCRIPT)
                    .code('console.log("Hello, world!")')
                    ...
     */
    code(content: string) {
        this.content = content
        return this
    }

    /**
     * Import the content of the code block
     * @param   {string }   url     URL or path to the file. If using path, must use absolute path.
     */
    importCode(url: string) {
        if (url.startsWith("http")) {
            this.content = syncFetch(url).text()
        } else {
            this.content = fs.readFileSync(url).toString()
        }
        return this
    }

    /**
     * Apply the theme from default prism themes.
     * @see {@link https://github.com/PrismJS/prism/tree/master/themes}
     * @example prism-coy.css -> "coy"
     * @param   { string }  name
     */
    applyTheme(name: string) {
        this.css = syncFetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
            .text()
                .split("\n").filter((it: string) => {
                return !it.includes("background")
        }).join('\n')
        return this
    }

    /**
     * Apply the original theme.
     * Create your own using based on the default themes.
     * @see {@link https://github.com/PrismJS/prism/tree/master/themes}
     * @param   { string }  url
     */
    applyOriginalTheme(url: string) {
        this.css = syncFetch(url)
        return this
    }

    /**
     * Save the code block.
     * @param { WriteStream }   writeStream
     */
    save(writeStream: fs.WriteStream) {
        return new Promise<void>((resolve, reject) => {
            writeStream.write(SvgGenerator(this), () => {
                resolve()
            })
        })
    }

}