import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table'
import TableEntry from "./entry/TableEntry"
import EntryStore from "../../../stores/entryStore"
import { updateAction } from "../../../actions/graphAction"
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
        let entriesList = Immutable.List(EntryStore.getEntries())
        entriesList = entriesList.map(entry => <TableRow selected={entry.checked}>
                                    <TableEntry
                                        type={entry.type}
                                        meterId={entry.meterId}
                                        normalValue={entry.normalValue}
                                        buyingValue={entry.buyingValue}
                                        checked={entry.checked}
                                    />
                                </TableRow>)

        this.setState({
            entries: entriesList
        })
    }

    _handleCellClick = (rowNumber, columnNumber, evt) => {
        let entryState = EntryStore.getEntryStates()[rowNumber].checked

        let value
        if (!entryState) {
            value = EntryStore.getEntries()[rowNumber].buyingValue
        } else {
            value = EntryStore.getEntries()[rowNumber].normalValue
        }

        EntryStore.updateEntryState(rowNumber, !entryState, value)

        updateAction()
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
                        onCellClick={this._handleCellClick}
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