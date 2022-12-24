import { initialState, InsuranceState } from './insurance-context'

export enum InsuranceActionKind {
  SET_FIRST_STEP_DATA = 'SET_FIRST_STEP_DATA',
  SET_SECOND_STEP_DATA = 'SET_SECOND_STEP_DATA',
  SET_THIRD_STEP_DATA = 'SET_THIRD_STEP_DATA',
  INCREMENT_CURRENT_STEP = 'INCREMENT_CURRENT_STEP',
  DECREMENT_CURRENT_STEP = 'DECREMENT_CURRENT_STEP',
  CLEAR_DATA = 'CLEAR_DATA',
}

type Action = {
  type: InsuranceActionKind
  payload?: any
}

const insuranceReducer = (state: InsuranceState, action: Action): InsuranceState => {
  const { type, payload } = action
  switch (type) {
    case InsuranceActionKind.INCREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      }
    case InsuranceActionKind.DECREMENT_CURRENT_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      }

    case InsuranceActionKind.SET_FIRST_STEP_DATA:
      return {
        ...state,
        firstStepData: payload,
      }

    case InsuranceActionKind.SET_SECOND_STEP_DATA:
      return {
        ...state,
        secondStepData: payload,
      }

    case InsuranceActionKind.SET_THIRD_STEP_DATA:
      return {
        ...state,
        thirdStepData: payload,
      }
    case InsuranceActionKind.CLEAR_DATA:
      return (state = initialState)

    default:
      return state
  }
}

export default insuranceReducer
