export default function Onboarded () {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <video autoPlay muted className="w-1/5">
        <source src="/onboarded.mp4" type="video/mp4" />
      </video>
      <h2 className="font-quicksand text-center text-3xl font-bold text-violet-700">
        Welcome to Jargon!
      </h2>
      <div className="w-1/3 min-w-80 space-y-3 pt-6 pb-8">
        <div className="font-quicksand font-medium text-center text-neutral-700">
          You&apos;re all set up and ready to go. Open up the extension and enjoy your learning journey!
        </div>
      </div>
    </div>
  );
}