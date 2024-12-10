import MyClubCard from './MyClubCard';
import { ReviewListContainer } from './ClubCard.style';
import { useMyClubsQuery } from '../../hooks/queries/useClubsQuery';

function MyClubList() {
  const { clubsData } = useMyClubsQuery();

  return (
    <>
      <ReviewListContainer>{clubsData && clubsData.length > 0 ? <MyClubCard /> : <MyClubCard.Empty />}</ReviewListContainer>
    </>
  );
}

export default MyClubList;
