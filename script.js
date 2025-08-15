document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Projects data (tags adjusted earlier)
  const projects = [
    {
      title: "Let's Help 2Gether",
      role: "Web Developer",
      dates: "Apr 2025 – Present",
      tags: ["Backend", "Tailwind", "Frontend"],
      bullets: [
        "Delivered authentication and user flows using Laravel Breeze to reduce onboarding friction",
        "Designed normalized DB schema and CRUD flows to improve data integrity",
        "Refactored UI with Tailwind to reduce bundle size and improve load times",
        "Added tests and monitoring for core paths, reducing regressions in releases",
        "Optimized SQL queries to speed up dashboard load on budget hosting",
      ],
      links: [{ label: "Live Demo", href: "https://letshelp2gether.com/" }],
    },
    {
      title: "PT. Maspion CMS",
      role: "System Analyst",
      dates: "Dec 2024 – Feb 2025",
      tags: ["System Analyst", "Frontend"],
      bullets: [
        "Captured stakeholder requirements and translated them into prioritized backlog",
        "Produced DFDs and handover documentation to speed development ramp-up",
        "Coordinated design-to-dev handoffs, ensuring alignment with constraints",
      ],
      links: [
        { label: "Live Demo", href: "https://cms-maspion.dbi-project.my.id" },
      ],
    },
    {
      title: "DBI CMS",
      role: "System Analyst",
      dates: "Sep 2024 – Feb 2025",
      tags: ["System Analyst"],
      bullets: [
        "Elicited and refined business requirements into clear acceptance criteria",
        "Created process diagrams and centralized documentation for the team",
        "Managed scope and prioritized features to protect delivery timelines",
      ],
      links: [{ label: "Live Demo", href: "https://cms.dbi-project.my.id/" }],
    },
  ];

  // Render projects into DOM
  const grid = document.getElementById("projectGrid");
  function render(list) {
    if (!grid) return;
    grid.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card flex flex-col h-full";

      const tagsHtml = p.tags
        .map(
          (t) => `
        <span class="px-2 py-1 rounded-lg border border-slate-300 text-xs bg-slate-50 text-slate-700">${t}</span>
      `
        )
        .join("");

      const bulletsHtml = p.bullets.map((b) => `<li>${b}</li>`).join("");

      const linksHtml = (p.links || [])
        .map(
          (l) => `
        <a class="btn btn-primary" target="_blank" rel="noopener" href="${l.href}">${l.label}</a>
      `
        )
        .join("");

      card.innerHTML = `
        <div class="flex-1">
          <h3 class="card-title">${p.title}</h3>
          <p class="text-sm text-slate-500 mt-1">${p.role} • ${p.dates}</p>
          <div class="mt-2 flex flex-wrap gap-2">${tagsHtml}</div>
          <ul class="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">${bulletsHtml}</ul>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">${linksHtml}</div>
      `;

      grid.appendChild(card);
    });
  }
  render(projects);

  // Search & filter
  const search = document.getElementById("search");
  const filter = document.getElementById("filter");

  function applyFilters() {
    const q = (search?.value || "").toLowerCase();
    const tag = filter?.value || "";
    const filtered = projects.filter((p) => {
      const text = JSON.stringify(p).toLowerCase();
      const matchesText = !q || text.includes(q);
      const matchesTag = !tag || p.tags.includes(tag);
      return matchesText && matchesTag;
    });
    render(filtered);
  }

  search?.addEventListener("input", applyFilters);
  filter?.addEventListener("change", applyFilters);

  // Logo slider: duplicate items for seamless loop
  const track = document.querySelector(".logo-track");
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML = track.innerHTML + clone; // duplicate
    // restart animation on resize for better fluidity
    let resizeTimer;
    window.addEventListener("resize", () => {
      track.style.animation = "none";
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        track.style.animation = "";
      }, 150);
    });
  }

  // Contact form — prepare mailto draft and show status
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Portfolio Inquiry");
      const body = encodeURIComponent(
        `Hi Lukas,\n\n` +
          `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n` +
          `${data.get("message")}\n\n— Sent via lukas.dev portfolio`
      );
      window.location.href = `mailto:lukas.djen@gmail.com?subject=${subject}&body=${body}`;
      if (status) {
        status.classList.remove("hidden");
        status.setAttribute("role", "status");
        setTimeout(() => status.classList.add("hidden"), 6000);
      }
      form.reset();
    });
  }
});
