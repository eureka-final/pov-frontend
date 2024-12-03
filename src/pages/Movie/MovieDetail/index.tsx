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
  Wrapper,
  BackgroundLayer,
} from './MovieDetail.styles';
import ImageLayer from '../../../components/styles/ImageLayer';
import ResponsiveContainer from '../../../components/styles/ResponsiveContainer';
import ProgressBar from '../../../components/styles/ProgressBar';

const index = () => {
  const [movieData, setMovieData] = useState({
    name: '올드보이',
    date: '2003.11',
    director: '박찬욱',
    genre: ['action', 'thriller', 'criminal'],
    likes: '156',
    reviews: '16',
    url: 'https://s3-alpha-sig.figma.com/img/472e/ae15/f9f6158006f9a9a41457e6b4b6d6154e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTRHhPd9IUhqT~UvQ1cAGibItqIX~QP3qmoUvKRw45gi2Gf3cib6HeFLt32GBig2RDYo8xvUVz-Fg0jg78gwaWi6gl2GUmmhFHRGH-P7DW9cWCLDpCjku08nThf3L~-C-gOqL9CjS3322Drr9ZjtJk7GQZ2lMfZjnzF9RMXf~IzEGYOf-cRV-eFxe5GGhx0w2y~Fd32U7E8aIYODKefdq~GNMFVTb0Pr2Rkoi3bWr99Pr8oVEs4d-lvxrH8hn2M2uISXKd-1DBPQ1~yNp8RlNjtC-TlLuYWJN75XjnLJXJPagrjxVYGkgPxtVz5Co7t2CNrGyDB7BxRNf-EODwWw-A__',
  });

  const genreParser = (genres: string[]): string[] => {
    return genres.map((genre) => constants.movies.main.genres[genre] || genre);
  };

  const src = {
    url: 'https://s3-alpha-sig.figma.com/img/e6e7/2525/ff55062ea84c1c29644c11b52ffd3e4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGpweIGZMfE-f19r-yrQPCtuMFKPyyoRL5IyWBBhvLVsQdo4dKjksz8~-rPhxIDSpDVmJ3ZenNTlQEuk-sGkE9m~Fftn-KPVTpACV0F2V2z9AFo1JVovVPk9lN8talydRJEftN-SgZECwsjNIXPq26zqZMEOq-VBHKXkwN~bmrrjbTjEINB5IWX6h4Qs0D2Yn6w3kmfU2hwa~zdzJ42LpezDQ2bHEQtIoxC56kao2nFKhFztc7Lxx78JPHE9tEyejvBYg-PZdCJf~78DXtIBMlAsGkXk6Mt96aRYVxxaoNezfHz7OiyWFLPGV0p8Vp1oHq61SPrJM8ahO7GSYu2qMA__',
    MobileHeight: 220,
    PcHeight: 300,
  };

  return (
    <Basic>
      <Container>
        <HeaderContainer src={movieData.url}>
          <BackgroundLayer src={movieData.url}></BackgroundLayer>
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
                <Count color="#0DE781">{movieData.likes}</Count>
              </Additionals>
              <Additionals>
                <Icon icon="reviewline" color="#0DE781" />
                <Count color="#0DE781">{movieData.reviews}</Count>
              </Additionals>
            </AdditionalsContainer>
          </HeaderInfo>
        </HeaderContainer>
        <Padded>
          <InfoContainer>
            <ResponsiveContainer minMobile={150} minPC={220}>
              <ImageLayer src={src} />
            </ResponsiveContainer>
            <Wrapper gap={32} direction="column">
              <ResponsiveContainer mobDirection="column" pcDirection="row" gap={16}>
                <Additionals>
                  <Icon icon="heartline" color="#FFFFFF" />
                  <Count color="#FFFFFF">{constants.movies.main.likes}</Count>
                </Additionals>
                <Additionals>
                  <Icon icon="reviewline" color="#FFFFFF" />
                  <Count color="#FFFFFF">{constants.movies.main.reviews}</Count>
                </Additionals>
                <Additionals>
                  <Icon icon="bookmarkline" color="#FFFFFF" />
                  <Count color="#FFFFFF">{constants.movies.main.bookmark}</Count>
                </Additionals>
              </ResponsiveContainer>
              <Wrapper>
                <ProgressBar percentage={67} />
              </Wrapper>
              <Wrapper>내용</Wrapper>
            </Wrapper>
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
