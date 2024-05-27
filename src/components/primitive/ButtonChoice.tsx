import Image from "next/image";

export default function ButtonChoice({
  text,
  color,
  onClick,
}: {
  text: string;
  color: "green" | "red" | "grey";
  onClick: () => void;
}) {
  return (
    <button
      className="relative flex h-[34px] w-full items-center"
      onClick={() => onClick()}
    >
      <div
        className={`flex h-full w-full flex-row items-center justify-between rounded-[7px] ${
          color == "green"
            ? "bg-emerald-200"
            : color == "red"
              ? "bg-rose-300"
              : "bg-blue-50"
        }`}
      >
        <div className="font-quicksand ml-4 text-[13px] text-neutral-700">
          {text}
        </div>

        {color == "green" && (
          <Image
            className="mr-4"
            src={"/star.svg"}
            alt="Target"
            height={18}
            width={18}
          />
        )}
      </div>
    </button>
  );
}
