import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// CANDY_PER_BLOCK details
// 40 CANDY is minted per block
// 18 CANDY per block is sent to Burn pool (A farm just for burning candy)
// 10 CANDY per block goes to CANDY syrup pool
// 12 CANDY per block goes to Yield farms and lottery
// CANDY_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CANDY/Block in components/CandyStats.tsx = 22 (40 - Amount sent to burn pool)

export const CANDY_PER_BLOCK = new BigNumber(40)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://candyswap.online'
export const BASE_EXCHANGE_URL = 'https://exchange.candyswap.online'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
