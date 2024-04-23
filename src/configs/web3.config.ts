/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from 'viem'
import { http, createConfig } from 'wagmi'
import { berachainTestnet, bscTestnet } from 'wagmi/chains'
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors'

export const config = createConfig({
  chains: [bscTestnet, berachainTestnet],
  multiInjectedProviderDiscovery: false,
  connectors: [
    injected({ target: 'metaMask' }),
    coinbaseWallet({ appName: 'Bree' }),
    walletConnect({
      projectId: 'c9bfdfeba6902d82c74c3c748bcd073e',
      relayUrl: 'wss://relay.walletconnect.com',
    }),
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})
