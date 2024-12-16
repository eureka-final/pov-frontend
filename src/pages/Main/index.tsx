import Padded from '../../components/templates/Padded/Padded';
import { Container } from '../Movie/Movie.styles';
import ReviewClubCard from '../../components/review/ReviewClubCard';
import { ClubReviewListContainer } from '../../components/review/ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import { useMoviesQuery } from '../../hooks/queries/useMoviesQuery';
import { Heading, ShowMoreBtn } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../../components/club/ClubDetail/ClubDetail.styles';
import { CardContainer } from '../../components/movies/Section/Section.styles';
import Card from '../../components/movies/Card/Card';

const Index = () => {
  const navigate = useNavigate();

  const { moviesData } = useMoviesQuery();
  const { reviewsData } = useReviewsQuery();

  return (
    <Padded>
      <Container>
        <SectionWrapper>
          <Heading size="large">이런 영화 어때요? 🎞️</Heading>
          <ShowMoreBtn onClick={() => navigate(`/movie`)} />
        </SectionWrapper>
        <CardContainer>
          {moviesData.slice(0, 6).map((item, index) => (
            <Card key={item.title + index} item={item} />
          ))}
        </CardContainer>

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
