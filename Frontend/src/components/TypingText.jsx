import { useEffect, useState } from "react";

export function TypingText({
  text,
  speed = 80,
  startDelay = 0,
  showCursor = true,
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    setI(0);
    const start = setTimeout(() => {
      const id = setInterval(() => {
        setI((prev) => {
          if (prev >= text.length) {
            clearInterval(id);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return (
    <span>
      {text.slice(0, i)}
      {showCursor && i < text.length && (
        <span className="animate-blink">|</span>
      )}
    </span>
  );
}
