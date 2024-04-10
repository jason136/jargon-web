"use client";

import ButtonChoice from "./Primative/ButtonChoice";
import { useState } from "react";
import Image from "next/image";

export default function Question({
  progress,
  sentence,
  options,
  correct,
  // handleSelection,
}: {
  progress: number;
  sentence: string;
  options: string[];
  correct: string;
  // handleSelection: (sel: string) => void;
}) {
  const [selected, setSelected] = useState<boolean>(false);

  const onSubmit = () => {
    setSelected(true);
    // handleSelection(sel);
  };

  return (
    <div className="h-max w-[275px] items-center justify-center rounded-[20px] bg-white shadow-lg shadow-slate-300">
      <div className="px-6 py-5">
        <div className="flex h-max w-full flex-row">
          <div className="relative h-[18px] w-full rounded-[20px] bg-violet-100">
            <div
              className="absolute h-full rounded-[20px] bg-violet-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <Image
            className="pl-1"
            src="/target.svg"
            alt="Target"
            height={22}
            width={22}
          />
        </div>

        <div className="font-quicksand w-full pb-1 pt-5 text-[13px] font-semibold text-black">
          Choose the right answer
        </div>
        <div className="font-quicksand w-full pb-4 text-[15px] text-black">
          {sentence}
        </div>

        <div className="flex flex-col space-y-2">
          {options.map((choice, index) => {
            return (
              <ButtonChoice
                key={index}
                text={choice}
                color={
                  selected ? (choice == correct ? "green" : "red") : "grey"
                }
                onClick={() => onSubmit()}
              />
            );
          })}
        </div>
      </div>

      <div className="relative h-[50px] w-full rounded-b-[20px] bg-violet-100 px-6">
        <div className="flex h-full w-full flex-row items-center justify-center space-x-2">
          <button>
            <Image
              src="/closed_jar_no_letters.png"
              alt="Jar Icon"
              height={24}
              width={17}
            />
          </button>
          <button>
            <Image
              src="/target.svg"
              alt="Target Icon"
              height={24}
              width={24}
            />
          </button>
          <button>
            <Image
              src="/report_problem.svg"
              alt="Report Icon"
              height={24}
              width={24}
            />
          </button>
          <div className="flex-grow" />
          <button>
            <Image
              src="/level_up.svg"
              alt="Level Up Icon"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
