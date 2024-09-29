// app/javascript/controllers/toast_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["toast"]

    show(event) {
        event.preventDefault()
        this.toastTarget.classList.remove("hidden")
        setTimeout(() => {
            this.toastTarget.classList.add("hidden")
        }, 3000) // Hide toast after 3 seconds
    }
}
