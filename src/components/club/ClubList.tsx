import ClubCard from '@/components/club/ClubCard';
import { ReviewListContainer } from '@/components/club/ClubCard.style';
import { useClubsQuery } from '@/hooks/queries/useClubsQuery';

function ClubList() {
  const { clubsData } = useClubsQuery();

  return <ReviewListContainer>{clubsData && clubsData.data.clubs.length > 0 ? <ClubCard /> : <ClubCard.Empty />}</ReviewListContainer>;
}

export default ClubList;
