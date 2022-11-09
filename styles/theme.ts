import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
let theme = createTheme({
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          textTransform: 'none',
          ...(ownerState.size === 'small' && {
            borderRadius: '5px',
          }),
          ...(ownerState.size === 'medium' && {
            borderRadius: '10px',
          }),
          ...(ownerState.size === 'large' && {
            borderRadius: '8px',
          }),
          ...(ownerState.variant === 'contained' && {
            boxShadow: 'none',
          }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              color: '#fff',
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'inherit' && {
              background: theme.palette.background.paper,
            }),

          // '&:focus': {
          //   color: 'rgba(0, 0, 0, 0.87)',
          //   backgroundColor: 'rgba(0, 0, 0, 0.87)',
          //   // opacity: 0.8,
          // },
          // ...(ownerState.variant === 'outlined' &&
          // {
          //   backgroundColor: '#202020',
          //   color: '#fff',
          // }),
          // ...(ownerState.variant === 'contained' &&
          // {
          //   backgroundColor: '#202020',
          //   color: '#fff',
          // }),
        }),
      },
    },
  },
  palette: {
    primary: {
      main: '#FF8A5D',
    },
    secondary: {
      main: '#498B8F',
    },
    background: {
      default: '#FAFAFA',
      paper: '#F2F2F2',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: '#FFEF44',
    },
    success: {
      main: '#3EFF24',
    },
    text: {
      primary: '#333333',
      secondary: '#777777',
      disabled: '#8D8E90',
    },
    divider: '#E5E5E9',
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
})

theme.shadows.push('0px 0px 4px 1px rgba(0,0,0,0.1)')

theme = responsiveFontSizes(theme)

export default theme
