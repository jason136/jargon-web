export default function Onboarded() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="font-quicksand text-center text-3xl font-bold text-violet-700">
        Email Confirmed!
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
        <div className="font-quicksand text-center font-medium text-lg text-neutral-700">
          Open the extension to continue setting up!
        </div>
      </div>
    </div>
  );
}
