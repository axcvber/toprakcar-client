import React from 'react'
import { Stack, Divider, Typography } from '@mui/material'
import RangeSlider from './RangeSlider'
import FilterAccordion from './FilterAccordion'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { FilterKeys, useFilterContext } from '../../context/filter-context'
import ColorsFilter from './ColorsFilter'
import StatusToggle from './StatusToggle'
import FilterCheckbox from './FIlterCheckbox'

const FilterList: React.FC<{ forShopPage?: boolean }> = ({ forShopPage }) => {
  const { data, filtered, setFilter, setRangeFilter, deleteFilter } = useFilterContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilter({
      value,
      fieldName: name as FilterKeys,
      checked,
      label: ariaLabel || '',
    })
  }

  const handlePriceChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      fieldName: FilterKeys.PRICE_RANGE,
      value: rangeArr,
      label: `₺ ${rangeArr[0]} - ₺ ${rangeArr[1]}`,
    })
  }

  const handleMileageChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      fieldName: FilterKeys.MILEAGE_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]} km`,
    })
  }

  const handleYearChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      fieldName: FilterKeys.YEAR_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]}`,
    })
  }

  if (forShopPage) {
    return (
      <Stack spacing={2}>
        <StatusToggle />
        <RangeSlider title={'Car cost'} minValue={500} maxValue={500000} handleChange={handlePriceChange} />

        <FilterAccordion title={'All Brands'} selectedCount={filtered.brands.length}>
          <FormGroup>
            {data?.brands?.data.map((item) => (
              <React.Fragment key={item.id}>
                <FilterCheckbox
                  name={FilterKeys.BRANDS}
                  value={item.id}
                  label={item.attributes?.name}
                  isChecked={!!filtered.brands?.find((brand) => brand.value === item.id)}
                  handleChange={handleChange}
                />
              </React.Fragment>
            ))}
          </FormGroup>
        </FilterAccordion>

        <FilterAccordion title={'Body Style'} selectedCount={filtered.bodyStyles.length}>
          <FormGroup>
            {data?.bodyStyles?.data.map((item) => (
              <FilterListOption
                key={item.id}
                value={item.id}
                name={FilterKeys.BODY_STYLES}
                label={item.attributes?.style}
                isChecked={!!filtered.bodyStyles?.find((style) => style.value === item.id)}
                handleChange={handleChange}
              />
            ))}
          </FormGroup>
        </FilterAccordion>

        <FilterAccordion title={'Mileage'} selectedCount={filtered.mileageRange.length}>
          <RangeSlider minValue={0} maxValue={300000} handleChange={handleMileageChange} />
        </FilterAccordion>

        <FilterAccordion title={'Year'} selectedCount={filtered.yearRange.length}>
          <RangeSlider minValue={2006} maxValue={2022} handleChange={handleYearChange} />
        </FilterAccordion>
      </Stack>
    )
  }

  return (
    <Stack spacing={2}>
      <RangeSlider title={'Rent cost (day)'} minValue={500} maxValue={500000} handleChange={handlePriceChange} />
      <Divider />

      <FilterAccordion title={'All Brands'} selectedCount={filtered.brands.length}>
        <FormGroup>
          {data?.brands?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterKeys.BRANDS}
                value={item.id}
                label={item.attributes?.name}
                isChecked={!!filtered.brands?.find((brand) => brand.value === item.id)}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        </FormGroup>
      </FilterAccordion>
      <Divider />

      <FilterAccordion title={'Vehicle Class'} selectedCount={filtered.vehicleClasses.length}>
        <FormGroup>
          {data?.vehicleClasses?.data.map((item) => (
            <FilterListOption
              key={item.id}
              value={item.id}
              name={FilterKeys.VEHICLE_CLASSES}
              label={item.attributes?.title}
              isChecked={!!filtered.vehicleClasses?.find((vehicleClass) => vehicleClass.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <Divider />

      <FilterAccordion title={'Body Style'} selectedCount={filtered.bodyStyles.length}>
        <FormGroup>
          {data?.bodyStyles?.data.map((item) => (
            <FilterListOption
              key={item.id}
              value={item.id}
              name={FilterKeys.BODY_STYLES}
              label={item.attributes?.style}
              isChecked={!!filtered.bodyStyles?.find((style) => style.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Fuel Type'} selectedCount={filtered.fuelTypes.length}>
        <FormGroup>
          {data?.fuelTypes?.data.map((item) => (
            <FilterListOption
              key={item.id}
              value={item.id}
              name={FilterKeys.FUEL_TYPES}
              label={item.attributes?.type}
              isChecked={!!filtered.fuelTypes?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Transmission'} selectedCount={filtered.transmissions.length}>
        <FormGroup>
          {data?.transmissions?.data.map((item) => (
            <FilterListOption
              key={item.id}
              value={item.id}
              name={FilterKeys.TRANSMISSIONS}
              label={item.attributes?.type}
              isChecked={!!filtered.transmissions?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Colors'} selectedCount={filtered.colors.length}>
        <ColorsFilter data={data?.colors?.data} handleChange={handleChange} />
        {/* <FormGroup>
          {data?.transmissions?.data.map((item) => (
            <FilterListOption
              key={item.id}
              value={item.id}
              name={FilterKeys.TRANSMISSIONS}
              label={item.attributes?.type}
              isChecked={!!filtered.transmissions?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup> */}
      </FilterAccordion>

      {/* <FilterAccordion title={'Color'}>
        <FormGroup>
          {data?.colors?.data.map((item, inx) => (
            <FilterListOption key={item.id} label={item.attributes?.name} />
          ))}
        </FormGroup>
      </FilterAccordion> */}
    </Stack>
  )
}

interface IFilterListOption {
  value?: any
  name: string
  label?: string
  isChecked: boolean
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterListOption: React.FC<IFilterListOption> = ({ value, name, label, isChecked, handleChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={isChecked}
          value={value}
          onChange={handleChange}
          inputProps={{ 'aria-label': label }}
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
