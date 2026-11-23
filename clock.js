const timeDisplay = document.getElementById('time-display');
const dateDisplay = document.getElementById('date-display');
const formatToggleBtn = document.getElementById('format-toggle');

let is24HourFormat = false;

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat){
        ampm = hours >= 12 ? ' PM' : ' AM' ;
        hours = hours % 12 || 12; // Convert 0n to 12
    }
    const formattedHours = String(hours).padStart(2, '0');
    timeDisplay.textContent = `${formattedHours}:${minutes}:${seconds}${ampm}`;

    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

formatToggleBtn.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    formatToggleBtn.textContent = is24HourFormat ? 'Switch to 12h' : 'Switch to 24h';
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();