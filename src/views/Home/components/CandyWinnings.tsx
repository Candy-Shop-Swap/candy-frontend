import React from 'react'
import { useTotalClaim } from 'hooks/useTickets'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceCandyBusd } from 'state/hooks'
import { Text } from '@candyswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

const CandyWinnings = () => {
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { claimAmount } = useTotalClaim()
  const candyAmount = getBalanceNumber(claimAmount)
  const claimAmountBusd = new BigNumber(candyAmount).multipliedBy(usePriceCandyBusd()).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={candyAmount} lineHeight="1.5" />
      {claimAmountBusd !== 0 && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default CandyWinnings
