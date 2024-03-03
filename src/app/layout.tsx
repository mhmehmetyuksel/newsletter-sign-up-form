import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Newsletter Sign-Up Form",
  description: "Newsletter sign-up form with success message",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex items-center justify-center bg-[#36384d]">{children}</body>
    </html>
  );
}
