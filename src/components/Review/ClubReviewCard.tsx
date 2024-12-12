import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Heading, Logo } from 'pov-design-system';
import Profile from '../common/Profile';
import { useClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';
import LikeButton from '../common/LikeButton/LikeButton';

interface ReviewCardProps {
  clubId: string;
}

function ClubReviewCard({ clubId }: ReviewCardProps) {
  const navigate = useNavigate();
  const { reviewsData } = useClubReviewsQuery(clubId);

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
          // 각 리뷰별로 좋아요 상태 관리
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [likeCount, setLikeCount] = useState<number>(review.likeAmount);
          const handleLikeCount = (count: number) => {
            setLikeCount(count);
          };

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
                      <LikeButton
                        initialState={review.isLiked}
                        movieId={review.movieId}
                        reviewId={review.reviewId}
                        handleLikeCount={handleLikeCount}
                        likeCount={review.likeAmount}
                      />
                      {likeCount}
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
ClubReviewCard.Empty = () => {
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 리뷰가 없습니다.</Heading>
      <Logo icon="type2" />
    </TitleInfo>
  );
};

export default ClubReviewCard;
