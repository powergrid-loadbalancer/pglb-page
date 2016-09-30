import { setEntries } from "../actions/entryAction"
import EntriesStore from "../stores/entryStore"
import ENV_VARS from "../../tools/ENV_VARS"

export function fetchEntries () {
    let entries = []
    let entryStates = EntriesStore.getEntryStates()
    for (let i = 0; i < ENV_VARS.CONSTANTS.MAX_SIZE; i++) {
        let checked = false

        if (entryStates.length >= ENV_VARS.CONSTANTS.MAX_SIZE) {
            checked = entryStates[i].checked
        }

        let j = Math.random() * 10
        let entry = {
            type: "PRODUCER",
            meterId: j,
            normalValue: 500,
            buyingValue: 250,
            checked: checked
        }

        entries.push(entry)
    }

    setEntries(entries)
}