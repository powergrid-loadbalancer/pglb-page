import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { start } from "../../../services/startService"

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _handleClick =() => {
        start()
    }

    render () {
        const style = {
            margin: 12,
        }

        return (
            <div className="start-button">
                <RaisedButton
                    label="Start"
                    primary={true}
                    style={style}
                    onTouchTap={this._handleClick.bind(this)}
                />
            </div>
        )
    }
}