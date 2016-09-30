import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'
import TableEntry from "./entry/TableEntry"
import EntryStore from "../../../stores/entryStore"
const Immutable = require('immutable')

export default class TableElement extends React.Component {
    constructor(props) {
        super(props)

        this.entryId = 0

        this.state = {
            entries: []
        }
    }

    componentDidMount() {
        EntryStore.addChangeListener(this._updateEntries.bind(this))
    }

    componentWillUnmount() {
        EntryStore.removeChangeListener(this._updateEntries.bind(this))
    }

    _updateEntries = () => {
        console.log("got here")
        this.entryId += 1
        let entriesList = Immutable.List(EntryStore.getEntries())
        entriesList = entriesList.map(entry => <TableRow>
                                    <TableEntry
                                        id={this.entryId}
                                        type={entry.type}
                                        meterId={entry.meterId}
                                        normalValue={entry.normalValue}
                                        buyingValue={entry.buyingValue}
                                    />
                                </TableRow>)

        this.setState({
            entries: entriesList
        })
    }

    render () {
        return (
            <div className="tableTable">
                <div className="table">
                    <Table
                        height="300px"
                        fixedHeader={true}
                        selectable={true}
                        multiSelectable={true}
                        onCellClick={(rowNumber, columnId) => console.log("click " + rowNumber)}
                    >
                        <TableHeader
                            displaySelectAll={true}
                            adjustForCheckbox={true}
                            enableSelectAll={true}
                        >
                            <TableRow>
                                <TableHeaderColumn>Meter</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={true}
                            deselectOnClickaway={true}
                            showRowHover={true}
                            stripedRows={false}
                        >
                            {this.state.entries}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}