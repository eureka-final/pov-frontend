import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useApiError } from './useApiError';
import { getDetailPermieres, getPremieres } from '../../apis/premieres/getPremieres';
import { PremieresDetailDataResponse, PremieresResponse } from '../../types/premiere';

export const usePermieresQuery = () => {

  const { handleError } = useApiError();

  const { data: premieresData, error } = useQuery<PremieresResponse>({
    queryKey: ['premieres'],
    queryFn: getPremieres,
    onError: (error: Error) => {
      handleError(error);
    }
  } as UseQueryOptions<PremieresResponse, Error>);

  return { premieresData, error };
};

export const usePermieresDetailQuery = (premiereId: string) => {
  const { data: premieresData } = useQuery<PremieresDetailDataResponse>({
    queryKey: ['premiereId', premiereId],
    queryFn: () => getDetailPermieres(premiereId)
  });
  
  return { premieresData };
};