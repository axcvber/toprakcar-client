import React, { useState, createContext, ReactNode } from 'react'
import CarPurchaseModal from '../components/modals/CarPurchaseModal'
import RentCarInfoModal from '../components/modals/RentCarInfoModal'
import SearchModal from '../components/modals/SearchModal'
import ShopSidebarModal from '../components/modals/ShopSidebarModal'
import ShopWorkStepsModal from '../components/modals/ShopWorkStepsModal'

export enum MODAL_TYPES {
  SEARCH_MODAL = 'SEARCH_MODAL',
  RENT_CAR_INFO_MODAL = 'RENT_CAR_INFO_MODAL',
  SHOP_SIDEBAR_MODAL = 'SHOP_SIDEBAR_MODAL',
  SHOP_WORK_STEPS = 'SHOP_WORK_STEPS',
  CAR_PURCHASE_MODAL = 'CAR_PURCHASE_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.SEARCH_MODAL]: SearchModal,
  [MODAL_TYPES.RENT_CAR_INFO_MODAL]: RentCarInfoModal,
  [MODAL_TYPES.SHOP_SIDEBAR_MODAL]: ShopSidebarModal,
  [MODAL_TYPES.SHOP_WORK_STEPS]: ShopWorkStepsModal,
  [MODAL_TYPES.CAR_PURCHASE_MODAL]: CarPurchaseModal,
}

interface IModalContext {
  showModal: (modalType: string, modalProps?: any) => void
  hideModal: () => void
  modalType?: string
  modalProps: any
  isOpen: boolean
}

//@ts-ignore
const ModalContext = createContext<IModalContext>({})

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState({
    modalType: '',
    modalProps: {},
    isOpen: false,
  })

  const showModal = (modalType: string, modalProps: any = {}) => {
    setState({
      ...state,
      modalType,
      modalProps,
      isOpen: true,
    })
  }

  const hideModal = () => {
    setState({
      ...state,
      // modalProps: {},
      isOpen: false,
    })
  }

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[state.modalType]
    if (!ModalComponent) {
      return null
    }
    return <ModalComponent {...state.modalProps} />
  }

  return (
    <ModalContext.Provider value={{ isOpen: state.isOpen, modalProps: state.modalProps, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
