import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

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

    render () {
        const style = {
            margin: 12,
        }

        return (
            <div className="start-button">
                <RaisedButton label="Start" primary={true} style={style} />
            </div>
        )
    }
}