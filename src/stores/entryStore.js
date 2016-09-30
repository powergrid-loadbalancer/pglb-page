import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore';
import EntryConstants from '../constants/entryConstants.js';
import assign from 'object-assign'

// Current settings
var _entries = []
var _entryState = []

var EntryStore = assign({}, BaseStore, {
    setEntries(entries) {
        _entries = entries

        _entryState = _entries.map(entry => {

            let value
            if (entry.checked) {
                value = entry.buyingValue
            } else {
                value = entry.normalValue
            }

            return {
                checked: entry.checked,
                value: value
            }
        })
    },
    getEntries() {
        return _entries
    },
    updateEntryState(index, checked, value) {
        _entryState[index] = {
          checked: checked,
          value: value
        }
    },
    getEntryStates() {
        return _entryState
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case EntryConstants.SET_ENTRY:
            EntryStore.setEntries(action.entries)
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