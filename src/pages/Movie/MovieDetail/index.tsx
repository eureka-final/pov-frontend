import Basic from '../../../components/templates/Basic/Basic';
import Padded from '../../../components/templates/Padded/Padded';
import { constants } from '../../../constants/constants';
import { useState } from 'react';
import { Heading, Body, Icon } from 'pov-design-system';
import {
  Container,
  HeaderContainer,
  Additionals,
  HeaderInfo,
  Count,
  InfoContainer,
  ReviewContainer,
  DirectingContainer,
  ImageContainer,
  AdditionalsContainer,
  BodyContainer,
  Box,
  Wrapper,
} from './MovieDetail.styles';

const index = () => {
  const [movieData, setMovieData] = useState({
    name: '올드보이',
    date: '2003.11',
    director: '박찬욱',
    genre: ['action', 'thriller', 'criminal'],
    likes: '156',
    reviews: '16',
  });

  const genreParser = (genres: string[]): string[] => {
    return genres.map((genre) => constants.movies.main.genres[genre] || genre);
  };

  return (
    <Basic>
      <Container>
        <HeaderContainer>
          <HeaderInfo>
            <Heading size="large">{movieData.name}</Heading>
            <BodyContainer>
              <Body size="large">{movieData.date}</Body>
              <Body size="large">{movieData.director}</Body>
              <Body>{genreParser(movieData.genre)}</Body>
            </BodyContainer>
            <AdditionalsContainer>
              <Additionals>
                <Icon icon="heartfill" color="#0DE781" />
                <Count>{movieData.likes}</Count>
              </Additionals>
              <Additionals>
                <Icon icon="reviewline" color="#0DE781" />
                <Count>{movieData.reviews}</Count>
              </Additionals>
            </AdditionalsContainer>
          </HeaderInfo>
        </HeaderContainer>
        <Padded>
          <InfoContainer>
            <Box gap={16}>
              <Wrapper>
                <div></div>
                <div></div>
                <div></div>
              </Wrapper>
            </Box>
          </InfoContainer>
          <ReviewContainer></ReviewContainer>
          <DirectingContainer></DirectingContainer>
          <ImageContainer></ImageContainer>
        </Padded>
      </Container>
    </Basic>
  );
};

export default index;
