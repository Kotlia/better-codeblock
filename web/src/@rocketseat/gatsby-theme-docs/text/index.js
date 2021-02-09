import React, { Component } from "react";

export default class Index extends Component {
    render() {
        return (
            <>
                <img src="https://cdn.discordapp.com/attachments/718050872663212086/808483432531099658/161281824025953748.png" />
                <p align={"center"}>
                    <i>▲ Created using better-codeblock.</i>
                </p>
                <br/>
                <p>
                    I'm pretty sure many engineers have found it boring to use Markdown code blocks.
                    Even if you haven't, I'm sure you will fall love with
                    <b> better-codeblock</b>.
                    <br/>
                </p>
                <h2>Online tool</h2>
                <p>Recommended for small-scale development.</p>

                <h2>As a dependency</h2>

                <code style={{
                    fontFamily: [
                        "Consolas", "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Monaco", "Courier New", "Courier", "monospace"
                    ],
                    backgroundColor: "#232932",
                    color: "white",
                    borderRadius: "5px"
                }}>
                    $ yarn add better-codeblock
                </code>
                <br/>
                <h2>Web API</h2>
                <p>Check out <a href=""><u>this package.</u></a></p>
                <p><a href=""><u>Docs available.</u></a></p>
            </>
        )
    }
}