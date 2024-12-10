import { useQuery } from '@tanstack/react-query';
import type { ClubsResponse } from '../../types/club';
import { getClubs, getMyClubs } from '../../apis/club/getClubs';

export const useClubsQuery = () => {
  const { data: clubsData } = useQuery<ClubsResponse>({
    queryKey: ['clubs'],
    queryFn: getClubs
  });

  return { clubsData };
};

export const useMyClubsQuery = () => {
  const { data: clubsData } = useQuery<ClubsResponse>({
    queryKey: ['myClubs'],
    queryFn: getMyClubs
  });
  
  return { clubsData };
};