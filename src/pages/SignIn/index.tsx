import Padded from '../../components/templates/Padded/Padded';
import { SignInSection, SignInSectionHeader, SignInButtonWrapper, NaverSignInButton, GoogleSignInButton } from './index.style';
import { Logo, Heading, Paragraph } from 'pov-design-system';

const index = () => {
  const redirectToNaverLogin = async () => {
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
    const state = crypto.randomUUID(); // 임의로 생성한 State 값

    const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    window.location.href = authUrl;
  };

  const handleGoogleLogin = () => {
    console.log('구글 로그인 구현');
  };

  return (
    <Padded>
      <SignInSection>
        <SignInSectionHeader>
          <Logo icon="type1" />
          <Heading size="xxLarge">로그인</Heading>
          <div>
            <Paragraph>SNS로 간편하게 로그인하고</Paragraph>
            <Paragraph> 더 많은 서비스를 이용해보세요.</Paragraph>
          </div>
        </SignInSectionHeader>
        <SignInButtonWrapper>
          <NaverSignInButton onClick={redirectToNaverLogin}>
            <Heading size="small" css={{ width: '100%' }}>
              네이버로 시작하기
            </Heading>
          </NaverSignInButton>
          <GoogleSignInButton onClick={handleGoogleLogin}>
            <Heading size="small" css={{ width: '100%' }}>
              Google로 시작하기
            </Heading>
          </GoogleSignInButton>
        </SignInButtonWrapper>
      </SignInSection>
    </Padded>
  );
};

export default index;
