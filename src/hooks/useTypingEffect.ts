import { useEffect, useState } from "react";

/**
 * Cycles through a list of words, typing and deleting each one in turn,
 * terminal-style. Returns the current bracketed string to render.
 */
export function useTypingEffect(words: string[], typeSpeed = 90, deleteSpeed = 45, pauseMs = 1200) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(`["${current.slice(0, charIndex)}"]`);
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, pauseMs);
          return;
        }
      } else {
        charIndex--;
        setText(`["${current.slice(0, charIndex)}"]`);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      timeout = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };

    timeout = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeout);
  }, [words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
