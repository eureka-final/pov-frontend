import { useEffect, useRef, useState } from 'react';
import { PremiereContentSection, PremiereBodyImage } from './index.style';
import { Button } from 'pov-design-system';
import { useNavigate, useParams } from 'react-router-dom';
import { useEntryMutation, useCancelEntryMutation } from '../../../hooks/queries/usePermiereMutation';
import { usePermieresDetailQuery } from '../../../hooks/queries/usePermieresQuery';

const Index = () => {
  const navigate = useNavigate();
  const { premiereId } = useParams<{ premiereId: string }>();
  const { premieresData } = usePermieresDetailQuery(premiereId!);

  //@ts-ignore
  const [orderId, setOrderId] = useState<string | null>(null);
  const orderIdRef = useRef<string | null>(null);

  const entryMutation = useEntryMutation();
  const cancelEntryMutation = useCancelEntryMutation();
  const isCanceling = useRef(false); // 중복 요청 방지 플래그

  const checkEntry = () => {
    const requestData = {
      amount: 50000,
      quantity: 1,
    };
    entryMutation.mutate(
      { premiereId: premiereId!, ...requestData },
      {
        onSuccess: (data) => {
          const newOrderId = data.data.orderId;
          setOrderId(newOrderId);
          orderIdRef.current = newOrderId;
          navigate(`/premieres/${premiereId}/payments/${newOrderId}`);
        },
      }
    );
  };

  useEffect(() => {
    const handlePopState = () => {
      console.log('pop', orderIdRef.current);
      if (orderIdRef.current && !isCanceling.current) {
        isCanceling.current = true;
        cancelEntryMutation.mutate(
          { premiereId: premiereId!, orderId: orderIdRef.current },
          {
            onSuccess: () => {
              console.log('응모 취소 성공');
              isCanceling.current = false;
            },
            onError: () => {
              console.error('응모 취소 실패');
              isCanceling.current = false;
            },
          }
        );
      }
    };

    window.addEventListener('popstate', function () {
      handlePopState();
    });
    return () => {
      window.removeEventListener('popstate', function () {
        handlePopState();
      });
    };
  }, [premiereId, cancelEntryMutation]);

  return (
    <PremiereContentSection>
      <PremiereBodyImage src={premieresData?.data.eventImage} />
      <Button size="large" onClick={checkEntry}>
        응모하기
      </Button>
    </PremiereContentSection>
  );
};

export default Index;
