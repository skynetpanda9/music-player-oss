import SideBar from "@/components/SideBar";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Sky Music",
  description: "Music for everyone. The Open-Source way!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={figtree.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
