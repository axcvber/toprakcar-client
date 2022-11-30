import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { useLocale } from '../hooks/useLocale'

interface IRentContext {
  location: string
  pickUpDate: string
  dropOffDate: string
  userData: any
  selectedCar: any
  setSelectedCar: (car: any) => void
  //refactor
}

interface IStepContext {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}

export const useRentContext = () => useContext(RentContext)

const RentContext = createContext<IRentContext & IStepContext>({})

interface IAppProvider {
  children: ReactNode
}

const RentProvider: React.FC<IAppProvider> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCar, setSelectedCar] = useState(null)

  const [state, setState] = useState({
    location: '',
    pickUpDate: '',
    dropOffDate: '',
    userData: '',
  })

  // const setSelectedService = (item: string | null) => {
  //   setState({
  //     ...state,
  //     selectedService: item,
  //   })
  // }

  return (
    <RentContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        selectedCar,
        setSelectedCar,
      }}
    >
      {children}
    </RentContext.Provider>
  )
}

export { RentContext, RentProvider }
