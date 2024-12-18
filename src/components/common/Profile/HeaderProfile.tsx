import React from 'react';
import { Avatar } from 'pov-design-system';
import { Container, HeaderName } from './Profile.style';
import useWindowSize from '../../../hooks/utils/useWindowSize';
import { useNavigate } from 'react-router-dom';

export interface UserProps {
  name: string;
  avatarUrl: string;
}

const HeaderProfile: React.FC<UserProps> = ({ name, avatarUrl }) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate('/mypage')}>
      <Avatar size="tiny" username={name} src={avatarUrl} />
      {width && width > 600 && <HeaderName>{name}</HeaderName>}
    </Container>
  );
};

export default HeaderProfile;
