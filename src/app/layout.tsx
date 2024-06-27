import "~/styles/globals.css";

import { Quicksand } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Jargon",
  description: "In context language learning for everyday use",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${quicksand.variable} bg-violet-100`}>
        <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-violet-100">
          <div className="flex w-screen flex-row items-center justify-center px-8 py-4 sm:justify-between">
            <div className="flex flex-row items-center sm:flex-row sm:gap-4">
              <Link className="" href="/">
                <Image
                  className="h-[46px] w-[132px] object-contain sm:h-[57px] sm:w-[166px]"
                  src="/jargon.png"
                  alt="Jargon Logo"
                  width={166}
                  height={57}
                />
              </Link>
              <div className="hidden text-center text-lg font-medium leading-[33px] text-indigo-400 sm:flex sm:text-2xl">
                In-Context Language Learning for Everyday Use
              </div>
            </div>
            <Link
              className="hidden flex-row items-center justify-center gap-2 rounded-[20px] bg-violet-700 px-6 py-2 sm:flex"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
              target="_blank"
            >
              <div className="whitespace-nowrap text-nowrap text-[15px] font-semibold text-white">
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

          <div className="flex w-full flex-grow flex-col items-center justify-center">
            {children}
          </div>

          <div className="flex w-screen flex-row items-center justify-center bg-violet-200 px-20 py-8 sm:justify-between">
            <Image
              className="hidden sm:flex"
              src="/jargon.png"
              alt="Jargon Logo"
              width={262}
              height={91}
            />
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex flex-row gap-6">
                <Link
                  href="https://www.instagram.com/jargonlearn"
                  target="_blank"
                >
                  <Image
                    className="h-[28px] w-[28px] object-contain sm:h-[56px] sm:w-[56px]"
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
                    className="h-[28px] w-[28px] object-contain sm:h-[56px] sm:w-[56px]"
                    src="/linkedin.svg"
                    alt="Linkedin Icon"
                    width={56}
                    height={56}
                  />
                </Link>
                <Link href="mailto:jargonlearn@gmail.com" target="_blank">
                  <Image
                    className="h-[28px] w-[28px] object-contain sm:h-[56px] sm:w-[56px]"
                    src="/email.svg"
                    alt="Email Logo"
                    width={56}
                    height={56}
                  />
                </Link>
              </div>
              <Link
                className="flex flex-row items-center justify-center gap-1 rounded-[40px] bg-violet-700 px-6 py-2 sm:gap-2 sm:px-12 sm:py-4"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfOcYOZsjZXoeZE8HIHk7VW8bVGG6k4SjpuWFcQabo31zzotA/viewform"
                target="_blank"
              >
                <div className="whitespace-nowrap text-nowrap text-[16px] font-medium text-white sm:text-[22px]">
                  Join Our Waitlist
                </div>
                <Image
                  className="h-[13px] w-[12px] object-contain sm:h-[15px] sm:w-[14px]"
                  src="/external_site.svg"
                  alt="External Link Icon"
                  height={14}
                  width={15}
                />
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
