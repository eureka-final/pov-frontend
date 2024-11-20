import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from 'pov-design-system';

interface User {
  name: string;
  avatarUrl: string;
}

export interface ProfileProps {
  user: User;
}

const Container = styled.div`
  background: #eee;
  margin-bottom: 1em;
  padding: 0.5em;
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  color: #333;
  font-size: 16px;
  margin-left: 8px;
`;

const Profile: React.FC<ProfileProps> = ({ user: { name, avatarUrl } }) => {
  return (
    <Container>
      <Avatar username={name} src={avatarUrl} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Profile;
