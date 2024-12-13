import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useApiError } from './useApiError';
import { getPremieres } from '../../apis/premieres/getPremieres';
import { PremieresResponse } from '../../types/premieres';

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