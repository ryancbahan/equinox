import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["item"]
    static values = {
        singleOpen: Boolean
    }

    connect() {
        this.closeAll()
    }

    toggle(event) {
        const item = event.currentTarget.closest('[data-accordion-target="item"]')
        const wasOpen = item.classList.contains("open")

        if (this.singleOpenValue) {
            // If we're closing the only open item, don't do anything
            if (wasOpen && this.openItems.length === 1) {
                return
            }
            this.closeAll()
        }

        if (wasOpen) {
            this.close(item)
        } else {
            this.open(item)
        }
    }

    open(item) {
        const button = item.querySelector('[aria-expanded]')
        const content = item.querySelector('[role="region"]')
        button.setAttribute("aria-expanded", "true")
        content.classList.remove("hidden")
        item.classList.add("open")
        item.querySelector("span[aria-hidden='true']").textContent = "▲"
    }

    close(item) {
        const button = item.querySelector('[aria-expanded]')
        const content = item.querySelector('[role="region"]')
        button.setAttribute("aria-expanded", "false")
        content.classList.add("hidden")
        item.classList.remove("open")
        item.querySelector("span[aria-hidden='true']").textContent = "▼"
    }

    closeAll() {
        this.itemTargets.forEach(item => this.close(item))
    }

    get openItems() {
        return this.itemTargets.filter(item => item.classList.contains("open"))
    }
}