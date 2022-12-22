import React from 'react'
import { styled } from '@mui/material/styles'
import SVG from 'react-inlinesvg'

type IconBoxVariants = 'small' | 'medium' | 'large'

interface IconBoxProps {
  icon?: string
  isActive?: boolean
  variant?: IconBoxVariants
  rounded?: boolean
}

const IconBox: React.FC<IconBoxProps> = ({ icon, isActive, variant = 'medium', rounded }) => {
  return (
    <StyledBox variant={variant} isActive={isActive} rounded={rounded}>
      <SVG src={icon || ''} />
    </StyledBox>
  )
}

const StyledBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'variant' && prop !== 'rounded',
})<{ isActive?: boolean; variant: IconBoxVariants; rounded?: boolean }>(({ isActive, theme, variant, rounded }) => ({
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
    width: '35px',
    height: '35px',
  },
  ...(variant === 'small' && {
    minWidth: '65px',
    width: '65px',
    height: '65px',
    borderRadius: 10,
    'svg': {
      width: '25px',
      height: '25px',
    },
  }),
  ...(variant === 'large' && {
    width: '100px',
    height: '100px',
    borderRadius: 20,
    'svg': {
      width: '35px',
      height: '35px',
    },
  }),
  ...(isActive && {
    background: theme.palette.primary.main,
    color: '#fff',
    boxShadow: theme.shadows[5],
  }),
  ...(rounded && {
    borderRadius: 50,
    background: theme.palette.primary.main,
    color: '#fff',
  }),
}))

export default IconBox