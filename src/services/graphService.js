import { addDataPointAction } from "../actions/graphAction"

export var updateGraph = function() {
    let j = Math.random() * 10
    let k = Math.random() * 10
    let l = Math.random() * 10

    addDataPointAction("d", j, k, l)
}