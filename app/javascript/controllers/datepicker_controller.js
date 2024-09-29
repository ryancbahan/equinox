// app/javascript/controllers/datepicker_controller.js
import { Controller } from "@hotwired/stimulus"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns"

export default class extends Controller {
    static targets = ["input", "calendar", "currentMonth", "days"]

    connect() {
        this.selectedDate = null
        this.currentDate = new Date()
        this.updateCalendar()
    }

    toggleCalendar(event) {
        event.preventDefault()
        this.calendarTarget.classList.toggle("hidden")
    }

    selectDate(event) {
        // Clear previous selection
        this.clearSelected()

        // Set new selection
        const date = new Date(event.target.dataset.date)
        this.selectedDate = date
        event.target.classList.add("bg-blue-500", "text-white", "rounded-full", "flex", "items-center", "justify-center")
        this.inputTarget.value = format(this.selectedDate, "yyyy-MM-dd")
        this.calendarTarget.classList.add("hidden")
    }

    nextMonth() {
        this.currentDate = addMonths(this.currentDate, 1)
        this.updateCalendar()
    }

    prevMonth() {
        this.currentDate = subMonths(this.currentDate, 1)
        this.updateCalendar()
    }

    updateCalendar() {
        const currentMonth = format(this.currentDate, "MMMM yyyy")
        this.currentMonthTarget.textContent = currentMonth
        this.renderDays()
    }

    renderDays() {
        const start = startOfMonth(this.currentDate)
        const end = endOfMonth(this.currentDate)
        const days = eachDayOfInterval({ start, end })
        const firstDayIndex = getDay(start)

        this.daysTarget.innerHTML = ""

        // Add leading empty spaces for the first week
        for (let i = 0; i < firstDayIndex; i++) {
            this.daysTarget.insertAdjacentHTML('beforeend', `<span class="p-2"></span>`)
        }

        days.forEach(day => {
            const dayString = format(day, "yyyy-MM-dd")
            const isSelected = this.selectedDate && format(this.selectedDate, "yyyy-MM-dd") === dayString
            const dayClass = isSelected ? "bg-blue-500 text-white rounded-full flex items-center justify-center" : "hover:bg-blue-200 p-2 rounded-full transition duration-150 flex items-center justify-center"
            const dayElement = `<span class="cursor-pointer ${dayClass} h-10 w-10" data-action="click->datepicker#selectDate" data-date="${dayString}">${format(day, "d")}</span>`
            this.daysTarget.insertAdjacentHTML('beforeend', dayElement)
        })
    }

    clearSelected() {
        const previouslySelected = this.daysTarget.querySelector(".bg-blue-500")
        if (previouslySelected) {
            previouslySelected.classList.remove("bg-blue-500", "text-white", "rounded-full", "flex", "items-center", "justify-center")
            previouslySelected.classList.add("hover:bg-blue-200", "transition", "duration-150", "rounded-full", "flex", "items-center", "justify-center")
        }
    }
}
