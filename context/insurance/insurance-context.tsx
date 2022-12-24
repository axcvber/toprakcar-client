import { createContext, ReactNode, useContext, useReducer } from 'react'
import { InsuranceStartFormInputs } from '../../components/insurance/InsuranceStartForm'
import { IContactInfoInputs } from '../../components/insurance/steps/ContactInfoStep'
import { IVehicleInfoInputs } from '../../components/insurance/steps/VehicleInfoStep'
import { IVehicleSelectInputs } from '../../components/insurance/steps/VehicleSelectStep'
import insuranceReducer, { InsuranceActionKind } from './insurance-reducer'

export type InsuranceState = {
  currentStep: number
  firstStepData?: InsuranceStartFormInputs
  secondStepData?: IVehicleInfoInputs & IVehicleSelectInputs
  thirdStepData?: IContactInfoInputs
}

interface InsuranceContextType {
  currentStep: number
  firstStepData?: InsuranceStartFormInputs
  secondStepData?: IVehicleInfoInputs & IVehicleSelectInputs
  thirdStepData?: IContactInfoInputs
  incrementCurrentStep: () => void
  decrementCurrentStep: () => void
  setFirstStepData: (formData: InsuranceStartFormInputs) => void
  setSecondStepData: (formData: IVehicleInfoInputs | IVehicleSelectInputs) => void
  setThirdStepData: (formData: IContactInfoInputs) => void
  clearData: () => void
}

export const useInsuranceContext = () => useContext(InsuranceContext)

//@ts-ignore
const InsuranceContext = createContext<InsuranceContextType>({})

export const initialState: InsuranceState = {
  currentStep: 1,
}

const InsuranceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(insuranceReducer, initialState)

  const setFirstStepData = (formData: InsuranceStartFormInputs) => {
    dispatch({ type: InsuranceActionKind.SET_FIRST_STEP_DATA, payload: formData })
  }

  const setSecondStepData = (formData: IVehicleInfoInputs | IVehicleSelectInputs) => {
    dispatch({ type: InsuranceActionKind.SET_SECOND_STEP_DATA, payload: formData })
  }

  const setThirdStepData = (formData: IContactInfoInputs) => {
    dispatch({ type: InsuranceActionKind.SET_THIRD_STEP_DATA, payload: formData })
  }

  const incrementCurrentStep = () => {
    dispatch({ type: InsuranceActionKind.INCREMENT_CURRENT_STEP })
  }

  const decrementCurrentStep = () => {
    dispatch({ type: InsuranceActionKind.DECREMENT_CURRENT_STEP })
  }

  const clearData = () => {
    dispatch({ type: InsuranceActionKind.CLEAR_DATA })
  }

  return (
    <InsuranceContext.Provider
      value={{
        currentStep: state.currentStep,
        incrementCurrentStep,
        decrementCurrentStep,
        firstStepData: state.firstStepData,
        secondStepData: state.secondStepData,
        thirdStepData: state.thirdStepData,
        setFirstStepData,
        setSecondStepData,
        setThirdStepData,
        clearData,
      }}
    >
      {children}
    </InsuranceContext.Provider>
  )
}

export { InsuranceContext, InsuranceProvider }
