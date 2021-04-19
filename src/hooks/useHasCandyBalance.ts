import BigNumber from 'bignumber.js'
import { getCandyAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's CANDY balance is at least the amount passed in
 */
const useHasCandyBalance = (minimumBalance: BigNumber) => {
  const candyBalance = useTokenBalance(getCandyAddress())
  return candyBalance.gte(minimumBalance)
}

export default useHasCandyBalance
