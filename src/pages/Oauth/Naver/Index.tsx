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
  // hotfix
  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const email = params.get('email');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (email) {
        const response = await postLogin(email, 'NAVER');

        if (response) {
          if (response.data.exists) {
            setLoggedIn(true);
            setUser(response.data.memberInfo);
            window.location.href = '/';
          } else {
            window.location.href = '/signup';
          }
        }
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
