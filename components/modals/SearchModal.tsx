import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import Search from '../Search'

const SearchModal = () => {
  const { isOpen, hideModal, showModal } = useModal()
  return (
    <Modal open={isOpen} onClose={hideModal} title='Ride Details'>
      <Search forModal />
    </Modal>
  )
}

export default SearchModal
