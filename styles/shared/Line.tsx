import { styled } from '@mui/material/styles'

const Line = styled('div')(({ theme }) => ({
  width: '50px',
  height: '4px',
  background: theme.palette.primary.main,
  borderRadius: '50px',
}))

export default Line
