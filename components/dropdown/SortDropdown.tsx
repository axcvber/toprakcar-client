import React from 'react'
import { BiSortAlt2 } from 'react-icons/bi'
import { SortValues, useFilterContext } from '../../context/filter/filter-context'
import { Box, } from '@mui/material'
import Dropdown from './Dropdown'
import { useLocale } from '../../hooks/useLocale'

const SortDropdown = () => {
  const { setSortBy, sortBy } = useFilterContext()
  const t = useLocale()

  const sortData = [
    {
      id: 1,
      label: t.filterNav.sortBy.recommended,
      value: SortValues.RECOMMENDED,
    },
    {
      id: 2,
      label: t.filterNav.sortBy.newestInventory,
      value: SortValues.NEWEST_INVENTORY,
    },
    {
      id: 3,
      label: t.filterNav.sortBy.lowestPrice,
      value: SortValues.LOWEST_PRICE,
    },
    {
      id: 4,
      label: t.filterNav.sortBy.highestPrice,
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
