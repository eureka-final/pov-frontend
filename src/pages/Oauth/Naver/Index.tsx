import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../../stores/useAuthStore';
import { postLogin } from '../../../apis/auth/postAuth';
import { LoadingSection } from '../Index.styles';
import CircularProgress from '../../../components/common/Progress';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const email = params.get('email');
      const profileImage = params.get('image');

      // URL에서 쿼리 파라미터 제거
      navigate(location.pathname, { replace: true });

      // 쿼리 파라미터에 이메일 정보가 없는 경우 에러 처리
      if (!email) {
        alert('네이버에서 사용자 정보를 받아오는 데 실패했어요.');
        window.location.href = '/login';
        return;
      }

      // 쿼리 파라미터 정보로 서버 로그인 API 호출
      const response = await postLogin(email, 'NAVER');
      // 서버 측 응답이 잘못된 경우 에러 처리
      if (!response) {
        alert('로그인에 실패했어요. 다시 시도해주세요.');
        window.location.href = '/login';
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
    <LoadingSection>
      <CircularProgress></CircularProgress>
    </LoadingSection>
  );
};

export default Index;
