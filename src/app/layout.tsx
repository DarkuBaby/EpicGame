import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GamerBerg - GameStore",
  description: "Developed By ItzDark.",
};
const clerkAppearance = {
  baseTheme: dark,
  variables: {
    colorPrimary: "white",
    colorText: "white",
  },
  elements: {
    formButtonPrimary: {
      color: "black",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" suppressHydrationWarning className="bg-epic-500">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
