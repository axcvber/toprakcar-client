import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

type OrderType = {
  title: string
  value?: any
}

interface IOrderTable {
  data: Array<OrderType>
}

const OrderTable: React.FC<IOrderTable> = ({ data }) => {
  return (
    <TableContainer
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: 'grey.50',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Table>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.title}
              sx={{
                'td': {
                  borderColor: 'divider',
                  '&:first-child': {
                    borderRight: '1px solid',
                    borderColor: 'divider',
                  },
                },
                '&:last-child': {
                  'td': {
                    borderBottom: 0,
                  },
                },
              }}
            >
              <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>{item.title}</TableCell>
              <TableCell sx={{ fontWeight: 500, color: 'text.secondary' }}>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrderTable
