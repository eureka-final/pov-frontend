import { Heading, Button, Logo, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { containerStyling, buttonStyling, headingStyling, textStyling } from '../../components/fallbackUI/FallbackUI.style';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Heading css={containerStyling}>
      <Logo icon="type5" />
      <Heading css={headingStyling} size="small">
        요청하신 페이지를 찾을 수 없습니다.
      </Heading>
      <Body css={textStyling}>URL을 확인해주세요.</Body>
      <Button css={buttonStyling} variant="primary" onClick={() => navigate('/')}>
        홈으로 가기
      </Button>
    </Heading>
  );
};

export default Index;
