import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PaymentsFormDataResponse, EntryFormData } from '../../types/premiere';

export interface EntryCancelParams extends EntryFormData {
    premiereId: string;
    orderId: string;
}

export const deleteEntry = async ({ premiereId, ...information  } : EntryCancelParams): Promise<PaymentsFormDataResponse> => {
  const response = await axiosInstance.delete(
    END_POINTS.PREMIERE_CANCEL_ENTRY(premiereId),
    {
      data: information,
    }
  );
  return response.data;
};