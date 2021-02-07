// @ts-ignore
import fetch from 'sync-fetch'

export default class Codeblock {

    language: string
    content: string | undefined
    css: string | undefined

    constructor(language: string) {
        this.language = language
    }

    code(content: string) {
        this.content = content
        return this
    }

    importCode(url: string) {
        this.content = fetch(url).text()
        return this
    }

    applyTheme(name: string) {
        this.css = fetch(`https://raw.githubusercontent.com/PrismJS/prism/master/themes/prism-${name}.css`)
        return this
    }

    applyOriginalTheme(url: string) {
        this.css = fetch(url)
        return this
    }

}