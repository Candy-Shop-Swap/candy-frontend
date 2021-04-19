import React from 'react'
import { Text } from '@candyswap-libs/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import { usePriceCandyBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardBusdValue from './CardBusdValue'

const LotteryJackpot = () => {
  const TranslateString = useI18n()
  const lotteryPrizeAmount = useTotalRewards()
  const balance = getBalanceNumber(lotteryPrizeAmount)
  const lotteryPrizeAmountCandy = balance.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  })
  const lotteryPrizeAmountBusd = new BigNumber(balance).multipliedBy(usePriceCandyBusd()).toNumber()

  return (
    <>
      <Text bold fontSize="24px" style={{ lineHeight: '1.5' }}>
        {TranslateString(999, `${lotteryPrizeAmountCandy} CANDY`, { amount: lotteryPrizeAmountCandy })}
      </Text>
      {lotteryPrizeAmountBusd !== 0 && <CardBusdValue value={lotteryPrizeAmountBusd} />}
    </>
  )
}

export default LotteryJackpot
