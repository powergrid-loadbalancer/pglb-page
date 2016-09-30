import { addEntry } from "../actions/entryAction"

let i = 0
export function fetchEntry () {
    i++
    let entry = {
        type: "CONSUMER",
        meterId: i,
        normalValue: "500",
        buyingValue: "250"
    }

    addEntry(entry)
}