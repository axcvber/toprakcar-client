

export enum RentFilterActionKind {
  SET_LOCATION = 'SET_LOCATION',
  SET_PICK_UP_DATE = 'SET_PICK_UP_DATE',
  SET_DROP_OFF_DATE = 'SET_DROP_OFF_DATE',

}

type Action = {
  type: RentFilterActionKind
  payload?: any
}

const rentFilterReducer = (state: any, action: Action): any => {
  const { type, payload } = action
  switch (type) {
    case RentFilterActionKind.SET_LOCATION:
      return {
        ...state,
        location: payload,
      }

    default:
      return state
  }
}

export default rentFilterReducer
