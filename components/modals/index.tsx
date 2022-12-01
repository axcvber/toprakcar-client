import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { Box } from '@mui/material'
import { GrClose } from 'react-icons/gr'
import { IconButton } from '@mui/material'
import { IoClose } from 'react-icons/io5'
interface IModal {
  open: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

const Modal: React.FC<IModal> = ({ open, children, onClose, title }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby='responsive-dialog-title'
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
        },
      }}
    >
      <Button
        onClick={onClose}
        variant='outlined'
        color='primary'
        size='small'
        sx={{
          position: 'absolute',
          top: 15,
          right: 15,
          minWidth: 'auto',
          display: 'flex',
          p: 0.3,
          borderRadius: 2,
        }}
      >
        <IoClose fontSize={22} />
      </Button>
      <DialogTitle id='responsive-dialog-title' sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onClose} autoFocus>
          Search
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
