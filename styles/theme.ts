import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          // WebkitTapHighlightColor: 'transparent',
          margin: 0,
          padding: 0,
        },
        // '*::after, *::before': {
        //   boxSizing: 'border-box',
        // },
        body: {
          lineHeight: 1,
        },
        'ol, ul, li': {
          listStyle: 'none',
        },
        'h1,h2,h3,h4,h5,h6': {
          margin: 0,
        },
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FF8A5D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
