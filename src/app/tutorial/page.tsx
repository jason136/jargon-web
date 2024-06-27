import Image from "next/image";
import React from "react";

export default function Tutorial() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pb-16 pt-10">
      <div className="mb-6 text-center">
        <h1 className="font-quicksand text-3xl font-bold">
          Welcome to Jargon!
        </h1>
        <p className="font-quicksand text-xl font-medium text-neutral-700">
          Scroll through these steps to get set up!
        </p>
      </div>
      <div className="w-full max-w-3xl snap-x snap-mandatory overflow-x-auto">
        <div className="flex">
          {["/step1.png", "/step2.png", "/step3.png", "/step4.png"].map(
            (src, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-center px-4"
              >
                <div className="w-full">
                  <Image
                    src={src}
                    alt={`Step ${index + 1}`}
                    width={2400}
                    height={2000}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
