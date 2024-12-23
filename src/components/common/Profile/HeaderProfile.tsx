import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'pov-design-system';

import { Container, HeaderName } from '@/components/common/Profile/Profile.style';
import useWindowSize from '@/hooks/utils/useWindowSize';

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
