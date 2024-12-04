// import NavigationTabs from '../../components/common/NavigationTabs';
// import Profile from '../common/Profile';
import { useNavigate } from 'react-router-dom';
import { DetailHeaderWrapper, IconContainer } from './DetailHeader.style';
import { Icon, Body } from 'pov-design-system';

interface DetailHeaderProps {
  headerTitle: string;
}

const DetailHeader = ({ headerTitle }: DetailHeaderProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <DetailHeaderWrapper>
        <IconContainer onClick={() => handleGoBack}>
          <Icon icon="angleleft" />
        </IconContainer>
        <Body size="xLarge">{headerTitle}</Body>
      </DetailHeaderWrapper>
      {/* <ThemeToggle /> */}
    </>
  );
};

export default DetailHeader;
