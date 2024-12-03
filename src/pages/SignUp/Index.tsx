import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SignUpSection, SignUpSectionHeader, SignUpSectionBody } from './Index.style';
import { Heading, Paragraph, Button } from 'pov-design-system';

import type { User } from '../../types/user';
import { postAuthSignUpApi } from '../../apis/auth/singupApi';

import Padded from '../../components/templates/Padded/Padded';
import DetailHeader from '../../components/Header/DetailHeader';
import NicknameStep from '../../components/signIn/NicknameStep';
import BirthStep from '../../components/signIn/BirthStep';
import GenreStep from '../../components/signIn/GenreStep';
import ProfileImageStep from '../../components/signIn/ProfileImageStep';
import { useForm } from 'react-hook-form';

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
];

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState<number>(1);
  const userOauthData = location.state;
  const [userData, setUserData] = useState<User>({
    email: '',
    nickname: '',
    birth: '',
    favorGenres: [],
    socialType: '',
    profileImage: '',
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // TODO API 수정
  };

  // 컴포넌트 렌더링 시 step, userData 초기화
  useEffect(() => {
    setStep(1);
    setUserData({
      nickname: '',
      birth: '',
      profileImage: '',
      favorGenres: [],
      email: 'asdf1234@gmail.com', // userOauthData.email, // TODO 로그인 브랜치 변경 후 수정
      socialType: 'GOOGLE', // userOauthData.socialType, // TODO 로그인 브랜치 변경 후 수정
    });
  }, []);

  const handleClickNextStep = async () => {
    if (step < 5) {
      setStep((prev) => prev + 1);
      console.table(userData);
    } else {
      const response = await postAuthSignUpApi(userData);
      if (response) navigate('/main');
    }
  };

  const handleClickPrevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
    else navigate(-1);
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      nickname: event.target.value,
    }));
  };

  const handleBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      birth: event.target.value,
    }));
  };

  const addGenre = (genre: string) => {
    setUserData(
      (prev) =>
        ({
          ...prev,
          favorGenres: [...(prev.favorGenres || []), genre],
        }) as User
    );
  };

  const removeGenre = (genre: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      favorGenres: prevUserData.favorGenres?.filter((g) => g !== genre) || [],
    }));
  };

  const handleChangeProfileImage = (profileImageUrl: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      profileImage: profileImageUrl,
    }));
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
          {step === 1 && <NicknameStep nickname={userData.nickname} handleNicknameChange={handleNicknameChange}></NicknameStep>}
          {step === 2 && <BirthStep birth={userData.birth} handleBirthChange={handleBirthChange}></BirthStep>}
          {step === 3 && <GenreStep selectedGenres={userData.favorGenres} addGenre={addGenre} removeGenre={removeGenre}></GenreStep>}
          {step === 4 && <ProfileImageStep profileImageUrl={userData.profileImage} handleChangeProfileImageUrl={handleChangeProfileImage}></ProfileImageStep>}
        </SignUpSectionBody>
        <Button size="large" onClick={() => handleClickNextStep()}>
          다음
        </Button>
      </SignUpSection>
    </Padded>
  );
};

export default Index;
