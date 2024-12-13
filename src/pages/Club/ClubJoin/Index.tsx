import Basic from '../../../components/templates/Basic/Basic';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Heading, Badge, Body, useOverlay, Modal } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  FlexWrapper,
  Additionals,
  ReviewInfo,
  BackgroundLayer,
  ModalContainer,
  JoinContainer,
} from '../ClubDetail/ClubDetail.styles';
import { useClubDetailQuery } from '../../../hooks/queries/useClubsQuery';
import { useJoinClubMutation } from '../../../hooks/queries/useJoinClubMutation';
import { useToast } from '../../../hooks/common/useToast';
import Profile from '../../../components/common/Profile';

const Index = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { createToast } = useToast();

  const { clubsData } = useClubDetailQuery(clubId!);

  const joinMutation = useJoinClubMutation();

  const handleJoin = () => {
    joinMutation.mutate(
      { clubId: clubId! },
      {
        onSuccess: () => {
          saveClose();
          navigate(`/club/${clubId}/detail`);
          createToast('클럽 가입 성공!', 'success');
        },
      }
    );
  };

  const leader = clubsData?.data.members.memberList.find((member) => member.isLeader);

  return (
    <Basic>
      {clubsData && clubsData.data.clubReviewList && (
        <>
          <Container>
            <HeaderContainer src={clubsData.data.clubImage}>
              <BackgroundLayer src={clubsData.data.clubImage}></BackgroundLayer>
              <ReviewInfo>
                <Heading size="xLarge">{clubsData.data.clubName}</Heading>
                <Body size="large">{clubsData.data.clubDescription}</Body>
                <FlexWrapper>
                  <Body>
                    {clubsData.data.participant}/{clubsData.data.maxParticipants}
                  </Body>
                  <Body>·</Body>
                  <Body>북마크 {clubsData.data.movieCount}개</Body>
                </FlexWrapper>
                <Additionals>
                  {clubsData.data.clubFavorGenres.map((item, index) => (
                    <Badge variant="keyword" cancel={true} key={item + index}>
                      {item}
                    </Badge>
                  ))}
                </Additionals>
                {leader && <Profile name={leader.nickname} avatarUrl={leader.profileImage} />}
              </ReviewInfo>
            </HeaderContainer>
            <JoinContainer>
              <Button size="large" onClick={saveOpen}>
                클럽 참여하기
              </Button>
            </JoinContainer>
          </Container>
          {/* 참여하기 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">클럽에 참여하시겠어요?</Heading>
            <Body>참여하기를 클릭하면 바로 클럽에 가입돼요.</Body>
            <ModalContainer>
              <Button variant="secondary" onClick={saveClose} css={{ width: '45%' }}>
                취소하기
              </Button>
              <Button variant="primary" onClick={handleJoin} css={{ width: '45%' }}>
                참여하기
              </Button>
            </ModalContainer>
          </Modal>
        </>
      )}
    </Basic>
  );
};

export default Index;
