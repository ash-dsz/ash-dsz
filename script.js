const config = {
  resume: 'resume.pdf',
  github: 'https://github.com/ash-dsz',
  linkedin: 'https://www.linkedin.com/in/ashleydsouza19/'
};

const resumeLink = document.querySelector('a[href="resume.pdf"]');
if (resumeLink) {
  resumeLink.href = config.resume;
  resumeLink.setAttribute('aria-label', 'Download resume');
}

const links = [
  { selector: 'a[href="https://github.com/ash-dsz"]', href: config.github },
  { selector: 'a[href="https://www.linkedin.com/in/ashleydsouza19/"]', href: config.linkedin }
];

links.forEach(({ selector, href }) => {
  const link = document.querySelector(selector);
  if (link) {
    link.href = href;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -5% 0px'
  }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
