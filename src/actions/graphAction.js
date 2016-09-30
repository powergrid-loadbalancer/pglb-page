import AppDispatcher from '../dispatchers/appDispatcher';
import GraphConstants from '../constants/graphConstants.js';

export var addDataPoint = function(dataPoint) {
    AppDispatcher.dispatch({
        actionType: GraphConstants.ADD_POINT,
        dataPoint: dataPoint
    })
}