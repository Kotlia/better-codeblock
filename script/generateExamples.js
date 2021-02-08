import fs from 'fs'
import Codeblock from '../bin/index.js'
import Language from "../bin/Language.js";
import Theme from "../bin/Theme.js";

fs.readdir("example", (err, files) => {
    files.forEach(file => {
        if (file !== "svg") {
            fs.readFile(`example/${file}`, (err, data) => {
                new Codeblock(Language.JAVA)
                    .code(data.toString())
                    .save(fs.createWriteStream(`./example/svg/${file}.svg`))
                    .then(() => {
                        console.log("done")
                    })
            })
        }
    })
});