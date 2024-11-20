import { Button } from 'pov-design-system';
import Profile from '../../components/common/Profile';
const index = () => {
  const user = {
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554', // 임시 avatar URL
  };

  return (
    <div>
      <Button variant="primary" size="small">
        버튼
      </Button>
      <Profile user={user} />
    </div>
  );
};

export default index;
