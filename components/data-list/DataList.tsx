import React, { ReactNode } from 'react'
import { Grid } from '@mui/material'
import ErrorState from './ErrorState'
import EmptyState from './EmptyState'

interface IDataList {
  children: ReactNode
  isEmpty: boolean
  isError: boolean
}

const DataList: React.FC<IDataList> = ({ isEmpty, isError, children }) => {
  if (isError) {
    return <ErrorState />
  }

  if (isEmpty) {
    return <EmptyState />
  }

  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  )
}

export default DataList
