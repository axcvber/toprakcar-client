import React from 'react'
import { Stack, Pagination } from '@mui/material'

interface IPaginator {
  pageCount: number | undefined
  page: number | undefined
  totalCount: number | undefined
  handleChange: (event: React.ChangeEvent<unknown>, selectedPage: number) => void
}

const Paginator: React.FC<IPaginator> = ({ page, pageCount, totalCount, handleChange }) => {
  if (!totalCount || totalCount <= 20) {
    return null
  }
  return (
    <Stack my={5} alignItems='center'>
      <Pagination
        color='primary'
        shape='rounded'
        onChange={handleChange}
        page={page}
        count={pageCount}
        sx={{
          '& .MuiButtonBase-root': {
            '&:not(.Mui-selected)': {
              border: '1px solid',
              borderColor: 'grey.400',
              color: 'text.secondary',
              background: '#fff',
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            },
            fontWeight: 500,
          },
        }}
      />
    </Stack>
  )
}

export default Paginator
