import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../stores/useAuthStore';
import { postLogin } from '../../../apis/auth/postAuth';
import CircularProgress from '../../../components/common/Progress';
import { LoadingSection, ModalWrapper, ModalBodyWrapper } from '../Index.styles';
import { Heading, Body, Button, useOverlay, Modal } from 'pov-design-system';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);
  const { isOpen: isErrorOpen, open: errorOpen, close: errorClose } = useOverlay();

  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const email = params.get('email');
      const profileImage = params.get('image');

      // URL에서 쿼리 파라미터 제거
      navigate(location.pathname, { replace: true });

      // 쿼리 파라미터에 이메일 정보가 없는 경우 에러 처리
      if (!email) {
        setErrorMsg('네이버에서 사용자 정보를 받아오는 데 실패했어요.');
        errorOpen();
        return;
      }

      // 쿼리 파라미터 정보로 서버 로그인 API 호출
      const response = await postLogin(email, 'NAVER');
      // 서버 측 응답이 잘못된 경우 에러 처리
      if (!response) {
        setErrorMsg('서비스의 문제로 로그인에 실패했어요.');
        errorOpen();
      }

      if (response.data.exists) {
        // 회원 정보가 존재하는 경우 로그인 성공, 메인 페이지로 이동
        console.log(response);
        setLoggedIn(true);
        setUser(response.data.memberInfo);

        if (response.data.memberInfo.role === 'USER') window.location.href = '/';
        if (response.data.memberInfo.role === 'ADMIN') window.location.href = '/admin/movies';
      } else {
        // 회원 정보가 존재하지 않는 경우 회원가입 페이지로 이동
        navigate('/signup', { state: { email: email, profileImage: profileImage, socialType: 'NAVER' } });
        window.location.href = '/';
      }
    };
    loginWithNaver();
  }, []);

  return (
    <>
      <LoadingSection>
        <CircularProgress></CircularProgress>
      </LoadingSection>
      <Modal isOpen={isErrorOpen} closeModal={errorClose}>
        <ModalWrapper>
          <Heading size="medium">로그인 실패</Heading>
          <ModalBodyWrapper>
            <Body size="large">{`${errorMsg}`}</Body>
            <Body size="large">{`다시 시도해주세요.`}</Body>
          </ModalBodyWrapper>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = '/login';
            }}
            css={{ width: '100%', marginTop: '8px' }}
          >
            확인
          </Button>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default Index;
