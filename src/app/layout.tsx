import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel 405",
  description: "Hotel 405 next js project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
          <SessionProvider session={session}>
            <div className="mx-auto text-2xl gap-2 mb-10">
              <Navbar />
              <SubNavbar />
              {children}
            </div>
          </SessionProvider>
        </body>
    </html>
  );
}
