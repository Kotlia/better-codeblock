import Codeblock, { Theme, Language } from 'better-codeblock'
import fs from 'fs'
import path from 'path'

new Codeblock(Language.JAVASCRIPT)
    .importCode(path.resolve() + './src/hello.js')
    .applyTheme(Theme.DARK)
    .save(fs.createWriteStream("./assets/icon.svg"))
    .then(() => {
        console.log("done")
    })