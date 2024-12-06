import { useQuery } from '@tanstack/react-query';
import type { ClubsData } from '../../types/club';
import { getClubs, getMyClubs } from '../../apis/club/getClubs';

export const useClubsQuery = () => {
  const { data: clubsData } = useQuery<ClubsData[]>({
    queryKey: ['clubs'],
    queryFn: getClubs
  });

  return { clubsData };
};

export const useMyClubsQuery = () => {
  const { data: clubsData } = useQuery<ClubsData[]>({
    queryKey: ['myClubs'],
    queryFn: getMyClubs
  });
  
  return { clubsData };
};