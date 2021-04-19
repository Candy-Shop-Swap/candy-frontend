import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { AutoRenewIcon, Button, Flex, InjectedModalProps, Text } from '@candyswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useCandy } from 'hooks/useContract'
import { useProfile, useToast } from 'state/hooks'
import { getCandyProfileAddress } from 'utils/addressHelpers'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useGetProfileCosts from 'hooks/useGetProfileCosts'
import { UseEditProfileResponse } from './reducer'

interface ApproveCandyPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
}

const ApproveCandyPage: React.FC<ApproveCandyPageProps> = ({ goToChange, onDismiss }) => {
  const [isApproving, setIsApproving] = useState(false)
  const { profile } = useProfile()
  const TranslateString = useI18n()
  const { account } = useWeb3React()
  const { numberCandyToUpdate, numberCandyToReactivate } = useGetProfileCosts()
  const candyContract = useCandy()
  const { toastError } = useToast()
  const cost = profile.isActive ? numberCandyToUpdate : numberCandyToReactivate

  const handleApprove = () => {
    candyContract.methods
      .approve(getCandyProfileAddress(), cost.times(2).toJSON())
      .send({ from: account })
      .on('sending', () => {
        setIsApproving(true)
      })
      .on('receipt', () => {
        goToChange()
      })
      .on('error', (error) => {
        toastError('Error', error?.message)
        setIsApproving(false)
      })
  }

  if (!profile) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text>
          {profile.isActive ? TranslateString(999, 'Cost to update:') : TranslateString(999, 'Cost to reactivate:')}
        </Text>
        <Text>{TranslateString(999, `${getFullDisplayBalance(cost)} CANDY`)}</Text>
      </Flex>
      <Button
        disabled={isApproving}
        isLoading={isApproving}
        endIcon={isApproving ? <AutoRenewIcon spin color="currentColor" /> : null}
        width="100%"
        mb="8px"
        onClick={handleApprove}
      >
        {TranslateString(999, 'Approve')}
      </Button>
      <Button variant="text" width="100%" onClick={onDismiss} disabled={isApproving}>
        {TranslateString(999, 'Close Window')}
      </Button>
    </Flex>
  )
}

export default ApproveCandyPage
