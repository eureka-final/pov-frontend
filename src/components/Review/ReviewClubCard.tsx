import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
import dompurify from 'dompurify';

interface ReviewCardProps {
  key: number;
  movieTitle: string;
  title: string;
  contents: string | undefined;
  reviewer: string;
  profileImge: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
  spoiler: boolean;
}

function ReviewClubCard({ movieTitle, title, contents, reviewer, profileImge, thumbnail, createdAt, likeAmount, isLiked, spoiler }: ReviewCardProps) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(likeAmount);
  const [likeAction, setLikeAction] = useState<boolean | null>(isLiked);

  //const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
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
    <CardContainer>
      <CardFlex>
        <Poster>
          <img src={thumbnail} alt={movieTitle} />
          <Body size="small">{movieTitle}</Body>
        </Poster>
        <ReviewCardContainer>
          <div
            onClick={() => {
              // navigate(`/review/${movieId}/detail/${reviewId}`);
              navigate(`/review/1/detail/1`);
            }}
          >
            <Profile name={reviewer} avatarUrl={profileImge} />
            <Paragraph>{title}</Paragraph>
            {spoiler ? (
              <Spoiler>
                <Body size="large">스포일러가 있어요!</Body>
                <Body size="large">
                  <SpoMore>더보기</SpoMore>
                </Body>
              </Spoiler>
            ) : (
              <Body size="large">{truncateContents(contents, 145)}</Body>
            )}
          </div>

          <FlexBetween>
            <Body>{new Date(createdAt).toLocaleDateString()}</Body>
            <LikeContainer onClick={onLike}>
              <Icon icon={likeAction ? 'heartfill' : 'heartline'} /> {likes}
            </LikeContainer>
          </FlexBetween>
        </ReviewCardContainer>
      </CardFlex>
    </CardContainer>
  );
}

export default ReviewClubCard;
