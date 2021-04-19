import { MenuEntry } from '@candyswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.candyswap.online',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.candyswap.online/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
    status: {
      text: 'JOIN',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://candyswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://candyswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://candyswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://candyswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.candyswap.online/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.candyswap.online',
      },
      {
        label: 'Github',
        href: 'https://github.com/Candy-Shop-Swap',
      },
      {
        label: 'Docs',
        href: 'https://docs.candyswap.online',
      },
      {
        label: 'Blog',
        href: 'https://candyswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://candyswap.creator-spring.com/',
      },
    ],
  },
]

export default config
