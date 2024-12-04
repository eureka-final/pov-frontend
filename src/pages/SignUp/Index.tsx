import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import type { User } from '../../types/user';
import { postSignUpApi } from '../../apis/auth/signupApi';

import { Heading, Paragraph, Button, Input, Icon } from 'pov-design-system';
import { SignUpSection, SignUpSectionHeader, SignUpSectionBody, ButtonContainer } from './Index.style';
import Padded from '../../components/templates/Padded/Padded';
import GenreSelect from '../../components/common/GenreSelect/GenreSelect';
import UploadProfileImgButton from '../../components/common/UploadProfileImgButton/UploadProfileImgButton';
import { SIGN_UP_HEADER_TEXTS } from '../../constants/texts';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userOauthData = { email: 'shinhm1@naver.com', socialType: 'NAVER' }; // TODO 연결 후 수정
  // const userOauthData = location.state; // TODO 연결 후 수정
  const [step, setStep] = useState<number>(1);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: '',
      socialType: '',
      nickname: '',
      birth: '',
      favorGenres: [],
      profileImage: '',
    },
  });

  const onSubmit = async (data: User) => {
    try {
      await postSignUpApi(data);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 최소 3초 로딩
      navigate('/main'); // 로딩 완료 후 main 페이지로 이동
    } catch (error) {
      console.error('회원가입 실패:', error);
      navigate('/login'); // 회원가입에 실패한 경우 login 페이지로 이동
    }
  };

  // 컴포넌트 렌더링 시 step, userData 초기화
  useEffect(() => {
    setStep(1);
    setValue('email', userOauthData.email); // email 필드에 값 설정
    setValue('socialType', userOauthData.socialType); // socialType 필드에 값 설정
  }, []);

  useEffect(() => {
    if (step == 5) {
      handleSubmit(onSubmit)();
    }
  }, [step]);

  const handleClickNextStep = async () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    }
  };

  const handleClickPrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
    else navigate(-1);
  };

  const getTodayDate = () => {
    const today = new Date();
    const formattedDate = today
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\. /g, '-')
      .replace('.', '');

    return formattedDate;
  };

  /* 메인 컴포넌트 */
  return (
    <Padded>
      <SignUpSection>
        <SignUpSectionHeader>
          <Icon icon="angleleft" css={{ marginBottom: '32px' }} onClick={handleClickPrevStep} />
          <Heading size="xxLarge">
            <p style={{ display: 'inline', color: '#AA6FFF' }}>{SIGN_UP_HEADER_TEXTS[step - 1].header.firstLine[0]}</p>
            <p style={{ display: 'inline' }}>{SIGN_UP_HEADER_TEXTS[step - 1].header.firstLine[1]}</p>
          </Heading>
          <Heading size="xxLarge">{SIGN_UP_HEADER_TEXTS[step - 1].header.secondLine}</Heading>
          <Paragraph>{SIGN_UP_HEADER_TEXTS[step - 1].paragraph}</Paragraph>
        </SignUpSectionHeader>
        <SignUpSectionBody>
          {/* 닉네임 입력 단계 */}
          {step === 1 && (
            <div style={{ width: '100%' }}>
              <Input size="large" placeholder="닉네임을 입력해주세요" error={errors.nickname} {...register('nickname')} />
            </div>
          )}

          {/* 생년월일 입력 단계 */}
          {step === 2 && (
            <div style={{ width: '100%' }}>
              <Input size="large" type="date" placeholder="생년월일을 입력해주세요" max={getTodayDate()} error={errors.nickname} {...register('birth')} />
            </div>
          )}

          {/* 선호 장르 입력 단계 */}
          {step === 3 && (
            <Controller
              name="favorGenres"
              control={control}
              render={({ field }) => (
                <GenreSelect
                  value={field.value || []} // undefined 방지
                  onChange={(selectedGenres) => field.onChange(selectedGenres)}
                />
              )}
            />
          )}

          {/* 프로필 사진 등록 단계 */}
          {step === 4 && (
            <Controller
              name="profileImage"
              control={control}
              render={({ field }) => <UploadProfileImgButton profileImageUrl={field.value} handleChangeProfileImage={field.onChange} />}
            />
          )}
        </SignUpSectionBody>
        {step < 5 && (
          <ButtonContainer>
            <Button css={{ width: '100%' }} size="large" onClick={() => handleClickNextStep()}>
              다음
            </Button>
          </ButtonContainer>
        )}
      </SignUpSection>
    </Padded>
  );
};

export default Index;
