
// Basic dark mode toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const stored = localStorage.getItem('lukas-theme');
if (stored === 'dark') document.documentElement.classList.add('dark');
themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('lukas-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Projects data (easy to edit)
const projects = [
  {
    title: "Let's Help 2Gether",
    role: "Web Developer",
    dates: "Apr 2025 – Present",
    tags: ["Laravel", "Tailwind", "Frontend"],
    bullets: [
      "Integrated authentication with Laravel Breeze",
      "Designed database schema for CRUD and submissions",
      "Refactored frontend with Tailwind to improve UX and load time",
      "Setup unit & manual tests for core user flows",
      "Optimized SQL for dashboard performance on limited hosting"
    ],
    links: [{ label: "Live Demo", href: "https://letshelp2gether.com/" }]
  },
  {
    title: "PT. Maspion CMS",
    role: "System Analyst",
    dates: "Dec 2024 – Feb 2025",
    tags: ["System Analyst", "Frontend"],
    bullets: [
      "Gathered requirements with IT and marketing stakeholders",
      "Produced DFDs and workflows in Miro for handover",
      "Planned sprints and prioritized backlog in Notion",
      "Paired with UI designers to align wireframes with constraints",
      "Documented ERD references and API endpoints"
    ],
    links: [{ label: "Live Demo", href: "https://cms-maspion.dbi-project.my.id" }]
  },
  {
    title: "DBI CMS",
    role: "System Analyst",
    dates: "Sep 2024 – Feb 2025",
    tags: ["System Analyst"],
    bullets: [
      "Elicited/refined business and functional requirements",
      "Created DFDs and use cases in Miro",
      "Facilitated remote syncs between design and dev teams",
      "Managed scope and feature backlog in Notion",
      "Centralized project documentation in Google Docs"
    ],
    links: [{ label: "Live Demo", href: "https://cms.dbi-project.my.id/" }]
  }
];

// Render projects
const grid = document.getElementById('projectGrid');
function render(list) {
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card flex flex-col';
    card.innerHTML = `
      <div class="flex-1">
        <h3 class="card-title">${p.title}</h3>
        <p class="text-sm text-slate-500 mt-1">${p.role} • ${p.dates}</p>
        <div class="mt-2 flex flex-wrap gap-2">${p.tags.map(t => `<span class="px-2 py-1 rounded-lg border border-slate-300 text-xs">${t}</span>`).join('')}</div>
        <ul class="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">${p.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">${p.links.map(l => `<a class="btn btn-primary" target="_blank" rel="noopener" href="${l.href}">${l.label}</a>`).join('')}</div>
    `;
    grid.appendChild(card);
  });
}
render(projects);

// Search & filter
const search = document.getElementById('search');
const filter = document.getElementById('filter');
function applyFilters() {
  const q = (search.value || '').toLowerCase();
  const tag = filter.value;
  const filtered = projects.filter(p => {
    const inText = JSON.stringify(p).toLowerCase().includes(q);
    const inTag = !tag || p.tags.includes(tag);
    return inText && inTag;
  });
  render(filtered);
}
search?.addEventListener('input', applyFilters);
filter?.addEventListener('change', applyFilters);

// Contact form — prepare mailto draft
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Portfolio Inquiry');
  const body = encodeURIComponent(
    `Hi Lukas,\n\n` +
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n` +
    `${data.get('message')}\n\n— Sent via lukas.dev portfolio`
  );
  window.location.href = `mailto:lukas.djen@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('formStatus').classList.remove('hidden');
});
