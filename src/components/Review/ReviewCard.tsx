import { useNavigate } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, FlexBetween, LikeContainer, Spoiler, SpoMore, ReadMore } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
import { useReviews } from '../../hooks/review/useReviews';

function ReviewCard() {
  const navigate = useNavigate();
  const { reviewsData } = useReviews();

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
      {reviewsData.map((review) => {
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
                {review.spoiler ? (
                  <Spoiler>
                    <Body size="large">스포일러가 있어요!</Body>
                    <Body size="large">
                      <SpoMore>더보기</SpoMore>
                    </Body>
                  </Spoiler>
                ) : (
                  <Body size="large">{truncateContents(review.contents, 380)}</Body>
                )}

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
ReviewCard.Empty = () => {
  return <div>등록된 리뷰가 없습니다.</div>;
};

export default ReviewCard;
