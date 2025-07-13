function updateClock() {
  const now = new Date();

  let hours12 = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours12 >= 12 ? 'PM' : 'AM';
  hours12 = hours12 % 12 || 12;
  const formattedHours12 = hours12.toString().padStart(2, '0');
  const digitalTime = `${formattedHours12}:${minutes}:${seconds} ${ampm}`;

  if (document.getElementById('clock')) {
    document.getElementById('clock').textContent = digitalTime;
  }

  const day = now.toLocaleDateString('en-IN', { weekday: 'long' });
  const date = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  if (document.getElementById('day')) {
    document.getElementById('day').textContent = day;
  }

  if (document.getElementById('date')) {
    document.getElementById('date').textContent = date;
  }

  if (document.getElementById('hours')) {
    document.getElementById('hours').textContent = formattedHours12;
  }
  if (document.getElementById('minutes')) {
    document.getElementById('minutes').textContent = minutes;
  }
  if (document.getElementById('seconds')) {
    document.getElementById('seconds').textContent = seconds;
  }
}

setInterval(updateClock, 1000);
updateClock();
