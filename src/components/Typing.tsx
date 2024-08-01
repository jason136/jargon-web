"use client";

import { useEffect, useRef, useState } from "react";

export default function Typing({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const textElement = useRef(null);

  function isInView(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

    return vertInView && horInView;
  }

  function waitForView() {
    if (textElement.current !== null && isInView(textElement.current)) {
      setTimeout(() => setCount(count + 1), 70);
    } else {
      setTimeout(() => waitForView(), 70);
    }
  }

  useEffect(() => {
    waitForView();

    const textLen = phrases[index]!.length;
    if (count > 5 + 3 * textLen + 40) {
      setCount(0);
      setIndex((index + 1) % phrases.length);
    } else if (count > 5 + 2 * textLen + 40) {
      if (text.length > 0) {
        let newText = text.slice(0, -1);
        if (newText.length > 0 && newText.endsWith(" ")) {
          newText = newText.slice(0, -1);
        }
        setText(newText);
      }
    } else if (count > 5 + 2 * textLen) {
    } else if (count > 5) {
      if (count % 2 == 0 && text.length < textLen) {
        setText(text + phrases[index]![Math.round((count - 5) / 2 - 1)]);
      }
    }
  }, [count]);

  return (
    <div ref={textElement} className="h-full">
      <h1 className="bg-gradient-to-r from-indigo-400 to-violet-700 bg-clip-text text-center text-[26px] font-bold text-transparent sm:text-[65px]">
        while you {text}
      </h1>
    </div>
  );
}
