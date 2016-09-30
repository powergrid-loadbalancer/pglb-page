import { addDataPointAction } from "../actions/graphAction"
import EntryStore from "../stores/entryStore"
import ENV_VARS from "../../tools/ENV_VARS"

export var updateGraph = function() {
    let produced = 0
    let consumersNoBuying = 0
    EntryStore.getEntries().forEach(entry => {
        if (entry.type === ENV_VARS.CONSTANTS.CONSUMER) {
            consumersNoBuying += entry.normalValue
        } else {
            produced += entry.normalValue
        }
    })

    let consumersWithBuying = 0
    let entryState = EntryStore.getEntryStates().forEach(state => consumersWithBuying += state.value)

    addDataPointAction("d", produced, consumersNoBuying, entryState)
}