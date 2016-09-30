import AppDispatcher from '../dispatchers/appDispatcher';
import EntryConstants from '../constants/entryConstants.js';

export var setEntries = function(entries) {
    AppDispatcher.dispatch({
        actionType: EntryConstants.SET_ENTRY,
        entries: entries
    })
}