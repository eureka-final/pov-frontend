import Padded from '../../components/templates/Padded/Padded';
import { Heading, Body } from 'pov-design-system';
import { AlarmCardWrapper, AlarmCardContainer, NoContentsContainer, TimeText } from './index.style';
import { useNoticesQuery } from '../../hooks/queries/useNoticesQuery';

interface AlarmCardProps {
  content: string;
  createdAt: string;
}

const AlarmCard = ({ content, createdAt }: AlarmCardProps) => {
  return (
    <AlarmCardContainer>
      <Body size="large">{content}</Body>
      <TimeText>
        <Body size="medium">{createdAt}</Body>
      </TimeText>
    </AlarmCardContainer>
  );
};

const index = () => {
  const { noticesData } = useNoticesQuery();

  return (
    <Padded>
      <AlarmCardWrapper>
        <Heading size="xLarge" css={{ margin: '24px 0' }}>
          알림
        </Heading>
        {noticesData?.data.length === 0 && (
          <NoContentsContainer>
            <Body size="large">알림이 없어요.</Body>
          </NoContentsContainer>
        )}
        {noticesData && noticesData.data.map((data, index) => <AlarmCard key={index} content={data.content} createdAt={data.createdAt} />)}
      </AlarmCardWrapper>
    </Padded>
  );
};

export default index;
