import { useNavigate } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, FlexBetween, LikeContainer, ReadMore } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
import { useReviews } from '../../hooks/review/useReviews';

function MyReviewCard() {
  const navigate = useNavigate();
  const { myReviewsData } = useReviews();

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          {truncatedText}
          <span>...</span>
          <ReadMore>더보기</ReadMore>
        </>
      );
    }
    return text;
  };

  return (
    <>
      {myReviewsData.map((review) => {
        return (
          <CardContainer
            key={review.reviewId}
            onClick={() => {
              navigate(`/review/detail/${review.reviewId}`);
            }}
          >
            <CardFlex>
              <Poster>
                <img src={review.thumbnail} alt={review.movieTitle} />
                <Body size="small">{review.movieTitle}</Body>
              </Poster>
              <ReviewCardContainer>
                <Profile name={review.reviewer} avatarUrl={review.profileImge} />
                <Paragraph>{review.title}</Paragraph>

                <Body size="large">{truncateContents(review.contents, 380)}</Body>

                <FlexBetween>
                  <Body>{review.createdAt}</Body>
                  <LikeContainer>
                    <Icon icon={review.isLiked ? 'heartfill' : 'heartline'} /> {review.likeAmount}
                  </LikeContainer>
                </FlexBetween>
              </ReviewCardContainer>
            </CardFlex>
          </CardContainer>
        );
      })}
    </>
  );
}

// eslint-disable-next-line react/display-name
MyReviewCard.Empty = () => {
  return <div>등록된 리뷰가 없습니다.</div>;
};

export default MyReviewCard;
