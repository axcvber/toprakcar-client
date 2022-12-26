import { ReactNode, useContext, useReducer, createContext } from 'react'
import filterReducer, { FilterActionKind } from './filter-reducer'

export enum SortValues {
  RECOMMENDED = 'id:asc',
  LOWEST_PRICE = 'price.currentPrice:asc',
  HIGHEST_PRICE = 'price.currentPrice:desc',
  NEWEST_INVENTORY = 'id:desc',
  LOWEST_MILEAGE = 'Lowest Mileage',
  NEWEST_YEAR = 'Newest Year',
  OLDEST_YEAR = 'Oldest Year',
}

export enum FilterRangeKeys {
  PRICE_RANGE = 'priceRange',
  MILEAGE_RANGE = 'mileageRange',
  YEAR_RANGE = 'yearRange',
}

export enum FilterOptionKeys {
  BRANDS = 'brands',
  VEHICLE_CLASSES = 'vehicleClasses',
  BODY_STYLES = 'bodyStyles',
  FUEL_TYPES = 'fuelTypes',
  TRANSMISSIONS = 'transmissions',
  EXTERIOR_COLOR = 'exteriorColor',
  INTERIOR_COLOR = 'interiorColor',
}

export type FilterOption = {
  value: string
  filterKey: FilterOptionKeys
  checked?: boolean
  label?: string
}

export type FilterRangeOption = {
  value: Array<number>
  filterKey: FilterRangeKeys
  label?: string
}

export type CarStateType = 'new' | 'used'

export interface FilteredState {
  priceRange: FilterRangeOption | null
  brands: FilterOption[]
  vehicleClasses: FilterOption[]
  bodyStyles: FilterOption[]
  fuelTypes: FilterOption[]
  transmissions: FilterOption[]
  mileageRange?: FilterRangeOption | null
  yearRange?: FilterRangeOption | null
  exteriorColor: FilterOption[]
  interiorColor: FilterOption[]
}

export type FilterState = {
  carState: CarStateType
  sortBy: SortValues
  filtered: FilteredState
}

interface IFilterContext {
  carState: CarStateType
  sortBy: SortValues
  filtered: FilteredState
  setCarState: (state: CarStateType) => void
  setFilterOption: (item: FilterOption) => void
  setRangeFilter: (range: FilterRangeOption) => void
  setSortBy: (option: SortValues) => void
  deleteFilter: (item: FilterOption) => void
  clearFilter: () => void
}

export const useFilterContext = () => useContext(FilterContext)

//@ts-ignore
const FilterContext = createContext<IFilterContext>({})

export const initialState: FilterState = {
  carState: 'used',
  sortBy: SortValues.RECOMMENDED,
  filtered: {
    priceRange: null,
    brands: [],
    vehicleClasses: [],
    bodyStyles: [],
    fuelTypes: [],
    transmissions: [],
    mileageRange: null,
    yearRange: null,
    exteriorColor: [],
    interiorColor: [],
  },
}

const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState)

  const setFilterOption = (item: FilterOption) => {
    dispatch({ type: FilterActionKind.SET_FILTER_OPTION, payload: item })
  }

  const setCarState = (carState: CarStateType) => {
    dispatch({ type: FilterActionKind.SET_CAR_STATE, payload: carState })
  }

  const setRangeFilter = (range: FilterRangeOption) => {
    dispatch({ type: FilterActionKind.SET_RANGE_FILTER, payload: range })
  }

  const setSortBy = (option: SortValues) => {
    dispatch({ type: FilterActionKind.SET_SORT_BY, payload: option })
  }

  const deleteFilter = (item: FilterOption) => {
    dispatch({ type: FilterActionKind.DELETE_FILTER, payload: item })
  }

  const clearFilter = () => {
    dispatch({ type: FilterActionKind.CLEAR_FILTER })
  }

  return (
    <FilterContext.Provider
      value={{
        carState: state.carState,
        sortBy: state.sortBy,
        filtered: state.filtered,
        setCarState,
        setFilterOption,
        setRangeFilter,
        setSortBy,
        deleteFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
