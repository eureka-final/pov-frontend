import { Heading, Body, Button, Modal, useOverlay } from 'pov-design-system';
import { Section, Header, Label, RowWrapper, ButtonWrapper, TextButton } from './index.styles';
import ThemeToggle from '../../../components/common/Toggle/ThemeToggle';
import NoticeToggle from '../../../components/common/Toggle/NoticeToggle';
import { useClearUser } from '../../../stores/useAuthStore';
import { deleteMember } from '../../../apis/member/deleteMember';
import { postLogoutApi } from '../../../apis/auth/logoutApi';
import { useToast } from '../../../hooks/common/useToast';

const index = () => {
  const { isOpen: isLogoutConfirmOpen, open: logoutConfirmOpen, close: logoutConfirmClose } = useOverlay();
  const { isOpen: isLogoutOpen, open: logoutOpen, close: logoutClose } = useOverlay();
  const { isOpen: isSignOutConfirmOpen, open: signOutConfirmOpen, close: signOutConfirmClose } = useOverlay();
  const { isOpen: isSignOutOpen, open: signOutOpen, close: signOutClose } = useOverlay();
  const { createToast } = useToast();
  const handleLogoutClick = async () => {
    const response = await postLogoutApi();
    logoutConfirmClose();
    if (response) {
      useClearUser();
      logoutOpen();
    } else {
      createToast('로그아웃에 실패했어요. 다시 시도해주세요.');
    }
  };

  const handleSignOutClick = async () => {
    const response = await deleteMember();
    signOutConfirmClose();
    if (response) {
      useClearUser();
      signOutOpen();
    } else {
      createToast('회원 탈퇴에 실패했어요. 다시 시도해주세요.');
    }
  };

  return (
    <Section>
      <Header size="xLarge">설정</Header>
      <Label size="large" css={{ marginBottom: '24px' }}>
        서비스 설정
      </Label>
      <RowWrapper>
        <Body size="xLarge">테마 설정</Body>
        <ThemeToggle></ThemeToggle>
      </RowWrapper>
      <RowWrapper>
        <Body size="xLarge">알림 설정</Body>
        <NoticeToggle></NoticeToggle>
      </RowWrapper>
      <Label size="large" css={{ marginTop: '48px', marginBottom: '24px' }}>
        계정 설정
      </Label>
      <RowWrapper>
        <TextButton size="xLarge" onClick={logoutConfirmOpen}>
          로그아웃
        </TextButton>
      </RowWrapper>
      <RowWrapper>
        <TextButton size="xLarge" onClick={signOutConfirmOpen}>
          회원 탈퇴
        </TextButton>
      </RowWrapper>

      {/* 로그아웃 확인 모달 */}
      <Modal isOpen={isLogoutConfirmOpen} closeModal={logoutConfirmClose}>
        <Heading css={{ marginBottom: '24px' }}>정말 로그아웃하시겠어요?</Heading>
        <ButtonWrapper>
          <Button variant="secondary" size="small" onClick={logoutConfirmClose}>
            취소하기
          </Button>
          <Button variant="primary" size="small" onClick={handleLogoutClick}>
            로그아웃하기
          </Button>
        </ButtonWrapper>
      </Modal>
      {/* 로그아웃 완료 모달 */}
      <Modal isOpen={isLogoutOpen} closeModal={logoutClose}>
        <Heading css={{ marginBottom: '24px' }}>로그아웃이 완료되었어요.</Heading>
        <ButtonWrapper>
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            홈으로 돌아가기
          </Button>
        </ButtonWrapper>
      </Modal>

      {/* 회원탈퇴 확인 모달 */}
      <Modal isOpen={isSignOutConfirmOpen} closeModal={signOutConfirmClose}>
        <Heading css={{ marginBottom: '24px' }}>정말 탈퇴하시겠어요?</Heading>
        <ButtonWrapper>
          <Button variant="secondary" size="small" onClick={signOutConfirmClose}>
            취소하기
          </Button>
          <Button variant="primary" size="small" onClick={handleSignOutClick}>
            탈퇴하기
          </Button>
        </ButtonWrapper>
      </Modal>

      {/* 회원탈퇴 완료 모달 */}
      <Modal isOpen={isSignOutOpen} closeModal={signOutClose}>
        <Heading css={{ marginBottom: '24px' }}>탈퇴가 완료되었어요.</Heading>
        <ButtonWrapper>
          <Button
            variant="primary"
            size="small"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            홈으로 돌아가기
          </Button>
        </ButtonWrapper>
      </Modal>
    </Section>
  );
};

export default index;
