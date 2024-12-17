import Basic from '../../../components/templates/Basic/Basic';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Icon, Button, Heading, Badge, Body, AvatarList, ShowMoreBtn, useOverlay, Modal } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Wrapper,
  Menu,
  MenuWrapper,
  LinkWrapper,
  Additionals,
  ReviewInfo,
  BackgroundLayer,
  Section,
  SectionHeading,
  numberStyling,
  SectionWrapper,
  ClubBookMarkContainer,
} from './ClubDetail.styles';
import { ClubReviewListContainer } from '../../../components/review/ReviewCard.style';
import { useClubDetailQuery } from '../../../hooks/queries/useClubsQuery';
import { useDeleteClubMutation } from '../../../hooks/queries/useDeleteClubMutation';
import { useLeaveClubMutaion } from '../../../hooks/queries/useLeaveClubMutaion';
import { useInviteCodeMutation } from '../../../hooks/queries/useCreateClubMutation';
import { useToast } from '../../../hooks/common/useToast';
import { useAuthStore } from '../../../stores/useAuthStore';
import ClubReviewCard from '../../review/ClubReviewCard';

const JoinClub = () => {
  const user = useAuthStore((state) => state.user);
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();

  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { isOpen: isInviteSaveOpen, open: saveInviteOpen, close: saveInviteClose } = useOverlay();
  const { isOpen: isLeaveSaveOpen, open: saveLeaveOpen, close: saveLeaveClose } = useOverlay();
  const { isOpen: isLeaderLeaveSaveOpen, open: saveLeaderLeaveOpen, close: saveLeaderLeaveClose } = useOverlay();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // 클럽 메뉴 토글 상태

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { createToast } = useToast();

  const { clubsData } = useClubDetailQuery(clubId!);

  const deleteClubMutation = useDeleteClubMutation();
  const leaveClubMutation = useLeaveClubMutaion();

  const inviteCodeMutation = useInviteCodeMutation();
  const [inviteCode, setInviteCode] = useState<string | null>('');

  const handleCode = () => {
    inviteCodeMutation.mutate(
      { clubId: clubId! },
      {
        onSuccess: (data) => {
          saveInviteOpen();
          setInviteCode(data.data);
        },
      }
    );
  };
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        createToast('초대 URL이 복사되었습니다!', 'default');
      },
      () => {
        createToast('URL 복사에 실패했습니다.', 'error');
      }
    );
  };

  const handleDelete = () => {
    deleteClubMutation.mutate(
      { clubId: clubId! },
      {
        onSuccess: () => {
          saveClose();
          navigate('/club');
          createToast('클럽 삭제 성공!', 'success');
        },
      }
    );
  };

  const handleLeave = () => {
    leaveClubMutation.mutate(
      { clubId: clubId! },
      {
        onSuccess: () => {
          saveLeaveClose();
          window.location.href = `/club/${clubId}/detail`;
          createToast('클럽 탈퇴 성공!', 'success');
        },
      }
    );
  };

  return (
    <Basic>
      {clubsData && (
        <>
          <BackgroundLayer src={clubsData.data.clubImage}></BackgroundLayer>
          <Container>
            <HeaderContainer src={clubsData.data.clubImage}>
              <ReviewInfo>
                <Heading size="xLarge">{clubsData.data.clubName}</Heading>
                <Body size="large">{clubsData.data.clubDescription}</Body>
                <Additionals>
                  {clubsData.data.clubFavorGenres.map((item, index) => (
                    <Badge variant="keyword" cancel={true} key={item + index}>
                      {item}
                    </Badge>
                  ))}
                </Additionals>
              </ReviewInfo>
            </HeaderContainer>

            {/* 클럽 메뉴 */}
            <Wrapper>
              <Menu onClick={toggleMenu}>
                <Icon icon="menu" />
                <Body>클럽 메뉴</Body>
              </Menu>

              {isMenuOpen && (
                <MenuWrapper>
                  {clubsData.data.members.memberList.some((member) => member.isLeader && member.nickname === user?.nickname) ? (
                    <>
                      <Menu onClick={() => navigate(`/club/${clubId}/edit`)}>
                        <Icon icon="edit" width="15px" height="12px" />
                        <Heading size="small">수정하기</Heading>
                      </Menu>
                      <Menu onClick={saveOpen}>
                        <Icon icon="delete" width="15px" height="12px" />
                        <Heading size="small">삭제하기</Heading>
                      </Menu>
                      <Menu onClick={saveLeaderLeaveOpen}>
                        <Icon icon="leave" width="15px" height="12px" />
                        <Heading size="small">탈퇴하기</Heading>
                      </Menu>
                    </>
                  ) : (
                    <Menu onClick={saveLeaveOpen}>
                      <Icon icon="leave" width="15px" height="12px" />
                      <Heading size="small">탈퇴하기</Heading>
                    </Menu>
                  )}
                  {clubsData.data.isPublic ? (
                    <>
                      <Menu onClick={saveInviteOpen}>
                        <Icon icon="plusLarge" width="15px" height="12px" />
                        <Heading size="small">초대하기</Heading>
                      </Menu>
                    </>
                  ) : (
                    <>
                      <Menu onClick={handleCode}>
                        <Icon icon="plusLarge" width="15px" height="12px" />
                        <Heading size="small">초대하기</Heading>
                      </Menu>
                    </>
                  )}
                </MenuWrapper>
              )}
            </Wrapper>
          </Container>

          <Section>
            <SectionWrapper>
              <SectionHeading>
                <Heading size="large">참여중인 멤버</Heading>
                <Body size="large" css={numberStyling}>
                  {clubsData.data.participant}
                </Body>
              </SectionHeading>
              <ShowMoreBtn onClick={() => navigate(`/club/${clubId}/member`)} />
            </SectionWrapper>
            <AvatarList
              userCount={clubsData.data.participant}
              users={clubsData.data.members.memberList.map((member, index) => ({
                avatarUrl: member.profileImage,
                id: String(index + 1),
                name: member.nickname,
              }))}
            />
          </Section>

          <Section>
            <SectionWrapper>
              <SectionHeading>
                <Heading size="large">클럽원들이 작성한 리뷰</Heading>
                <Body size="large" css={numberStyling}>
                  {clubsData.data.clubReviewList.reviews.content.length}
                </Body>
              </SectionHeading>
              <ShowMoreBtn onClick={() => navigate(`/club/${clubId}/review`)} />
            </SectionWrapper>

            <ClubReviewListContainer>
              {clubsData.data.clubReviewList.reviews.content.slice(0, 3).map((review) => (
                <ClubReviewCard
                  key={review.reviewId}
                  movieId={review.movieId}
                  reviewId={review.reviewId}
                  movieTitle={review.movieTitle}
                  title={review.title}
                  contents={review.contents}
                  reviewer={review.reviewer}
                  profileImage={review.profileImage}
                  thumbnail={review.thumbnail}
                  createdAt={review.createdAt}
                  likeAmount={review.likeAmount}
                  isLiked={review.isLiked}
                  spoiler={review.spoiler}
                />
              ))}
            </ClubReviewListContainer>
          </Section>

          <Section>
            <SectionWrapper>
              <SectionHeading>
                <Heading size="large">이 클럽의 북마크</Heading>
                <Body size="large" css={numberStyling}>
                  {clubsData.data.movieCount}
                </Body>
              </SectionHeading>
              <ShowMoreBtn />
            </SectionWrapper>

            {/* TODO: 북마크 데이터로 교체  */}
            <ClubBookMarkContainer>
              {/* {clubsData.data.clubMovieList.clubMovies.content.slice(0, 6).map((item, index) => (
                <Card key={item.item.title + index} item={item.item} />
              ))} */}
            </ClubBookMarkContainer>
          </Section>

          {/* 삭제 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">정말 삭제하시겠습니까?</Heading>
            <Button variant="primary" onClick={handleDelete} css={{ width: '100%', marginTop: '30px' }}>
              삭제하기
            </Button>
          </Modal>

          {/* 초대 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isInviteSaveOpen} closeModal={saveInviteClose}>
            <Heading size="medium">초대 URL이 생성되었어요. </Heading>
            <Body>초대 URL을 초대하고 싶은 친구에게 보내보세요!</Body>
            <LinkWrapper>
              {clubsData.data.isPublic ? (
                <>
                  <Body>https://www.point-of-views.com/club/{clubId}/detail</Body>
                  <Icon icon="copy" onClick={() => handleCopy(`https://www.point-of-views.com/club/${clubId}/detail`)} style={{ cursor: 'pointer' }} />
                </>
              ) : (
                <>
                  <Body>{inviteCode}</Body>
                  <Icon icon="copy" onClick={() => handleCopy(`${inviteCode}`)} style={{ cursor: 'pointer' }} />
                </>
              )}
            </LinkWrapper>
            <Button variant="primary" onClick={saveInviteClose} css={{ width: '100%', marginTop: '30px' }}>
              확인
            </Button>
          </Modal>

          {/* 그룹장이 탈퇴 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isLeaderLeaveSaveOpen} closeModal={saveLeaderLeaveClose}>
            <Heading size="medium">정말 탈퇴하시겠습니까?</Heading>
            <Body size="medium">탈퇴 전에 그룹장을 다른 멤버한테 위임해주세요.</Body>

            <Button variant="primary" onClick={handleLeave} css={{ width: '100%', marginTop: '30px' }}>
              탈퇴하기
            </Button>
          </Modal>

          {/* 탈퇴 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isLeaveSaveOpen} closeModal={saveLeaveClose}>
            <Heading size="medium">정말 탈퇴하시겠습니까?</Heading>
            <Button variant="primary" onClick={handleLeave} css={{ width: '100%', marginTop: '30px' }}>
              탈퇴하기
            </Button>
          </Modal>
        </>
      )}
    </Basic>
  );
};

export default JoinClub;
