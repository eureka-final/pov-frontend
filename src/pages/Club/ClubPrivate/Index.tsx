import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useClubPrivateQuery } from '@/hooks/queries/useClubsQuery';
import JoinClub from '@/components/club/ClubDetail/JoinClub';
import NotJoinClub from '@/components/club/ClubPrivate/NotJoinClub';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Index = () => {
  const query = useQuery();
  const [privateQueries, setPrivateQueries] = useState<string | null>(null);

  useEffect(() => {
    const privateQuery = query.get('value');
    setPrivateQueries(privateQuery || '');
  }, [query]);

  const { clubsData } = useClubPrivateQuery(privateQueries || '', { enabled: !!privateQueries });

  return <>{clubsData && clubsData.data.isMember ? <JoinClub /> : <NotJoinClub />}</>;
};

export default Index;
