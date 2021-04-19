import React from 'react'
import { Card, CardBody, Heading, Text } from '@candyswap-libs/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCandyAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCandyStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CandyStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCandyAddress()))
  const candySupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCandyStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Candy Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total CANDY Supply')}</Text>
          {candySupply && <CardValue fontSize="14px" value={candySupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total CANDY Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New CANDY/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={22} />
        </Row>
      </CardBody>
    </StyledCandyStats>
  )
}

export default CandyStats
