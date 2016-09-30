import { setEntries } from "../actions/entryAction"
import EntriesStore from "../stores/entryStore"
import ENV_VARS from "../../tools/ENV_VARS"
import fetch from 'isomorphic-fetch'
const Immutable = require('immutable')

let mapping = []
let counter = 0

export function fetchEntries () {
    let entryStates = EntriesStore.getEntryStates()

    return fetch(ENV_VARS.SERVER_URL + "/head", {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.status === 200) {
                response.json().then(jsonArray => {

                    let entries = Immutable.List.of(jsonArray)
                        .filter(meter => meter.Meter !== null)
                        .map(meter => {
                            var rawMeterID = parseInt(meter.Meter, 10);
                            if (mapping[rawMeterID] == null) {
                                mapping[rawMeterID] = counter
                                //-1 because max is producer
                                counter = (counter + 1) % (ENV_VARS.CONSTANTS.MAX_SIZE - 1)
                            }
                            meter["groupID"] = mapping[rawMeterID]
                            return meter
                        })
                        .groupBy(meter => meter.groupID)
                        .map((groupId, meters) => {
                            let checked = false

                            if (entryStates.length >= (ENV_VARS.CONSTANTS.MAX_SIZE)) {
                                checked = entryStates[groupId].checked
                            }
                            let normalValueAkk = meters.reduce((akk, meter) => akk + meter.normalValue ,0)
                            let buyingValueAkk = meters.reduce((akk, meter) => akk + meter.buyingValue ,0)
                            return {
                                type: ENV_VARS.CONSTANTS.CONSUMER,
                                meterId: groupId,
                                normalValue: normalValueAkk,
                                buyingValue: buyingValueAkk,
                                checked: checked
                            }
                        })
                        .reduce((array, meter, groupId) => array[groupId] = meter, [])

                    var producer = jsonArray.find(meter => meter.Meter === null);

                    entries[ENV_VARS.CONSTANTS.MAX_SIZE - 1] = {
                        type: "PRODUCER",
                        meterId: ENV_VARS.CONSTANTS.MAX_SIZE - 1,
                        normalValue: producer.normalValue,
                        buyingValue: producer.buyingValue,
                        checked: entryStates[ENV_VARS.CONSTANTS.MAX_SIZE - 1].checked
                    }

                    setEntries(entries)
                })
            } else {
                response.json().then(json => {
                    console.log("Whoa! " + json)
                })
            }
        })
}