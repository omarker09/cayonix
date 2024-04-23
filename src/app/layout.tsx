import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { ProviderS } from '../lib/redux-toolkit/provider/redux-provider';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Cayonix Agency",
  description: "Cayonix Is Web Dev Agency That Provide perfect deals to Customers",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    search: "./favicon.ico",
    apple: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProviderS>
            {children}
          </ProviderS>
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  );
}
