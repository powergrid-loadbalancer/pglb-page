import AppDispatcher from '../dispatchers/appDispatcher';
import EntryConstants from '../constants/entryConstants.js';

export var addEntry = function(jsonData) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.ADD_ENTRY,
        entry: jsonData
    })
}

export var entryToggled = function(jsonData) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.TOGGLE_ENTRY,
        entry: jsonData
    })
}