import { useState } from 'react';
import { constants } from '../../../constants/constants';
import { HeadingContainer, Section, Div, PaddedContainer } from './MovieReviews.styles';
import { Heading, Body, Icon } from 'pov-design-system';
import Review from '../../../components/movies/Review/Review';

const Index = () => {
  const [reviews, setReviews] = useState({
    total: 16,
    reviewrs: [
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
      {
        profile: '/public/avatar.svg',
        name: '혜밍웨이',
        content: '박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야! 박찬욱은 신이야!',
        date: '2024.11.28',
        likes: '156',
      },
    ],
  });

  return (
    <PaddedContainer>
      <Section>
        <HeadingContainer>
          <Div>
            <Heading>{constants.movies.detail.heading.review}</Heading>
            <Body style={{ color: '#0DE781' }}>{reviews.total}</Body>
          </Div>
          <Div>
            <Body style={{ color: '#858386' }}>{constants.movies.detail.body.review}</Body>
            <Icon icon="angleright" color="#ADACAF" style={{ width: '16px', height: '16px' }} />
          </Div>
        </HeadingContainer>
        {reviews.reviewrs.map((item) => (
          <Review reviewers={item} />
        ))}
      </Section>
    </PaddedContainer>
  );
};

export default Index;
