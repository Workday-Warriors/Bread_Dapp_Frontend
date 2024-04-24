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
    coinbaseWallet({ appName: 'Bread' }),
    walletConnect({
      projectId: '91d5c38deb08aa7c528b9f3d0c14edec',
      relayUrl: 'wss://relay.walletconnect.com',
    }),
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  },
})
