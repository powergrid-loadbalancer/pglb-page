import { setEntries } from "../actions/entryAction"
import EntriesStore from "../stores/entryStore"
import ENV_VARS from "../../tools/ENV_VARS"
import fetch from 'isomorphic-fetch'
const Immutable = require('immutable')

let mapping = []
let counter = 0

export function fetchEntries () {
    let entryStates = EntriesStore.getEntryStates()
    console.log(entryStates)

    return fetch(ENV_VARS.SERVER_URL + "/head", {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.status === 200) {
                response.json().then(jsonArray => {
                    console.log("1")
                    let entries = Immutable.List(jsonArray)
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
                        .map((meters, groupId) => {
                            let checked = false

                            if (entryStates.length >= (ENV_VARS.CONSTANTS.MAX_SIZE)) {
                                checked = entryStates[groupId].checked
                            }
                            let normalValueAkk = meters.reduce((akk, meter) => akk + parseFloat(meter.normalValue) ,0.0)
                            let buyingValueAkk = meters.reduce((akk, meter) => akk + parseFloat(meter.buyingValue) ,0.0)

                            console.log(normalValueAkk, buyingValueAkk)
                            return {
                                type: ENV_VARS.CONSTANTS.CONSUMER,
                                meterId: groupId,
                                normalValue: normalValueAkk,
                                buyingValue: buyingValueAkk,
                                checked: checked
                            }
                        })
                        .reduce((array, meter, groupId) => {
                            array[groupId] = meter
                            return array
                        }, new Array())

                    for (let i = entries.length; i < (ENV_VARS.CONSTANTS.MAX_SIZE - 1); i++) {
                        let checked = false

                        if (entryStates.length >= (ENV_VARS.CONSTANTS.MAX_SIZE)) {
                            checked = entryStates[groupId].checked
                        }
                        entries[i] = {
                            type: entries[i % entries.length].type,
                            meterId: i,
                            normalValue: entries[i % entries.length].normalValue,
                            buyingValue: entries[i % entries.length].buyingValue,
                            checked: checked
                        }
                    }

                    var producer = jsonArray.find(meter => meter.Meter === null);

                    let checked = false

                    if (entryStates.length >= (ENV_VARS.CONSTANTS.MAX_SIZE)) {
                        checked = entryStates[ENV_VARS.CONSTANTS.MAX_SIZE - 1].checked
                    }

                    entries[ENV_VARS.CONSTANTS.MAX_SIZE - 1] = {
                        type: "PRODUCER",
                        meterId: ENV_VARS.CONSTANTS.MAX_SIZE - 1,
                        normalValue: parseFloat(producer.normalValue) / 2000.0,
                        buyingValue: parseFloat(producer.buyingValue) / 2000.0,
                        checked: checked
                    }

                    console.log("2")
                    console.log(entries)

                    setEntries(entries)
                })
            } else {
                response.json().then(json => {
                    console.log("Whoa! " + json)
                })
            }
        })
}