import Padded from '../../components/templates/Padded/Padded';
import { Heading } from 'pov-design-system';
import PremiereSection from '../../components/premieres/Section/PremiereSection';
import { usePermieresQuery } from '../../hooks/queries/usePermieresQuery';

const Index = () => {
  const { premieresData } = usePermieresQuery();
  return (
    <Padded>
      <Heading size="large" css={{ marginTop: '24px' }}>
        시사회 이벤트 정보를 확인해보세요 👀
      </Heading>
      {premieresData && premieresData.data.premieres.map((premieres) => <PremiereSection key={premieres.premiereId} {...premieres}></PremiereSection>)}
    </Padded>
  );
};

export default Index;
