import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../common/useToast';
import { postPayment, postTemp } from '../../apis/premieres/postPayment';

export const useTempPaymentMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const tempPaymentMutation = useMutation({
    mutationFn: postTemp,
    onSuccess: (data) => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['temp'] });
      console.log('성공적으로 전송:', data);
    },
    onError: () => {
      // 에러 핸들링
      createToast('결제에 실패했어요. 잠시 후 다시 시도해주세요.');
    },
  });

  return tempPaymentMutation;
};

export const usePaymentMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const paymentMutation = useMutation({
    mutationFn: postPayment,
    onSuccess: (data) => {
      // 변이 성공 시 캐시 무효화로 리뷰 데이터 갱신
      queryClient.invalidateQueries({ queryKey: ['payment'] });
      console.log('결제 성공적으로 전송:', data);
    },
    onError: () => {
      // 에러 핸들링
      createToast('결제에 실패했어요. 잠시 후 다시 시도해주세요.');
    },
  });

  return paymentMutation;
};
