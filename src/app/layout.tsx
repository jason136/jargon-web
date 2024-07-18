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
              href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj?pli=1"
              target="_blank"
            >
              <div className="whitespace-nowrap text-nowrap text-[15px] font-semibold text-white">
                Download Extension
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

          <div className="flex w-screen flex-row justify-center bg-violet-200 px-20 py-8 sm:justify-between">
            <Image
              className="hidden sm:block sm:h-[91px] sm:w-[262px] object-contain"
              src="/jargon.png"
              alt="Jargon Logo"
              width={262}
              height={91}
            />
            <div className="flex flex-col items-center gap-6 flex-grow py-4">
              <div className="text-[16px] text-indigo-700 font-medium">Community</div>
              <Link
                href="https://discord.com/invite/aSeHJw3Db4"
                target="_blank">
                  <div className="text-[14px] text-indigo-400 font-medium">Join the Discord!</div>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-6 flex-grow py-4">
              <div className="text-[16px] text-indigo-700 font-medium">Support</div>
              <Link
                href="mailto:support@jargonlearn.com"
                target="_blank">
                  <div className="text-[14px] text-indigo-400 font-medium">Contact Us</div>
              </Link>
              <Link
                href="/termsofservice"
                target="_blank">
                  <div className="text-[14px] text-indigo-400 font-medium">Terms of Service</div>
              </Link>
              <Link
                href="/privacy"
                target="_blank">
                  <div className="text-[14px] text-indigo-400 font-medium">Privacy Policy</div>
              </Link>
            </div>
            <div className="flex flex-col items-center gap-6">
            <Link
                className="flex flex-row items-center justify-center gap-1 rounded-[40px] bg-violet-700 px-6 py-2 sm:gap-2 sm:px-12 sm:py-4"
                href="https://chromewebstore.google.com/detail/jargon/gghkanaadhldgmknmgggdgfaonhpppoj?pli=1"
                target="_blank"
              >
                <div className="whitespace-nowrap text-nowrap text-[16px] font-medium text-white sm:text-[22px]">
                  Download Extension
                </div>
                <Image
                  className="h-[13px] w-[12px] object-contain sm:h-[15px] sm:w-[14px]"
                  src="/external_site.svg"
                  alt="External Link Icon"
                  height={14}
                  width={15}
                />
              </Link>
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
              </div>
          </div>
        </main>
      </body>
    </html>
  );
}
