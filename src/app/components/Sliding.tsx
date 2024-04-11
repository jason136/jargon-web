"use client";

import { useState } from "react";

export default function Sliding({ contents }: { contents: string[] }) {
  const [sliding, setSliding] = useState(true);

  return (
    <div className="flex h-[70px] sm:h-32 items-center justify-center bg-indigo-400">
      {[0, 1, 2].map((mult) => (
        <div key={mult} className={`flex translate-x-[${mult * 100}%]`}>
          <div className={`animate-slide ${!sliding && "pause"} flex`}>
            {contents.map((content, index) => (
              <div
                onMouseEnter={() => setSliding(false)}
                onMouseLeave={() => setSliding(true)}
                key={index}
                className="mx-2 flex justify-center whitespace-nowrap text-nowrap rounded-[25px] border border-white px-2 sm:px-4 py-1 sm:py-2 text-center text-sm sm:text-lg text-white"
              >
                {content}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
