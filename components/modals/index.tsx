import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
interface IModal {
  open: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

const Modal: React.FC<IModal> = ({ open, children, onClose, title }) => {
  const theme = useTheme()
  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      // fullScreen={fullScreen}
      open={open}
      // TransitionComponent={Transition}
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
          top: 18,
          right: 24,
          minWidth: 'auto',
          display: 'flex',
          p: 0.3,
          borderRadius: 2,
        }}
      >
        <IoClose fontSize={22} />
      </Button>
      <DialogTitle sx={{ borderBottom: '1px solid', borderColor: 'divider', fontWeight: 600, color: 'text.primary' }}>
        {title}
      </DialogTitle>
      <DialogContent
        sx={{
          width: '100%',
          padding: '16px 24px !important',
          overflowX: 'hidden',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
