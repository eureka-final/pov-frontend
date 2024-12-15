import { useTheme } from '@emotion/react';
import { DetailHeaderWrapper, IconContainer } from './DetailHeader.style';
import { Icon, Body } from 'pov-design-system';

interface DetailHeaderProps {
  headerTitle: string;
  onClick: () => void;
}

const DetailHeader = ({ headerTitle, onClick }: DetailHeaderProps) => {
  const theme = useTheme();
  return (
    <>
      <DetailHeaderWrapper>
        <IconContainer onClick={() => onClick()}>
          <Icon icon="angleleft" css={{ color: theme.muted, width: '20px' }} />
        </IconContainer>
        <Body size="xLarge">{headerTitle}</Body>
      </DetailHeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
};

export default DetailHeader;
