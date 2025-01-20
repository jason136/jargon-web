"use client";
import Link from "next/link";
import Image from "next/image";
import Question from "../../components/Question";
import Review from "../../components/Review";
import { useState } from "react";
import FeatureCard from "../../components/FeatureCard";

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");

  const features = [
    {
      title: "Never fail to practice",
      description: "Learning happens every time you open a webpage with text",
      imagePath: "/card1.png",
      imageAlt: "Practice feature demonstration",
      isReversed: true,
      bgColor: "bg-white",
      titleColor: "text-purple-600",
      testColor: "text-zinc-600",
    },
    {
      title: "Learn vocab in context",
      description:
        "Practicing with words you see in real life, so you can learn what's relevant to you and apply them later",
      imagePath: "/card2.png",
      imageAlt: "Context learning demonstration",
      isReversed: false,
      bgColor: "bg-indigo-500",
      titleColor: "text-white",
      testColor: "text-white",
    },
    {
      title: "Review past vocab",
      description:
        "Vocab are stored in your 'Jar' with context. You can review them by clicking on the extension",
      imagePath: "/card3.png",
      imageAlt: "Vocab review demonstration",
      isReversed: true,
      bgColor: "bg-white",
      titleColor: "text-purple-600",
      testColor: "text-zinc-600",
    },
    {
      title: "Customize it to fit you",
      description:
        "Change density (how many questions per page) and highlight style in settings",
      imagePath: "/card4.png",
      imageAlt: "Customization demonstration",
      isReversed: false,
      bgColor: "bg-purple-100",
      titleColor: "text-purple-600",
      testColor: "text-zinc-600",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-normal">
      <div className="absolute inset-x-0 top-[-200px] -z-10 h-[200px] bg-blue-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[900px] bg-blue-50" />
      <div className="absolute inset-x-0 top-[900px] -z-10 h-[2400px] bg-purple-50" />
      <div className="absolute inset-x-0 top-[3300px] -z-10 h-[1200px] bg-blue-50" />

      <h1 className="pt-12 text-center text-4xl font-semibold text-black sm:pt-32">
        Learn a new language
      </h1>

      <h1 className="pt-4 text-center text-4xl font-semibold text-black">
        <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-2">
          While you browse the web
        </span>{" "}
        with
        <span className="inline-flex h-full p-2 align-middle">
          <Image
            className="h-[45px] w-[136px] object-contain"
            src="/jargon.png"
            alt="Jargon Logo"
            width={190}
            height={66}
          />
        </span>
      </h1>

      <Link
        className="relative z-10 mt-20"
        href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj"
        target="_blank"
      >
        <Image
          className="h-[85px] w-[450px]"
          src="/empty_close_jar.png"
          alt="Jar Top Icon"
          height={98}
          width={502}
        />
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 text-3xl font-medium text-white">
          Get Started
        </h2>
      </Link>

      <Image
        className="mt-[-60px] h-auto w-[320px] sm:w-[435px]"
        style={{ clipPath: "inset(10% 0 70% 0)" }}
        src="/empty_open_jar.png"
        alt="Half Jar Icon"
        height={300}
        width={435}
      />

      <div className="z-20 mt-[-460px] flex w-full flex-col items-center justify-center gap-6 px-4 py-12">
        <div className="w-[90%] max-w-[1200px] overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="flex h-14 items-center gap-2 bg-[#f1f3f4] px-12">
            <div className="mx-4 flex h-8 flex-1 items-center rounded-full bg-gray-200 px-4">
              <div className="h-4 flex-1"></div>
            </div>
            <div className="flex gap-2 pr-4">
              <Image
                src="/icon.png"
                alt="Jargon Icon"
                width={30}
                height={30}
                className="rounded-full"
              />
              <Image
                src="/puzzle.png"
                alt="Extension Icon"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 px-12 pt-8">
            <Image
              src="/icon.png"
              alt="Jargon Icon"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">@JargonLearn</p>
              <p className="text-gray-600">
                Language Practice Chrome Extension
              </p>
            </div>
          </div>

          <div className="p-12">
            <p className="mb-8 text-3xl font-semibold leading-[4rem] text-zinc-600">
              <span className="rounded bg-gray-200 px-2 text-gray-200">
                Lorem ipsum
              </span>{" "}
              <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-3">
                Jargon picks out sentences at your level
              </span>{" "}
              <span className="rounded bg-gray-200 px-2 text-gray-200">
                dolor sit amet consectetur adipiscing elit. sed do eiusmod
                tempor.
              </span>{" "}
              <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-3">
                And generates practice questions from them
              </span>
            </p>
            <p className="text-3xl font-semibold leading-[4rem] text-zinc-600">
              <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-3">
                Practice with real context as you scroll on Reddit or read news
              </span>{" "}
              <span className="rounded bg-gray-200 px-2 text-gray-200">
                Ut enim ad minim veniam, quis nostrud exercitation. ullamco
                laboris nisi.
              </span>{" "}
              <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-3">
                Learn whenever you&apos;re reading text on the web
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex w-full max-w-[1000px] items-center justify-center gap-2 px-4 pt-8">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          onClick={() => {
            const languages = document.querySelector(".language-scroll");
            if (languages) {
              languages.scrollLeft -= 200;
            }
          }}
        >
          <span className="text-xl">&larr;</span>
        </button>

        <div className="language-scroll scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-2">
          {[
            { name: "Spanish", flag: "🇪🇸" },
            { name: "Italian", flag: "🇮🇹" },
            { name: "French", flag: "🇫🇷" },
            { name: "German", flag: "🇩🇪" },
            { name: "Mandarin", flag: "🇨🇳" },
            { name: "Japanese", flag: "🇯🇵" },
            { name: "Korean", flag: "🇰🇷" },
          ].map((lang) => (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang.name)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-blue-200 px-6 py-2 text-lg font-medium text-blue-600 transition-colors ${
                selectedLanguage === lang.name
                  ? "bg-white shadow-sm"
                  : "bg-transparent hover:bg-white/50"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          onClick={() => {
            const languages = document.querySelector(".language-scroll");
            if (languages) {
              languages.scrollLeft += 200;
            }
          }}
        >
          <span className="text-xl">&rarr;</span>
        </button>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 px-4 pt-16 text-center">
        <h2 className="text-4xl font-semibold">
          <span className="text-blue-300">Language learning requires </span>
          <span className="text-purple-600">consistency</span>
          <span className="text-blue-300"> and </span>
          <span className="text-purple-600">practice</span>
        </h2>

        <p className="text-2xl font-medium text-zinc-700">
          Jargon makes it easy by{" "}
          <span className="rounded bg-gradient-to-r from-purple-200 to-blue-200 px-2">
            turning websites into language practices
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-16 pt-20">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} index={index} />
        ))}
      </div>

      <h2 className="pb-8 text-center text-[20px] font-bold text-neutral-700 sm:text-[45px]">
        People love{" "}
        <span className="inline-flex h-full align-middle">
          <Image
            className="h-[42px] w-[130px] object-contain sm:h-[66px] sm:w-[190px]"
            src="/jargon.png"
            alt="Jargon Logo"
            width={190}
            height={66}
          />
        </span>{" "}
        !!
      </h2>

      <div className="flex w-screen flex-col items-center justify-between pt-12 sm:flex-row sm:pb-20 sm:pt-24">
        <div></div>
        <div></div>
        {[
          {
            name: "Vijay",
            lang: "🇪🇸 Spanish Learner",
            review:
              "I started using Jargon right before my college Spanish proficiency test— I ended up placing at the highest level! The constant practice and varied contexts definitely helped.",
            tilt: "rotate-[-5.92deg]",
            offset:
              "translate-x-[-30px] sm:translate-x-0 sm:translate-y-[-30px]",
          },
          {
            name: "David",
            lang: "🇫🇷 French Learner",
            review:
              "I get to turn my mindless web-surfing into something productive! Definitely a lot more interesting than the exercises I pored over in high school.",
            tilt: "rotate-[5.61deg]",
            offset: "translate-x-[30px] sm:translate-x-0 sm:translate-y-[30px]",
          },
          {
            name: "Stephen",
            lang: "🇨🇳 Chinese Learner",
            review:
              "Jargon is a great supplement to my Chinese school, and lets me stay ahead of the curve with new vocab. The proficiency feature is great for matching what I am learning.",
            tilt: "rotate-[-4.85deg]",
            offset:
              "translate-x-[-30px] sm:translate-x-0 sm:translate-y-[-30px]",
          },
          {
            name: "Lucy",
            lang: "🇪🇸 Spanish Learner",
            review:
              "As someone gearing up to study abroad, Jargon has made me more confident than any pocket dictionary in navigating a city, reading instructions, and more all in a foreign language!",
            tilt: "rotate-[1.57deg]",
            offset: "translate-x-[30px] sm:translate-x-0 sm:translate-y-[30px]",
          },
        ].map((rev, index) => (
          <div key={index} className={`${rev.tilt} ${rev.offset} pb-8 sm:pb-0`}>
            <Review name={rev.name} lang={rev.lang} review={rev.review} />
          </div>
        ))}
        <div></div>
        <div></div>
      </div>

      <div className="x-0 relative -mb-[12rem] w-full max-w-[1200px] px-4">
        <Image
          src="/speech.png"
          alt="Speech bubble background"
          width={1200}
          height={400}
          className="w-full"
        />
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/3 text-center">
          <h3 className="mb-4 text-2xl font-medium text-neutral-700">
            The best time to learn a new language is now!
          </h3>
          <h2 className="mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-4xl font-semibold text-transparent">
            Install Jargon to make consistent progress
          </h2>
          <Link
            href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj"
            target="_blank"
            className="inline-block rounded-full bg-purple-600 px-8 py-3 text-xl font-medium text-white transition-colors hover:bg-purple-700"
          >
            Install Jargon
          </Link>
        </div>
      </div>
    </div>
  );
}
