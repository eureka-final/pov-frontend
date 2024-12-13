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
import ReviewClubCard from '../../../components/review/ReviewClubCard';
import Card from '../../../components/club/ClubDetail/Card';
import { useClubDetailQuery } from '../../../hooks/queries/useClubsQuery';
import { useLeaveClubMutaion } from '../../../hooks/queries/useLeaveClubMutaion';
import { useToast } from '../../../hooks/common/useToast';

const Index = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { isOpen: isLeaveSaveOpen, open: saveLeaveOpen, close: saveLeaveClose } = useOverlay();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // 클럽 메뉴 토글 상태

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { createToast } = useToast();

  const { clubsData } = useClubDetailQuery(clubId!);

  const leaveClubMutation = useLeaveClubMutaion();

  const handleDelete = () => {
    leaveClubMutation.mutate(
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
          navigate(`/club/${clubId}/detail`);
          createToast('클럽 탈퇴 성공!', 'success');
        },
      }
    );
  };

  return (
    <Basic>
      {clubsData && (
        <>
          <Container>
            <HeaderContainer src={clubsData.data.clubImage}>
              <BackgroundLayer src={clubsData.data.clubImage}></BackgroundLayer>

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
                  {!clubsData.data.members.memberList.some((member) => member.isLeader) && (
                    <>
                      <Menu>
                        <Icon icon="edit" width="15px" height="12px" onClick={() => navigate(`/club/${clubId}/edit`)} />
                        <Heading size="small">수정하기</Heading>
                      </Menu>
                      <Menu>
                        <Icon icon="delete" width="15px" height="12px" onClick={saveOpen} />
                        <Heading size="small">삭제하기</Heading>
                      </Menu>
                    </>
                  )}
                  <Menu>
                    <Icon icon="plusLarge" width="15px" height="12px" onClick />
                    <Heading size="small">초대하기</Heading>
                  </Menu>
                  <Menu>
                    <Icon icon="leave" width="15px" height="12px" onClick={saveLeaveOpen} />
                    <Heading size="small">탈퇴하기</Heading>
                  </Menu>
                </MenuWrapper>
              )}
            </Wrapper>
          </Container>

          <Section>
            <SectionHeading>
              <Heading size="large">참여중인 멤버</Heading>
              <Body size="large" css={numberStyling}>
                {clubsData.data.participant}
              </Body>
            </SectionHeading>
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
              <ShowMoreBtn />
            </SectionWrapper>

            <ClubReviewListContainer>
              {clubsData.data.clubReviewList.reviews.content.slice(0, 3).map((review) => (
                <ReviewClubCard
                  key={review.reviewId}
                  movieTitle={review.movieTitle}
                  title={review.title}
                  contents={review.contents}
                  reviewer={review.reviewer}
                  profileImge={review.profileImage}
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
                  {clubsData.data.clubReviewList.reviews.content.length}
                </Body>
              </SectionHeading>
              <ShowMoreBtn />
            </SectionWrapper>

            <ClubBookMarkContainer>
              {clubsData.data.clubMovieList.clubMovies.content.slice(0, 6).map((item, index) => (
                <Card key={item.item.title + index} item={item.item} />
              ))}
            </ClubBookMarkContainer>
          </Section>

          {/* 삭제 버튼 누르면 나오는 모달창 */}
          <Modal isOpen={isSaveOpen} closeModal={saveClose}>
            <Heading size="medium">정말 삭제하시겠습니까?</Heading>
            <Button variant="primary" onClick={handleDelete} css={{ width: '100%', marginTop: '30px' }}>
              삭제하기
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

export default Index;
