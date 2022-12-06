import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IDropdownItem {
  children: ReactNode
  handleClick: (e: any) => void
}

const DropdownItem: React.FC<IDropdownItem> = ({ children, handleClick }) => {
  return (
    <Box width={'100%'} px={2} py={1} onClick={(e: any) => handleClick(e)}>
      {children}
    </Box>
  )
}

export default DropdownItem
