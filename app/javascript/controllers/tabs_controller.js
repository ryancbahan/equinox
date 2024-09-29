// app/javascript/controllers/tabs_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["tab", "content"]

    switchTab(event) {
        event.preventDefault()

        const selectedTab = event.currentTarget
        const targetContentId = selectedTab.getAttribute("data-target")

        // Deactivate all tabs and hide content
        this.tabTargets.forEach(tab => tab.classList.remove("border-blue-500", "text-blue-500"))
        this.contentTargets.forEach(content => content.classList.add("hidden"))

        // Activate the selected tab and show corresponding content
        selectedTab.classList.add("border-blue-500", "text-blue-500")
        document.getElementById(targetContentId).classList.remove("hidden")
    }
}
