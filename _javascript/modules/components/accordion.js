export function initAccordion() {
  const postContent = document.querySelector('.post-content');
  if (!postContent) {
    return;
  }

  const headers = postContent.querySelectorAll('h2');

  headers.forEach((header) => {
    header.classList.add('accordion-header');

    const panel = document.createElement('div');
    panel.classList.add('accordion-panel');

    let currentElement = header.nextElementSibling;
    while (currentElement && currentElement.tagName !== 'H2') {
      const next = currentElement.nextElementSibling;
      panel.appendChild(currentElement);
      currentElement = next;
    }

    header.parentNode.insertBefore(panel, header.nextElementSibling);

    header.addEventListener('click', () => {
      header.classList.toggle('active');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
}
