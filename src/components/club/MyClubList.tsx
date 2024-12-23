import MyClubCard from '@/components/club/MyClubCard';
import { ReviewListContainer } from '@components/club/ClubCard.style';
import { useMyClubsQuery } from '@/hooks/queries/useClubsQuery';

function MyClubList() {
  const { clubsData } = useMyClubsQuery();

  return (
    <>
      <ReviewListContainer>{clubsData && clubsData.data.clubs.length > 0 ? <MyClubCard /> : <MyClubCard.Empty />}</ReviewListContainer>
    </>
  );
}

export default MyClubList;
