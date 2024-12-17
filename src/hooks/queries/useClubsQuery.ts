import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import type { ClubsResponse, ClubDetailDataResponse, ClubMemberDataResponse } from '../../types/club';
import { getClubs, getMyClubs, getDetailClub, getPrivateClub, getMemberClub } from '../../apis/club/getClubs';
import { useApiError } from './useApiError';

export const useClubsQuery = () => {

  const { handleError } = useApiError();

  const { data: clubsData, error } = useQuery<ClubsResponse>({
    queryKey: ['clubs'],
    queryFn: getClubs,
    onError: (error: Error) => {
      handleError(error);
    }
  } as UseQueryOptions<ClubsResponse, Error>);

  return { clubsData, error };
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

export const useClubPrivateQuery = (query: string, options?: { enabled?: boolean }) => {
  const { data: clubsData } = useQuery<ClubDetailDataResponse>({
    queryKey: ['query', query],
    queryFn: () => getPrivateClub(query),
    enabled: options?.enabled, // 옵션으로 enabled 추가
  });
  
  return { clubsData };
};

export const useClubMemberQuery = (clubId: string) => {
  const { data: clubsData, refetch } = useQuery<ClubMemberDataResponse>({
    queryKey: ['clubMember', clubId],
    queryFn: () => getMemberClub(clubId)
  });
  
  return { clubsData, refetch };
};