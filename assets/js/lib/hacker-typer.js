document.addEventListener('DOMContentLoaded', function () {
  const hackerTerminal = document.querySelector('.hacker-terminal-content');
  if (!hackerTerminal) return;

  const lines = Array.from(hackerTerminal.querySelectorAll('p[data-typer]'));
  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  // Initially hide the paragraphs that will be typed.
  lines.forEach(line => {
    line.style.display = 'none';
  });

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      if (lines.length > 0) {
        const lastLine = lines[lines.length - 1];
        lastLine.appendChild(cursor);
        // Ensure cursor continues blinking
        cursor.style.animation = 'blink 1s step-end infinite';
      }
      return;
    }

    const line = lines[lineIndex];
    const text = line.getAttribute('data-text') || line.textContent;

    // Make the line visible before typing
    line.style.display = 'block';
    line.innerHTML = '<span class="prompt">> </span>'; // Add prompt

    const outputSpan = document.createElement('span');
    outputSpan.className = 'output';
    line.appendChild(outputSpan);
    line.appendChild(cursor);

    let charIndex = 0;

    function typeChar() {
      if (charIndex < text.length) {
        outputSpan.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, Math.random() * 100 + 30); // Randomize typing speed
      } else {
        // Typing of the current line is complete.
        // Move cursor to a new line visually for the next prompt.
        if (lineIndex < lines.length - 1) {
            line.removeChild(cursor);
        }
        lineIndex++;
        setTimeout(typeLine, 300); // Delay before typing next line
      }
    }

    typeChar();
  }

  // Store original text in data-text attribute and clear it
  lines.forEach(line => {
    if (!line.hasAttribute('data-text')) {
      line.setAttribute('data-text', line.textContent);
    }
    line.textContent = '';
  });

  typeLine();
});
