import { useNavigate } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, FlexBetween, LikeContainer, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Icon, Heading, Logo } from 'pov-design-system';
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
      {myReviewsData.map((item) => {
        return (
          <CardContainer
            key={item.review.reviewId}
            onClick={() => {
              navigate(`/review/detail/${item.review.reviewId}`);
            }}
          >
            <CardFlex>
              <Poster>
                <img src={item.review.thumbnail} alt={item.review.movieTitle} />
                <Body size="small">{item.review.movieTitle}</Body>
              </Poster>
              <ReviewCardContainer>
                <Profile name={item.review.reviewer} avatarUrl={item.review.profileImage} />
                <Paragraph>{item.review.title}</Paragraph>

                <Body size="large">{truncateContents(item.review.contents, 380)}</Body>

                <FlexBetween>
                  <Body>{item.review.createdAt}</Body>
                  <LikeContainer>
                    <Icon icon={item.review.isLiked ? 'heartfill' : 'heartline'} /> {item.review.likeAmount}
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
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 리뷰가 없습니다.</Heading>
      <Logo icon="type2" />
    </TitleInfo>
  );
};

export default MyReviewCard;
