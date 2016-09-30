import { setEntries } from "../actions/entryAction"
import EntriesStore from "../stores/entryStore"

export function fetchEntries () {
    let entries = []
    let entryStates = EntriesStore.getEntryStates()
    for (let i = 0; i < 5; i++) {
        let checked = false

        if (entryStates.length >= 5) {
            checked = entryStates[i].checked
        }

        let j = Math.random() * 10
        let entry = {
            type: "PRODUCER",
            meterId: j,
            normalValue: "5000",
            buyingValue: "2500",
            checked: checked
        }

        entries.push(entry)
    }

    setEntries(entries)
}