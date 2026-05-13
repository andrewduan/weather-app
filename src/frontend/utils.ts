export const getWeatherIcon = (icon: number): string => {
  https://www.accuweather.com/assets/images/weather-icons/v2a/1.svg
  return `${import.meta.env.VITE_ACCUWEATHER_ICON_BASE_URL}/${String(icon)}.svg`;
};

export const getDay = (datetime: string): string => {
  const date = new Date(datetime);
  return date.toLocaleDateString(undefined, { weekday: "long" });
};

export const isToday = (datetime: string): boolean => {
  const date = new Date(datetime);
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
};

export const formatTime = (datetime: string): string => {
  return new Date(datetime).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
};
