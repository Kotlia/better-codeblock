import Prism from 'prismjs'
import Codeblock from "./Codeblock.js";

export default function SvgGenerator(codeblock: Codeblock) {
    const split = codeblock.content?.split('\n')!!
    const maxLength = split.sort((a, b) => b.length - a.length)[0].length
    const height = 24 + 15.02 * (split.length + 2.5)
    const width = 50 + 7.4 * maxLength
    return `
<svg width="${width}px" height="${height}px" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}px" height="${height}px" rx="5" ry="5" fill="#282d35" />
    <circle cx="20" cy="18" r="4.3" fill="#ff5f58" />
    <circle cx="35" cy="18" r="4.3" fill="#ffbd2e" />
    <circle cx="50" cy="18" r="4.3" fill="#18c132" />
    <switch>
        <foreignObject x="30px" y="0px" width="${width}px" height="${height}px" requiredExtensions="http://www.w3.org/1999/xhtml">
            <body xmlns="http://www.w3.org/1999/xhtml">
            <style>
                .code {
                    font-size: 13px;
                    color: #658999;
                    font-family: Monaco, Consolas, Menlo, 'Bitstream Vera Sans Mono', 'Powerline Symbols', monospace;
                }
                ${codeblock.css}
             </style>
                <pre class="pre">    
                          
<code class="code">${Prism.highlight(codeblock.content!!, Prism.languages[codeblock.language], codeblock.language)}</code>

                </pre>
            </body>
        </foreignObject>
    </switch>
</svg>`
}