import React from 'react'
import { Stack, Divider } from '@mui/material'
import PriceRange from './PriceRange'
import FilterAccordion from './FilterAccordion'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const filterData = [
  {
    id: 1,
    title: 'Brand, Model & Trim',
    options: [
      {
        id: 1,
        name: 'Audi',
      },
      {
        id: 2,
        name: 'Mercedes',
      },
      {
        id: 3,
        name: 'Fiat',
      },
      {
        id: 4,
        name: 'Honda',
      },
      {
        id: 5,
        name: 'BMW',
      },
      {
        id: 6,
        name: 'Renault',
      },
    ],
  },
  {
    id: 2,
    title: 'Body Style',
    options: [
      {
        id: 1,
        name: 'SUV',
      },
      {
        id: 2,
        name: 'Sedan',
      },
      {
        id: 3,
        name: 'Truck',
      },
      {
        id: 4,
        name: 'Hatchback',
      },
      {
        id: 5,
        name: 'Coupe',
      },
      {
        id: 6,
        name: 'Wagon',
      },
      {
        id: 7,
        name: 'Wagon',
      },
      {
        id: 8,
        name: 'Minivan',
      },
      {
        id: 9,
        name: 'Convertible',
      },
    ],
  },
  {
    id: 3,
    title: 'Vehicle Class',
    options: [
      {
        id: 1,
        name: 'Economic',
      },
      {
        id: 2,
        name: 'Middle class',
      },
      {
        id: 3,
        name: 'Upper Group',
      },
      {
        id: 4,
        name: 'Minibus',
      },
    ],
  },
  {
    id: 4,
    title: 'Fuel',
    options: [
      {
        id: 1,
        name: 'Diesel',
      },
      {
        id: 2,
        name: 'Gasoline',
      },
    ],
  },
  {
    id: 5,
    title: 'Gearbox',
    options: [
      {
        id: 1,
        name: 'Manual',
      },
      {
        id: 2,
        name: 'Automatic',
      },
    ],
  },
  // {
  //   id: 6,
  //   title: 'Mileage',
  //   options: [
  //     {
  //       id: 1,
  //       name: 'Manual',
  //     },
  //     {
  //       id: 2,
  //       name: 'Automatic',
  //     },
  //   ],
  // },
]

const FilterList = () => {
  return (
    <Stack spacing={2}>
      <PriceRange title={'Rent cost (day)'} />

      {filterData.map((item) => (
        <React.Fragment key={item.id}>
          <Divider />

          <FilterAccordion title={item.title}>
            <FormGroup>
              {item.options.map((item) => (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      sx={{
                        padding: 0,
                        '& .MuiSvgIcon-root': {
                          fontSize: 22,
                        },
                      }}
                    />
                  }
                  label={item.name}
                  sx={{
                    color: 'text.secondary',
                    userSelect: 'none',
                    my: 1,
                    'span': {
                      fontWeight: 500,
                      fontSize: 15,
                      ml: 1,
                    },
                  }}
                />
              ))}
            </FormGroup>
          </FilterAccordion>
        </React.Fragment>
      ))}
    </Stack>
  )
}

export default FilterList
