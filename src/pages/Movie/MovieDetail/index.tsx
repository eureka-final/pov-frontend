import Basic from '../../../components/templates/Basic/Basic';
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

const index = () => {
  const [movieData, setMovieData] = useState({
    name: '올드보이',
    date: '2003.11',
    director: '박찬욱',
    genre: ['action', 'thriller', 'criminal'],
    likes: '156',
    reviews: '16',
    reviewInfo: {
      percentage: 67,
      like: 13,
      unlike: 8,
    },
    url: 'https://s3-alpha-sig.figma.com/img/472e/ae15/f9f6158006f9a9a41457e6b4b6d6154e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTRHhPd9IUhqT~UvQ1cAGibItqIX~QP3qmoUvKRw45gi2Gf3cib6HeFLt32GBig2RDYo8xvUVz-Fg0jg78gwaWi6gl2GUmmhFHRGH-P7DW9cWCLDpCjku08nThf3L~-C-gOqL9CjS3322Drr9ZjtJk7GQZ2lMfZjnzF9RMXf~IzEGYOf-cRV-eFxe5GGhx0w2y~Fd32U7E8aIYODKefdq~GNMFVTb0Pr2Rkoi3bWr99Pr8oVEs4d-lvxrH8hn2M2uISXKd-1DBPQ1~yNp8RlNjtC-TlLuYWJN75XjnLJXJPagrjxVYGkgPxtVz5Co7t2CNrGyDB7BxRNf-EODwWw-A__',
    content:
      '내가 여기 왜 들어온 걸까. 영문도 모른 채 감금됐던 남자가 15년 만에 풀려났다. 그리고 시작된 5일간의 추적. 복수를 원하는가? 그렇다면 누가 왜 가뒀는지 비밀을 풀어라.',
    productions: [
      {
        name: '박찬욱',
        position: '감독',
        url: 'https://s3-alpha-sig.figma.com/img/410e/fdf9/6b09ca58de170ab847963be44bc7596e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nMplzcq7FzPTEHwNE-98IjQUACxlApI-ZOD3y16UCo19vYyoGfCQ69amfejV36vwEUpi64TKGai4s6GxrD4alUhQA4fZFLrvF3NMzIYxMGZ8aosotJn2Tan9TK846~oxA4sCzkts5rL2Ou1T~mxOriemcrTPE8vdhDF0RvbqHyt0xg1q7EpGrLX4PGFbo0oUDJT6EM~Usas9ZKHLwJu-q8MMaLcToQUTDMTjspknQ9-GrR1VH6yzyd76pdpx2I9Xgi8Uprwgcr8TLwlPOdQ00QpcX0ZtHLQZzYpoNuYQ7vx1Mw-CPInwG2Qi89VNQo0zDCJbpQFBXHPS3n6NjOl4ew__',
      },
      {
        name: '박찬욱',
        position: '감독',
        url: 'https://s3-alpha-sig.figma.com/img/410e/fdf9/6b09ca58de170ab847963be44bc7596e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nMplzcq7FzPTEHwNE-98IjQUACxlApI-ZOD3y16UCo19vYyoGfCQ69amfejV36vwEUpi64TKGai4s6GxrD4alUhQA4fZFLrvF3NMzIYxMGZ8aosotJn2Tan9TK846~oxA4sCzkts5rL2Ou1T~mxOriemcrTPE8vdhDF0RvbqHyt0xg1q7EpGrLX4PGFbo0oUDJT6EM~Usas9ZKHLwJu-q8MMaLcToQUTDMTjspknQ9-GrR1VH6yzyd76pdpx2I9Xgi8Uprwgcr8TLwlPOdQ00QpcX0ZtHLQZzYpoNuYQ7vx1Mw-CPInwG2Qi89VNQo0zDCJbpQFBXHPS3n6NjOl4ew__',
      },
      {
        name: '박찬욱',
        position: '감독',
        url: 'https://s3-alpha-sig.figma.com/img/410e/fdf9/6b09ca58de170ab847963be44bc7596e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nMplzcq7FzPTEHwNE-98IjQUACxlApI-ZOD3y16UCo19vYyoGfCQ69amfejV36vwEUpi64TKGai4s6GxrD4alUhQA4fZFLrvF3NMzIYxMGZ8aosotJn2Tan9TK846~oxA4sCzkts5rL2Ou1T~mxOriemcrTPE8vdhDF0RvbqHyt0xg1q7EpGrLX4PGFbo0oUDJT6EM~Usas9ZKHLwJu-q8MMaLcToQUTDMTjspknQ9-GrR1VH6yzyd76pdpx2I9Xgi8Uprwgcr8TLwlPOdQ00QpcX0ZtHLQZzYpoNuYQ7vx1Mw-CPInwG2Qi89VNQo0zDCJbpQFBXHPS3n6NjOl4ew__',
      },
      {
        name: '박찬욱',
        position: '감독',
        url: 'https://s3-alpha-sig.figma.com/img/410e/fdf9/6b09ca58de170ab847963be44bc7596e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nMplzcq7FzPTEHwNE-98IjQUACxlApI-ZOD3y16UCo19vYyoGfCQ69amfejV36vwEUpi64TKGai4s6GxrD4alUhQA4fZFLrvF3NMzIYxMGZ8aosotJn2Tan9TK846~oxA4sCzkts5rL2Ou1T~mxOriemcrTPE8vdhDF0RvbqHyt0xg1q7EpGrLX4PGFbo0oUDJT6EM~Usas9ZKHLwJu-q8MMaLcToQUTDMTjspknQ9-GrR1VH6yzyd76pdpx2I9Xgi8Uprwgcr8TLwlPOdQ00QpcX0ZtHLQZzYpoNuYQ7vx1Mw-CPInwG2Qi89VNQo0zDCJbpQFBXHPS3n6NjOl4ew__',
      },
    ],
    steels: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/bac4/ff00/0b1bc18b373c3762af61bc5fc1d1dacd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0NgL6Sc3C5xnlznF9M1dCltikKDATKhhF3hMWaHsIJYGVtg~pi-U3KL~VsBiW9M3ucXP9ukhdYBJGd2TVrb-ishSXte8YAEWjp0hZ6FZ9D9OHKjva1vAv4tC8ZgEsRamTXthSKmcncIThpBBzkJyoGcu94dGEdMYSa28ZtFJAK2r4JZ3cxx0DDAeBxE2t-PoXUw6FujfWnmwzJb28FlSk2ouVh4WDA7pECwh6YTFI9mMpYVRt09IZHo1Y56wcyTnAyLTelDTVLn5iBtionI1IJYaYy48KayhBpeRexD4LO09--xENEvfyjQAG1Zg9wA-axpDz6KcAhfogz67MTCUA__',
        MobileHeight: 100,
        PcHeight: 120,
        br: '8px',
      },
    ],
  });
  const [reviewers, setReviewers] = useState({
    profile: '/public/avatar.svg',
    name: '혜밍웨이',
    content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
    date: '2024.11.28',
    likes: '156',
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
        <PaddedContainer>
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
                <ProgressBar percentage={movieData.reviewInfo.percentage} like={movieData.reviewInfo.like} unlike={movieData.reviewInfo.unlike} />
              </Wrapper>
              <Content>{movieData.content}</Content>
            </Wrapper>
          </InfoContainer>
          <Section>
            <HeadingContainer>
              <Div>
                <Heading>{constants.movies.detail.heading.review}</Heading>
                <Body style={{ color: '#0DE781' }}>{movieData.reviews}</Body>
              </Div>
              <Div>
                <Body style={{ color: '#858386' }}>{constants.movies.detail.body.review}</Body>
                <Icon icon="angleright" color="#ADACAF" style={{ width: '16px', height: '16px' }} />
              </Div>
            </HeadingContainer>
            <Review reviewers={reviewers} />
          </Section>
          <Section>
            <HeadingContainer>
              <Heading>{constants.movies.detail.heading.production}</Heading>
            </HeadingContainer>
            <ImageContainer>
              {movieData.productions.map((item, index) => (
                <Productions productions={item} key={item.url + index} />
              ))}
            </ImageContainer>
          </Section>
          <Section>
            <HeadingContainer>
              <Heading>{constants.movies.detail.heading.steel}</Heading>
            </HeadingContainer>
            <ScrollContainer>
              {movieData.steels.map((item, index) => (
                <ImageLayer src={item} key={item.url + index} />
              ))}
            </ScrollContainer>
          </Section>
          <Section>
            <HeadingContainer>
              <Heading>{constants.movies.detail.heading.videos}</Heading>
            </HeadingContainer>
          </Section>
        </PaddedContainer>
      </Container>
    </Basic>
  );
};

export default index;
