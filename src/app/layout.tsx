import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import { StringProvider } from "@/components/StringContext";
import { CurrentPageProvider } from "@/components/CurrentPageContext";
import { WindowWidthProvider } from "@/components/WindowWidthContext";
import { DarkModeProvider } from "@/components/DarkModeContext";
import Main from "@/components/Main";


export const metadata: Metadata = {
  title: "Anish's Portfolio",
  description: "Showcasing Anish Sinha's Portfolio.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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

