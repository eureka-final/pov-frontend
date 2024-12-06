import { Heading, Button, Logo, Body } from 'pov-design-system';
import { useNavigate } from 'react-router-dom';
import { HTTP_STATUS_CODE, HTTP_ERROR_MESSAGE } from '../../constants/api';
import { containerStyling, buttonStyling, headingStyling, textStyling } from './FallbackUI.style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FallbackUI = ({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: () => void }) => {
  const { status } = error.response || {};
  const navigate = useNavigate();

  // 상태 코드에 따라 동작 변경
  const onClickHandler = () => {
    if (status === HTTP_STATUS_CODE.UNAUTHORIZED || status === HTTP_STATUS_CODE.FORBIDDEN) {
      // 인증 에러일 경우 로그인 페이지로 이동
      navigate('/login');
      resetErrorBoundary();
    } else if (status === HTTP_STATUS_CODE.NOT_FOUND) {
      // 404 에러일 경우 홈 페이지로 이동
      navigate('/');
      resetErrorBoundary();
    } else {
      // 그 외 (500번대 에러 등)에는 ErrorBoundary 초기화
      resetErrorBoundary();
    }
  };

  const errorMessage = HTTP_ERROR_MESSAGE[status] || {
    HEADING: '알 수 없는 에러가 발생했습니다.',
    BODY: '잠시 후 다시 시도해주세요.',
    BUTTON: '새로고침',
  };

  return (
    <Heading css={containerStyling}>
      <Logo icon="type5" />
      <Heading css={headingStyling} size="small">
        {errorMessage.HEADING}
      </Heading>
      <Body css={textStyling}>{errorMessage.BODY}</Body>
      <Button css={buttonStyling} variant="primary" onClick={onClickHandler}>
        {errorMessage.BUTTON}
      </Button>
    </Heading>
  );
};

export default FallbackUI;
