import { axiosInstance } from '../axiosInstance';
import { END_POINTS } from '../../constants/api';
import { PaymentsFormData, PaymentsFormDataResponse, EntryFormData } from '../../types/premieres';

interface EntryParams extends PaymentsFormData {
    premiereId: string;
}

interface EntryCancelParams extends EntryFormData {
    premiereId: string;
    orderId: string;
}

export const postEntry = async ({ premiereId, ...information  } : EntryParams): Promise<PaymentsFormDataResponse> => {
  const response = await axiosInstance.post(
    END_POINTS.PREMIERE_ENTRY(premiereId),
    information
  );
  return response.data;
};

export const deleteCancelEntry = async ({ premiereId, ...information  } : EntryCancelParams): Promise<PaymentsFormDataResponse> => {
  const response = await axiosInstance.delete(
    END_POINTS.PREMIERE_CANCEL_ENTRY(premiereId),
    {
      data: information,
    }
  );
  return response.data;
};