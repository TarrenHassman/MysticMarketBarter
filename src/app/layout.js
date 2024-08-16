import './globals.css'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from './config/index'
import AppKitProvider from './context/index'

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'MysticMarket',
  description: 'Demo of NFT Barter System and Propogation of User NFT collections',
};

/**
 * @typedef {React.ReactNode} NewType
 */

export default function RootLayout({
  children
}){
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  
  return (
    <html lang="en">
      <body>
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>
      </body>
    </html>
  )
}