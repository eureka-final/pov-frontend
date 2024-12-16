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
  Spoiler,
  SpoMore,
  ReadMore,
  TitleInfo,
} from './ReviewCard.style';
import { Body, Paragraph, Icon, Heading, Logo, Button } from 'pov-design-system';
import Profile from '../common/Profile';
import dompurify from 'dompurify';
import { Review } from '../../types/review';

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

  return (
    <ReviewListContainer>
      <CardContainer
        key={reviewId}
        onClick={() => {
          navigate(`/review/${movieId}/detail/${reviewId}`);
        }}
      >
        <CardFlex>
          <Poster>
            <img src={thumbnail.replace('/w154/', '/w92/')} alt={movieTitle} />
            <Body size="small">{movieTitle}</Body>
          </Poster>
          <ReviewCardContainer>
            <Profile name={reviewer} avatarUrl={profileImage} />
            <Paragraph>{title}</Paragraph>

            {spoiler ? (
              <Spoiler>
                <Body size="large">스포일러가 있어요!</Body>
                <Body size="large">
                  <SpoMore>더보기</SpoMore>
                </Body>
              </Spoiler>
            ) : (
              <Body size="large">{truncateContents(contents, 380)}</Body>
            )}

            <FlexBetween>
              <Body>{new Date(createdAt).toLocaleDateString()}</Body>
              <LikeContainer>
                <Icon icon={isLiked ? 'heartfill' : 'heartline'} /> {likeAmount}
              </LikeContainer>
            </FlexBetween>
          </ReviewCardContainer>
        </CardFlex>
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
