import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore';
import EntryConstants from '../constants/entryConstants.js';
import assign from 'object-assign'

// Current settings
var _entries = []

var EntryStore = assign({}, BaseStore, {
    addEntry(entry) {
        _entries.push(entry)
    },
    getEntries() {
        return _entries
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case EntryConstants.ADD_ENTRY:
            EntryStore.addEntry(action.entry)
            EntryStore.emitChange()
            break
        case EntryConstants.TOGGLE_ENTRY:
            EntryStore.setLoadingState(action.entry)
            EntryStore.emitChange()
            break
        default:
            // no op
    }
})

export default EntryStore