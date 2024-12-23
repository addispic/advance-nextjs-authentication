import type { Metadata } from "next";
import "./globals.css";

// provider
import TanstackProvider from "./provider/TanstackProvider";

// ui
import Header from "./ui/Header";

export const metadata: Metadata = {
  title: "Idea Share",
  description: "Generated by addispic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <div className="w-screen h-screen overflow-hidden flex">
            {/* left */}
            <div className="w-56 shrink-0 ">left</div>
            {/* right content */}
            <div className="flex-1 flex flex-col">
              {/* header */}
              <Header />
              {/* contents */}
              <div className="flex-1 flex">
                {/* pages */}
                <div className="flex-1">{children}</div>
                {/* right side bar */}
                <div className="w-80 shrink-0">right side bar</div>
              </div>
            </div>
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
