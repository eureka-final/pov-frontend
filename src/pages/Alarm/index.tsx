import Padded from '../../components/templates/Padded/Padded';
import { Body, Icon } from 'pov-design-system';
import { AlarmCardContainer, AlarmTitleWrapper, TimeText } from './index.style';

interface AlarmCardProps {
  content: string;
  time: string;
}

const dummyAlarm = [
  {
    content: '로맨스에 새로운 리뷰가 등록됐어요.',
    time: '14시간 전',
  },
];

const AlarmCard = ({ content, time }: AlarmCardProps) => {
  return (
    <AlarmCardContainer>
      <AlarmTitleWrapper>
        <Body size="large">{content}</Body>
        <TimeText>
          <Body size="medium">{time}</Body>
        </TimeText>
      </AlarmTitleWrapper>
    </AlarmCardContainer>
  );
};

const index = () => {
  return (
    <Padded>
      {dummyAlarm.map((data, index) => (
        <AlarmCard key={index} content={data.content} time={data.time} />
      ))}
    </Padded>
  );
};

export default index;
