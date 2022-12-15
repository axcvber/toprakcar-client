import { Dayjs } from 'dayjs'
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useReducer, useState } from 'react'
import { UserDataFormInputs } from '../../components/forms/PersonalInfoForm'
import { RentCarEntity } from '../../generated'
import { useLocale } from '../../hooks/useLocale'
import rentFilterReducer, { RentActionKind } from './rent-reducer'

type LocationOption = {
  id: string
  address: string
}

export type ExtrasType = {
  name: string
  value: string
  price: number
}

type OrderSummaryType = {
  dayCount: number
  rentPrice: number
  extrasPrice: number
  totalAmount: number
  extrasData?: ExtrasType[] | null
}

export type RentState = {
  location: LocationOption | null
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
  currentStep: number
  selectedCar: RentCarEntity | null
  orderSummary: OrderSummaryType | null
  userData: UserDataFormInputs | null
}

interface IRentContext {
  location: LocationOption | null
  pickUpDate: Dayjs | null
  dropOffDate: Dayjs | null
  currentStep: number
  selectedCar: RentCarEntity | null
  orderSummary: OrderSummaryType | null
  userData: UserDataFormInputs | null
  setLocation: (data: LocationOption) => void
  setPickUpDate: (value: Dayjs | null) => void
  setDropOffDate: (value: Dayjs | null) => void
  setCurrentStep: (step: number) => void
  setSelectedCar: (carItem: RentCarEntity) => void
  setExtrasData: (data: ExtrasType[]) => void
  setUserData: (data: UserDataFormInputs) => void

  // userData: any
  // selectedCar: any
  // setSelectedCar: (car: any) => void
}

// interface IStepContext {
//   currentStep: number
//   setCurrentStep: Dispatch<SetStateAction<number>>
// }

export const useRentContext = () => useContext(RentContext)

//@ts-ignore
const RentContext = createContext<IRentContext>({})

interface IAppProvider {
  children: ReactNode
}

export const initialState: RentState = {
  location: null,
  pickUpDate: null,
  dropOffDate: null,
  currentStep: 1,
  selectedCar: null,
  orderSummary: null,
  userData: null,
}

const RentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(rentFilterReducer, initialState)

  const setLocation = (data: LocationOption) => {
    dispatch({ type: RentActionKind.SET_LOCATION, payload: data })
  }
  const setPickUpDate = (value: Dayjs | null) => {
    dispatch({ type: RentActionKind.SET_PICK_UP_DATE, payload: value })
  }
  const setDropOffDate = (value: Dayjs | null) => {
    dispatch({ type: RentActionKind.SET_DROP_OFF_DATE, payload: value })
  }

  const setCurrentStep = (step: number) => {
    dispatch({ type: RentActionKind.SET_CURRENT_STEP, payload: step })
  }

  const setSelectedCar = (carItem: RentCarEntity) => {
    dispatch({ type: RentActionKind.SET_SELECTED_CAR, payload: carItem })
  }

  const setExtrasData = (data: ExtrasType[]) => {
    dispatch({ type: RentActionKind.SET_EXTRAS_DATA, payload: data })
  }
  const setUserData = (userData: UserDataFormInputs) => {
    dispatch({ type: RentActionKind.SET_USER_DATA, payload: userData })
  }

  return (
    <RentContext.Provider
      value={{
        location: state.location,
        pickUpDate: state.pickUpDate,
        dropOffDate: state.dropOffDate,
        currentStep: state.currentStep,
        selectedCar: state.selectedCar,
        orderSummary: state.orderSummary,
        userData: state.userData,
        setLocation,
        setPickUpDate,
        setDropOffDate,
        setCurrentStep,
        setSelectedCar,
        setExtrasData,
        setUserData,
      }}
    >
      {children}
    </RentContext.Provider>
  )
}

export { RentContext, RentProvider }
