export const helperFilterSet = (availableFilters: any): string[] | undefined => {
  if (!availableFilters.length) {
    return undefined
  }
  return Array.from(new Set(availableFilters))
}
