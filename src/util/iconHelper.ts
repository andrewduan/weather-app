export const getWeatherIcon = (icon: number): string => {
  const iconUrl = `https://developer.accuweather.com/sites/default/files/${(
    '' + icon
  ).padStart(2, '0')}-s.png`
  return iconUrl
}
