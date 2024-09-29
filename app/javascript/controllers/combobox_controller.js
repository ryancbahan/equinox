// app/javascript/controllers/combobox_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["input", "list", "option"]

    connect() {
        this.selectedOption = null
    }

    filter() {
        const query = this.inputTarget.value.toLowerCase()

        this.optionTargets.forEach((option) => {
            const text = option.textContent.toLowerCase()
            option.classList.toggle("hidden", !text.includes(query))
        })
    }

    select(event) {
        this.selectedOption = event.target
        this.inputTarget.value = this.selectedOption.textContent
        this.hideList()
    }

    hideList() {
        this.listTarget.classList.add("hidden")
    }

    showList() {
        this.listTarget.classList.remove("hidden")
    }

    handleKeydown(event) {
        const visibleOptions = this.optionTargets.filter((option) => !option.classList.contains("hidden"))

        switch (event.key) {
            case "ArrowDown":
                event.preventDefault()
                this.navigate(visibleOptions, 1)
                break
            case "ArrowUp":
                event.preventDefault()
                this.navigate(visibleOptions, -1)
                break
            case "Enter":
                event.preventDefault()
                if (this.selectedOption) {
                    this.select({ target: this.selectedOption })
                }
                break
            case "Escape":
                this.hideList()
                break
        }
    }

    navigate(options, direction) {
        let index = options.indexOf(this.selectedOption)
        index = index + direction

        if (index < 0) index = 0
        if (index >= options.length) index = options.length - 1

        this.selectedOption = options[index]
        this.highlightOption(this.selectedOption)
    }

    highlightOption(option) {
        this.optionTargets.forEach((opt) => opt.classList.remove("bg-blue-500", "text-white"))
        option.classList.add("bg-blue-500", "text-white")
    }
}
