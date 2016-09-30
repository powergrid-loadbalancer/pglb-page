import { fetchEntries } from "./fetchService"

export function start() {
    fetchEntries()
    _startCallback()
}

let _startCallback = () => {
    setTimeout(() => {
        fetchEntries()
        _startCallback()
    }, 3000)
}