import { useEffect } from 'react';
import Padded from '../../components/templates/Padded/Padded';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getGoogleAccessToken = async (code: string) => {
    try {
      // Access Token 발급 API 호출
      const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
        params: {
          code: code,
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
        },
      });

      // Access Token 저장
      const { access_token } = tokenResponse.data;
      return access_token;
      // sessionStorage.setItem('refreshToken', refresh_token); // Refresh Token을 sessionStorage에 저장
    } catch (error) {
      console.error('error occured during get google access token :', error);
    }
  };

  const getGoogleUserInfo = async (accessToken: string) => {
    try {
      // Access Token 발급 API 호출
      const response = await axios.get('/api/google/userInfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const email = response.data.email;
      return email;
    } catch (error) {
      console.error('error occured during get google user info :', error);
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
    const loginWithGoogle = async () => {
      const params = new URLSearchParams(location.search);

      const code = params.get('code');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (code) {
        const accessToken = await getGoogleAccessToken(code);
        const email = await getGoogleUserInfo(accessToken);
        await postAuthLogin(email);
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
