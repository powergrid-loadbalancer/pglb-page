import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TableEntry from "./entry/TableEntry"

export default class TableElement extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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
                            <TableRow>
                                <TableEntry type="PRODUCER" meterId="null" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="1" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="2" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="3" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="4" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="5" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="6" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="7" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="8" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="9" normalValue="100" buyingValue="50"/>
                            </TableRow>
                            <TableRow>
                                <TableEntry type="CONSUMER" meterId="10" normalValue="100" buyingValue="50"/>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}