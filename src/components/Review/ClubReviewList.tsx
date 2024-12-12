import { useState, useEffect } from 'react';
import { ClubContainer, ClubReviewListContainer, ClubItem } from './ReviewCard.style';
import { Avatar } from 'pov-design-system';
import { useJoinClubReviewsQuery } from '../../hooks/queries/useReviewsQuery';
import ClubReviewCard from './ClubReviewCard';

function ClubReviewList() {
  const { joinData } = useJoinClubReviewsQuery();

  // 현재 선택된 클럽의 ID 상태
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);

  // joinData가 로드되면 첫 번째 클럽의 ID로 설정
  useEffect(() => {
    if (joinData?.data?.clubs && joinData.data.clubs.length > 0) {
      setSelectedClubId(joinData.data.clubs[0].clubId);
    }
  }, [joinData]);

  return (
    <>
      <ClubContainer>
        {joinData?.data.clubs.map((club) => {
          return (
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
          );
        })}
      </ClubContainer>

      <ClubReviewListContainer>{selectedClubId && <ClubReviewCard clubId={selectedClubId!} />}</ClubReviewListContainer>
    </>
  );
}

export default ClubReviewList;
