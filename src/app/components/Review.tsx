import Image from "next/image";

export default function Review({
  name,
  lang,
  review,
}: {
  name: string;
  lang: string;
  review: string;
}) {
  return (
    <div className="w-[275px] items-center justify-center rounded-[20px] bg-white shadow-lg shadow-slate-300">
      <div className="px-6 py-5">
        <div className="flex w-full flex-row">
          <div className="h-[18px] w-full rounded-[20px] bg-violet-700" />
          <Image
            className="pl-1"
            src="/target.svg"
            alt="Target"
            height={22}
            width={22}
          />
        </div>

        <div className="flex w-full flex-row items-center justify-between pb-1 pt-5">
          <div className="text-[13px] font-semibold text-black">{name}</div>
          <div className="text-[13px] font-semibold text-zinc-500">{lang}</div>
        </div>

        <div className="text-black text-[15px] font-normal">
          {review}
        </div>
      </div>
    </div>
  );
}
