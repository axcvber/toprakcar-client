import React, { useState } from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { SortValues, useShopFilterContext } from '../../context/shop-filter/shop-filter-context'
import { Box, Stack, Typography, Divider } from '@mui/material'
import Dropdown from '../dropdown/Dropdown'

const SortDropdown = () => {
  const { setSortBy, sortBy } = useShopFilterContext()
  const sortData = [
    {
      id: 1,
      label: 'Recommended',
      value: SortValues.RECOMMENDED,
    },
    {
      id: 2,
      label: 'Newest Inventory',
      value: SortValues.NEWEST_INVENTORY,
    },
    {
      id: 3,
      label: 'Lowest Price',
      value: SortValues.LOWEST_PRICE,
    },
    {
      id: 4,
      label: 'Highest Price',
      value: SortValues.HIGHEST_PRICE,
    },
  ]

  const onSelectSort = (value: SortValues) => {
    setSortBy(value)
  }

  return (
    <Dropdown
      icon={<BiSortAlt2 />}
      title={sortData.find((item) => item.value === sortBy)?.label || ''}
      menu={[
        ...sortData.map((item) => (
          <Box key={item.id} width={'100%'} px={2} py={1} onClick={() => onSelectSort(item.value)}>
            {item.label}
          </Box>
        )),
      ]}
    />
  )
}

export default SortDropdown
