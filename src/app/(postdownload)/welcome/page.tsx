"use client";

import Image from 'next/image';
import Link from 'next/link';


export default function Onboarded() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-quicksand text-center text-3xl font-bold text-violet-700">
        Welcome to Jargon!
      </h2>
      <div style={{ overflow: "hidden", height: "calc(100% - 60px)" }}>
        <video
          preload="auto"
          autoPlay
          muted
          loop
          id="myVideo"
          width="400"
          style={{
            marginTop: "-50px",
            marginBottom: "-70px",
            height: "calc(100% + 60px)",
            objectFit: "cover",
          }}
        >
          <source src="/onboarded.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-1/3 min-w-80 space-y-3 pb-8 pt-6">
        <div className="font-quicksand text-lg text-center font-medium text-neutral-700">
          Click on the extension icon <Image src="/icon.png" alt="Extension Icon" width={16} height={16} className="inline-block mx-1" /> to sign in and start your learning
          journey!
        </div>
      </div>

      <div className="fixed top-4 right-[115px] z-50">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-violet-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
        </div>

    </div>
  );
}
