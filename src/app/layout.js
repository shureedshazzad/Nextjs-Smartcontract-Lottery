'use client';
import { Inter } from "next/font/google";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <html lang="en">
        <head></head>  {/* Ensure the head tag is present */}
        <body className={inter.className}>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </body>
      </html>
    </MoralisProvider>
  );
}
