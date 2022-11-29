import { createTheme, responsiveFontSizes, experimental_sx as sx } from '@mui/material/styles'
import { red } from '@mui/material/colors'

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    extra: true
  }
}

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
          counterReset: 'li',
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
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { size: 'extra' },
          style: {
            fontSize: '16px',
            paddingTop: '11px',
            paddingBottom: '11px',
          },
        },
      ],
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          textTransform: 'none',
          borderRadius: '10px',
          fontWeight: 600,
          // ...(ownerState.size === 'small' && {
          //   borderRadius: '5px',
          // }),
          // ...(ownerState.size === 'medium' && {
          //   borderRadius: '10px',
          // }),
          // ...(ownerState.size === 'large' && {
          //   borderRadius: '8px',
          // }),

          // ...(ownerState.variant === 'contained' &&
          //   ownerState.color === 'primary' &&
          //   {
          //   }),

          ...(ownerState.variant === 'text' && {
            paddingLeft: '16px',
            paddingRight: '16px',
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
    contrastThreshold: 2,
    primary: {
      main: '#FF8A5D',
      dark: '#EA7F55',
    },
    secondary: {
      main: '#498B8F',
    },
    background: {
      default: '#FAFAFA',
      // paper: '#F2F2F2',
      paper: '#fff',
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
    action: {
      hoverOpacity: 0.1,
    },
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
