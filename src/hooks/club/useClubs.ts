import { useQueryClient } from '@tanstack/react-query';

import type { ClubsData } from '../../types/club';

export const useClubs = () => {
  const queryClient = useQueryClient();
  const clubsData = queryClient.getQueryData<ClubsData[]>(['clubs']) || []; // 모든 리뷰 캐시된 데이터 설정 및 기본값 설정
  const myClubsData = queryClient.getQueryData<ClubsData[]>(['myClubs']) || []; // 내 리뷰 캐시된 데이터 설정 및 기본값 설정

  return { clubsData, myClubsData };
};
