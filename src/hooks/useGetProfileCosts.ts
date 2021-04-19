import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getProfileContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import { useToast } from 'state/hooks'

const useGetProfileCosts = () => {
  const [costs, setCosts] = useState({
    numberCandyToReactivate: new BigNumber(0),
    numberCandyToRegister: new BigNumber(0),
    numberCandyToUpdate: new BigNumber(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const profileContract = getProfileContract()
        const [numberCandyToReactivate, numberCandyToRegister, numberCandyToUpdate] = await makeBatchRequest([
          profileContract.methods.numberCandyToReactivate().call,
          profileContract.methods.numberCandyToRegister().call,
          profileContract.methods.numberCandyToUpdate().call,
        ])

        setCosts({
          numberCandyToReactivate: new BigNumber(numberCandyToReactivate as string),
          numberCandyToRegister: new BigNumber(numberCandyToRegister as string),
          numberCandyToUpdate: new BigNumber(numberCandyToUpdate as string),
        })
      } catch (error) {
        toastError('Error', 'Could not retrieve CANDY costs for profile')
      }
    }

    fetchCosts()
  }, [setCosts, toastError])

  return costs
}

export default useGetProfileCosts
