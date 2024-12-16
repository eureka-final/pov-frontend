import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PaymentsFormData, PaymentsFormDataResponse } from '../../types/premiere';

export interface EntryParams extends PaymentsFormData {
    premiereId: string;
}

export const postEntry = async ({ premiereId, ...information  } : EntryParams): Promise<PaymentsFormDataResponse> => {
  const response = await axiosInstance.post(
    END_POINTS.PREMIERE_ENTRY(premiereId),
    information
  );
  return response.data;
};

