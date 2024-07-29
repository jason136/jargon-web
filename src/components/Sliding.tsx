"use client";

import { useState } from "react";

export default function Sliding({ contents }: { contents: string[] }) {
  const [sliding, setSliding] = useState(true);

  return (
    <div className="flex h-[70px] items-center justify-center bg-indigo-400 sm:h-32" style={{ marginTop: "-350px" }}>
      {[0, 1, 2].map((mult) => (
        <div key={mult} className={`flex translate-x-[${mult * 100}%]`}>
          <div className={`animate-slide ${!sliding && "pause"} flex`}>
            {contents.map((content, index) => (
              <div
                onMouseEnter={() => setSliding(false)}
                onMouseLeave={() => setSliding(true)}
                key={index}
                className="mx-2 flex justify-center whitespace-nowrap text-nowrap rounded-[25px] border border-white px-2 py-1 text-center text-sm text-white sm:px-4 sm:py-2 sm:text-lg"
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
