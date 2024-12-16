import Padded from '../../components/templates/Padded/Padded';
import { Container } from '../Movie/Movie.styles';
import ReviewClubCard from '../../components/review/ReviewClubCard';
import { ClubReviewListContainer } from '../../components/review/ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import { Heading, ShowMoreBtn } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../../components/club/ClubDetail/ClubDetail.styles';

const Index = () => {
  const { reviewsData } = useReviewsQuery();
  const navigate = useNavigate();

  return (
    <Padded>
      <Container>
        <SectionWrapper>
          <Heading size="large">지금 인기있는 리뷰 💬</Heading>
          <ShowMoreBtn onClick={() => navigate(`/review`)} />
        </SectionWrapper>
        <ClubReviewListContainer>
          {reviewsData.slice(0, 3).map((review) => (
            <ReviewClubCard
              key={review.reviewId}
              movieId={review.movieId}
              reviewId={review.reviewId}
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
      </Container>
    </Padded>
  );
};

export default Index;
