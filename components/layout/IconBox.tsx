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
  width: '75px',
  height: '75px',
  border: `2px solid ${theme.palette.primary.main}`,
  background: isActive ? theme.palette.primary.main : '#fff',
  borderRadius: 12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  'svg': {
    width: '35px',
    height: '35px',
    fill: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  ...(variant === 'small' && {
    minWidth: '65px',
    width: '65px',
    height: '65px',
    borderRadius: 10,
    'svg': {
      width: '30px',
      height: '30px',
      fill: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  }),
  ...(variant === 'large' && {
    width: '100px',
    height: '100px',
    borderRadius: 20,
    'svg': {
      width: '40px',
      height: '40px',
      fill: isActive ? '#fff' : theme.palette.primary.main,
      color: isActive ? '#fff' : theme.palette.primary.main,
    },
  }),
  ...(isActive && {
    boxShadow: theme.shadows[5],
  }),
  ...(rounded && {
    borderRadius: 50,
    background: theme.palette.primary.main,
    'svg': {
      color: '#fff',
      fill: '#fff',
    },
  }),
}))

export default IconBox
