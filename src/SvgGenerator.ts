export default function SvgGenerator() {
    return `
<svg width="800px" height="300px" xmlns="http://www.w3.org/2000/svg">
<rect width="536.8000000000001" height="215.106" rx="5" ry="5" fill="#282d35" />
<circle cx="20" cy="18" r="4.3" fill="#ff5f58" />
<circle cx="35" cy="18" r="4.3" fill="#ffbd2e" />
<circle cx="50" cy="18" r="4.3" fill="#18c132" />
    <switch>
    <foreignObject width="800px" height="400px" requiredExtensions="http://www.w3.org/1999/xhtml">
        <body xmlns="http://www.w3.org/1999/xhtml">
            <style>
                .code {
                    top: 20px;
                    left: 30px;
                    color: #658999;
                    font-family: Monaco, Consolas, Menlo, 'Bitstream Vera Sans Mono', 'Powerline Symbols', monospace;
                }
                
                    code[class*="language-"],
                        pre[class*="language-"] {
                    color: #ccc;
                    background: none;
                    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
                    font-size: 1em;
                    text-align: left;
                    white-space: pre;
                    word-spacing: normal;
                    word-break: normal;
                    word-wrap: normal;
                    line-height: 1.5;
                    -moz-tab-size: 4;
                    -o-tab-size: 4;
                    tab-size: 4;
                    -webkit-hyphens: none;
                    -moz-hyphens: none;
                    -ms-hyphens: none;
                    hyphens: none;
                
                }
                
                    pre[class*="language-"] {
                    padding: 1em;
                    margin: .5em 0;
                    overflow: auto;
                }
                
                :not(pre)>code[class*="language-"],
                        pre[class*="language-"] {
                    background: #2d2d2d;
                }
                
                :not(pre)>code[class*="language-"] {
                    padding: .1em;
                    border-radius: .3em;
                    white-space: normal;
                }
                
                .token.comment,
                .token.block-comment,
                .token.prolog,
                .token.doctype,
                .token.cdata {
                    color: #999;
                }
                
                .token.punctuation {
                    color: #ccc;
                }
                
                .token.tag,
                .token.attr-name,
                .token.namespace,
                .token.deleted {
                    color: #e2777a;
                }
                
                .token.function-name {
                    color: #6196cc;
                }
                
                .token.boolean,
                .token.number,
                .token.function {
                    color: #f08d49;
                }
                
                .token.property,
                .token.class-name,
                .token.constant,
                .token.symbol {
                    color: #f8c555;
                }
                
                .token.selector,
                .token.important,
                .token.atrule,
                .token.keyword,
                .token.builtin {
                    color: #cc99cd;
                }
                
                .token.string,
                .token.char,
                .token.attr-value,
                .token.regex,
                .token.variable {
                    color: #7ec699;
                }
                
                .token.operator,
                .token.entity,
                .token.url {
                    color: #67cdcc;
                }
                
                .token.important,
                .token.bold {
                    font-weight: bold;
                }
                
                .token.italic {
                    font-style: italic;
                }
                
                .token.entity {
                    cursor: help;
                }
                
                .token.inserted {
                    color: green;
                }
             </style>
                <pre>
                    <code class="code">
                        <span class="token keyword">import</span> <span class="token punctuation">{</span> Vector3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./Vector3.js"</span><span class="token punctuation">;</span>
                        <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">cross</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">thisArg<span class="token punctuation">,</span> vector3</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Vector3</span><span class="token punctuation">(</span>
                        thisArg<span class="token punctuation">.</span>y <span class="token operator">*</span> vector3<span class="token punctuation">.</span>z <span class="token operator">-</span> thisArg<span class="token punctuation">.</span>z <span class="token operator">*</span> vector3<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
                        <span class="token operator">-</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">.</span>x <span class="token operator">*</span> vector3<span class="token punctuation">.</span>z<span class="token operator">-</span> thisArg<span class="token punctuation">.</span>z <span class="token operator">*</span> vector3<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span>
                        thisArg<span class="token punctuation">.</span>x <span class="token operator">*</span> vector3<span class="token punctuation">.</span>y <span class="token operator">-</span> thisArg<span class="token punctuation">.</span>y <span class="token operator">*</span> vector3<span class="token punctuation">.</span>x
                        <span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    </code> 
                </pre>
            </body>
        </foreignObject>
    </switch>
</svg>`
}