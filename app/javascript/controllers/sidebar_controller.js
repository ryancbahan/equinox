import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["sidebar"]

    connect() {
        console.log("Sidebar controller connected")
        this.preserveScrollPositions = this.preserveScrollPositions.bind(this)
        this.restoreScrollPositions = this.restoreScrollPositions.bind(this)

        document.addEventListener("turbo:before-visit", this.preserveScrollPositions)
        document.addEventListener("turbo:load", this.restoreScrollPositions)
    }

    disconnect() {
        document.removeEventListener("turbo:before-visit", this.preserveScrollPositions)
        document.removeEventListener("turbo:load", this.restoreScrollPositions)
    }

    preserveScrollPositions() {
        sessionStorage.setItem('mainScrollPosition', window.scrollY)

        if (this.hasSidebarTarget) {
            sessionStorage.setItem('sidebarScrollPosition', this.sidebarTarget.scrollTop)
        }
    }

    restoreScrollPositions() {
        const mainScrollPosition = sessionStorage.getItem('mainScrollPosition')
        if (mainScrollPosition) {
            window.scrollTo(0, parseInt(mainScrollPosition))
        }

        if (this.hasSidebarTarget) {
            const sidebarScrollPosition = sessionStorage.getItem('sidebarScrollPosition')
            if (sidebarScrollPosition) {
                this.sidebarTarget.scrollTop = parseInt(sidebarScrollPosition)
            }
        }
    }
}