"use client";
import Link from "next/link";
import Image from "next/image";
import Sliding from "../../components/Sliding";
import Question from "../../components/Question";
import Review from "../../components/Review";
import Typing from "../../components/Typing";
import { useState } from "react";

export default function HomePage() {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="flex flex-col items-center justify-normal">
      <h3 className="sm-1 pt-12 text-center text-[16px] font-bold text-zinc-500 sm:p-4 sm:pt-32 sm:text-3xl">
        Learn a foreign language
      </h3>
      <Typing
        phrases={[
          "scroll Reddit",
          "surf the web",
          "search Wikipedia",
          "browse the internet",
        ]}
      />

      <Link
        className="mt-10 h-[63px] w-[218px] sm:mt-12 sm:h-[84.53px] sm:w-[290px]"
        href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj"
        target="_blank"
      >
        <Image src="/new_jar_top.svg" alt="Jar Top Icon" height={85} width={290} />
      </Link>
      <Image
        className="h-auto w-[320px] sm:w-[435px]"
        src="/jar_only.svg"
        alt="Half Jar Icon"
        height={300}
        width={435}
      />
      <div className="mt-[120px] sm:mt-[10px]">
        <Sliding
          contents={[
            "Tamil 🇮🇳",
            "Romanian 🇷🇴",
            "Croatian 🇭🇷",
            "Tagalog 🇵🇭",
            "Korean 🇰🇷",
            "Greek 🇬🇷",
            "Portuguese 🇵🇹",
            "Vietnamese 🇻🇳",
            "Spanish 🇪🇸",
            "Japanese 🇯🇵",
            "German 🇩🇪",
            "Mandarin Chinese 🇨🇳",
            "French 🇫🇷",
            "Sinhala 🇱🇰",
            "Bengali 🇧🇩",
            "Turkish 🇹🇷",
            "Marathi 🇮🇳",
            "Telugu 🇮🇳",
            "Italian 🇮🇹",
            "Urdu 🇵🇰",
            "Hindi 🇮🇳",
            "Russian 🇷🇺",
            "Arabic 🇸🇦"
          ]}
        />
      </div>

      <div className="flex w-screen max-w-[1250px] flex-col items-start justify-start gap-2 px-10 pt-20 sm:gap-4 mt-[-300px] sm:mt-[-200px]" >
        <h2 
          className="text-left text-[18px] font-bold text-zinc-500 sm:text-4xl underline decoration-[#7E8EF8] decoration-4 cursor-pointer hover:text-zinc-700 transition-colors"
          onClick={() => setShowQuestion(true)}
        >
          Language mastery is just a click away!
        </h2>

        <p className="text-left text-[16px] font-medium leading-6 text-zinc-500 sm:text-[26px] sm:leading-8">
          Jargon augments your web browsing with fun language learning questions that you can answer to practice your language skills, just like the sentence above!
        </p>
      </div>

      <div className="flex w-screen flex-col items-center justify-between py-8 sm:flex-row sm:py-16">
        <div></div>
        <div className="flex h-full max-w-[400px] flex-grow flex-col justify-end px-8 pb-12 pt-4 text-right sm:px-0 sm:pb-0 sm:pt-40">
          <h3 className="text-[17px] font-bold leading-[30px] text-violet-700 sm:text-3xl sm:leading-[42px]">
            Consistent Practice
          </h3>
          <p className="text-[14px] font-medium leading-6 text-zinc-500 sm:text-2xl sm:leading-8">
            Answering bite-sized questions is fun and easy! Each question helps pave the way to language mastery    
          </p>
        </div>
        <div className="rotate-[-5.92deg]">
          {!showQuestion ? (
            <div className="flex items-center justify-center h-[200px] w-[180px] sm:h-[300px] sm:w-[200px]">
              <div className="inline-block text-center animate-bounce bg-blue-200 rounded-lg p-2 sm:p-4 shadow-md">
                <p className="text-blue-800 font-semibold text-sm sm:text-base">Click on the underlined text to try Jargon!</p>
                <svg className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mt-1 sm:mt-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
          ) : (
            <Question
              progress={50}
              sentence="¡El dominio del ______ está a un solo clic!"
              options={["jerga", "idioma", "dialecto", "vernáculo"]}
              correct="idioma"
            />
          )}
        </div>
        <div className="flex h-full max-w-96 flex-col justify-start px-8 pt-12 text-center sm:px-0 sm:pb-40 sm:pt-0 sm:text-left">
          <h3 className="text-[17px] font-bold leading-[30px] text-violet-700 sm:text-3xl sm:leading-[42px]">
            Contextual Learning
          </h3>
          <p className="text-[14px] font-medium leading-6 text-zinc-500 sm:text-2xl sm:leading-8">
            Learning to say basic phrases can be fun, but learning to say phrases in
            the context of your life and interests is more practical!
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex w-screen flex-col items-center justify-center gap-2 bg-blue-50 px-10 pb-12 pt-8 sm:gap-6 sm:py-16">
        <h2 className="text-center text-[18px] font-bold text-violet-700 sm:text-[45px]">
          In Context + Integrated Learning ={" "}
          <span className="inline-flex h-full align-middle">
            <Image
              className="h-[42px] w-[130px] object-contain sm:h-[66px] sm:w-[190px]"
              src="/jargon.png"
              alt="Jargon Logo"
              width={190}
              height={66}
            />
          </span>
        </h2>

        <p className="max-w-[1100px] text-center text-[15px] font-medium leading-6 text-zinc-500 sm:text-[26px] sm:leading-9">
          Jargon integrates learning into your browsing experience: whether you
          are checking emails, reading the news, doing work or scrolling
          through Reddit, you can learn new vocabulary and phrases
          effortlessly!
        </p>
      </div>

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
              'Jargon is a great supplement to my Chinese school, and lets me stay ahead of the curve with new vocab. The proficiency feature is great for matching what I am learning.',
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
    </div>
  );
}