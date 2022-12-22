export const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

export const passportRegExp = /^(?!^0+$)[a-zA-Z0-9]{6,9}$/

export const checkTcNum = (value: any) => {
  value = value.toString()
  let isEleven = /^[0-9]{11}$/.test(value)
  let totalX = 0
  for (let i = 0; i < 10; i++) {
    totalX += Number(value.substr(i, 1))
  }
  let isRuleX = totalX % 10 == value.substr(10, 1)
  let totalY1 = 0
  let totalY2 = 0
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(value.substr(i, 1))
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(value.substr(i, 1))
  }
  let isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0)
  return isEleven && isRuleX && isRuleY
}
