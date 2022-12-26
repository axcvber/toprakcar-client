import * as React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'
interface IModal {
  open: boolean
  onClose: () => void
  children: ReactNode
  title: string
}

const Modal: React.FC<IModal> = ({ open, children, onClose, title }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='responsive-dialog-title'
      sx={{
        '& .MuiPaper-root': {
          borderRadius: 4,
        },
      }}
    >
      <Stack
        direction='row'
        px={3}
        py={2}
        alignItems='center'
        justifyContent={'space-between'}
        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}
        spacing={3}
      >
        <Typography variant='h5' fontWeight={600} color='text.primary'>
          {title}
        </Typography>
        <Button
          onClick={onClose}
          variant='outlined'
          color='primary'
          size='small'
          sx={{
            minWidth: 'auto',
            display: 'flex',
            p: 0.3,
            borderRadius: 2,
          }}
        >
          <IoClose fontSize={22} />
        </Button>
      </Stack>
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
