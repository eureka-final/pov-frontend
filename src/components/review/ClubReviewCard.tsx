import { useNavigate } from 'react-router-dom';
import { Body, Paragraph, Heading, Logo, Button, Icon } from 'pov-design-system';
import Profile from '../common/Profile';
import dompurify from 'dompurify';
import { useState } from 'react';
import { useLikeMutation, useDisLikeMutation } from '../../hooks/queries/useLikeMutation';
import {
  CardContainer,
  Poster,
  CardFlex,
  ReviewCardContainer,
  LikeContainer,
  FlexBetween,
  TitleInfo,
  ReadMore,
  Spoiler,
  SpoMore,
} from '../club/ClubCard.style';

interface ReviewCardProps {
  key: string;
  movieId: string;
  reviewId: string;
  movieTitle: string;
  title: string;
  contents: string | undefined;
  reviewer: string;
  profileImage: string;
  thumbnail: string;
  createdAt: string;
  likeAmount: number;
  isLiked: boolean;
  spoiler: boolean;
}

function ClubReviewCard({
  movieId,
  reviewId,
  movieTitle,
  title,
  contents,
  reviewer,
  profileImage,
  thumbnail,
  createdAt,
  likeAmount,
  isLiked,
  spoiler,
}: ReviewCardProps) {
  const navigate = useNavigate();

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
    <>
      <CardContainer key={reviewId}>
        <CardFlex
          onClick={() => {
            navigate(`/review/${movieId}/detail/${reviewId}`);
          }}
        >
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
              <Body size="large">{truncateContents(contents, 100)}</Body>
            )}
          </ReviewCardContainer>
        </CardFlex>
        <FlexBetween>
          <Body>{new Date(createdAt).toLocaleDateString()}</Body>
          <LikeContainer onClick={onLike}>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} /> {likes}
          </LikeContainer>
        </FlexBetween>
      </CardContainer>
    </>
  );
}

export const EmptyClubReviewCard = () => {
  const navigate = useNavigate();
  return (
    <TitleInfo>
      <Heading size="xxLarge">참여한 클럽이 없습니다.</Heading>
      <Logo icon="type2" />
      <Button size="large" onClick={() => navigate('/club')}>
        클럽 둘러보러 가기 👀
      </Button>
    </TitleInfo>
  );
};

ClubReviewCard.Empty = EmptyClubReviewCard;

export default ClubReviewCard;
