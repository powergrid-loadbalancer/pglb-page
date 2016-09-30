import AppDispatcher from '../dispatchers/appDispatcher';
import EntryConstants from '../constants/entryConstants.js';

export var addEntries = function(entries) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.ADD_ENTRY,
        entries: entries
    })
}