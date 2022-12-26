import React, { useEffect } from 'react'
import { Stack, Divider, Grid } from '@mui/material'
import { FilterOptionKeys, FilterRangeKeys, useFilterContext } from '../../context/filter/filter-context'
import StatusToggle from '../filtration/StatusToggle'
import RangeSlider from '../filtration/RangeSlider'
import FilterAccordion from '../filtration/FilterAccordion'
import FilterCheckbox from '../filtration/FilterCheckbox'
import FormGroup from '@mui/material/FormGroup'
import ColorsFilter from '../filtration/ColorsFilter'
import { useFindAvailableShopFiltersQuery, useGetShopFiltersLazyQuery } from '../../generated'
import { useRouter } from 'next/router'
import { helperFilterSet } from '../../utils/helperFilterSet'
import { useLocale } from '../../hooks/useLocale'

const ShopFilter = () => {
  const { setRangeFilter, setFilterOption, filtered } = useFilterContext()
  const router = useRouter()
  const t = useLocale()

  const { data: availableFilters, loading: finding } = useFindAvailableShopFiltersQuery({
    variables: { locale: router.locale },
  })
  const [getFilters, { loading, data }] = useGetShopFiltersLazyQuery()

  // const [getModels, { loading: modelsLoading, data: models }] = useGetModelsLazyQuery()

  useEffect(() => {
    if (availableFilters) {
      const brandsId = availableFilters.salesCars?.data.map((item) => item.attributes?.brand?.data?.id)
      const bodyStylesId = availableFilters.salesCars?.data.map((item) => item.attributes?.body_style?.data?.id)
      const fuelTypesId = availableFilters.salesCars?.data.map((item) => item.attributes?.fuel_type?.data?.id)
      const transmissionsId = availableFilters.salesCars?.data.map((item) => item.attributes?.transmission?.data?.id)
      const exteriorColorsId = availableFilters.salesCars?.data.map((item) => item.attributes?.exterior_color?.data?.id)
      const interiorColorsId = availableFilters.salesCars?.data.map((item) => item.attributes?.interior_color?.data?.id)
      getFilters({
        variables: {
          brands: helperFilterSet(brandsId),
          bodyStyles: helperFilterSet(bodyStylesId),
          fuelTypes: helperFilterSet(fuelTypesId),
          transmissions: helperFilterSet(transmissionsId),
          exteriorColors: helperFilterSet(exteriorColorsId),
          interiorColors: helperFilterSet(interiorColorsId),
          locale: router.locale,
        },
      })
    }
  }, [availableFilters])

  const handlePriceChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: FilterRangeKeys.PRICE_RANGE,
      value: rangeArr,
      label: `₺ ${rangeArr[0].toLocaleString()} - ₺ ${rangeArr[1].toLocaleString()}`,
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as FilterOptionKeys,
      checked,
      label: ariaLabel || '',
    })
  }

  const handleExteriorColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as FilterOptionKeys,
      checked,
      label: `${t.filter.exteriorColor}: ${ariaLabel}`,
    })
  }

  const handleInteriorColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, ariaLabel, name } = event.target
    setFilterOption({
      value,
      filterKey: name as FilterOptionKeys,
      checked,
      label: `${t.filter.interiorColor}: ${ariaLabel}`,
    })
  }

  const handleMileageChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: FilterRangeKeys.MILEAGE_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]} km`,
    })
  }

  const handleYearChange = (rangeArr: Array<number>) => {
    setRangeFilter({
      filterKey: FilterRangeKeys.YEAR_RANGE,
      value: rangeArr,
      label: `${rangeArr[0]} - ${rangeArr[1]}`,
    })
  }

  // const handleShowModels = (id?: string | null) => {
  //   if (id) {
  //     getModels({
  //       variables: {
  //         brandId: id,
  //         locale: router.locale,
  //       },
  //     })
  //   }
  // }

  return (
    <Stack spacing={2}>
      <StatusToggle />
      <RangeSlider title={t.filter.carCost} minValue={1000} maxValue={700000} handleChange={handlePriceChange} />

      <Divider />

      <FilterAccordion title={t.filter.brands} isLoading={finding || loading} selectedCount={filtered.brands.length}>
        <FormGroup>
          {data?.brands?.data.map((item) => {
            const isChecked = !!filtered.brands?.find((brand) => brand.value === item.id)
            return (
              <React.Fragment key={item.id}>
                <FilterCheckbox
                  name={FilterOptionKeys.BRANDS}
                  value={item.id}
                  label={item.attributes?.name}
                  isChecked={isChecked}
                  handleChange={handleChange}
                />
                {/* {isChecked && <span onClick={() => handleShowModels(item.id)}>show model</span>} */}
              </React.Fragment>
            )
          })}
          {/* {models?.models?.data.map((item) => (
            <div key={item.id}>{item.attributes?.model}</div>
          ))} */}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={t.filter.bodyStyle} isLoading={finding || loading} selectedCount={filtered.bodyStyles.length}>
        <FormGroup>
          {data?.bodyStyles?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.BODY_STYLES}
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

      <FilterAccordion title={t.filter.fuelType} isLoading={finding || loading} selectedCount={filtered.fuelTypes.length}>
        <FormGroup>
          {data?.fuelTypes?.data.map((item) => (
            <FilterCheckbox
              key={item.id}
              value={item.id}
              name={FilterOptionKeys.FUEL_TYPES}
              label={item.attributes?.type}
              isChecked={!!filtered.fuelTypes?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion
        title={t.filter.transmission}
        isLoading={finding || loading}
        selectedCount={filtered.transmissions.length}
      >
        <FormGroup>
          {data?.transmissions?.data.map((item) => (
            <FilterCheckbox
              key={item.id}
              value={item.id}
              name={FilterOptionKeys.TRANSMISSIONS}
              label={item.attributes?.type}
              isChecked={!!filtered.transmissions?.find((type) => type.value === item.id)}
              handleChange={handleChange}
            />
          ))}
        </FormGroup>
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={t.filter.mileage}>
        <RangeSlider minValue={0} maxValue={300000} handleChange={handleMileageChange} />
      </FilterAccordion>

      <Divider />

      <FilterAccordion title={t.filter.year}>
        <RangeSlider minValue={2006} maxValue={2022} handleChange={handleYearChange} />
      </FilterAccordion>

      <Divider />

      <FilterAccordion
        title={t.filter.exteriorColor}
        isLoading={finding || loading}
        selectedCount={filtered.exteriorColor.length}
      >
        <FormGroup>
          <Grid container spacing={3}>
            {data?.exterior_color?.data.map((item) => (
              <ColorsFilter
                key={item.id}
                value={item.id}
                name={FilterOptionKeys.EXTERIOR_COLOR}
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

      <FilterAccordion
        title={t.filter.interiorColor}
        isLoading={finding || loading}
        selectedCount={filtered.interiorColor.length}
      >
        <FormGroup>
          <Grid container spacing={3}>
            {data?.interior_color?.data.map((item) => (
              <ColorsFilter
                key={item.id}
                value={item.id}
                name={FilterOptionKeys.INTERIOR_COLOR}
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
