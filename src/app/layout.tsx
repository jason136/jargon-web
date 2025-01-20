import "~/styles/globals.css";

import { Quicksand } from "next/font/google";

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
        <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}
