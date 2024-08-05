import Toolbar from "~/components/Toolbar";
import "~/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Toolbar state="postdownload" >{children}</Toolbar>;
}
