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
      <body className={`font-sans ${quicksand.variable}`}>{children}</body>
    </html>
  );
}
