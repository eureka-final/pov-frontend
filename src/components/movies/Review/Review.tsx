import { Additionals, Count, ReviewContainer, Content, Wrapper } from './Review.styles';
import { Heading, Body, Icon } from 'pov-design-system';

interface ReviewProps {
  reviewers: {
    profileImage: string;
    name: string;
    contents: string;
    modifiedAt: string;
    likeCount: number;
  };
}

const Review = ({ reviewers }: ReviewProps) => {
  return (
    <ReviewContainer>
      <Wrapper>
        <img src={reviewers.profileImage} />
        <Heading size="small">{reviewers.name}</Heading>
      </Wrapper>
      <Content>{reviewers.contents}</Content>
      <Body size="small" style={{ color: '#ADACAF' }}>
        {reviewers.modifiedAt}
      </Body>
      <Additionals justify="flex-end">
        <Icon icon="heartline" color="#ADACAF" />
        <Count color="#ADACAF">{reviewers.likeCount}</Count>
      </Additionals>
    </ReviewContainer>
  );
};

export default Review;
