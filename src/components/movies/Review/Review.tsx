import { Additionals, Count, ReviewContainer, Content, Wrapper } from './Review.styles';
import { Heading, Body, Icon } from 'pov-design-system';

interface ReviewProps {
  reviewers: {
    profile: string;
    name: string;
    content: string;
    date: string;
    likes: string;
  };
}

const Review = ({ reviewers }: ReviewProps) => {
  return (
    <ReviewContainer>
      <Wrapper>
        <img src={reviewers.profile} />
        <Heading size="small">{reviewers.name}</Heading>
      </Wrapper>
      <Content>{reviewers.content}</Content>
      <Body size="small" style={{ color: '#ADACAF' }}>
        {reviewers.date}
      </Body>
      <Additionals justify="flex-end">
        <Icon icon="heartline" color="#ADACAF" />
        <Count color="#ADACAF">{reviewers.likes}</Count>
      </Additionals>
    </ReviewContainer>
  );
};

export default Review;
