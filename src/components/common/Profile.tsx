import React from 'react';
import { Avatar } from 'pov-design-system';
import { Container, Name } from './Profile.style';

interface UserProps {
  name: string;
  avatarUrl: string;
}

const Profile: React.FC<UserProps> = ({ name, avatarUrl }) => {
  return (
    <Container>
      <Avatar size="tiny" username={name} src={avatarUrl} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Profile;
