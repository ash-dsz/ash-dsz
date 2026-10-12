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
