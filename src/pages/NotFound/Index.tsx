// import { EXCEPTION_POINTS } from '../../constants/api';
import { Heading, Button, Logo, Body } from 'pov-design-system';
import { containerStyling, buttonStyling, headingStyling, textStyling } from '../../components/fallbackUI/FallbackUI.style';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  // 서버로 리다이렉트가 필요한 예외 URL 목록
  const exceptionUrls = ['/api', '/oauth2/authorization/naver', '/login/oauth2/code/naver', '/api/swagger-ui/index.html'];
  // 현재 URL이 예외 목록에 포함되어 있는지 확인
  if (exceptionUrls.some((url) => location.pathname.startsWith(url))) {
    window.location.href = location.pathname; // 서버로 리다이렉트
    return null; // 렌더링 중단
  }
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
