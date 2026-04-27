const SCHOLAR = 'https://scholar.google.com/citations?user=XpdAV3UAAAAJ';

const navLinks = [
  { href: 'research.html', label: 'Research' },
  { href: 'teaching.html', label: 'Teaching' },
  { href: 'vanitha_cv.pdf', label: 'CV' },
  { href: SCHOLAR, label: 'Google Scholar' },
];

function buildNav(currentPage) {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) a.classList.add('current');
    nav.appendChild(a);
  });
}

function buildHeader(currentPage) {
  const header = document.getElementById('site-header');
  if (!header) return;

  const name = document.createElement('a');
  name.href = 'index.html';
  name.className = 'name';
  name.textContent = 'Vanitha Virudachalam';
  header.appendChild(name);

  const nav = document.createElement('nav');
  nav.id = 'site-nav';
  navLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) a.classList.add('current');
    nav.appendChild(a);
  });
  header.appendChild(nav);
}
