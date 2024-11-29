import Padded from '../../components/templates/Padded/Padded';
import { SignInSection, SignInSectionHeader, SignInButtonWrapper, NaverSignInButton, GoogleSignInButton } from './index.style';
import { Logo, Heading, Paragraph } from 'pov-design-system';

const index = () => {
  /* 네이버 OAuth 서버 URL로 리디렉션 */
  const redirectToNaverLogin = () => {
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_NAVER_REDIRECT_URI;
    const state = crypto.randomUUID(); // 임의로 생성한 State 값

    const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    window.location.href = authUrl;
  };

  /* 구글 OAuth 서버 URL로 리디렉션 */
  const redirectToGoogleLogin = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${clientId}
		&redirect_uri=${redirectUri}
		&response_type=code
		&scope=openid email profile`;

    window.location.href = authUrl;
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
          <GoogleSignInButton onClick={redirectToGoogleLogin}>
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
