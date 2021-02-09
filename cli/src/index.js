#!/usr/bin/env node

import Codeblock, { Theme, Language } from 'better-codeblock'
import fs from 'fs'

const args = {
    lang: "js",
    code_url: null,
    theme: "dark",
    theme_url: null,
    out: "a.svg"
}

process.argv
    .splice(2)
    .map(it => {
        const s = it.split('=')
        args[s[0].substring(2)] = s[1]
    })

const cb = new Codeblock(args.lang || Language.JAVASCRIPT)
    .applyTheme(args.theme)
    .importCode(args.code_url)

if (args.theme_url) { cb.applyOriginalTheme(args.theme_url) }

cb.save(fs.createWriteStream(args.out))
    .then(process.exit(0))