import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import { StringProvider } from "@/components/StringContext";
import { CurrentPageProvider } from "@/components/contexts/CurrentPageContext";
import { WindowWidthProvider } from "@/components/contexts/WindowWidthContext";
import { DarkModeProvider } from "@/components/contexts/DarkModeContext";
import Main from "@/components/Main";


export const metadata: Metadata = {
  title: "Anish's Portfolio",
  description: "Showcasing Anish Sinha's Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
      >
        <DarkModeProvider>
        <WindowWidthProvider>
        <CurrentPageProvider>
          <StringProvider>
            <Main>
              {children}
            </Main>
          </StringProvider>
        </CurrentPageProvider>
        </WindowWidthProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}

