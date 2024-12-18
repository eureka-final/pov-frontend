import Padded from '../../components/templates/Padded/Padded';
import { Heading, Body } from 'pov-design-system';
import { Section, AlarmCardWrapper, AlarmCardContainer, NoContentsContainer, TimeText } from './index.style';
import { useNoticesQuery } from '../../hooks/queries/useNoticesQuery';
import { putNoticeRead } from '../../apis/notice/putNotice';
import { useNavigate } from 'react-router-dom';
import { formatDateTime } from '../../utils/formatDateTime';
import { useToast } from '../../hooks/common/useToast';

interface AlarmCardProps {
  content: string;
  createdAt: string;
  onClick: () => Promise<void>;
}

const AlarmCard = ({ content, createdAt, onClick }: AlarmCardProps) => {
  return (
    <AlarmCardContainer onClick={onClick}>
      <Body size="large">{content}</Body>
      <TimeText>
        <Body size="medium">{createdAt}</Body>
      </TimeText>
    </AlarmCardContainer>
  );
};

const Index = () => {
  const { noticesData } = useNoticesQuery();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const handleClickNotice = async (noticeId: string, movieId: string, reviewId: string) => {
    const response = await putNoticeRead(noticeId);

    if (response) {
      navigate(`/review/${movieId}/detail/${reviewId}`);
    } else {
      createToast('존재하지 않는 알림이에요.');
    }
  };

  return (
    <Padded>
      <Section>
        <Heading size="xLarge" css={{ margin: '24px 0' }}>
          알림
        </Heading>
        {noticesData?.data.length === 0 && (
          <NoContentsContainer>
            <Body size="large">알림이 없어요.</Body>
          </NoContentsContainer>
        )}
        <AlarmCardWrapper>
          {noticesData &&
            noticesData.data.map((data, index) => (
              <AlarmCard
                key={index}
                content={data.content}
                createdAt={formatDateTime(data.createdAt)}
                onClick={() => handleClickNotice(data.id, data.movieId, data.reviewId)}
              />
            ))}
        </AlarmCardWrapper>
      </Section>
    </Padded>
  );
};

export default Index;
