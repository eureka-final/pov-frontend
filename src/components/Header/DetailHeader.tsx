import { DetailHeaderWrapper, IconContainer } from './DetailHeader.style';
import { Icon, Body } from 'pov-design-system';

interface DetailHeaderProps {
  headerTitle: string;
  onClick: () => void;
}

const DetailHeader = ({ headerTitle, onClick }: DetailHeaderProps) => {
  return (
    <>
      <DetailHeaderWrapper>
        <IconContainer onClick={() => onClick()}>
          <Icon icon="angleleft" />
        </IconContainer>
        <Body size="xLarge">{headerTitle}</Body>
      </DetailHeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
};

export default DetailHeader;
