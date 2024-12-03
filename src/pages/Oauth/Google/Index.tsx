import { useEffect } from 'react';
import Padded from '../../../components/templates/Padded/Padded';
import { useLocation, useNavigate } from 'react-router-dom';
import { getGoogleUserEmailApi } from '../../../apis/auth/oauthApi';
import { postAuthLoginApi } from '../../../apis/auth/loginApi';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loginWithGoogle = async () => {
      const params = new URLSearchParams(location.search);

      const code = params.get('code');

      navigate(location.pathname, { replace: true }); // URL에서 쿼리 파라미터 제거

      if (code) {
        const email = await getGoogleUserEmailApi(code);
        await postAuthLoginApi(email, 'GOOGLE');
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
