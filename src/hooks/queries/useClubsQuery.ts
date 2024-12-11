import { useQuery } from '@tanstack/react-query';
import type { ClubsResponse, ClubDetailDataResponse } from '../../types/club';
import { getClubs, getMyClubs, getDetailClub } from '../../apis/club/getClubs';

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

export const useClubDetailQuery = (clubId: string) => {
  const { data: clubsData } = useQuery<ClubDetailDataResponse>({
    queryKey: ['clubId', clubId],
    queryFn: () => getDetailClub(clubId)
  });
  
  return { clubsData };
};