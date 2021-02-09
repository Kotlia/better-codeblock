import Codeblock, { Theme, Language } from 'better-codeblock'

new Codeblock(Language.JAVASCRIPT)
    .importCode('https://url/to/code')
    .applyTheme(Theme.OKAIDIA)
    .save(fs.createWriteStream("./test/test.svg"))
    .then(() => {
        console.log("done")
    })