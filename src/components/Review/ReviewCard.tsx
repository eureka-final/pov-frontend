import { useNavigate, useParams } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Icon, Heading, Logo } from 'pov-design-system';
import Profile from '../common/Profile';
import { useMyReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';

function ReviewCard() {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const { reviewsData } = useMyReviewsQuery();

  const sanitizer = dompurify.sanitize;

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizer(truncatedText) }} />
          <span>...</span>
          <ReadMore>더보기</ReadMore>
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />;
  };

  return (
    <>
      {reviewsData &&
        reviewsData.data.reviews.content.map((review) => {
          return (
            <CardContainer
              key={review.reviewId}
              onClick={() => {
                navigate(`/review/${movieId}/detail/${review.reviewId}`);
              }}
            >
              <CardFlex>
                <Poster>
                  <img src={review.thumbnail.replace('/w500/', '/w92/')} alt={review.movieTitle} />
                  <Body size="small">{review.movieTitle}</Body>
                </Poster>
                <ReviewCardContainer>
                  <Profile name={review.reviewer} avatarUrl={review.profileImage} />
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
ReviewCard.Loading = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">로딩중..</Heading>
      <Logo icon="type1" />
    </TitleInfo>
  );
};

// eslint-disable-next-line react/display-name
ReviewCard.Empty = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 리뷰가 없습니다.</Heading>
      <Logo icon="type2" />
    </TitleInfo>
  );
};

export default ReviewCard;
