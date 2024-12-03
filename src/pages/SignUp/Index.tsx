import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import type { User } from '../../types/user';
import { postAuthSignUpApi } from '../../apis/auth/singupApi';

import { Heading, Paragraph, Button, Input } from 'pov-design-system';
import { SignUpSection, SignUpSectionHeader, SignUpSectionBody } from './Index.style';
import Padded from '../../components/templates/Padded/Padded';
import DetailHeader from '../../components/Header/DetailHeader';
import GenreSelect from '../../components/common/GenreSelect/GenreSelect';
import UploadProfileImgButton from '../../components/common/UploadProfileImgButton/UploadProfileImgButton';

const signInHeaderText = [
  {
    header: { firstLine: ['닉네임', '을'], secondLine: '입력해주세요' },
    paragraph: '어떤 이름으로 불리고 싶으신가요?',
  },
  {
    header: { firstLine: ['생년월일', '을'], secondLine: '입력해주세요' },
    paragraph: '연령대에 맞는 영화 추천을 위해 사용돼요.',
  },
  {
    header: { firstLine: ['관심있는 장르', '를'], secondLine: '선택해주세요' },
    paragraph: '최대 3개까지 선택할 수 있어요.',
  },
  {
    header: { firstLine: ['프로필 사진', '을'], secondLine: '등록해주세요' },
    paragraph: '등록하지 않으면 기본 프로필이 지정돼요.',
  },
  {
    header: { firstLine: ['회원정보', '를'], secondLine: '생성하고 있어요' },
    paragraph: '잠시만 기다려주세요.',
  },
];

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<number>(1);
  // const userOauthData = location.state; // TODO 연결 후 수정
  const userOauthData = { email: 'shinhm1@naver.com', socialType: 'NAVER' }; // TODO 연결 후 수정

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

  const onSubmit = (data: User) => {
    console.table(data);
  };

  // 컴포넌트 렌더링 시 step, userData 초기화
  useEffect(() => {
    setStep(1);
    setValue('email', userOauthData.email); // email 필드에 값 설정
    setValue('socialType', userOauthData.socialType); // socialType 필드에 값 설정
  }, []);

  const handleClickNextStep = async () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
    } else {
      await handleSubmit(onSubmit)();
      // const response = await postAuthSignUpApi(userData);
      // if (response) navigate('/main');
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
      <DetailHeader headerTitle="" onClick={() => handleClickPrevStep()} />
      <SignUpSection>
        <SignUpSectionHeader>
          <Heading size="xxLarge">
            <p style={{ display: 'inline', color: '#AA6FFF' }}>{signInHeaderText[step - 1].header.firstLine[0]}</p>
            <p style={{ display: 'inline' }}>{signInHeaderText[step - 1].header.firstLine[1]}</p>
          </Heading>
          <Heading size="xxLarge">{signInHeaderText[step - 1].header.secondLine}</Heading>
          <Paragraph>{signInHeaderText[step - 1].paragraph}</Paragraph>
        </SignUpSectionHeader>
        <SignUpSectionBody>
          {/* 닉네임 입력 단계 */}
          {step === 1 && <Input size="large" placeholder="닉네임을 입력해주세요" error={errors.nickname} {...register('nickname')}></Input>}

          {/* 생년월일 입력 단계 */}
          {step === 2 && (
            <Input size="large" type="date" placeholder="생년월일을 입력해주세요" max={getTodayDate()} error={errors.nickname} {...register('birth')}></Input>
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
        <Button size="large" onClick={() => handleClickNextStep()}>
          다음
        </Button>
      </SignUpSection>
    </Padded>
  );
};

export default Index;
