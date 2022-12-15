import React, { useState, createContext, useContext, ReactChild } from 'react'
import SearchModal from '../components/modals/SearchModal'

export enum MODAL_TYPES {
  SEARCH_MODAL = 'SEARCH_MODAL',
  RENT_INFO_MODAL = 'RENT_INFO_MODAL',
  SALE_CAR_INFO = 'SEARCH_MODAL',
  SHOP_STEPS = 'SHOP_STEPS',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.SEARCH_MODAL]: SearchModal,
}

interface IModalContext {
  showModal: (modalType: string) => void
  hideModal: () => void
  modalType?: string
  isOpen: boolean
}

//@ts-ignore
const ModalContext = createContext<IModalContext>({})

const ModalProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
  const [state, setState] = useState({
    modalType: '',
    isOpen: false,
  })

  const showModal = (modalType: string) => {
    setState({
      ...state,
      modalType,
      isOpen: true,
    })
  }

  const hideModal = () => {
    setState({
      ...state,
      isOpen: false,
    })
  }

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[state.modalType]
    if (!ModalComponent) {
      return null
    }
    return <ModalComponent />
  }

  return (
    <ModalContext.Provider value={{ isOpen: state.isOpen, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
