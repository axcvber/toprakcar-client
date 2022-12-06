import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useReducer } from 'react'
import { GetRentFiltersQuery } from '../generated'

enum FilterActionKind {
  SET_FILTER_DATA = 'SET_FILTER_DATA',
  CLEAR_FILTER = 'CLEAR_FILTER',
  SET_FILTERED_BRANDS = 'SET_FILTERED_BRANDS',
}

interface FilterAction {
  type: FilterActionKind
  payload?: any
}

interface FilterState {
  data: GetRentFiltersQuery | null
  filtered: any
  brands: any
}

interface IFilterContext {
  data: GetRentFiltersQuery | null
  setFilterData: (data: GetRentFiltersQuery) => void
  filtered: any
  brands: any
  clearFilter: () => void
  setFilteredBrands: (id: number) => void
  //refactor
}

export const useFilterContext = () => useContext(FilterContext)

//@ts-ignore
const FilterContext = createContext<IFilterContext>({})

interface IAppProvider {
  children: ReactNode
}

const reducer = (state: FilterState, action: FilterAction): FilterState => {
  const { type, payload } = action
  switch (type) {
    case FilterActionKind.SET_FILTER_DATA:
      return {
        ...state,
        data: action.payload,
      }

    case FilterActionKind.SET_FILTERED_BRANDS:
      return {
        ...state,
        brands: [...state.brands, action.payload],
      }
    case FilterActionKind.CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }

    default:
      return state
  }
}

const FilterProvider: React.FC<IAppProvider> = ({ children }) => {
  const initialState = {
    data: null,
    brands: [],
    filtered: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setFilterData = (data: any) => {
    dispatch({ type: FilterActionKind.SET_FILTER_DATA, payload: data })
  }

  const clearFilter = () => {
    dispatch({ type: FilterActionKind.CLEAR_FILTER })
  }

  const setFilteredBrands = (id: number) => {
    dispatch({ type: FilterActionKind.SET_FILTERED_BRANDS, payload: id })
  }

  return (
    <FilterContext.Provider
      value={{
        data: state.data,
        filtered: state.filtered,
        setFilterData,
        clearFilter,
        brands: state.brands,
        setFilteredBrands,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }
