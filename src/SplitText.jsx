// src/SplitText.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplitText({
  text,
  children,
  delay = 0,
  duration = 0.6,
}) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const ctx = gsap.context(() => {
      const parts = el.current.querySelectorAll("[data-split-part]");
      const chars = el.current.querySelectorAll("[data-split-char]");
      const hasParts = parts.length > 0;
      const hasChars = chars.length > 0;
      const targets = hasParts
        ? parts
        : hasChars
        ? chars
        : el.current.children.length > 0
        ? el.current.children
        : [el.current];

      gsap.fromTo(
        targets,
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          stagger: hasParts ? 0.2 : hasChars ? 0.05 : 0.1,
          delay: delay / 1000,
          duration,
          ease: "power2.out",
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, children, delay, duration]);

  if (typeof text === "string") {
    return (
      <span ref={el}>
        {text.split("").map((char, i) => (
          <span key={i} data-split-char style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  if (children) {
    return <span ref={el}>{children}</span>;
  }

  return null;
}
