import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';
import type { User } from '../../types/user';
import { useAuthStore } from '../../stores/useAuthStore';
import useFunnel from '../../hooks/funnel/useFunnel';
import SignUpFunnel from '../../components/signUp/SignUpFunnel';
import { postSignUp } from '../../apis/auth/postAuth';
import { HTTP_STATUS_CODE } from '../../constants/api';
import { useToast } from '../../hooks/common/useToast';
import { useState } from 'react';
import { ModalBodyWrapper, ModalWrapper } from '../Oauth/Index.styles';
import { Heading, Body, Button, useOverlay, Modal } from 'pov-design-system';

const signInSteps = ['nickname', 'birth', 'favorGenres', 'success'];

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { Step, Funnel, setStep } = useFunnel(signInSteps[0]);
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);
  const { createToast } = useToast();
  const { isErrorOpen, errorOpen, errorClose } = useOverlay();
  const [errorMsg, setErrorMsg] = useState<string>('');

  /*zod 유효성 검사 스키마 정의 */
  const schema = z.object({
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
  });

  /* useForm으로 User type의 Form 생성 */
  const methods = useForm<User>({
    mode: 'onChange', // form의 값이 변경될 때마다 validation check 실행
    resolver: zodResolver(schema),
    defaultValues: {
      nickname: '',
      birth: '',
      favorGenres: [],
      email: location.state.email,
      profileImage: location.state.profileImage,
      socialType: location.state.socialType,
    },
  });
  const { getValues, reset } = methods;

  /* Funnel Step handler 함수 */
  const stepHandler = (nextStep: string) => {
    setStep(nextStep);
  };

  /* Form 제출 시 실행될 handler 함수 */
  const onSubmit = async (data: User) => {
    console.log(data);
    try {
      const response = await postSignUp(data);

      setLoggedIn(true);
      setUser(response.data.memberInfo);
      setStep(signInSteps[3]);
    } catch (error) {
      console.error('회원가입 실패:', error);

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        // 닉네임이 중복된 경우
        if (status === HTTP_STATUS_CODE.CONFLICT) {
          createToast('중복된 닉네임이에요. 다른 닉네임을 사용해주세요.');
          reset();
          setStep(signInSteps[0]);
          return;
        }

        if (status == HTTP_STATUS_CODE.BAD_REQUEST) {
          setErrorMsg('서비스의 문제로 회원가입에 실패했어요.');
          errorOpen();
        }

        if (status == HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
          setErrorMsg('네트워크 문제로 회원가입에 실패했어요.');
          errorOpen();
        }
      } else {
        setErrorMsg('알 수 없는 오류로 인해 회원가입에 실패했어요.');
        errorOpen();
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <SignUpFunnel steps={signInSteps} Funnel={Funnel} Step={Step} stepHandler={stepHandler} onSubmit={() => onSubmit(getValues())}></SignUpFunnel>
      <Modal isOpen={isErrorOpen} closeModal={errorClose}>
        <ModalWrapper>
          <Heading size="medium">로그인 실패</Heading>
          <ModalBodyWrapper>
            <Body size="large">{`${errorMsg}`}</Body>
            <Body size="large">{`다시 시도해주세요.`}</Body>
          </ModalBodyWrapper>
          <Button
            variant="primary"
            onClick={() => {
              window.location.href = '/login';
            }}
            css={{ width: '100%', marginTop: '8px' }}
          >
            확인
          </Button>
        </ModalWrapper>
      </Modal>
    </FormProvider>
  );
};

export default Index;
