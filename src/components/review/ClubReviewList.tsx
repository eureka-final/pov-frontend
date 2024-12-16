import { useState, useEffect } from 'react';
import { ClubContainer, ClubReviewListContainer, ClubItem } from './ReviewCard.style';
import { Avatar } from 'pov-design-system';
import { useJoinClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import ClubReviewCard from './ClubReviewCard';

function ClubReviewList() {
  const { joinData } = useJoinClubReviewsQuery();

  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  useEffect(() => {
    if (joinData?.data?.clubs && joinData.data.clubs.length > 0) {
      setSelectedClubId(joinData.data.clubs[0].clubId);
    }
  }, [joinData]);

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
              onClick={() => {
                console.log(`클릭된 clubId: ${club.clubId}`);
                setSelectedClubId(club.clubId);
              }}
            />
          </ClubItem>
        ))}
      </ClubContainer>

      <ClubReviewListContainer>{selectedClubId ? <ClubReviewCard clubId={selectedClubId} /> : <ClubReviewCard.Empty />}</ClubReviewListContainer>
    </>
  );
}

export default ClubReviewList;
