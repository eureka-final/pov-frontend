import Basic from '../../../components/templates/Basic/Basic';
import { constants } from '../../../constants/constants';
import { Heading, Badge, Body, Icon, ShowMoreBtn } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Additionals,
  HeaderInfo,
  Count,
  InfoContainer,
  ImageContainer,
  AdditionalsContainer,
  BodyContainer,
  Wrapper,
  BackgroundLayer,
  PaddedContainer,
  HeadingContainer,
  Content,
  Section,
  Div,
  ScrollContainer,
} from './MovieDetail.styles';
import ImageLayer from '../../../components/styles/ImageLayer';
import ResponsiveContainer from '../../../components/styles/ResponsiveContainer';
import ProgressBar from '../../../components/styles/ProgressBar';
import Productions from '../../../components/movies/Productions/Productions';
import Review from '../../../components/movies/Review/Review';
import { useMovieDetailQuery } from '../../../hooks/queries/useMoviesQuery';
import { useNavigate, useParams } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const { movieId } = useParams<{ movieId: string }>();

  const { movieData } = useMovieDetailQuery(movieId!);

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
      percentage: item.badCount ? (item.goodCount / (item.goodCount + item.badCount)) * 100 : 0,
    }));

  const steels =
    movieData &&
    movieData.data.images.map((item) => ({
      url: item,
      MobileHeight: 100,
      PcHeight: 120,
      br: '8px',
    }));

  const genreParser = (genres: string[]): string[] => {
    return genres.map((genre) => constants.movies.main.genres[genre] || genre);
  };

  return (
    <Basic>
      {movieData && (
        <Container>
          <HeaderContainer src={movieData.data.backdrop.replace('/w154/', '/original/')}>
            <BackgroundLayer src={movieData.data.backdrop.replace('/w154/', '/original/')}></BackgroundLayer>
            <HeaderInfo>
              <Heading size="large">{movieData.data.title}</Heading>
              <BodyContainer>
                <Badge>{movieData.data.released}</Badge>
                {movieData.data.directors.map((item, index) => (
                  <Body size="large" key={item.id + index}>
                    {item.name}
                  </Body>
                ))}
                <Body>{genreParser(movieData.data.genre)}</Body>
              </BodyContainer>

              <AdditionalsContainer>
                <Additionals>
                  <Icon icon="heartfill" color="#0DE781" />
                  <Count color="#0DE781">{movieData.data.movieLikeCount}</Count>
                </Additionals>
                <Additionals>
                  <Icon icon="reviewline" color="#0DE781" />
                  <Count color="#0DE781">{preference && preference.reduce((acc, item) => acc + item.reviewCount, 0)}</Count>
                </Additionals>
              </AdditionalsContainer>
            </HeaderInfo>
          </HeaderContainer>

          <PaddedContainer>
            <InfoContainer>
              <ResponsiveContainer minMobile={150} minPC={220}>
                <ImageLayer src={src} />
              </ResponsiveContainer>

              <Wrapper gap={32} direction="column">
                <ResponsiveContainer mobDirection="column" pcDirection="row" gap={16}>
                  <Additionals>
                    <Icon icon="heartline" />
                    <Count color="#FFFFFF">{constants.movies.main.likes}</Count>
                  </Additionals>
                  <Additionals>
                    <Icon icon="reviewline" />
                    <Count color="#FFFFFF">{constants.movies.main.reviews}</Count>
                  </Additionals>
                  <Additionals>
                    <Icon icon="bookmarkline" />
                    <Count color="#FFFFFF">{constants.movies.main.bookmark}</Count>
                  </Additionals>
                </ResponsiveContainer>
                <Wrapper>
                  {preference &&
                    preference.map((item, index) => (
                      <ProgressBar key={item.percentage + index} percentage={item.percentage} like={item.like} unlike={item.unlike} />
                    ))}
                </Wrapper>
                <Content>{movieData.data.plot}</Content>
              </Wrapper>
            </InfoContainer>

            <Section>
              <HeadingContainer>
                <Div>
                  <Heading>{constants.movies.detail.heading.review}</Heading>
                  <Body style={{ color: '#0DE781' }}>{preference && preference.reduce((acc, item) => acc + item.reviewCount, 0)}</Body>
                </Div>
                <Div>
                  <ShowMoreBtn onClick={() => navigate('/movie/review')} />
                </Div>
              </HeadingContainer>
              <Review reviewers={movieData.data.reviews} />
            </Section>

            <Section>
              <HeadingContainer>
                <Heading>{constants.movies.detail.heading.production}</Heading>
              </HeadingContainer>
              <ImageContainer>
                {movieData.data.directors.map((item, index) => (
                  <Productions productions={item} key={item.id + index} />
                ))}
              </ImageContainer>
            </Section>

            <Section>
              <HeadingContainer>
                <Heading>{constants.movies.detail.heading.steel}</Heading>
              </HeadingContainer>
              <ScrollContainer>{steels && steels.map((item, index) => <ImageLayer src={item} key={item.url + index} />)}</ScrollContainer>
            </Section>
            <Section>
              <HeadingContainer>
                <Heading>{constants.movies.detail.heading.videos}</Heading>
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
