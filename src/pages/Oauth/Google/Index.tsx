import { useEffect } from 'react';
import Padded from '../../../components/templates/Padded/Padded';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGoogleUserInfoApi } from '../../../apis/auth/oauthApi';
import { postLoginApi } from '../../../apis/auth/loginApi';
import { useAuthStore } from '../../../stores/useAuthStore';

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

      if (code) {
        const data = await getGoogleUserInfoApi(code);
        if (data) {
          try {
            const response = await postLoginApi(data.email, 'GOOGLE');

            if (response) {
              setLoggedIn(true);
              setUser(response.data);
              alert('로그인 성공');
              navigate('/main');
            }
          } catch (error: any) {
            if (error.status == '404') {
              alert('최초 로그인, 회원가입으로 이동');
              navigate('/signup', {
                state: {
                  email: data.email,
                  profileImage: data.profileImage,
                  socialType: 'GOOGLE',
                },
              });
              return;
            } else {
              alert('로그인 실패');
              navigate('/login');
              return;
            }
          }
        }
      }
    };
    loginWithGoogle();
  }, []);

  return (
    <Padded>
      <div>oauth google login</div>
    </Padded>
  );
};

export default Index;
