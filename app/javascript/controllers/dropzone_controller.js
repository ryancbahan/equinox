// app/javascript/controllers/dropzone_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["input", "dropzone", "filename"]

    connect() {
        this.dropzoneTarget.addEventListener("dragover", this.handleDragOver.bind(this))
        this.dropzoneTarget.addEventListener("dragleave", this.handleDragLeave.bind(this))
        this.dropzoneTarget.addEventListener("drop", this.handleDrop.bind(this))
        this.dropzoneTarget.addEventListener("click", this.handleClick.bind(this))
    }

    preventDefaults(event) {
        event.preventDefault()
        event.stopPropagation()
    }

    handleClick() {
        this.inputTarget.click()
    }

    handleDragOver(event) {
        this.preventDefaults(event)
        this.dropzoneTarget.classList.add("bg-blue-100", "border-blue-500")
    }

    handleDragLeave(event) {
        this.preventDefaults(event)
        this.dropzoneTarget.classList.remove("bg-blue-100", "border-blue-500")
    }

    handleDrop(event) {
        this.preventDefaults(event)
        this.dropzoneTarget.classList.remove("bg-blue-100", "border-blue-500")
        const files = event.dataTransfer.files
        this.inputTarget.files = files

        // Display the first file's name
        this.displayFileName(files)
    }

    displayFileName(files) {
        if (files.length > 0) {
            const fileName = files[0].name
            this.filenameTarget.textContent = fileName
        }
    }
}
