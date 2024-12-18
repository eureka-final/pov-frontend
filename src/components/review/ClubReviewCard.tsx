import { useNavigate } from 'react-router-dom';
import { Body, Paragraph, Heading, Logo, Button, Icon } from 'pov-design-system';
import Profile from '../common/Profile/Profile';
// import dompurify from 'dompurify';
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
  // ReadMore,
  Spoiler,
  SpoMore,
  WordWrapText,
} from '../club/ClubCard.style';
import { useTheme } from '@emotion/react';
// import useWindowSize from '../../hooks/utils/useWindowSize';

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
  // contents,
  reviewer,
  profileImage,
  thumbnail,
  createdAt,
  likeAmount,
  isLiked,
  spoiler,
}: ReviewCardProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  // NOTE) width가 작은 reviewCard의 경우, 40자 제목만 표시하고 Content Body는 표시하지 않도록 수정
  // NOTE) 사용하지 않는 Content Body는 주석 처리
  // const sanitizer = dompurify.sanitize;

  // const truncateContents = (text: string | undefined, maxLength: number) => {
  //   if (!text) return '';
  //   if (text.length > maxLength) {
  //     const truncatedText = text.substring(0, maxLength);
  //     return (
  //       <>
  //         <div dangerouslySetInnerHTML={{ __html: sanitizer(truncatedText) }} />
  //         <span>...</span>
  //         <ReadMore>더보기</ReadMore>
  //       </>
  //     );
  //   }
  //   return <div dangerouslySetInnerHTML={{ __html: sanitizer(text) }} />;
  // };

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
            <img src={thumbnail.replace('/w154/', '/w92/')} alt={movieTitle} style={{ borderRadius: '4px' }} />

            <WordWrapText
              size="large"
              css={{
                width: '92px',
                color: theme.teritary,
                whiteSpace: 'wrap',

                textAlign: 'center',
              }}
            >
              {movieTitle}
            </WordWrapText>
          </Poster>
          <ReviewCardContainer>
            <Profile name={reviewer} avatarUrl={profileImage} />
            {/* <Body size="xLarge" css={{ marginTop: '8px' }}>
              {title}
            </Body> */}

            {spoiler ? (
              <Spoiler style={{ marginTop: '8px' }}>
                <Body size="xLarge">스포일러가 있어요!</Body>
                <Body size="xLarge">
                  <SpoMore>더보기</SpoMore>
                </Body>
              </Spoiler>
            ) : (
              // <Paragraph css={{ color: theme.teritary }}>{truncateContents(contents, 100)}</Paragraph>
              <Paragraph size="xLarge" css={{ marginTop: '8px' }}>
                {title}
              </Paragraph>
            )}
            <Body size="large" css={{ color: theme.muted, marginTop: '12px' }}>
              {new Date(createdAt).toLocaleDateString()}
            </Body>
          </ReviewCardContainer>
        </CardFlex>
        <FlexBetween>
          <LikeContainer onClick={onLike}>
            <Icon icon={likeAction ? 'heartfill' : 'heartline'} css={{ width: '16px' }} /> {likes}
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
