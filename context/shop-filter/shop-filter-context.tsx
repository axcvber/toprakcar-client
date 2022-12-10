import { ReactNode, useContext, useReducer, createContext } from 'react'
import { GetShopFiltersQuery } from '../../generated'
import shopFilterReducer, { ShopFilterActionKind } from './shop-filter-reducer'

export enum ShopFilterRangeKeys {
  PRICE_RANGE = 'priceRange',
  MILEAGE_RANGE = 'mileageRange',
  YEAR_RANGE = 'yearRange',
}

export enum ShopFilterOptionKeys {
  BRANDS = 'brands',
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

interface FilteredState {
  // [key: string]: ShopFilterOption[]
  carState: CarStateType
  priceRange: FilterRangeOption
  brands: ShopFilterOption[]
  bodyStyles: ShopFilterOption[]
  fuelTypes: ShopFilterOption[]
  transmissions: ShopFilterOption[]
  mileageRange: FilterRangeOption
  yearRange: FilterRangeOption
  exteriorColor: ShopFilterOption[]
  interiorColor: ShopFilterOption[]
}

export type ShopFilterState = {
  data: GetShopFiltersQuery | null
  filtered: FilteredState
}

interface IShopFilterContext {
  data: GetShopFiltersQuery | null
  filtered: FilteredState
  setFilterData: (data: GetShopFiltersQuery) => void
  setCarState: (state: CarStateType) => void
  setFilterOption: (item: ShopFilterOption) => void
  setRangeFilter: (range: FilterRangeOption) => void
  // filtered: Arrayish
  // clearFilter: () => void
  // setFilter: (option: FilterOption) => void
  // setRangeFilter: (range: FilterRangeOption) => void
  // deleteFilter: (id: FilterOption) => void
}

export const useShopFilterContext = () => useContext(ShopFilterContext)

//@ts-ignore
const ShopFilterContext = createContext<IShopFilterContext>({})

const initialState: ShopFilterState = {
  data: null,
  filtered: {
    carState: 'used',
    priceRange: {
      filterKey: ShopFilterRangeKeys.PRICE_RANGE,
      value: [500, 700000],
    },
    brands: [],
    bodyStyles: [],
    fuelTypes: [],
    transmissions: [],
    mileageRange: {
      filterKey: ShopFilterRangeKeys.MILEAGE_RANGE,
      value: [500, 35000],
    },
    yearRange: {
      filterKey: ShopFilterRangeKeys.YEAR_RANGE,
      value: [2001, 2022],
    },
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

  return (
    <ShopFilterContext.Provider
      value={{
        data: state.data,
        filtered: state.filtered,
        setFilterData,
        setCarState,
        setFilterOption,
        setRangeFilter,
      }}
    >
      {children}
    </ShopFilterContext.Provider>
  )
}

export { ShopFilterContext, ShopFilterProvider }
