import Padded from '../../components/templates/Padded/Padded';
import { Heading, Body } from 'pov-design-system';
import { AlarmCardWrapper, AlarmCardContainer, NoContentsContainer, TimeText } from './index.style';
import { useNoticesQuery } from '../../hooks/queries/useNoticesQuery';
import { putNoticeRead } from '../../apis/notice/putNotice';
import { useNavigate } from 'react-router-dom';

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

const index = () => {
  const { noticesData } = useNoticesQuery();
  const navigate = useNavigate();

  // const handleClickNotice = async (noticeId: string, movieId: string, reviewId: string) => {
  //   const response = await putNoticeRead(noticeId);

  //   // TODO 404일 경우 존재하지 않는 알림입니다 toast 노출
  //   if (response) {
  //     navigate(`/review/${movieId}/detail/${reviewId}`);
  //   }
  // };

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
        {noticesData &&
          noticesData.data.map((data, index) => (
            <AlarmCard key={index} content={data.content} createdAt={data.createdAt} onClick={() => putNoticeRead(data.id)} />
          ))}
      </AlarmCardWrapper>
    </Padded>
  );
};

export default index;
