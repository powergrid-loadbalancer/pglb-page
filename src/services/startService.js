import { fetchEntry } from "./fetchService"

export function start() {
    fetchEntry()
    (function startCallback() {
        setTimeout(function () {
            fetchEntry()
            startCallback()
        }, 3000)
    })()
}