import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import fonts from "@/fonts/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Stack from "@/components/stack";

export const metadata: Metadata = {
  title: "Idarcio Oliveira",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fonts.className, 'font-sans')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen px-48 w-full bg-white dark:bg-neutral-950 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative ">
            <Navbar />
            {children}
            <Footer />
            <Stack />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
