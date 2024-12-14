import { PremiereContentSection, PremiereBodyImage } from './index.style';
import { Button } from 'pov-design-system';
import { useNavigate, useParams } from 'react-router-dom';
import { useEntryMutation } from '../../../hooks/queries/usePermiereMutation';
import { usePermieresDetailQuery } from '../../../hooks/queries/usePermieresQuery';

const Index = () => {
  const navigate = useNavigate();
  const { premiereId } = useParams<{ premiereId: string }>();
  const { premieresData } = usePermieresDetailQuery(premiereId!);
  const entryMutation = useEntryMutation();

  const checkEntry = () => {
    entryMutation.mutate(
      { premiereId: premiereId! },
      {
        onSuccess: (data) => {
          const orderId = data.orderId;
          console.log('응모 가능!!!!!!!!');
          navigate(`/premieres/${premiereId}/payments/${orderId}`);
        },
      }
    );
  };

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
