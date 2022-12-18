import { RentState } from './rent-context'

export enum RentActionKind {
  SET_PICK_UP_LOCATION = 'SET_PICK_UP_LOCATION',
  SET_DROP_OFF_LOCATION = 'SET_DROP_OFF_LOCATION',
  SET_PICK_UP_DATE = 'SET_PICK_UP_DATE',
  SET_DROP_OFF_DATE = 'SET_DROP_OFF_DATE',
  SET_CURRENT_STEP = 'SET_CURRENT_STEP',
  SET_SELECTED_CAR = 'SET_SELECTED_CAR',
  SET_EXTRAS_DATA = 'SET_EXTRAS_DATA',
  SET_USER_DATA = 'SET_USER_DATA',
}

type Action = {
  type: RentActionKind
  payload?: any
}

const rentFilterReducer = (state: RentState, action: Action): RentState => {
  const { type, payload } = action
  switch (type) {
    case RentActionKind.SET_PICK_UP_LOCATION:
      return {
        ...state,
        pickUpLocation: payload,
        dropOffLocation: state.dropOffLocation ? state.dropOffLocation : payload,
      }

    case RentActionKind.SET_DROP_OFF_LOCATION:
      return {
        ...state,
        dropOffLocation: payload,
      }

    case RentActionKind.SET_PICK_UP_DATE:
      return {
        ...state,
        pickUpDate: payload,
      }

    case RentActionKind.SET_DROP_OFF_DATE:
      return {
        ...state,
        dropOffDate: payload,
      }
    case RentActionKind.SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: payload,
      }
    case RentActionKind.SET_SELECTED_CAR:
      let dayCount = state.dropOffDate?.diff(state.pickUpDate, 'days')
      if (dayCount) {
        let rentPrice = payload.attributes?.price.currentPrice * dayCount
        let totalAmount = rentPrice
        return {
          ...state,
          selectedCar: payload,
          orderSummary: {
            dayCount,
            rentPrice,
            extrasPrice: 0,
            totalAmount,
          },
        }
      }
      return {
        ...state,
        selectedCar: payload,
      }

    case RentActionKind.SET_EXTRAS_DATA:
      if (state.orderSummary?.dayCount && state.orderSummary?.rentPrice) {
        const extrasPrice = payload.reduce((a: any, v: any) => (a = a + v.price), 0)
        return {
          ...state,
          orderSummary: {
            ...state.orderSummary,
            extrasData: payload,
            extrasPrice,
            totalAmount: extrasPrice + state.orderSummary.rentPrice,
          },
        }
      }

    case RentActionKind.SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      }

    default:
      return state
  }
}

export default rentFilterReducer
