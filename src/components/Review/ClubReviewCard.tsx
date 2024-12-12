import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Icon, Heading, Logo } from 'pov-design-system';
import Profile from '../common/Profile';
import { useClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';
import axios from 'axios';

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

  const [likes, setLikes] = useState(0);
  const [likeAction, setLikeAction] = useState<boolean | null>();

  const onLike = () => {
    // Like이 클릭 안되어있을 때 처리
    if (likeAction === false) {
      axios.put('/api/movies/1/reviews/1/likes').then((response) => {
        if (response.data.success) {
          setLikes(likes + 1);
          setLikeAction(true);
        } else {
          alert('좋아요 실패');
        }
      });
    } else {
      // Like이 클릭되어있을 때 처리
      axios.put('/api/movies/1/reviews/1/unLikes').then((response) => {
        if (response.data.success) {
          setLikes(likes - 1);
          setLikeAction(false);
        } else {
          alert('좋아요 취소 실패');
        }
      });
    }
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
                    <LikeContainer onClick={onLike}>
                      <Icon icon={review.isLiked ? 'heartfill' : 'heartline'} /> {likes}
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
