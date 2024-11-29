import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Padded from '../../components/templates/Padded/Padded';
import axios from 'axios';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [accessToken, setAccessToken] = useState<string>('');

  /* Naver Access Token 발급 */
  const getNaverAccessToken = async (code: string, state: string) => {
    try {
      // Access Token 발급 API 호출
      const tokenResponse = await axios.post('/api/naver/token', null, {
        params: {
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
          client_secret: import.meta.env.VITE_NAVER_CLIENT_SECRET,
          code,
          state,
        },
      });

      // Access Token, Refresh Token 저장
      const { access_token, refresh_token } = tokenResponse.data;
      setAccessToken(access_token); // Access Token을 state에 저장
      sessionStorage.setItem('refreshToken', refresh_token); // Refresh Token을 sessionStorage에 저장
    } catch (error) {
      console.error(error);
    }
  };

  /* Naver 로그인 사용자 정보 요청 */
  const getNaverUserInfo = async () => {
    try {
      // Access Token을 이용해 사용자 정보 요청
      if (accessToken) {
        const userResponse = await axios.get('/api/naver/userInfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log('네이버 회원 정보 =', userResponse.data);
        const email = userResponse.data.response.email;
        return email;
      }
    } catch (error) {
      console.error('error occured during get user info :', error);
    }
  };

  /* 서버에 로그인 요청 */
  const postAuthLogin = async (email: string) => {
    try {
      const response = await axios.post('/pov/api/auth/login', {
        email: email,
      });
      console.log(response);
    } catch (error) {
      console.log('error occured during get auth login :', error);
    }
  };

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const code = params.get('code');
      const state = params.get('state');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (code && state) {
        await getNaverAccessToken(code, state);
        const email = await getNaverUserInfo();
        await postAuthLogin(email);
      }
    };

    loginWithNaver();
  }, []);

  return (
    <Padded>
      <div>oauth login</div>
    </Padded>
  );
};

export default Index;
