import React from 'react';
import { Avatar } from 'pov-design-system';
import { Container, Name } from '@/components/common/Profile/Profile.style';

export interface UserProps {
  name: string;
  avatarUrl: string;
}

const Profile: React.FC<UserProps> = ({ name, avatarUrl }) => {
  return (
    <Container>
      <Avatar size="tiny" username={name} src={avatarUrl} />
      <Name style={{ fontSize: '14px' }}>{name}</Name>
    </Container>
  );
};

export default Profile;
