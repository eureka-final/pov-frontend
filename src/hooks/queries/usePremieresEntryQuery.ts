import { useQuery } from '@tanstack/react-query';
import { getPremieresEntry } from '@/apis/premieres/getPremieres';
import { PremiereEntryResponse } from '@/types/premiere';

export const usePremieresEntryQuery = () => {
  const { data: premiereEntryData } = useQuery<PremiereEntryResponse>({
    queryKey: ['premieresEntry'],
    queryFn: getPremieresEntry,
  });

  return { premiereEntryData };
};
