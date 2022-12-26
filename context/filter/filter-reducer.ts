import { initialState, FilterOption, FilterOptionKeys, FilterRangeKeys, FilterState } from './filter-context'

export enum FilterActionKind {
  SET_CAR_STATE = 'SET_CAR_STATE',
  SET_FILTER_OPTION = 'SET_FILTER_OPTION',
  SET_RANGE_FILTER = 'SET_RANGE_FILTER',
  DELETE_FILTER = 'DELETE_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
  SET_SORT_BY = 'SET_SORT_BY',
}

type Action = {
  type: FilterActionKind
  payload?: any
}

const filterReducer = (state: FilterState, action: Action): FilterState => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.SET_CAR_STATE:
      return {
        ...state,
        carState: payload,
      }

    case FilterActionKind.SET_FILTER_OPTION:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: payload.checked
            ? [...state?.filtered[payload.filterKey as FilterOptionKeys], payload]
            : state.filtered[payload.filterKey as FilterOptionKeys]?.filter(
                (item: FilterOption) => item.value !== payload.value
              ),
        },
      }

    case FilterActionKind.SET_RANGE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: { ...payload },
        },
      }

    case FilterActionKind.SET_SORT_BY:
      return {
        ...state,
        sortBy: payload,
      }

    case FilterActionKind.DELETE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.filterKey]: Array.isArray(state.filtered[payload.filterKey as FilterOptionKeys])
            ? state?.filtered[payload.filterKey as FilterOptionKeys].filter((item) => item.value !== payload.value)
            : (state.filtered[payload.filterKey as FilterRangeKeys] = null),
        },
      }

    case FilterActionKind.CLEAR_FILTER:
      return (state = initialState)

    default:
      return state
  }
}

export default filterReducer
