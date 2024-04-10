import Link from "next/link";
import Image from "next/image";
import Sliding from "./components/Sliding";
import Question from "./components/Question";
import Review from "./components/Review";
import Typing from "./components/Typing";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-violet-100">
      <div className="flex w-full flex-row items-center justify-between px-8 py-4 pb-40">
        <Link href="/">
          <Image src="/jargon.png" alt="Jargon Logo" width={166} height={57} />
        </Link>
        <Link
          className="flex h-11 w-56 cursor-pointer flex-row items-center justify-center gap-2 rounded-[20px] bg-violet-700 px-6 py-2"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
          target="_blank"
        >
          <div className="text-nowrap text-[15px] font-semibold text-white">
            Join Our Waitlist
          </div>
          <Image
            src="/external_site.svg"
            alt="External Link Icon"
            height={14}
            width={15}
          />
        </Link>
      </div>

      <h3 className="pb-2 text-center text-3xl font-bold text-zinc-500">
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
        className="pt-12"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
        target="_blank"
      >
        <Image src="/jar_top.svg" alt="Jar Top Icon" height={85} width={290} />
      </Link>
      <Image src="/half_jar.svg" alt="Half Jar Icon" height={612} width={435} />

      <Sliding
        contents={[
          "Spanish 🇪🇸",
          "Italian 🇮🇹",
          "French 🇫🇷",
          "German 🇩🇪",
          "Portuguese 🇵🇹",
          "Mandarin 🇨🇳",
          "Japanese 🇯🇵",
          "Korean 🇰🇷",
          "Hindi 🇮🇳",
        ]}
      />

      <div className="flex flex-col items-start justify-start gap-4 pt-20">
        <h2 className="bg-violet-300 text-left text-4xl font-bold text-zinc-500">
          Why is language learning so hard?
        </h2>

        <p className="max-w-[950px] text-left text-[26px] text-zinc-500">
          Online language learning is widely accessible, yet many apps offer
          irrelevant content that requires A LOT OF willpower to actually
          practice until fluency
        </p>
      </div>

      <div className="flex w-full flex-row justify-between py-16">
        <div></div>
        <div className="flex max-w-96 flex-grow flex-col justify-end pb-8 text-right">
          <h3 className="text-3xl font-bold leading-[42px] text-violet-700">
            Consistent Practice
          </h3>
          <p className="text-2xl font-medium leading-8 text-zinc-500">
            Doing vocabulary practice is easy, but practicing 30 minutes
            everyday is hard.
          </p>
        </div>
        <div className="rotate-[-5.92deg]">
          <Question
            progress={50}
            sentence="¿Por qué es ____ difícil aprender un idioma?"
            options={["muy", "tan", "esto", "demasido"]}
            correct="muy"
          />
        </div>
        <div className="flex max-w-96 flex-col justify-start pt-8 text-left">
          <h3 className="text-3xl font-bold leading-[42px] text-violet-700">
            Contextual Learning
          </h3>
          <p className="text-2xl font-medium leading-8 text-zinc-500">
            Learning to say “I am hungry” is fun, but learning to say phrases in
            real context and jargons in your interest are more practical.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-6 bg-blue-50 py-16">
        <h2 className="text-[45px] font-bold text-violet-700">
          In Context + Integrated Learning ={" "}
          <span className="inline-flex h-full align-middle">
            <Image
              src="/jargon.png"
              alt="Jargon Logo"
              width={190}
              height={66}
            />
          </span>
        </h2>

        <p className="max-w-[1100px] text-center text-[26px] font-medium leading-9 text-zinc-500">
          Jargon integrates learning into your browsing experience: whether you
          are checking emails, reading the news, doing work or even scrolling
          through Reddit threads, you can learn new vocabularies and phrases
          more effortlessly!
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between pb-20 pt-24">
        <div></div>
        <div></div>
        {[
          {
            name: "Vijay",
            lang: "🇪🇸 Spanish Learner",
            review:
              "I started using Jargon right before my college Spanish proficiency test— I ended up placing at the highest level! The constant practice and varied contexts definitely helped.",
            tilt: -5.92,
            y_offset: -30,
          },
          {
            name: "David",
            lang: "🇫🇷 French Learner",
            review:
              "I get to turn my mindless web-surfing into something productive! Definitely a lot more interesting than the exercises I pored over in high school.",
            tilt: 5.61,
            y_offset: 30,
          },
          {
            name: "Stephen",
            lang: "🇨🇳 Chinese Learner",
            review:
              "Jargon is a great supplement to my Chinese school, and lets me stay ahead of the curve with new vocab. The proficiency feature is great for matching what I’m learning.",
            tilt: -4.85,
            y_offset: -30,
          },
          {
            name: "Lucy",
            lang: "🇪🇸 Spanish Learner",
            review:
              "As someone gearing up to study abroad, Jargon has made me more confident than any pocket dictionary in navigating a city, reading instructions, and more all in a foreign language!",
            tilt: 1.57,
            y_offset: 30,
          },
        ].map((rev, index) => (
          <div
            key={index}
            style={{
              transform: `rotate(${rev.tilt}deg) translateY(${rev.y_offset}px)`,
            }}
          >
            <Review name={rev.name} lang={rev.lang} review={rev.review} />
          </div>
        ))}
        <div></div>
        <div></div>
      </div>

      <h2 className="pb-8 text-[45px] font-bold text-neutral-700">
        People love{" "}
        <span className="inline-flex h-full align-middle">
          <Image
            className=""
            src="/jargon.png"
            alt="Jargon Logo"
            width={190}
            height={66}
          />
        </span>{" "}
        !!
      </h2>

      <div className="flex w-full flex-row items-center justify-between bg-violet-200 px-20 py-8">
        <Image
          className=""
          src="/jargon.png"
          alt="Jargon Logo"
          width={262}
          height={91}
        />
        <div className="flex items-center gap-6">
          <Link
            href="https://www.instagram.com/jargonlearn"
            target="_blank"
          >
            <Image
              className=""
              src="/instagram.svg"
              alt="Instagram Icon"
              width={56}
              height={56}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jargon-learn/"
            target="_blank"
          >
            <Image
              className=""
              src="/linkedin.svg"
              alt="Linkedin Icon"
              width={56}
              height={56}
            />
          </Link>
          <Link
            href="mailto:jargonlearn@gmail.com"
            target="_blank"
          >
            <Image
              className=""
              src="/email.svg"
              alt="Email Logo"
              width={56}
              height={56}
            />
          </Link>
          <Link
            className="flex h-14 flex-row items-center justify-center gap-2 rounded-[40px] bg-violet-700 px-12 py-4"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
            target="_blank"
          >
            <div className="text-nowrap text-[22px] font-medium text-white">
              Join Our Waitlist
            </div>
            <Image
              src="/external_site.svg"
              alt="External Link Icon"
              height={14}
              width={15}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
