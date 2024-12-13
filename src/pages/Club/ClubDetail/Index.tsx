import { useParams } from 'react-router-dom';
import { useClubDetailQuery } from '../../../hooks/queries/useClubsQuery';
import JoinClub from '../../../components/club/ClubDetail/JoinClub';
import NotJoinClub from '../../../components/club/ClubDetail/NotJoinClub';

const Index = () => {
  const { clubId } = useParams<{ clubId: string }>();

  const { clubsData } = useClubDetailQuery(clubId!);

  return <>{clubsData && clubsData.data.isMember ? <JoinClub /> : <NotJoinClub />}</>;
};

export default Index;
