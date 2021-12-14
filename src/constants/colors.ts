export default {
  backgroundColor: '#ffffff',
  textColor: '#252A31',
  inverseTextColor: '#ffffff',
  greyColor: '#EBEFF5',
  greenColor: '#61DEA4',
  redColor: '#F45E6D',
  yellowColor: '#FFE761',
  purpleColor: '#B678FF',
  bottomLineColor: 'rgba(0, 0, 0, 0.1)',
  iconsColor: '#006CFF',
  iconsBorderColor: 'rgba(37, 42, 49, 0.2)',
  lightIconsBorderColor: 'rgba(255, 255, 255, 0.3)',
}

function getRgbFromHex(hexColor: string) {
  const color = hexColor.charAt(0) === '#' ? hexColor.substring(1, 7) : hexColor
  const r = parseInt(color.substring(0, 2), 16) // hexToR
  const g = parseInt(color.substring(2, 4), 16) // hexToG
  const b = parseInt(color.substring(4, 6), 16) // hexToB
  return [r, g, b]
}

export const getColorByBackgroundColor = (
  backgroundColor: string,
  darkColor = '#252A31',
  whiteColor = '#ffffff',
) => {
  if (backgroundColor === '#ffffff') return darkColor
  const [r, g, b] = getRgbFromHex(backgroundColor)
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : whiteColor
}

export const addOpacityToColor = (hexColor: string, opacity: number) => {
  const [r, g, b] = getRgbFromHex(hexColor)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
