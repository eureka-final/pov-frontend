import Padded from '../../components/templates/Padded/Padded';
import { Container } from '../Movie/Movie.styles';
import ClubReviewCard from '../../components/review/ClubReviewCard';
import { ClubReviewListContainer } from '../../components/review/ReviewCard.style';
import { useReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import { useMovieTrendingQuery } from '../../hooks/queries/useMoviesQuery';
import { Heading, ShowMoreBtn } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { SectionWrapper } from '../../components/club/ClubDetail/ClubDetail.styles';
import { CardContainer } from '../../components/movies/Section/Section.styles';
import Card from '../../components/movies/Card/Card';
import { useEffect } from 'react';
import { requestPermission } from '../../utils/firebase/notificationPermission';

const Index = () => {
  const navigate = useNavigate();

  const { moviesData } = useMovieTrendingQuery();
  const { reviewsData } = useReviewsQuery();

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Padded>
      <Container>
        <SectionWrapper>
          <Heading size="large">POV&apos;s 선정 영화 🎞️</Heading>
          <ShowMoreBtn onClick={() => navigate(`/movie/trending`)} />
        </SectionWrapper>
        <CardContainer>{moviesData && moviesData.data.movies.slice(0, 6).map((item, index) => <Card key={item.title + index} item={item} />)}</CardContainer>

        <SectionWrapper>
          <Heading size="large">지금 인기있는 리뷰 💬</Heading>
          <ShowMoreBtn onClick={() => navigate(`/review`)} />
        </SectionWrapper>
        <ClubReviewListContainer>
          {reviewsData.slice(0, 3).map((review) => (
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
      </Container>
    </Padded>
  );
};

export default Index;
