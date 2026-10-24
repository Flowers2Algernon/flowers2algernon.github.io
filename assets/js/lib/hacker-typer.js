document.addEventListener('DOMContentLoaded', function () {
  const hackerTerminal = document.querySelector('.hacker-terminal-content');
  if (!hackerTerminal) return;

  const lines = Array.from(hackerTerminal.querySelectorAll('p[data-typer]'));
  const skipBtn = document.querySelector('.terminal-skip-btn');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  let lineIndex = 0;
  let skipped = false;
  let activeTimer = null;

  // Save both raw text (for typing) and rich HTML (with clickable links once typed)
  lines.forEach(line => {
    if (!line.hasAttribute('data-html')) {
      line.setAttribute('data-html', line.innerHTML);
    }
    if (!line.hasAttribute('data-text')) {
      line.setAttribute('data-text', line.textContent);
    }
    line.innerHTML = '';
    line.style.display = 'none';
  });

  function getPromptPrefix(line) {
    const customPrompt = line.getAttribute('data-prompt');
    if (customPrompt !== null) return customPrompt;
    return '> ';
  }

  function finishAllImmediately() {
    skipped = true;
    if (activeTimer) clearTimeout(activeTimer);

    lines.forEach((line, idx) => {
      line.style.display = 'block';
      const promptText = getPromptPrefix(line);
      line.innerHTML = `<span class="prompt">${promptText}</span><span class="output">${line.getAttribute('data-html')}</span>`;
      if (idx === lines.length - 1) {
        line.appendChild(cursor);
        cursor.style.animation = 'blink 1s step-end infinite';
      }
    });

    if (skipBtn) {
      skipBtn.style.display = 'none';
    }
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', finishAllImmediately);
  }

  function typeLine() {
    if (skipped) return;

    if (lineIndex >= lines.length) {
      if (lines.length > 0) {
        const lastLine = lines[lines.length - 1];
        lastLine.appendChild(cursor);
        cursor.style.animation = 'blink 1s step-end infinite';
      }
      if (skipBtn) {
        skipBtn.style.display = 'none';
      }
      return;
    }

    const line = lines[lineIndex];
    const text = line.getAttribute('data-text') || '';
    const html = line.getAttribute('data-html') || '';
    const promptText = getPromptPrefix(line);

    line.style.display = 'block';
    line.innerHTML = `<span class="prompt">${promptText}</span>`;

    const outputSpan = document.createElement('span');
    outputSpan.className = 'output';
    line.appendChild(outputSpan);
    line.appendChild(cursor);

    let charIndex = 0;

    function typeChar() {
      if (skipped) return;

      if (charIndex < text.length) {
        outputSpan.textContent += text.charAt(charIndex);
        charIndex++;
        activeTimer = setTimeout(typeChar, Math.random() * 22 + 6);
      } else {
        // Swap plain text with rich HTML so <a> links and badges become interactive
        outputSpan.innerHTML = html;
        if (lineIndex < lines.length - 1 && cursor.parentNode === line) {
          line.removeChild(cursor);
        }
        lineIndex++;
        activeTimer = setTimeout(typeLine, 70);
      }
    }

    typeChar();
  }

  typeLine();
});
