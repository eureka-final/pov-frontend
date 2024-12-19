import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ReviewListContainer,
  CardContainer,
  Poster,
  CardFlex,
  ReviewCardContainer,
  LikeContainer,
  FlexBetween,
  ReadMore,
  TitleInfo,
} from './ReviewCard.styles';
import { Body, Paragraph, Icon, Heading, Logo, Button } from 'pov-design-system';
import Profile from '../../common/Profile';
import dompurify from 'dompurify';
import { Review } from '../../../types/review';
import { useState } from 'react';

function ReviewCard({ reviewId, movieId, thumbnail, movieTitle, reviewer, profileImage, title, spoiler, contents, createdAt, isLiked, likeAmount }: Review) {
  const navigate = useNavigate();
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

  const [likes, setLikes] = useState(likeAmount);
  const [likeAction, setLikeAction] = useState<boolean | null>(isLiked);

  const review = {
    reviewId,
    movieId,
    thumbnail,
    movieTitle,
    reviewer,
    profileImage,
    title,
    contents,
    createdAt,
    isLiked,
    likeAmount,
  };

  return (
    <ReviewListContainer>
      <CardContainer>
        <CardFlex
          key={reviewId}
          onClick={() => {
            navigate(`/admin/reviews/detail/${reviewId}`, { state: { review: review } });
          }}
        >
          <Poster>
            <img src={thumbnail.replace('/w154/', '/w92/')} alt={movieTitle} />
            <Body size="small">{movieTitle}</Body>
          </Poster>
          <ReviewCardContainer>
            <Profile name={reviewer} avatarUrl={profileImage} />
            <Paragraph>{title}</Paragraph>
            <Body size="large">{truncateContents(contents, 300)}</Body>
          </ReviewCardContainer>
        </CardFlex>
        <FlexBetween>
          <Body>{new Date(createdAt).toLocaleDateString()}</Body>
          <LikeContainer>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} /> {likes}
          </LikeContainer>
        </FlexBetween>
      </CardContainer>
    </ReviewListContainer>
  );
}

export const ReviewCardEmpty = () => {
  const navigate = useNavigate();
  return (
    <TitleInfo>
      <Heading size="xxLarge">등록된 리뷰가 없습니다.</Heading>
      <Logo icon="type2" />
      <Button size="large" onClick={() => navigate('/movie')}>
        원하는 영화 리뷰 작성하러 가기 🪄
      </Button>
    </TitleInfo>
  );
};

export default React.memo(ReviewCard);
