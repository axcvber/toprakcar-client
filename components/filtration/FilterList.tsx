import React from 'react'
import { Stack, Divider } from '@mui/material'
import PriceRange from './PriceRange'
import FilterAccordion from './FilterAccordion'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useFilterContext } from '../../context/filter-context'

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
  const { data, filtered, setFilteredBrands } = useFilterContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredBrands(+event.target.value)
  }

  return (
    <Stack spacing={2}>
      <PriceRange title={'Rent cost (day)'} />
      <Divider />
      <FilterAccordion title={'Brands'}>
        <FormGroup>
          {data?.brands?.data.map((item, inx) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  value={item.id}
                  onChange={handleChange}
                  sx={{
                    padding: 0,
                    '& .MuiSvgIcon-root': {
                      fontSize: 22,
                    },
                  }}
                />
              }
              label={item.attributes?.name}
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
      <Divider />

      <FilterAccordion title={'Vehicle Class'}>
        <FormGroup>
          {data?.vehicleClasses?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.title} />
          ))}
        </FormGroup>
      </FilterAccordion>
      <Divider />

      <FilterAccordion title={'Body Style'}>
        <FormGroup>
          {data?.bodyStyles?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.style} />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Fuel Type'}>
        <FormGroup>
          {data?.fuelTypes?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.type} />
          ))}
        </FormGroup>
      </FilterAccordion>
      <Divider />

      <FilterAccordion title={'Transmission'}>
        <FormGroup>
          {data?.transmissions?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.type} />
          ))}
        </FormGroup>
      </FilterAccordion>
      <Divider />

      <FilterAccordion title={'Color'}>
        <FormGroup>
          {data?.colors?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.name} />
          ))}
        </FormGroup>
      </FilterAccordion>

      {/* {filterData.map((item) => (
        <React.Fragment key={item.id}>
          <Divider />

       
        </React.Fragment>
      ))} */}
    </Stack>
  )
}

const FilterListOption: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          value={label}
          onChange={() => {}}
          sx={{
            padding: 0,
            '& .MuiSvgIcon-root': {
              fontSize: 22,
            },
          }}
        />
      }
      label={label}
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
  )
}

export default FilterList
