import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, arbitrum, sepolia } from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const metadata = {
  name: 'MysticMarket',
  description: 'Demo of NFT Barter System and Propogation of User NFT collections',
  url: 'https://mysticmarket.dev',
  //TODO: Update icon to MysticMarket logo
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Create wagmiConfig
const chains = [mainnet, arbitrum, sepolia]as const;
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true,
    socials: ["github","google","apple"],
    showWallets: false,
    walletFeatures: true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
});
