import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
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
} from '../../../components/review/ReviewCard.style';
import { Body, Paragraph, Heading, Logo, Button } from 'pov-design-system';
import Profile from '../../../components/common/Profile';
import { useClubReviewsQuery } from '../../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';
import LikeButton from '../../../components/common/LikeButton/LikeButton';

function Index() {
  const navigate = useNavigate();
  const { clubId } = useParams<{ clubId: string }>();

  const { reviewsData } = useClubReviewsQuery(clubId!);

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

  const [likeCounts, setLikeCounts] = useState<number[]>(reviewsData?.data.reviews.content.map((review) => review.likeAmount) ?? []);

  const handleLikeCount = (index: number, newCount: number) => {
    setLikeCounts((prev) => (prev ? prev.map((count, i) => (i === index ? newCount : count)) : []));
  };

  return (
    <>
      {reviewsData &&
        reviewsData.data.reviews.content.map((review, index) => (
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
                      handleLikeCount={(newCount) => handleLikeCount(index, newCount)}
                      likeCount={likeCounts[index] ?? 0}
                    />
                    {likeCounts[index] ?? 0}
                  </LikeContainer>
                </FlexBetween>
              </ReviewCardContainer>
            </CardFlex>
          </CardContainer>
        ))}
    </>
  );
}

const EmptyClubReviewCard = () => {
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

Index.Empty = EmptyClubReviewCard;

export default Index;
