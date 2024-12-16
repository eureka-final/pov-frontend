import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore } from './ReviewCard.style';
import { Body, Paragraph, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
import dompurify from 'dompurify';
import { axiosInstance } from '../../apis/axiosInstance';

interface ReviewCardProps {
  key: number;
  movieId: number;
  reviewId: number;
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

function ReviewClubCard({
  movieId,
  reviewId,
  movieTitle,
  title,
  contents,
  reviewer,
  profileImge,
  thumbnail,
  createdAt,
  likeAmount,
  isLiked,
  spoiler,
}: ReviewCardProps) {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(likeAmount);
  const [likeAction, setLikeAction] = useState<boolean | null>(isLiked);

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
      axiosInstance.put(`/api/movies/${movieId}/reviews/${reviewId}/like`).then((response) => {
        if (response.data) {
          console.log(response.data);
          setLikes(likes + 1);
          setLikeAction(true);
        } else {
          alert('좋아요 실패');
        }
      });
    } else {
      // Like이 클릭되어있을 때 처리
      axiosInstance.put(`/api/movies/${movieId}/reviews/${reviewId}/dislike`).then((response) => {
        if (response.data) {
          console.log(response.data);
          setLikes(likes - 1);
          setLikeAction(false);
        } else {
          alert('좋아요 취소 실패');
        }
      });
    }
  };

  return (
    <CardContainer
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
