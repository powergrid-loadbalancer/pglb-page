import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore';
import GraphConstants from '../constants/graphConstants.js';
import assign from 'object-assign'
import ENV_VARS from "../../tools/ENV_VARS"

// Current settings
let _labels = []
let _produced = []
let _consumedNoBuying = []
let _consumedWithBuying = []

var GraphStore = assign({}, BaseStore, {
    addLabel(label) {
        _labels.push(label)
        if (_labels.length > ENV_VARS.CONSTANTS.MAX_SIZE) {
            _labels.shift()
        }
    },
    getLabel() {
        return _labels
    },
    addProducedDataPoint(dataPoint) {
        _produced.push(dataPoint)
        if (_produced.length > ENV_VARS.CONSTANTS.MAX_SIZE) {
            _produced.shift()
        }
    },
    getProducedDataPoint() {
        return _produced
    },
    addConsumedNoBuyingDataPoint(dataPoint) {
        _consumedNoBuying.push(dataPoint)
        if (_consumedNoBuying.length > ENV_VARS.CONSTANTS.MAX_SIZE) {
            _consumedNoBuying.shift()
        }
    },
    getConsumedNoBuyingDataPoint() {
        return _consumedNoBuying
    },
    addConsumedWithBuyingDataPoint(dataPoint) {
        _consumedWithBuying.push(dataPoint)
        if (_consumedWithBuying.length > ENV_VARS.CONSTANTS.MAX_SIZE) {
            _consumedWithBuying.shift()
        }
    },
    getConsumedWithBuyingDataPoint() {
        return _consumedWithBuying
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case GraphConstants.ADD_POINT:
            GraphStore.addLabel(action.label)
            GraphStore.addProducedDataPoint(action.produced)
            GraphStore.addConsumedNoBuyingDataPoint(action.consumedNoBuying)
            GraphStore.addConsumedWithBuyingDataPoint(action.consumedWithBuying)
            GraphStore.emitChange()
            break
        default:
        // no op
    }
})

export default GraphStore