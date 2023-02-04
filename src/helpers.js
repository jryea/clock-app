export function formatTime(inputDate) {
  const date = String(inputDate);
  const dateArr = date.split(' ');
  const formattedTime = dateArr[4].slice(0, 5);
  return formattedTime;
}
