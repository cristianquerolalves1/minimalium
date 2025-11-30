// Dark mode persistente
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  document.getElementById('darkmode').checked = true;
}

document.getElementById('darkmode').addEventListener('change', (e) => {
  if (e.target.checked) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// Sidebar toggle para mobile
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const previewCard = tab.closest('.preview-card');
    previewCard.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    previewCard.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = previewCard.querySelector(`#${tab.dataset.tab}`);
    if (target) target.classList.add('active');
  });
});

// Copy to clipboard
function copyToClipboard(btn) {
  const code = btn.previousElementSibling.textContent;
  navigator.clipboard.writeText(code);
  btn.textContent = 'Copiado!';
  setTimeout(() => btn.textContent = 'Copy', 2000);
}

// Calendar functionality
const calendars = document.querySelectorAll('.calendar');
calendars.forEach(calendar => {
  let currentDate = new Date(2025, 10, 30); // November 30, 2025 (months are 0-indexed)

  const monthYear = calendar.querySelector('.month-year');
  const daysGrid = calendar.querySelector('.calendar-days');
  const prevButton = calendar.querySelector('.prev-month');
  const nextButton = calendar.querySelector('.next-month');

  function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    daysGrid.innerHTML = '';

    // Previous month days
    for (let i = firstDay; i > 0; i--) {
      const day = document.createElement('div');
      day.classList.add('inactive');
      day.textContent = prevLastDate - i + 1;
      daysGrid.appendChild(day);
    }

    // Current month days
    for (let i = 1; i <= lastDate; i++) {
      const day = document.createElement('div');
      day.textContent = i;
      if (i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        day.classList.add('current-day');
      }
      daysGrid.appendChild(day);
    }

    // Next month days to fill the grid
    const totalDays = daysGrid.children.length;
    for (let i = totalDays; i < 42; i++) { // 6 rows x 7 days
      const day = document.createElement('div');
      day.classList.add('inactive');
      day.textContent = i - totalDays + 1;
      daysGrid.appendChild(day);
    }
  }

  prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
  });

  nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
  });

  generateCalendar(currentDate);
});

// Toast Box functions
function showToastBox(title, message) {
  document.getElementById('toastBoxTitle').textContent = title;
  document.getElementById('toastBoxMessage').textContent = message;
  document.getElementById('toastBox').classList.remove('hidden');
}

function closeToastBox() {
  document.getElementById('toastBox').classList.add('hidden');
}