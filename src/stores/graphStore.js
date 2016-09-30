import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore';
import GraphConstants from '../constants/graphConstants.js';
import assign from 'object-assign'
import ENV_VARS from "../../tools/ENV_VARS"

// Current settings
let _dataPoints = []

var GraphStore = assign({}, BaseStore, {
    addDataPoint(dataPoint) {
        _dataPoints.push(dataPoint)
        if (_dataPoints.length > ENV_VARS.CONSTANTS.MAX_SIZE) {
            _dataPoints.pop()
        }
    },
    getDataPoints() {
        return _dataPoints
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case GraphConstants.ADD_POINT:
            GraphStore.addDataPoint(action.dataPoint)
            GraphStore.emitChange()
            break
        default:
        // no op
    }
})

export default GraphStore