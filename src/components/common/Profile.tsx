import React from 'react';
import { Avatar } from 'pov-design-system';
import { Container, Name } from './Profile.style';
import useWindowSize from '../../hooks/utils/useWindowSize';

export interface UserProps {
  name: string;
  avatarUrl: string;
}

const Profile: React.FC<UserProps> = ({ name, avatarUrl }) => {
  const { width } = useWindowSize();
  return (
    <Container>
      <Avatar size="tiny" username={name} src={avatarUrl} />
      {width && width > 600 && <Name>{name}</Name>}
    </Container>
  );
};

export default Profile;
