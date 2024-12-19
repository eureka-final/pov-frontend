import Basic from '../../../components/templates/Basic/Basic';
import { constants } from '../../../constants/constants';
import { Heading, Badge, Body, Icon, ShowMoreBtn, Paragraph } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Additionals,
  LikeContainer,
  HeaderInfo,
  Count,
  InfoContainer,
  AdditionalsContainer,
  BodyContainer,
  Wrapper,
  BackgroundLayer,
  PaddedContainer,
  HeadingContainer,
  Section,
  Div,
  ScrollContainer,
  BadgeWrapper,
  PosterImg,
  StillCutImage,
  ProductionGridContainer,
} from './MovieDetail.styles';
import ResponsiveContainer from '../../../components/styles/ResponsiveContainer';
import ProgressBar from '../../../components/styles/ProgressBar';
import Productions from '../../../components/movies/Productions/Productions';
import Review from '../../../components/movies/Review/Review';
import { useMovieDetailQuery } from '../../../hooks/queries/useMoviesQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDateTime';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { useLikeMovieMutation, useDisLikeMovieMutation } from '../../../hooks/queries/useLikeMovieMutation';
import { PopularReviewListContainer } from '../../../components/review/ReviewCard.style';

const Index = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const { movieId } = useParams<{ movieId: string }>();

  const { movieData } = useMovieDetailQuery(movieId!);

  const [likes, setLikes] = useState(movieData?.data?.movieLikeCount || 0);
  const [likeAction, setLikeAction] = useState<boolean>(movieData?.data.isLiked || false);
  const likeMutation = useLikeMovieMutation();
  const disLikeMutation = useDisLikeMovieMutation();

  const onLike = () => {
    if (likeAction === false) {
      likeMutation.mutate(
        { movieId: movieId! },
        {
          onSuccess: () => {
            setLikes(likes + 1);
            setLikeAction(true);
          },
        }
      );
    } else {
      disLikeMutation.mutate(
        { movieId: movieId! },
        {
          onSuccess: () => {
            setLikes(likes - 1);
            setLikeAction(false);
          },
        }
      );
    }
  };

  const src = {
    url: movieData && movieData.data.poster,
    MobileHeight: 220,
    PcHeight: 300,
    br: '8',
  };

  const preference =
    movieData &&
    movieData.data.preferenceCounts.map((item) => ({
      reviewCount: item.goodCount + item.badCount,
      like: item.goodCount,
      unlike: item.badCount,
      percentage: (item.goodCount / (item.goodCount + item.badCount)) * 100,
    }));

  const steels =
    movieData &&
    movieData.data.images.map((item) => ({
      url: item,
      MobileHeight: 100,
      PcHeight: 120,
      br: '8px',
    }));

  return (
    <Basic>
      {movieData && (
        <Container>
          <BackgroundLayer src={movieData.data.backdrop.replace('/w154/', '/original/')}></BackgroundLayer>
          <HeaderContainer src={movieData.data.backdrop.replace('/w154/', '/original/')}>
            <HeaderInfo>
              <Heading size="large">{movieData.data.title}</Heading>
              <BodyContainer>
                <Body size="large" css={{ marginBottom: '8px', color: theme.muted }}>
                  {formatDate(movieData.data.released)}
                </Body>
                {movieData.data.directors.map((item, index) => (
                  <Body size="xLarge" key={item.id + index} css={{ color: theme.secondary }}>
                    {item.name}
                  </Body>
                ))}
                <BadgeWrapper>
                  {movieData.data.genre.map((genre, index) => (
                    <Badge key={index} variant="keyword" cancel={true}>
                      {genre}
                    </Badge>
                  ))}
                </BadgeWrapper>
              </BodyContainer>

              <AdditionalsContainer>
                <LikeContainer onClick={onLike}>
                  <Icon icon={likeAction ? 'heartfill' : 'heartline'} width="20px" height="20px" />
                  {likes}
                </LikeContainer>
                <LikeContainer>
                  <Icon icon="reviewline" color="#0DE781" />
                  {preference && preference.reduce((acc, item) => acc + item.reviewCount, 0)}
                </LikeContainer>
              </AdditionalsContainer>
            </HeaderInfo>
          </HeaderContainer>

          <PaddedContainer>
            <InfoContainer>
              <PosterImg src={src.url} />

              <Wrapper gap={32} direction="column">
                <ResponsiveContainer mobDirection="column" pcDirection="row" gap={16}>
                  <Additionals justify="start" onClick={onLike}>
                    <Icon icon={likeAction ? 'heartfill' : 'heartline'} />
                    <Count>{likes}</Count>
                  </Additionals>
                  <Additionals onClick={() => navigate(`/review/${movieId}/write`)}>
                    <Icon icon="reviewline" css={{ width: '20px', color: theme.secondary }} />
                    <Count color={theme.secondary}>{constants.movies.main.reviews}</Count>
                  </Additionals>
                  <Additionals>
                    <Icon icon="bookmarkline" css={{ width: '20px', color: theme.secondary }} />
                    <Count color={theme.secondary}>{constants.movies.main.bookmark}</Count>
                  </Additionals>
                </ResponsiveContainer>
                <Wrapper>
                  {preference &&
                    preference.map((item, index) => (
                      <ProgressBar key={item.percentage + index} percentage={item.percentage} like={item.like} unlike={item.unlike} />
                    ))}
                </Wrapper>

                <Paragraph>{movieData.data.plot}</Paragraph>
              </Wrapper>
            </InfoContainer>

            <Section>
              <HeadingContainer>
                <Div>
                  <Heading size="xLarge">{constants.movies.detail.heading.review}</Heading>
                  <Body size="xLarge" style={{ color: '#0DE781' }}>
                    {preference && preference.reduce((acc, item) => acc + item.reviewCount, 0)}
                  </Body>
                </Div>
                <Div>
                  <ShowMoreBtn onClick={() => navigate(`/movie/${movieId}/reviews`)} />
                </Div>
              </HeadingContainer>
              <PopularReviewListContainer>
                {movieData.data.reviews.slice(0, 3).map((review) => (
                  <Review key={review.reviewId} reviewers={review} />
                ))}
              </PopularReviewListContainer>
            </Section>

            <Section>
              <HeadingContainer>
                <Heading size="xLarge">{constants.movies.detail.heading.production}</Heading>
              </HeadingContainer>
              <ProductionGridContainer>
                {movieData.data.directors.map((item, index) => (
                  <Productions productions={item} key={item.id + index} />
                ))}
                {movieData.data.actors.map((item, index) => (
                  <Productions productions={item} key={item.id + index} />
                ))}
              </ProductionGridContainer>
            </Section>

            <Section>
              <HeadingContainer>
                <Heading size="xLarge">{constants.movies.detail.heading.steel}</Heading>
              </HeadingContainer>
              <ScrollContainer>{steels && steels.map((item, index) => <StillCutImage key={index + item.url} src={item.url} />)}</ScrollContainer>
            </Section>
            <Section>
              <HeadingContainer>
                <Heading size="xLarge">{constants.movies.detail.heading.videos}</Heading>
              </HeadingContainer>
              <ScrollContainer>
                {movieData.data.videos.map((item, index) => (
                  <div key={item + index} />
                ))}
              </ScrollContainer>
            </Section>
          </PaddedContainer>
        </Container>
      )}
    </Basic>
  );
};

export default Index;
