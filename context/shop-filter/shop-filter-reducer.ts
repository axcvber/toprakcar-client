import {
  FilterRangeOption,
  initialState,
  ShopFilterOption,
  ShopFilterOptionKeys,
  ShopFilterRangeKeys,
  ShopFilterState,
} from './shop-filter-context'

export enum ShopFilterActionKind {
  SET_FILTER_DATA = 'SET_FILTER_DATA',
  SET_CAR_STATE = 'SET_CAR_STATE',
  SET_FILTER_OPTION = 'SET_FILTER_OPTION',
  SET_RANGE_FILTER = 'SET_RANGE_FILTER',
  DELETE_FILTER = 'DELETE_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
  SET_SORT_BY = 'SET_SORT_BY',
}

type Action = {
  type: ShopFilterActionKind
  payload?: any
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
        carState: payload,
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

    case ShopFilterActionKind.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
      }

    case ShopFilterActionKind.DELETE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: Array.isArray(state.filtered[payload.filterKey as ShopFilterOptionKeys])
            ? state?.filtered[payload.filterKey as ShopFilterOptionKeys].filter((item) => item.value !== payload.value)
            : (state.filtered[payload.filterKey as ShopFilterRangeKeys] = null),
        },
      }

    case ShopFilterActionKind.CLEAR_FILTER:
      return {
        ...state,
        filtered: initialState.filtered,
      }

    default:
      return state
  }
}

export default shopFilterReducer
