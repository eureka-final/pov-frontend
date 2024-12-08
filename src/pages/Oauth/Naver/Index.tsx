import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getNaverUserInfoApi } from '../../../apis/auth/oauthApi';
import { postLoginApi } from '../../../apis/auth/loginApi';
import { useAuthStore } from '../../../stores/useAuthStore';

import Padded from '../../../components/templates/Padded/Padded';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const code = params.get('code');
      const state = params.get('state');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (code && state) {
        const data = await getNaverUserInfoApi(code, state);

        if (data) {
          try {
            const response = await postLoginApi(data.email, 'NAVER');

            if (response.data.exists) {
              setLoggedIn(true);
              setUser(response.data.memberInfo);
              alert('로그인 성공');
              navigate('/main');
            } else {
              alert('최초 로그인, 회원가입으로 이동');
              navigate('/signup', {
                state: {
                  email: data.email,
                  profileImage: data.profileImage,
                  socialType: 'NAVER',
                },
              });
            }
          } catch (error: any) {
            console.error(error);
            alert('로그인 실패');
            navigate('/login');
            return;
          }
        }
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
