export const getTodayDate = () => {
  const today = new Date();
  const formattedDate = today
    .toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\. /g, '-')
    .replace('.', '');

  return formattedDate;
};
