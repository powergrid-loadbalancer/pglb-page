import AppDispatcher from '../dispatchers/appDispatcher';
import GraphConstants from '../constants/graphConstants.js';

export var updateAction = function() {
    AppDispatcher.dispatch({
        actionType: GraphConstants.UPDATE,
    })
}