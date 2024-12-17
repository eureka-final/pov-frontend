import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { getNaverUserInfoApi } from '../../../apis/auth/oauthApi';
// import { postLoginApi } from '../../../apis/auth/loginApi';
import { useAuthStore } from '../../../stores/useAuthStore';

import Padded from '../../../components/templates/Padded/Padded';
import { postLogin } from '../../../apis/auth/postAuth';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const email = params.get('email');
      const exists = params.get('exists');
      const image = params.get('profileImage');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (exists && email) {
        const response = await postLogin(email, 'NAVER');

        if (response) {
          setLoggedIn(true);
          setUser(response.data.memberInfo);
          alert('로그인 완료');
          window.location.href = '/';
        } else {
          alert('로그인 실패');
          window.location.href = '/';
        }
      } else if (email) {
        alert('사용자 정보 없음, 회원가입 필요');
        navigate('/signup', {
          state: {
            email: email,
            profileImage: image,
            socialType: 'NAVER',
          },
        });
      } else {
        alert('콜백 URL에 이메일 정보가 없습니다. 처음부터 다시 시도해주세요.');
        window.location.href = '/login';
      }
    };

    loginWithNaver();
  }, []);

  return (
    <Padded>
      <div>waiting naver oauth login</div>
    </Padded>
  );
};

export default Index;
