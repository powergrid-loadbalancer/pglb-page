import { fetchEntry } from "./fetchService"

export function start() {
    (function startCallback() {
        setTimeout(function () {
            fetchEntry()
            startCallback()
        }, 3000)
    })()
}