import AppDispatcher from '../dispatchers/appDispatcher';
import EntryConstants from '../constants/entryConstants.js';

export var addEntries = function(entries) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.ADD_ENTRY,
        entries: entries
    })
}

export var entryToggled = function(jsonData) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.TOGGLE_ENTRY,
        entry: jsonData
    })
}