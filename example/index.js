import Codeblock, { Theme, Language } from 'better-codeblock'
import fs from 'fs'

new Codeblock(Language.JAVASCRIPT)
    .importCode('./src/hello.js')
    .applyTheme(Theme.DARK)
    .save(fs.createWriteStream("./assets/icon.svg"))
    .then(() => {
        console.log("done")
    })