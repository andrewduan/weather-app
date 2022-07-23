export const getDay = (datetime: Date): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[datetime.getDay()];
};

export const isToday = (dayToCheck: Date): boolean => {
  const today = new Date();

  return (
    today.getFullYear() === dayToCheck.getFullYear() &&
    today.getMonth() === dayToCheck.getMonth() &&
    today.getDate() === dayToCheck.getDate()
  );
};

export const isDaytime = (): boolean => {
  const now = new Date().getHours();
  return now >= 7 && now <= 19;
};
