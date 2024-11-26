import React from 'react';
import { Avatar } from 'pov-design-system';
import { Container, Name } from './Profile.style';

interface User {
  name: string;
  avatarUrl: string;
}

export interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user: { name, avatarUrl } }) => {
  return (
    <Container>
      <Avatar username={name} src={avatarUrl} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Profile;
