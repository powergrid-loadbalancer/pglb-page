import React from 'react'
import TextField from 'material-ui/TextField'

export default class BuyTrigger extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            triggerText: ""
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _handleTriggerTextFieldChange = e => {
        this.setState({
            triggerText: e.target.value
        })
    }

    _handleKeyPress = e => {
        if(e.key === 'Enter') {
            console.log("Entered: " + this.state.triggerText)
        }
    }

    render () {
        return (
            <div className="max-value-div">
                <TextField type="text"
                           value={this.state.triggerText}
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
                           onChange={this._handleTriggerTextFieldChange.bind(this)}
                           id="triggerInputText"
                           onKeyPress={this._handleKeyPress.bind(this)}
                           placeholder="" />
            </div>
        )
    }
}