import { fetchEntries } from "./fetchService"
import { updateGraph } from "./graphService"

export function start() {
    fetchEntries()
    updateGraph()
    _startCallback()
}

let _startCallback = () => {
    setTimeout(() => {
        fetchEntries()
        updateGraph()
        _startCallback()
    }, 3000)
}