import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useReducer } from 'react'
import { GetRentFiltersQuery } from '../generated'

enum FilterActionKind {
  SET_FILTER_DATA = 'SET_FILTER_DATA',
  SET_FILTER = 'SET_FILTER',
  SET_RANGE_FILTER = 'SET_RANGE_FILTER',
  DELETE_FILTER = 'DELETE_FILTER',
  CLEAR_FILTER = 'CLEAR_FILTER',
}

interface FilterAction {
  type: FilterActionKind
  payload?: any
}

export enum FilterKeys {
  BRANDS = 'brands',
  VEHICLE_CLASSES = 'vehicleClasses',
  BODY_STYLES = 'bodyStyles',
  FUEL_TYPES = 'fuelTypes',
  TRANSMISSIONS = 'transmissions',
  PRICE_RANGE = 'priceRange',
  MILEAGE_RANGE = 'mileageRange',
  YEAR_RANGE = 'yearRange',
  COLORS = 'colors',
}

export type FilterOption = {
  value: string
  fieldName: FilterKeys
  checked?: boolean
  label?: string
}

export type FilterRangeOption = {
  value: Array<number>
  fieldName: FilterKeys
  label?: string
}

// interface Arrayish {
//   [key: string]: FilterOption[]
// }

type Arrayish = {
  [key in FilterKeys]: FilterOption[]
}

interface FilterState {
  data: GetRentFiltersQuery | null
  filtered: Arrayish
}

interface IFilterContext {
  data: GetRentFiltersQuery | null
  setFilterData: (data: GetRentFiltersQuery) => void
  filtered: Arrayish
  clearFilter: () => void
  setFilter: (option: FilterOption) => void
  setRangeFilter: (range: FilterRangeOption) => void
  deleteFilter: (id: FilterOption) => void
  //refactor
}

export const useFilterContext = () => useContext(FilterContext)

//@ts-ignore
const FilterContext = createContext<IFilterContext>({})

interface IAppProvider {
  children: ReactNode
}

const reducer = (state: FilterState, { type, payload }: FilterAction): FilterState => {
  switch (type) {
    case FilterActionKind.SET_FILTER_DATA:
      return {
        ...state,
        data: payload,
      }

    // case FilterActionKind.CHANGE_FILTER:
    //   return {
    //     ...state,
    //     filtered: {
    //       ...state.filtered,
    //       [payload.fieldName]: payload.checked
    //         ? state.filtered['brands']
    //           ? [...state.filtered['brands'], payload]
    //           : state
    //         : state.filtered['brands']?.filter((item) => item.value !== payload.value),
    //     },
    //   }

    case FilterActionKind.SET_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.fieldName]: payload.checked
            ? [...state?.filtered[payload.fieldName], payload]
            : state.filtered[payload.fieldName]?.filter((item) => item.value !== payload.value),
        },
      }

    case FilterActionKind.SET_RANGE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.fieldName]: [{ ...payload }],
        },
      }

    case FilterActionKind.DELETE_FILTER:
      return {
        ...state,
        filtered: {
          ...state.filtered,
          [payload.fieldName]: state?.filtered[payload.fieldName].filter((item) => item.value !== payload.value),
        },
      }

    case FilterActionKind.CLEAR_FILTER:
      return {
        ...state,
        filtered: {
          priceRange: [],
          brands: [],
          vehicleClasses: [],
          bodyStyles: [],
          fuelTypes: [],
          transmissions: [],
          mileageRange: [],
          yearRange: [],
          colors: [],
        },
      }

    default:
      return state
  }
}

const FilterProvider: React.FC<IAppProvider> = ({ children }) => {
  const initialState: FilterState = {
    data: null,
    filtered: {
      priceRange: [],
      brands: [],
      vehicleClasses: [],
      bodyStyles: [],
      fuelTypes: [],
      transmissions: [],
      mileageRange: [],
      yearRange: [],
      colors: [],
    },
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setFilterData = (data: any) => {
    dispatch({ type: FilterActionKind.SET_FILTER_DATA, payload: data })
  }

  const clearFilter = () => {
    dispatch({ type: FilterActionKind.CLEAR_FILTER })
  }

  const setFilter = (item: FilterOption) => {
    dispatch({ type: FilterActionKind.SET_FILTER, payload: item })
  }

  const setRangeFilter = (range: FilterRangeOption) => {
    dispatch({ type: FilterActionKind.SET_RANGE_FILTER, payload: range })
  }

  const deleteFilter = (item: FilterOption) => {
    dispatch({ type: FilterActionKind.DELETE_FILTER, payload: item })
  }

  return (
    <FilterContext.Provider
      value={{
        data: state.data,
        setFilterData,
        filtered: state.filtered,
        setFilter,
        setRangeFilter,
        deleteFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
