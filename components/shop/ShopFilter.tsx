import React from 'react'
import { Stack, Divider, Grid } from '@mui/material'
import {
  ShopFilterOptionKeys,
  ShopFilterRangeKeys,
  useShopFilterContext,
} from '../../context/shop-filter/shop-filter-context'
import StatusToggle from '../filtration/StatusToggle'
import RangeSlider from '../filtration/RangeSlider'
import FilterAccordion from '../filtration/FilterAccordion'
import FilterCheckbox from '../filtration/FilterCheckbox'
import FormGroup from '@mui/material/FormGroup'
import ColorsFilter from '../filtration/ColorsFilter'

const ShopFilter = () => {
  const { data, setRangeFilter, setFilterOption, filtered } = useShopFilterContext()

  const handlePriceChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: ShopFilterRangeKeys.PRICE_RANGE,
      value: rangeArr,
      label: `₺ ${rangeArr[0].toLocaleString()} - ₺ ${rangeArr[1].toLocaleString()}`,
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

  const handleExteriorColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as ShopFilterOptionKeys,
      checked,
      label: `Exterior: ${ariaLabel}`,
    })
  }

  const handleInteriorColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as ShopFilterOptionKeys,
      checked,
      label: `Interior: ${ariaLabel}`,
    })
  }

  const handleMileageChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: ShopFilterRangeKeys.MILEAGE_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]} km`,
    })
  }

  const handleYearChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: ShopFilterRangeKeys.YEAR_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]}`,
    })
  }

  return (
    <Stack spacing={2}>
      <StatusToggle />
      <RangeSlider title={'Car cost'} minValue={1000} maxValue={700000} handleChange={handlePriceChange} />

      <Divider />

      <FilterAccordion title={'All Brands'} selectedCount={filtered.brands.length}>
        <FormGroup>
          {data?.brands?.data.map((item) => {
            const isChecked = !!filtered.brands?.find((brand) => brand.value === item.id)
            return (
              <React.Fragment key={item.id}>
                <FilterCheckbox
                  name={ShopFilterOptionKeys.BRANDS}
                  value={item.id}
                  label={item.attributes?.name}
                  isChecked={isChecked}
                  handleChange={handleChange}
                />
                {isChecked && <span>show model</span>}
              </React.Fragment>
            )
          })}
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
                isChecked={!!filtered.bodyStyles?.find((brand) => brand.value === item.id)}
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
            <FilterCheckbox
              key={item.id}
              value={item.id}
              name={ShopFilterOptionKeys.FUEL_TYPES}
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
            <FilterCheckbox
              key={item.id}
              value={item.id}
              name={ShopFilterOptionKeys.TRANSMISSIONS}
              label={item.attributes?.type}
              isChecked={!!filtered.transmissions?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Mileage'}>
        <RangeSlider minValue={0} maxValue={300000} handleChange={handleMileageChange} />
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Year'}>
        <RangeSlider minValue={2006} maxValue={2022} handleChange={handleYearChange} />
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Exterior Color'} selectedCount={filtered.exteriorColor.length}>
        <FormGroup>
          <Grid container spacing={3}>
            {data?.exterior_color?.data.map((item) => (
              <ColorsFilter
                key={item.id}
                value={item.id}
                name={ShopFilterOptionKeys.EXTERIOR_COLOR}
                label={item.attributes?.name}
                color={item.attributes?.color}
                isChecked={!!filtered.exteriorColor?.find((type) => type.value === item.id)}
                handleChange={handleExteriorColorChange}
              />
            ))}
          </Grid>
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={'Interior Color'} selectedCount={filtered.interiorColor.length}>
        <FormGroup>
          <Grid container spacing={3}>
            {data?.interior_color?.data.map((item) => (
              <ColorsFilter
                key={item.id}
                value={item.id}
                name={ShopFilterOptionKeys.INTERIOR_COLOR}
                label={item.attributes?.name}
                color={item.attributes?.color}
                isChecked={!!filtered.interiorColor?.find((type) => type.value === item.id)}
                handleChange={handleInteriorColorChange}
              />
            ))}
          </Grid>
        </FormGroup>
      </FilterAccordion>
    </Stack>
  )
}

export default ShopFilter
