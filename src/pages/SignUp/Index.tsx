import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import type { User } from '../../types/user';
import { postSignUpApi } from '../../apis/auth/signupApi';
import { useAuthStore } from '../../stores/useAuthStore';

import Padded from '../../components/templates/Padded/Padded';
import useFunnel from '../../hooks/funnel/useFunnel';
import SignUpFunnel from '../../components/signUp/SignUpFunnel';

const signInSteps = ['nickname', 'birth', 'favorGenres', 'success'];

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Step, Funnel, setStep } = useFunnel(signInSteps[0]);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setLoggedIn);

  /* useForm으로 User type의 Form 생성 */
  const methods = useForm<User>({
    defaultValues: {
      email: '',
      socialType: '',
      nickname: '',
      birth: '',
      favorGenres: [],
      profileImage: '',
    },
  });
  const { setValue, getValues } = methods;

  const userOauthData = location.state;

  /* Funnel Step handler 함수 */
  const stepHandler = (nextStep: string) => {
    setStep(nextStep);
  };

  /* Form 제출 시 실행될 handler 함수 */
  const onSubmit = async (data: User) => {
    try {
      const response = await postSignUpApi(data);
      console.log(response);
      setLoggedIn(true);
      setUser(response.data.user);
      setStep(signInSteps[3]);
    } catch (error) {
      console.error('회원가입 실패:', error);
      navigate('/login'); // 회원가입에 실패한 경우 login 페이지로 이동
    }
  };

  // 컴포넌트 렌더링 시 Form의 email, socialType, profileImage 값 지정
  useEffect(() => {
    // TODO Step 초기화?
    setValue('email', userOauthData.email);
    setValue('socialType', userOauthData.socialType);
    setValue('profileImage', userOauthData.profileImage);
  }, []);

  return (
    <Padded>
      <FormProvider {...methods}>
        <SignUpFunnel steps={signInSteps} Funnel={Funnel} Step={Step} stepHandler={stepHandler} onSubmit={() => onSubmit(getValues())}></SignUpFunnel>
      </FormProvider>
    </Padded>
  );
};

export default Index;
