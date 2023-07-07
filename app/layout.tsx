import "./globals.css";
import { Nav } from "@/components";
import { Sora } from "next/font/google";

const soraFont = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Quriverse Social",
  description: "World's first anime social platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={soraFont.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
