// @ts-ignore
import fetch from 'sync-fetch'

export default class Codeblock {

    language: string
    code: string | undefined

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

}