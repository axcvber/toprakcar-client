export const filterEmptyArray = (arr: any) => {
  if (!arr.length) {
    return undefined
  }
  return arr.map((item: any) => item.value)
}
