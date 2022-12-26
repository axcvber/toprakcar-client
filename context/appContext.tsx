import { createContext, ReactNode, useContext } from 'react'
import { InitialDataQuery } from '../generated'
import { FilterProvider } from './filter/filter-context'
import { InsuranceProvider } from './insurance/insurance-context'
import { RentProvider } from './rent/rent-context'

interface IAppContext {
  initialData?: InitialDataQuery
}

export const useAppContext = () => useContext(AppContext)

const AppContext = createContext<Partial<IAppContext>>({})

interface IAppProvider {
  initialData?: InitialDataQuery
  children: ReactNode
}

const AppProvider: React.FC<IAppProvider> = ({ initialData, children }) => {
  return (
    <AppContext.Provider
      value={{
        initialData,
      }}
    >
      <RentProvider>
        <InsuranceProvider>
          <FilterProvider>{children}</FilterProvider>
        </InsuranceProvider>
      </RentProvider>
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
