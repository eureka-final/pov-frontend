import Padded from '../../components/templates/Padded/Padded';
import { SignInSection, SignInSectionHeader, SignInButtonWrapper, NaverSignInButton, GoogleSignInButton } from './Index.style';
import { Logo, Heading, Paragraph } from 'pov-design-system';
// import { EXCEPTION_POINTS } from '../../constants/api';

const Index = () => {
  /* POV Server Login URL로 리디렉션 */
  const redirectToNaverLogin = () => {
    const authUrl = `${import.meta.env.VITE_BASE_URL}/oauth2/authorization/naver`;
    console.log(authUrl);
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

  //www.point-of-views.com/oauth2/authorization/naver
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

export default Index;
