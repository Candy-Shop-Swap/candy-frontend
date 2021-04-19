import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'CandySwap',
  description:
    'The most popular AMM on BSC by user count! Earn CANDY through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by CandySwap), NFTs, and more, on a platform you can trust.',
  image: 'https://candyswap.online/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/competition': {
    title: 'CandySwap Easter Battle',
    description: 'Register now for the CandySwap Easter battle!',
    image: 'https://candyswap.online/images/easter-battle.png',
  },
}
