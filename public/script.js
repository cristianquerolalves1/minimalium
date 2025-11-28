    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('theme-toggle-input');
      const html = document.documentElement;

      const setTheme = (dark) => {
        html.classList.toggle('dark', dark);
        toggle.checked = dark;
        localStorage.setItem('minimalium-theme', dark ? 'dark' : 'light');
      };


      const saved = localStorage.getItem('minimalium-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(saved === 'dark' || (!saved && prefersDark));

      toggle.addEventListener('change', () => setTheme(toggle.checked));
    });


    document.querySelectorAll(".tab").forEach((tab) => {
          tab.addEventListener("click", () => {
            const parent = tab.closest(".component-preview");
            parent.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
            parent.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));

            tab.classList.add("active");
            parent.querySelector(`#${tab.dataset.target}`).classList.add("active");
          });
        });

  
        document.querySelectorAll(".copy-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const code = btn.previousElementSibling.innerText;
            navigator.clipboard.writeText(code);
            btn.innerText = "Copied";
            setTimeout(() => (btn.innerText = "Copy"), 1300);
          });
        });

        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        window.addEventListener("scroll", () => {
          let current = "";

          sections.forEach((sec) => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.clientHeight;

            if (top >= offset && top < offset + height) current = sec.getAttribute("id");
          });

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
          });
        });

        function toggleSidebar() {
      document.querySelector('.sidebar').classList.toggle('open');
    }



  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');
        const isOpen = content.classList.contains('open');

        // Single open behavior
        accordion.querySelectorAll('.accordion-content').forEach(c => {
          c.classList.remove('open');
          c.style.maxHeight = null;
        });
        accordion.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('open'));

        if (!isOpen) {
          content.classList.add('open');
          icon.classList.add('open');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });

  document.querySelectorAll('.accordion-content.open').forEach(c => {
    c.style.maxHeight = c.scrollHeight + "px";
  });



  document.addEventListener("DOMContentLoaded", () => {
    const calendarDays = document.querySelector(".calendar-days");
    const monthYear = document.getElementById("month-year");
    const prevBtn = document.getElementById("prev-month");
    const nextBtn = document.getElementById("next-month");

    let currentMonth = 10; 
    let currentYear = 2025;

    function renderCalendar(month, year) {
      calendarDays.innerHTML = "";
      monthYear.textContent = new Date(year, month).toLocaleString("en-US", { month: "long", year: "numeric" });

      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        calendarDays.appendChild(document.createElement("div"));
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = document.createElement("div");
        dayEl.classList.add("calendar-day");
        dayEl.textContent = day;

        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
          dayEl.classList.add("today");
        }

        calendarDays.appendChild(dayEl);
      }
    }

    prevBtn.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar(currentMonth, currentYear);
    });

    nextBtn.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear);
  });








  function showToastBox(title, message) {
  const box = document.getElementById("toastBox");
  const t = document.getElementById("toastBoxTitle");
  const m = document.getElementById("toastBoxMessage");

  t.textContent = title;
  m.textContent = message;

  box.classList.remove("hidden");
}

function closeToastBox() {
  const box = document.getElementById("toastBox");
  box.classList.add("hidden");
}
