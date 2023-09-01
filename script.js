//your JS code here. If required.
// Function to get the current date and time in the desired format
function getCurrentDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  return `${date}, ${time}`;
}

// Function to update the timer every second
function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = getCurrentDateTime();
}

// Call the updateTimer function every second
setInterval(updateTimer, 1000);