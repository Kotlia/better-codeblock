// @ts-ignore
import fetch from 'sync-fetch'

export default class Codeblock {

    language: string
    code: string | undefined
    css: string | undefined

    constructor(language: string) {
        this.language = language
    }

    write(code: string) {
        this.code = code
        return this
    }

    import(url: string) {
        this.code = fetch(url).text()
        return this
    }

    applyTheme(name: string) {
        this.css = fetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
    }

    applyOriginalTheme(url: string) {
        this.css = fetch(url)
    }

}