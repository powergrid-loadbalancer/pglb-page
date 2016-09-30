import React from 'react'
import fetch from 'isomorphic-fetch'
import TextField from 'material-ui/TextField'
import ENV_VARS from "../../../../tools/ENV_VARS"

export default class BuyTrigger extends React.Component {
    constructor(props) {
        super(props)

        fetch(ENV_VARS.SERVER_URL + "/capacity", {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(jsonArray => {
                    this.setState({
                        maxBuyText: jsonArray
                    })
                })
            } else {
                response.json().then(jsonArray => {
                    console.log("Error: " + jsonArray)
                })
            }
        })

        this.state = {
            maxBuyText: ""
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _handleMaxBuyTextFieldChange = e => {
        this.setState({
            maxBuyText: e.target.value
        })
    }

    _handleKeyPress = e => {
        let value = Math.floor(this.state.maxBuyText * 1000)
        if(e.key === 'Enter') {
            fetch(ENV_VARS.SERVER_URL + "/capacity/set/" + value, {
                method: "GET",
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.status === 200) {
                    response.json().then(jsonArray => {
                        console.log("Success")
                    })
                } else {
                    response.json().then(jsonArray => {
                        console.log("Error: " + jsonArray)
                    })
                }
            })
        }
    }

    render () {
        return (
            <div className="max-value-div">
                <TextField type="text"
                           value={this.state.maxBuyText}
                           inputStyle={{
                               textAlign: "center",
                               fontFamily: "Code-Font",
                               fontSize: "1.2em",
                               color: "#C62828"
                           }}
                           floatingLabelText={"Enter max. buying amount"}
                           floatingLabelFixed={false}
                           floatingLabelStyle={{
                               width: "250px",
                               fontFamily: "Code-Font",
                               color: "#C62828"
                           }}
                           style={{marginLeft: "3%", marginRight: "3%", width: "250px"}}
                           onChange={this._handleMaxBuyTextFieldChange.bind(this)}
                           id="triggerInputText"
                           onKeyPress={this._handleKeyPress.bind(this)}
                           placeholder="" />
            </div>
        )
    }
}