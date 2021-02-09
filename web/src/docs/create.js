import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import svg from "./index.js.svg"
export default class Create extends Component {
    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                    <TextField
                        label={
                            <div style={{
                                color: "#a4a4a4"
                            }}>Paste your code here</div>
                        }
                        multiline
                        rows={10}
                        fullWidth={true}
                        variant="outlined"
                    />
                </form>
                <img src={svg}/>,
            </div>
        );
    }
}