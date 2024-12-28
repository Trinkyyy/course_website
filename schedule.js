function generateSchedule() {
    const startDate = document.getElementById('start-date').value;
    if (!startDate) return;

    const start = new Date(startDate);
    const tableBody = document.querySelector('#schedule-table tbody');
    tableBody.innerHTML = '';

    const times = [
        '10:00 - 11:00', '11:00 - 12:00', '12:00 - 1:00', '1:00 - 2:00',
        '2:00 - 03:00', '03:00 - 04:00', '04:00 - 05:00', '05:00 - 06:00',
        '06:00 - 07:00', '07:00 - 08:00'
    ];

    for (let i = 0; i < times.length; i++) {
        const row = document.createElement('tr');

        // Time column
        const timeCell = document.createElement('td');
        timeCell.textContent = times[i];
        row.appendChild(timeCell);

        // Days columns
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            const date = new Date(start);
            date.setDate(date.getDate() + j);
            cell.dataset.date = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
            cell.contentEditable = true; // Allow cell to be editable
            cell.classList.add('editable'); // Add class for styling editable cells
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }
}
