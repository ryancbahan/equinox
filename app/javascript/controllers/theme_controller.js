// app/javascript/controllers/theme_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        // Check the current theme on load
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark');
        }
    }

    toggle() {
        document.body.classList.toggle('dark');

        // Save the current theme preference in local storage
        const isDarkMode = document.body.classList.contains('dark');
        localStorage.setItem('dark-mode', isDarkMode);
    }
}
