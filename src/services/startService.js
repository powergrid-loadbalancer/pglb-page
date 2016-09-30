import { fetchEntries } from "./fetchService"
import { updateGraph } from "./graphService"

export function start() {
    fetchEntries()
    _graphCallback()
    _fetchCallback()
}

let _fetchCallback = () => {
    setTimeout(() => {
        fetchEntries()
        _fetchCallback()
    }, 3000)
}

let _graphCallback = () => {
    setTimeout(() => {
        updateGraph()
        _graphCallback()
    }, 1500)
}