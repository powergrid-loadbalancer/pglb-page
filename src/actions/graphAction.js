import AppDispatcher from '../dispatchers/appDispatcher';
import GraphConstants from '../constants/graphConstants.js';

export var addDataPointAction = function(label, produced, consumedNoBuying, consumedWithBuying) {
    AppDispatcher.dispatch({
        actionType: GraphConstants.ADD_POINT,
        label: label,
        produced: produced,
        consumedNoBuying: consumedNoBuying,
        consumedWithBuying: consumedWithBuying
    })
}