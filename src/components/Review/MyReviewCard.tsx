import { useNavigate } from 'react-router-dom';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Icon, Heading, Logo, Button } from 'pov-design-system';
import Profile from '../common/Profile';
import { useMyReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';

function MyReviewCard() {
  const navigate = useNavigate();
  const { reviewsData } = useMyReviewsQuery();

  const sanitizer = dompurify.sanitize;

  const truncateContents = (text: string | undefined, maxLength: number) => {
    if (!text) return '';
    if (text.length > maxLength) {
      const truncatedText = text.substring(0, maxLength);
      return (
        <>
          <div dangerouslySetInnerHTML={{ __html: sanitizer(truncatedText).replace(/<img[^>]*>/g, '') }} />
          <span>...</span>
          <ReadMore>더보기</ReadMore>
        </>
      );
    }
    return <div dangerouslySetInnerHTML={{ __html: sanitizer(text).replace(/<img[^>]*>/g, '') }} />;
  };

  return (
    <>
      {reviewsData &&
        reviewsData.data.reviews.content.map((review) => {
          return (
            <CardContainer
              key={review.reviewId}
              onClick={() => {
                navigate(`/review/${review.movieId}/detail/${review.reviewId}`);
              }}
            >
              <CardFlex>
                <Poster>
                  <img src={review.thumbnail.replace('/w154/', '/w92/')} alt={review.movieTitle} />
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
                    <Body>{new Date(review.createdAt).toLocaleDateString()}</Body>
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

const EmptyMyReviewCard = () => {
  const navigate = useNavigate();
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 리뷰가 없습니다.</Heading>
      <Logo icon="type2" />
      <Button size="large" onClick={() => navigate('/movie')}>
        원하는 영화 리뷰 작성하러 가기 🪄
      </Button>{' '}
    </TitleInfo>
  );
};

MyReviewCard.Empty = EmptyMyReviewCard;

export default MyReviewCard;
