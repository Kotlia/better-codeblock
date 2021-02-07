export default class Codeblock {

    language: string
    code: string | undefined

    constructor(language: string) {
        this.language = language
    }

    write(code: string) {
        this.code = code
    }

}