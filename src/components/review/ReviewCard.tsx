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
import Profile from '../common/Profile/Profile';
import dompurify from 'dompurify';
import { Review } from '../../types/review';
import { useState } from 'react';
import { useLikeMutation, useDisLikeMutation } from '../../hooks/queries/useLikeMutation';
import { useTheme } from '@emotion/react';

function ReviewCard({ reviewId, movieId, thumbnail, movieTitle, reviewer, profileImage, title, spoiler, contents, createdAt, isLiked, likeAmount }: Review) {
  const navigate = useNavigate();
  const sanitizer = dompurify.sanitize;
  const theme = useTheme();
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
  const likeMutation = useLikeMutation();
  const disLikeMutation = useDisLikeMutation();

  const onLike = () => {
    if (likeAction === false) {
      likeMutation.mutate(
        { movieId: movieId!, reviewId: reviewId! },
        {
          onSuccess: () => {
            setLikes(likes + 1);
            setLikeAction(true);
          },
        }
      );
    } else {
      disLikeMutation.mutate(
        { movieId: movieId!, reviewId: reviewId! },
        {
          onSuccess: () => {
            setLikes(likes - 1);
            setLikeAction(false);
          },
        }
      );
    }
  };

  return (
    <ReviewListContainer>
      <CardContainer>
        <CardFlex
          key={reviewId}
          onClick={() => {
            navigate(`/review/${movieId}/detail/${reviewId}`);
          }}
        >
          <Poster>
            <img src={thumbnail.replace('/w154/', '/w92/')} alt={movieTitle} style={{ borderRadius: '4px' }} />
            <Body size="medium" css={{ color: theme.teritary }}>
              {movieTitle}
            </Body>
          </Poster>
          <ReviewCardContainer>
            <Profile name={reviewer} avatarUrl={profileImage} />
            <Body size="xLarge">{title}</Body>

            {spoiler ? (
              <Spoiler>
                <Body size="large">스포일러가 있어요!</Body>
                <Body size="large">
                  <SpoMore>더보기</SpoMore>
                </Body>
              </Spoiler>
            ) : (
              <Paragraph size="large" css={{ color: theme.teritary }}>
                {truncateContents(contents, 300)}
              </Paragraph>
            )}
            <Body size="small" css={{ color: theme.teritary }}>
              {new Date(createdAt).toLocaleDateString()}
            </Body>
          </ReviewCardContainer>
        </CardFlex>
        <FlexBetween>
          <LikeContainer onClick={onLike}>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} css={{ width: '20px' }} /> {likes}
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
