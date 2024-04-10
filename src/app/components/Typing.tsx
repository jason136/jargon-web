"use client";

import { useEffect, useState } from "react";

export default function Typing({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const textLen = phrases[index]!.length;
    if (count > 5 + 3 * textLen + 40) {
      setCount(0);
      setIndex((index + 1) % phrases.length);
    } else if (count > 5 + 2 * textLen + 40) {
      if (text.length > 0) {
        let newText = text.slice(0, -1)
        if (newText.length > 0 && newText.endsWith(' ')) {
            newText = newText.slice(0, -1)
        }
        setText(newText);
      }
    } else if (count > 5 + 2 * textLen) {
    } else if (count > 5) {
      if (count % 2 == 0 && text.length < textLen) {
        setText(text + phrases[index]![Math.round((count - 5) / 2 - 1)]);
      }
    }

    setTimeout(() => setCount(count + 1), 70);
  }, [count]);

  return (
    <h1 className="bg-gradient-to-r from-indigo-400 to-violet-700 bg-clip-text text-center text-[65px] font-bold text-transparent">
      while you {text}
    </h1>
  );
}
