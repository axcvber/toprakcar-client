import React from 'react'
import Modal from '.'
import { useModal } from '../../hooks/useModal'
import { Markdown } from '../Markdown'

const RentCarInfoModal = () => {
  const { isOpen, hideModal, modalProps } = useModal()

  return (
    <Modal open={isOpen} onClose={hideModal} title={modalProps.title}>
      <Markdown content={modalProps.content} />
    </Modal>
  )
}

export default RentCarInfoModal
