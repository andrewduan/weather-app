export const getDay = (datetime: string): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(datetime);
  return days[d.getDay()];
};

export const isToday = (datetime: string): boolean => {
  const today = new Date();
  const dayToCheck = new Date(datetime);

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
