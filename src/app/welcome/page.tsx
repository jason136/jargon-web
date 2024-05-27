"use client";

export default function WelcomePage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-quicksand text-center text-3xl font-bold text-neutral-700">
        Welcome to Jargon!
      </h2>

      <h3 className="py-5 font-quicksand text-center text-[15px] font-semibold text-zinc-500">
        Click confirm to get your account all set up!
      </h3>

      <video className="w-[230px] h-[282px]" width="230" height="282" loop playsInline preload="auto" autoPlay>
        <source src="/jaranimation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        className="mt-4 flex items-center justify-center rounded-[20px] bg-indigo-400"
      >
        <div className="font-quicksand px-10 py-2 text-center text-[15px] font-semibold text-white">
          Confirm Account!
        </div>
      </button>
    </div>
  );
}
