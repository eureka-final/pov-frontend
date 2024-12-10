import axios from 'axios';

/* -------- Naver --------- */
// Naver Access Token 발급
const getNaverAccessToken = async (code: string, state: string) => {
  try {
    // Access Token 발급 API 호출
    const tokenResponse = await axios.post('/api/naver/token', null, {
      params: {
        grant_type: 'authorization_code',
        client_id: import.meta.env.VITE_NAVER_CLIENT_ID,
        client_secret: import.meta.env.VITE_NAVER_CLIENT_SECRET,
        code,
        state,
      },
    });

    // Access Token 반환
    const { access_token } = tokenResponse.data;
    return access_token;
  } catch (error) {
    console.error(error);
  }
};

// Naver 사용자 정보 요청
const getNaverUserInfo = async (accessToken: string) => {
  try {
    // Access Token을 이용해 사용자 정보 요청
    if (accessToken) {
      const userResponse = await axios.get('/api/naver/userInfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const email = userResponse.data.response.email;
      const profileImage = userResponse.data.response.profile_image;
      return { email: email, profileImage: profileImage };
    }
  } catch (error) {
    console.error('error occured during get user info :', error);
  }
};

/* -------- Google --------- */
// Google Access Token 발급
const getGoogleAccessToken = async (code: string) => {
  try {
    // Access Token 발급 API 호출
    const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', null, {
      params: {
        code: code,
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
      },
    });

    // Access Token 저장
    const { access_token } = tokenResponse.data;
    return access_token;
    // sessionStorage.setItem('refreshToken', refresh_token); // Refresh Token을 sessionStorage에 저장
  } catch (error) {
    console.error('error occured during get google access token :', error);
  }
};

// Google 사용자 정보 요청
const getGoogleUserInfo = async (accessToken: string) => {
  try {
    const userInfoResponse = await axios.get('/api/google/userInfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const email = userInfoResponse.data.email;
    const profileImage = userInfoResponse.data.picture;

    return { email: email, profileImage: profileImage };
  } catch (error) {
    console.error('error occured during get google user info :', error);
  }
};

/* -------- export APIs --------- */
export const getNaverUserInfoApi = async (code: string, state: string) => {
  const naverAccessToken = await getNaverAccessToken(code, state);
  const naverUserInfo = await getNaverUserInfo(naverAccessToken);
  return naverUserInfo;
};

export const getGoogleUserInfoApi = async (code: string) => {
  const googleAccessToken = await getGoogleAccessToken(code);
  const googleUserInfo = await getGoogleUserInfo(googleAccessToken);
  return googleUserInfo;
};
