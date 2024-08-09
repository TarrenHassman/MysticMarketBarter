import "./globals.css";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import { cookieToInitialState } from "wagmi";
import { config } from "./config/index";
import Web3ModalProvider from "./config/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AppKit Example App",
  description: "AppKit by WalletConnect"
};

/**
 * @typedef {React.ReactNode} NewType
 */

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}