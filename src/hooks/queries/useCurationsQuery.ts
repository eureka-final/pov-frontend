import { useQuery } from '@tanstack/react-query';
import { getCurations, getCurationDetail } from '../../apis/admin/getCurations';
import type { CurationResponse, AdminCurationResponse } from '../../types/curations';

export const useCurationsQuery = () => {
  const { data: curationsData } = useQuery<CurationResponse>({
    queryKey: ['curations'],
    queryFn: () => getCurations(),
  });

  return { curationsData };
};

export const useCurationDetailQuery = (curationId: string) => {
  const { data: curationData } = useQuery<AdminCurationResponse>({
    queryKey: ['curation-detail', curationId],
    queryFn: () => getCurationDetail(curationId),
  });

  return { curationData };
};
