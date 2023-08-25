import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftBar from "@/components/shared/LeftBar";
import RightBar from "@/components/shared/RightBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Co-hort",
  description: "Build by Tanishka Yadav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#0F172A] `}>
          <TopBar />
          <main className="flex flex-row">
            <LeftBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightBar />
          </main>

          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
