import { addEntries } from "../actions/entryAction"

export function fetchEntry () {
    let entries = [{
            type: "PRODUCER",
            meterId: 1,
            normalValue: "5000",
            buyingValue: "2500"
        }, {
            type: "CONSUMER",
            meterId: 2,
            normalValue: "500",
            buyingValue: "250"
        }, {
            type: "CONSUMER",
            meterId: 3,
            normalValue: "500",
            buyingValue: "250"
        }, {
            type: "CONSUMER",
            meterId: 4,
            normalValue: "500",
            buyingValue: "250"
        }, {
            type: "CONSUMER",
            meterId: 5,
            normalValue: "500",
            buyingValue: "250"
    }]

    addEntries(entries)
}