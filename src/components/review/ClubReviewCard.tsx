import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardContainer, Poster, CardFlex, ReviewCardContainer, LikeContainer, FlexBetween, Spoiler, SpoMore, ReadMore, TitleInfo } from './ReviewCard.style';
import { Body, Paragraph, Heading, Logo, Button } from 'pov-design-system';
import Profile from '../common/Profile';
import { useClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import dompurify from 'dompurify';
import LikeButton from '../common/LikeButton/LikeButton';
import { useInView } from 'react-intersection-observer';
import ReviewPageSkeleton from './ReviewPageSkeleton';

interface ReviewCardProps {
  clubId: string;
}

function ClubReviewCard({ clubId }: ReviewCardProps) {
  const navigate = useNavigate();

  const pageSize = 10;
  const { reviewsData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useClubReviewsQuery(clubId!);
  const { ref, inView } = useInView();

  const [likeCounts, setLikeCounts] = useState<number[]>([]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (reviewsData && reviewsData.length > 0) {
      setLikeCounts((prevCounts) => {
        const newCounts = reviewsData.map((review) => review.likeAmount);
        if (JSON.stringify(prevCounts) === JSON.stringify(newCounts)) {
          return prevCounts; // 동일한 데이터일 경우 업데이트하지 않음
        }
        return newCounts;
      });
    }
  }, [reviewsData]);

  if (isLoading) {
    return (
      <>
        {Array.from({ length: pageSize }).map((_, index) => (
          <ReviewPageSkeleton key={`initial-skeleton-${index}`} />
        ))}
      </>
    );
  }

  if (reviewsData.length === 0) {
    return <EmptyClubReviewCard />;
  }

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

  const handleLikeCount = (index: number, newCount: number) => {
    setLikeCounts((prev) => prev.map((count, i) => (i === index ? newCount : count)));
  };

  return (
    <>
      {reviewsData.map((review, index) => (
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
                <Body size="large">{truncateContents(review.contents, 145)}</Body>
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
      {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <ReviewPageSkeleton key={`fetching-skeleton-${index}`} />)}
      {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
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

ClubReviewCard.Empty = EmptyClubReviewCard;

export default ClubReviewCard;
