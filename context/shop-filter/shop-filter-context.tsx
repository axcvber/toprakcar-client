import { ReactNode, useContext, useReducer, createContext } from 'react'
import { GetShopFiltersQuery } from '../../generated'
import shopFilterReducer, { ShopFilterActionKind } from './shop-filter-reducer'

export enum SortValues {
  RECOMMENDED = 'id:asc',
  LOWEST_PRICE = 'price.currentPrice:asc',
  HIGHEST_PRICE = 'price.currentPrice:desc',
  NEWEST_INVENTORY = 'id:desc',
  LOWEST_MILEAGE = 'Lowest Mileage',
  NEWEST_YEAR = 'Newest Year',
  OLDEST_YEAR = 'Oldest Year',
}

export enum ShopFilterRangeKeys {
  PRICE_RANGE = 'priceRange',
  MILEAGE_RANGE = 'mileageRange',
  YEAR_RANGE = 'yearRange',
}

export enum ShopFilterOptionKeys {
  BRANDS = 'brands',
  VEHICLE_CLASSES = 'vehicleClasses',
  BODY_STYLES = 'bodyStyles',
  FUEL_TYPES = 'fuelTypes',
  TRANSMISSIONS = 'transmissions',
  EXTERIOR_COLOR = 'exteriorColor',
  INTERIOR_COLOR = 'interiorColor',
}

export type ShopFilterOption = {
  value: string
  filterKey: ShopFilterOptionKeys
  checked?: boolean
  label?: string
}

export type FilterRangeOption = {
  value: Array<number>
  filterKey: ShopFilterRangeKeys
  label?: string
}

export type CarStateType = 'new' | 'used'

export interface FilteredState {
  // [key: string]: ShopFilterOption[]
  priceRange: FilterRangeOption | null
  brands: ShopFilterOption[]
  vehicleClasses: ShopFilterOption[]
  bodyStyles: ShopFilterOption[]
  fuelTypes: ShopFilterOption[]
  transmissions: ShopFilterOption[]
  mileageRange?: FilterRangeOption | null
  yearRange?: FilterRangeOption | null
  exteriorColor: ShopFilterOption[]
  interiorColor: ShopFilterOption[]
}

export type ShopFilterState = {
  data: GetShopFiltersQuery | null
  carState: CarStateType
  sortBy: SortValues
  filtered: FilteredState
}

interface IShopFilterContext {
  data: GetShopFiltersQuery | null
  carState: CarStateType
  sortBy: SortValues
  filtered: FilteredState
  setFilterData: (data: GetShopFiltersQuery) => void
  setCarState: (state: CarStateType) => void
  setFilterOption: (item: ShopFilterOption) => void
  setRangeFilter: (range: FilterRangeOption) => void
  setSortBy: (option: SortValues) => void
  deleteFilter: (item: ShopFilterOption) => void
  clearFilter: () => void
}

export const useShopFilterContext = () => useContext(ShopFilterContext)

//@ts-ignore
const ShopFilterContext = createContext<IShopFilterContext>({})

export const initialState: ShopFilterState = {
  data: null,
  carState: 'used',
  sortBy: SortValues.LOWEST_PRICE,
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

const ShopFilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(shopFilterReducer, initialState)

  const setFilterData = (data: GetShopFiltersQuery) => {
    dispatch({ type: ShopFilterActionKind.SET_FILTER_DATA, payload: data })
  }

  const setFilterOption = (item: ShopFilterOption) => {
    dispatch({ type: ShopFilterActionKind.SET_FILTER_OPTION, payload: item })
  }

  const setCarState = (carState: CarStateType) => {
    dispatch({ type: ShopFilterActionKind.SET_CAR_STATE, payload: carState })
  }

  const setRangeFilter = (range: FilterRangeOption) => {
    dispatch({ type: ShopFilterActionKind.SET_RANGE_FILTER, payload: range })
  }

  const setSortBy = (option: SortValues) => {
    dispatch({ type: ShopFilterActionKind.SET_SORT_BY, payload: option })
  }

  const deleteFilter = (item: ShopFilterOption) => {
    dispatch({ type: ShopFilterActionKind.DELETE_FILTER, payload: item })
  }

  const clearFilter = () => {
    dispatch({ type: ShopFilterActionKind.CLEAR_FILTER })
  }

  return (
    <ShopFilterContext.Provider
      value={{
        data: state.data,
        carState: state.carState,
        sortBy: state.sortBy,
        filtered: state.filtered,
        setFilterData,
        setCarState,
        setFilterOption,
        setRangeFilter,
        setSortBy,
        deleteFilter,
        clearFilter,
      }}
    >
      {children}
    </ShopFilterContext.Provider>
  )
}

export { ShopFilterContext, ShopFilterProvider }
