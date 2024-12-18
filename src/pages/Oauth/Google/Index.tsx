import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGoogleUserInfoApi } from '../../../apis/auth/oauthApi';
import { postLoginApi } from '../../../apis/auth/loginApi';
import { useAuthStore } from '../../../stores/useAuthStore';
import CircularProgress from '../../../components/common/Progress';
import { LoadingSection } from '../Index.styles';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const loginWithGoogle = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      // 인가 코드가 존재하지 않는 경우 에러 처리
      if (!code) {
        alert('서비스의 문제로 인해 로그인에 실패했어요.');
        // window.location.href = '/';
        return;
      }

      const data = await getGoogleUserInfoApi(code);
      // 구글에서 회원정보를 받아오는 데 실패한 경우 에러 처리
      if (!data) {
        alert('구글에서 회원정보를 받아오는 데 실패했어요.');
        // window.location.href = '/';
        return;
      }

      // 서버로 로그인 요청
      try {
        const response = await postLoginApi(data.email, 'GOOGLE');

        if (response.data.exists) {
          // 회원 정보가 이미 존재하는 경우 홈으로 이동
          setLoggedIn(true);
          setUser(response.data.memberInfo);

          // if (response.data.memberInfo.role === 'USER') window.location.href = '/';
          // if (response.data.memberInfo.role === 'ADMIN') window.location.href = '/admin/movies';
        } else {
          // 회원 정보가 존재하지 않는 경우 회원가입으로 이동
          navigate('/signup', {
            state: {
              email: data.email,
              profileImage: data.profileImage,
              socialType: 'GOOGLE',
            },
          });
        }
      } catch (error) {
        console.error(error);
        alert('로그인 실패');
        // window.location.href = '/login';
        return;
      }
    };
    loginWithGoogle();
  }, []);

  return (
    <LoadingSection>
      <CircularProgress></CircularProgress>
    </LoadingSection>
  );
};

export default Index;
