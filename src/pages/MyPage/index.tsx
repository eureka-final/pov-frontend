import Padded from '../../components/templates/Padded/Padded';
import { Logo, Heading, Paragraph } from 'pov-design-system';
import { MyPageWrapper, MemberInfoCard, MemberInfoContent, MemberInfoContentWrapper, MemberInfoContentLabel, MemberInfoContentText } from './index.styles';
import UploadProfileImgButton from '../../components/common/UploadProfileImgButton/UploadProfileImgButton';
import { useAuthStore } from '../../stores/useAuthStore';

const index = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <MyPageWrapper>
      <MemberInfoCard>
        <>
          <UploadProfileImgButton profileImageUrl={user!.profileImage} handleChangeProfileImage={() => null} />
          <Heading size="large">{user?.nickname}</Heading>
          <MemberInfoContent>
            <MemberInfoContentWrapper>
              <MemberInfoContentLabel size="large">소셜 로그인</MemberInfoContentLabel>
              <MemberInfoContentText size="large">{user?.socialType}</MemberInfoContentText>
            </MemberInfoContentWrapper>
            <MemberInfoContentWrapper>
              <MemberInfoContentLabel size="large">이메일</MemberInfoContentLabel>
              <MemberInfoContentText size="large">{user?.email}</MemberInfoContentText>
            </MemberInfoContentWrapper>
            <MemberInfoContentWrapper>
              <MemberInfoContentLabel size="large">생년월일</MemberInfoContentLabel>
              <MemberInfoContentText size="large">{user?.birth}</MemberInfoContentText>
            </MemberInfoContentWrapper>
          </MemberInfoContent>
        </>
      </MemberInfoCard>
    </MyPageWrapper>
  );
};

export default index;
