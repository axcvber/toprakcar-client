import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IDropdownItem {
  children: ReactNode
  handleClick: () => void
}

const DropdownItem: React.FC<IDropdownItem> = ({ children, handleClick }) => {
  return (
    <Box width={'100%'} px={2} py={1} onClick={(e) => handleClick()}>
      {children}
    </Box>
  )
}

export default DropdownItem
