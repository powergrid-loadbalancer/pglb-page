import AppDispatcher from '../dispatchers/appDispatcher'
import BaseStore from './baseStore';
import GraphConstants from '../constants/graphConstants.js';
import assign from 'object-assign'

// Current settings


var GraphStore = assign({}, BaseStore, {

});

AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case GraphConstants.UPDATE:
            EntryStore.setEntries(action.entries)
            GraphStore.emitChange()
            break
        default:
        // no op
    }
})

export default GraphStore