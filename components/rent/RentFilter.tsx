import React, { useEffect } from 'react'
import { Stack, Divider } from '@mui/material'
import RangeSlider from '../filtration/RangeSlider'
import FilterAccordion from '../filtration/FilterAccordion'
import FormGroup from '@mui/material/FormGroup'
import FilterCheckbox from '../filtration/FilterCheckbox'
import { FilterOptionKeys, FilterRangeKeys, useFilterContext } from '../../context/filter/filter-context'
import { useFindAvailableRentFiltersQuery, useGetRentFiltersLazyQuery } from '../../generated'
import { helperFilterSet } from '../../utils/helperFilterSet'
import { useRouter } from 'next/router'
import { useLocale } from '../../hooks/useLocale'

const RentFilter = () => {
  const { filtered, setFilterOption, setRangeFilter } = useFilterContext()
  const router = useRouter()
  const t = useLocale()

  const { data: availableFilters, loading: finding } = useFindAvailableRentFiltersQuery({
    variables: { locale: router.locale },
  })
  const [getFilters, { loading, data }] = useGetRentFiltersLazyQuery()

  useEffect(() => {
    if (availableFilters) {
      const brandsId = availableFilters.rentCars?.data.map((item) => item.attributes?.brand?.data?.id)
      const vehicleClassId = availableFilters.rentCars?.data.map((item) => item.attributes?.vehicle_class?.data?.id)
      const bodyStylesId = availableFilters.rentCars?.data.map((item) => item.attributes?.body_style?.data?.id)
      const fuelTypesId = availableFilters.rentCars?.data.map((item) => item.attributes?.fuel_type?.data?.id)
      const transmissionsId = availableFilters.rentCars?.data.map((item) => item.attributes?.transmission?.data?.id)
      getFilters({
        variables: {
          brands: helperFilterSet(brandsId),
          vehicleClasses: helperFilterSet(vehicleClassId),
          bodyStyles: helperFilterSet(bodyStylesId),
          fuelTypes: helperFilterSet(fuelTypesId),
          transmissions: helperFilterSet(transmissionsId),
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

  return (
    <Stack spacing={2}>
      <RangeSlider title={t.filter.rentCost} minValue={500} maxValue={5000} handleChange={handlePriceChange} />

      <Divider />

      <FilterAccordion title={t.filter.brands} isLoading={finding || loading} selectedCount={filtered.brands.length}>
        <FormGroup>
          {data?.brands?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.BRANDS}
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

      <FilterAccordion
        title={t.filter.vehicleClass}
        isLoading={finding || loading}
        selectedCount={filtered.vehicleClasses.length}
      >
        <FormGroup>
          {data?.vehicleClasses?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.VEHICLE_CLASSES}
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

      <FilterAccordion title={t.filter.bodyStyle} isLoading={finding || loading} selectedCount={filtered.bodyStyles.length}>
        <FormGroup>
          {data?.bodyStyles?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.BODY_STYLES}
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
      <FilterAccordion title={t.filter.fuelType} isLoading={finding || loading} selectedCount={filtered.fuelTypes.length}>
        <FormGroup>
          {data?.fuelTypes?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.FUEL_TYPES}
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

      <FilterAccordion
        title={t.filter.transmission}
        isLoading={finding || loading}
        selectedCount={filtered.transmissions.length}
      >
        <FormGroup>
          {data?.transmissions?.data.map((item) => (
            <React.Fragment key={item.id}>
              <FilterCheckbox
                name={FilterOptionKeys.TRANSMISSIONS}
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

export default RentFilter
