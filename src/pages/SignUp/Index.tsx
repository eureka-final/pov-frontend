import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

  /*zod 유효성 검사 스키마 정의 */
  const schema = z.object({
    nickname: z.string().min(1, { message: '닉네임은 필수 입력값이에요.' }).max(12, { message: '닉네임은 최대 12자까지 입력 가능해요.' }),
    birth: z
      .string()
      .min(1, { message: '날짜는 필수 입력값이에요.' })
      .refine(
        (value) => {
          const date = new Date(value);
          return !isNaN(date.getTime());
        },
        { message: '유효한 날짜를 입력해주세요.' }
      ),
    favorGenres: z.array(z.string()).min(1, { message: '최소 1개 이상의 장르를 선택해주세요.' }),
  });

  /* useForm으로 User type의 Form 생성 */
  const methods = useForm<User>({
    mode: 'onChange', // form의 값이 변경될 때마다 validation check 실행
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      socialType: '',
      nickname: '',
      birth: '',
      favorGenres: [],
      profileImage: '',
    },
    shouldFocusError: false,
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
      setUser(response.memberInfo);
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
