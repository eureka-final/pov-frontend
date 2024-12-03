import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getNaverUserEmailApi } from '../../../apis/auth/oauthApi';
import { postAuthLoginApi } from '../../../apis/auth/loginApi';
import Padded from '../../../components/templates/Padded/Padded';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loginWithNaver = async () => {
      const params = new URLSearchParams(location.search);

      const code = params.get('code');
      const state = params.get('state');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (code && state) {
        const email = await getNaverUserEmailApi(code, state);
        await postAuthLoginApi(email, 'NAVER');
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
