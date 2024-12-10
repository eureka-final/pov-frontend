import Basic from '../../../components/templates/Basic/Basic';
import { useParams } from 'react-router-dom';
import { Icon, Heading, Badge, Body, AvatarList, ShowMoreBtn } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Wrapper,
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

const Index = () => {
  const { clubId } = useParams<{ clubId: string }>();

  const { clubsData } = useClubDetailQuery(clubId!);

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
              <Wrapper>
                <div>
                  <Icon icon="edit" />
                  <Body>수정</Body>
                </div>
                <div>
                  <Icon icon="delete" />
                  <Body>삭제</Body>
                </div>
              </Wrapper>
            </HeaderContainer>
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
        </>
      )}
    </Basic>
  );
};

export default Index;
