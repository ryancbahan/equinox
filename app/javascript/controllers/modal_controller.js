// app/javascript/controllers/modal_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["modal"]

    connect() {
        console.log("modal controller connected")
    }

    open(event) {
        console.log("open")
        event.preventDefault()
        this.modalTarget.classList.remove("hidden")
    }

    close(event) {
        event.preventDefault()
        this.modalTarget.classList.add("hidden")
    }
}
