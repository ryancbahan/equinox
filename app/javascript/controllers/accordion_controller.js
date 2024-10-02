import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["button", "content"]

    toggle(event) {
        const button = event.currentTarget
        const contentId = button.getAttribute("aria-controls")
        const content = document.getElementById(contentId)

        // Toggle visibility
        const isOpen = content.classList.toggle("hidden")

        // Update aria-expanded attribute
        button.setAttribute("aria-expanded", isOpen ? "true" : "false")

        // Update the icon (▼ or ▲)
        const icon = button.querySelector("span[aria-hidden='true']")
        icon.textContent = isOpen ? "▲" : "▼"
    }
}
