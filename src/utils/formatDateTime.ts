export function formatDateTime(inputDate: string): string {
  const targetDate = new Date(inputDate);
  const targetDateKST = new Date(targetDate.getTime() + 9 * 60 * 60 * 1000); // 9시간(9 * 60 * 60 * 1000ms)을 더함

  const currentDate = new Date();
  const currentDateKST = new Date(currentDate.getTime() + 9 * 60 * 60 * 1000); // 현재 시간도 한국 시각으로 변환

  const diffMs = currentDateKST.getTime() - targetDateKST.getTime();

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else {
    const year = targetDateKST.getFullYear();
    const month = String(targetDateKST.getMonth() + 1).padStart(2, '0');
    const day = String(targetDateKST.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }
}

export function formatDate(inputDate: string): string {
  const [year, month] = inputDate.split('-'); // 날짜를 '-' 기준으로 나눔
  return `${year}.${month}`; // 년도와 월을 조합하여 반환
}
