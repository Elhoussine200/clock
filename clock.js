function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Pad the numbers with leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the clock's text content
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
