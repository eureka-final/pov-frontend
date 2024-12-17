import { useState, useEffect } from 'react';
import { ClubContainer, ClubReviewListContainer, ClubItem } from './ReviewCard.style';
import { Avatar } from 'pov-design-system';
import { useJoinClubReviewsQuery, useClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import ClubReviewCard, { EmptyClubReviewCard } from './ClubReviewCard';
import { useInView } from 'react-intersection-observer';
import ReviewPageSkeleton from './ReviewPageSkeleton';

function ClubReviewList() {
  const { joinData } = useJoinClubReviewsQuery();

  const [selectedClubId, setSelectedClubId] = useState<string>('');

  const { reviewsData, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useClubReviewsQuery(selectedClubId);
  const pageSize = 10;

  const { ref, inView } = useInView();

  useEffect(() => {
    if (joinData?.data?.clubs && joinData.data.clubs.length > 0) {
      setSelectedClubId(joinData.data.clubs[0].clubId);
    }
  }, [joinData]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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

  return (
    <>
      <ClubContainer>
        {joinData?.data.clubs.map((club) => (
          <ClubItem key={club.clubId}>
            <Avatar
              size="medium"
              username={club.clubName}
              src={club.clubImage}
              css={{ cursor: 'pointer' }}
              selected={club.clubId === selectedClubId}
              onClick={() => setSelectedClubId(club.clubId)}
            />
          </ClubItem>
        ))}
      </ClubContainer>

      <ClubReviewListContainer>
        {selectedClubId ? (
          reviewsData?.map((review) => (
            <ClubReviewCard
              key={review.reviewId}
              movieId={review.movieId}
              reviewId={review.reviewId}
              movieTitle={review.movieTitle}
              title={review.title}
              contents={review.contents}
              reviewer={review.reviewer}
              profileImage={review.profileImage}
              thumbnail={review.thumbnail}
              createdAt={review.createdAt}
              likeAmount={review.likeAmount}
              isLiked={review.isLiked}
              spoiler={review.spoiler}
            />
          ))
        ) : (
          <ClubReviewCard.Empty />
        )}
      </ClubReviewListContainer>

      {isFetchingNextPage && Array.from({ length: pageSize }).map((_, index) => <ReviewPageSkeleton key={`fetching-skeleton-${index}`} />)}
      {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
    </>
  );
}

export default ClubReviewList;
