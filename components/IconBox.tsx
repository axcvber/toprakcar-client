import React from 'react'
import { styled } from '@mui/material/styles'

type IconBoxVariants = 'small' | 'medium' | 'large'

interface IconBoxProps {
  icon: JSX.Element
  isActive?: boolean
  variant?: IconBoxVariants
}

const IconBox: React.FC<IconBoxProps> = ({ icon, isActive, variant = 'medium' }) => {
  return (
    <StyledBox variant={variant} isActive={isActive}>
      {icon}
    </StyledBox>
  )
}

const StyledBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean; variant: IconBoxVariants }>(({ isActive, theme, variant }) => ({
  width: '80px',
  height: '80px',
  border: `2px solid ${theme.palette.primary.main}`,
  background: '#fff',
  borderRadius: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  'svg': {
    fontSize: '35px',
  },
  ...(variant === 'small' && {
    minWidth: '65px',
    width: '65px',
    height: '65px',
    borderRadius: 10,
    'svg': {
      fontSize: '25px',
    },
  }),
  ...(variant === 'large' && {
    width: '100px',
    height: '100px',
    borderRadius: 20,
    'svg': {
      fontSize: '35px',
    },
  }),
  ...(isActive && {
    background: theme.palette.primary.main,
    color: '#fff',
    boxShadow: theme.shadows[5],
  }),
}))

export default IconBox
