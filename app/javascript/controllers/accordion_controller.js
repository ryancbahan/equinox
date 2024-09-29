import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["button", "content"]

    toggle(event) {
        const button = event.currentTarget
        const content = button.nextElementSibling

        // Toggle visibility
        const isOpen = content.classList.toggle("hidden")

        // Update aria attributes
        button.setAttribute("aria-expanded", !isOpen)
        button.querySelector("span[aria-hidden='true']").textContent = isOpen ? "▼" : "▲"
    }
}
