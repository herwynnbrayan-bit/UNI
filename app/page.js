export default function HomePage() {
  document.addEventListener('DOMContentLoaded', () => {
    const schedule = {
        "Lunes": ["08:00-10:00: Matemáticas", "10:00-12:00: Física", "14:00-16:00: Programación"],
        "Martes": ["09:00-11:00: Bases de Datos", "11:00-13:00: Algoritmos", "15:00-17:00: Inglés"],
        "Miércoles": ["08:00-10:00: Matemáticas", "10:00-12:00: Física", "14:00-16:00: Proyecto"],
        "Jueves": ["09:00-11:00: Bases de Datos", "11:00-13:00: Algoritmos", "15:00-17:00: Ética"],
        "Viernes": ["08:00-10:00: Programación", "10:00-12:00: Proyecto", "14:00-16:00: Inglés"]
    };

    const calendar = document.getElementById('calendar');
    const searchInput = document.getElementById('searchInput');
    const themeToggle = document.getElementById('themeToggle');
    const exportButton = document.getElementById('exportButton');
    const reminderInput = document.getElementById('reminderInput');
    const addReminder = document.getElementById('addReminder');
    const remindersList = document.getElementById('remindersList');

    function renderSchedule() {
        calendar.innerHTML = '';
        for (const day in schedule) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerHTML = `<h3>${day}</h3><ul>${schedule[day].map(classTime => <li>${classTime}</li>).join('')}</ul>`;
            calendar.appendChild(dayDiv);
        }
    }

    function filterSchedule() {
        const query = searchInput.value.toLowerCase();
        calendar.innerHTML = '';
        for (const day in schedule) {
            const filteredClasses = schedule[day].filter(cls => cls.toLowerCase().includes(query));
            if (filteredClasses.length > 0) {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'day';
                dayDiv.innerHTML = `<h3>${day}</h3><ul>${filteredClasses.map(cls => <li>${cls}</li>).join('')}</ul>`;
                calendar.appendChild(dayDiv);
            }
        }
    }

    function toggleTheme(theme) {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }

    function exportToICal() {
        let icalContent = BEGIN:VCALENDAR\nVERSION:2.0\n;
        for (const day in schedule) {
            schedule[day].forEach(cls => {
                const [time, subject] = cls.split(': ');
                const [start, end] = time.split('-');
                const startDate = new Date(2025-09-17T${start}:00-05:00).toISOString().replace(/[:\-]|\.\d{3}/g, '');
                const endDate = new Date(2025-09-17T${end}:00-05:00).toISOString().replace(/[:\-]|\.\d{3}/g, '');
                icalContent += BEGIN:VEVENT\nUID:${Math.random().toString(36).substr(2)}\nDTSTART:${startDate}\nDTEND:${endDate}\nSUMMARY:${subject}\nEND:VEVENT\n;
            });
        }
        icalContent += END:VCALENDAR;
        const blob = new Blob([icalContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'university_schedule.ics';
        a.click();
        URL.revokeObjectURL(url);
    }

    function addReminderText() {
        const reminderText = reminderInput.value.trim();
        if (reminderText) {
            const li = document.createElement('li');
            li.textContent = reminderText;
            remindersList.appendChild(li);
            reminderInput.value = '';
            analyzeStudyPatterns(reminderText); // Placeholder for analytics
        }
    }

    function analyzeStudyPatterns(reminder) {
        console.log(Analyzing reminder: ${reminder}); // Placeholder for future analytics
    }

    // Initial render
    renderSchedule();

    // Event listeners
    searchInput.addEventListener('input', filterSchedule);
    themeToggle.addEventListener('click', () => toggleTheme(document.body.className === 'dark' ? 'light' : 'dark'));
    exportButton.addEventListener('click', exportToICal);
    addReminder.addEventListener('click', addReminderText);
    reminderInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addReminderText(); });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    toggleTheme(savedTheme);
});
}
