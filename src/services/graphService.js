import { addDataPointAction } from "../actions/graphAction"
import EntryStore from "../stores/entryStore"
import ENV_VARS from "../../tools/ENV_VARS"

export var updateGraph = function() {
    let produced = 0.0
    let consumersNoBuying = 0.0
    EntryStore.getEntries().forEach(entry => {
        if (entry.type === ENV_VARS.CONSTANTS.CONSUMER) {
            var result = entry.normalValue + consumersNoBuying;
            consumersNoBuying = result
            //console.log("notbuying: i am adding: " + entry.normalValue + " to " + consumersNoBuying + " = " + result)
        } else {
            produced += entry.normalValue
        }
    })

    let consumersWithBuying = 0.0
    let counter = 0
    EntryStore.getEntryStates().forEach(state => {
        if (counter < ENV_VARS.CONSTANTS.MAX_SIZE - 1) {
            var result = state.value + consumersWithBuying;
            consumersWithBuying = result
            //console.log("buying: i am adding: " + state.value + " to " + consumersWithBuying + " = " + result)
        }
        counter++
    })

    console.log(produced, consumersNoBuying, consumersWithBuying)

    addDataPointAction("d", produced, consumersNoBuying, consumersWithBuying)
}