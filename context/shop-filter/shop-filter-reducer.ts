import { FilterRangeOption, ShopFilterOption, ShopFilterOptionKeys, ShopFilterState } from './shop-filter-context'

export enum ShopFilterActionKind {
  SET_FILTER_DATA = 'SET_FILTER_DATA',
  SET_CAR_STATE = 'SET_CAR_STATE',
  SET_FILTER_OPTION = 'SET_FILTER_OPTION',
  SET_RANGE_FILTER = 'SET_RANGE_FILTER',
  DELETE_FILTER = 'DELETE_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
}

type Action = {
  type: ShopFilterActionKind
  payload: any
}

const shopFilterReducer = (state: ShopFilterState, action: Action): ShopFilterState => {
  const { type, payload } = action
  switch (type) {
    case ShopFilterActionKind.SET_FILTER_DATA:
      return {
        ...state,
        data: payload,
      }

    case ShopFilterActionKind.SET_CAR_STATE:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          carState: payload,
        },
      }

    case ShopFilterActionKind.SET_FILTER_OPTION:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: payload.checked
            ? [...state?.filtered[payload.filterKey as ShopFilterOptionKeys], payload]
            : state.filtered[payload.filterKey as ShopFilterOptionKeys]?.filter(
                (item: ShopFilterOption) => item.value !== payload.value
              ),
        },
      }

    case ShopFilterActionKind.SET_RANGE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: { ...payload },
        },
      }

    default:
      return state
  }
}

export default shopFilterReducer
