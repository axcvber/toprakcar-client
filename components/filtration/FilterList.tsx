import React from 'react'
import { Stack, Divider } from '@mui/material'
import RangeSlider from './RangeSlider'
import FilterAccordion from './FilterAccordion'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FilterCheckbox from './FilterCheckbox'
import {
  ShopFilterOptionKeys,
  ShopFilterRangeKeys,
  useShopFilterContext,
} from '../../context/shop-filter/shop-filter-context'

const FilterList = () => {
  const { data, filtered, setFilterOption, setRangeFilter } = useShopFilterContext()

  const handlePriceChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: ShopFilterRangeKeys.PRICE_RANGE,
      value: rangeArr,
      label: `₺ ${rangeArr[0]} - ₺ ${rangeArr[1]}`,
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as ShopFilterOptionKeys,
      checked,
      label: ariaLabel || '',
    })
  }

  return (
    <Stack spacing={2}>
      <RangeSlider title={'Rent cost (day)'} minValue={500} maxValue={5000} handleChange={handlePriceChange} />

      <Divider />

      <FilterAccordion title={'Brands'} selectedCount={filtered.brands.length}>
        <FormGroup>
          {data?.brands?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={ShopFilterOptionKeys.BRANDS}
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
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={ShopFilterOptionKeys.VEHICLE_CLASSES}
                value={item.id}
                label={item.attributes?.title}
                isChecked={!!filtered.vehicleClasses?.find((carClass) => carClass.value === item.id)}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Body Style'} selectedCount={filtered.bodyStyles.length}>
        <FormGroup>
          {data?.bodyStyles?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={ShopFilterOptionKeys.BODY_STYLES}
                value={item.id}
                label={item.attributes?.style}
                isChecked={!!filtered.bodyStyles?.find((style) => style.value === item.id)}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />
      <FilterAccordion title={'Fuel Type'} selectedCount={filtered.fuelTypes.length}>
        <FormGroup>
          {data?.fuelTypes?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={ShopFilterOptionKeys.FUEL_TYPES}
                value={item.id}
                label={item.attributes?.type}
                isChecked={!!filtered.fuelTypes?.find((type) => type.value === item.id)}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Transmission'} selectedCount={filtered.transmissions.length}>
        <FormGroup>
          {data?.transmissions?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={ShopFilterOptionKeys.TRANSMISSIONS}
                value={item.id}
                label={item.attributes?.type}
                isChecked={!!filtered.transmissions?.find((type) => type.value === item.id)}
                handleChange={handleChange}
              />
            </React.Fragment>
          ))}
        </FormGroup>
      </FilterAccordion>
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
