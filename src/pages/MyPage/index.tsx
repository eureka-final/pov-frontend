import { Heading, Modal, useOverlay, Button, Input, Icon } from 'pov-design-system';
import {
  MyPageWrapper,
  Section,
  MemberInfoCard,
  MemberInfoContent,
  MemberInfoContentWrapper,
  MemberInfoContentLabel,
  MemberInfoContentText,
  ButtonWrapper,
} from './index.styles';
import UploadProfileImgButton from '../../components/common/UploadProfileImgButton/UploadProfileImgButton';
import { useAuthStore } from '../../stores/useAuthStore';
import Genres from '../../components/common/Genres/Genres';
import { formatDateTime } from '../../utils/formatDateTime';
import { User } from '../../types/user';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { putFavorGenres, putNickname } from '../../apis/member/putMember';
import GenreSelect from '../../components/common/GenreSelect/GenreSelect';
import PaymentLogSection from '../../components/premieres/Section/PaymentLogSection';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../hooks/common/useToast';

const Index = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const [newNickname, setNewNickname] = useState<string>('');
  const [newFavorGenres, setNewFavorGenres] = useState<string[]>(user!.favorGenres);

  const { isOpen: isChangeNicknameOpen, open: changeNicknameOpen, close: changeNicknameClose } = useOverlay();
  const { isOpen: isChangeFavorGenresOpen, open: changeFavorGenresOpen, close: changeFavorGenresClose } = useOverlay();

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNickname(event.target.value);
  };

  const handlePutNickname = async () => {
    const response = await putNickname(newNickname);
    if (response) {
      const newUser: User = { ...user!, nickname: newNickname };
      setUser(newUser);
      createToast('닉네임 변경에 성공했어요.', 'success');
    } else {
      createToast('닉네임 변경에 실패했어요.', 'error');
    }
    changeNicknameClose();
  };

  const handlePutFavorGenres = async () => {
    const response = await putFavorGenres(newFavorGenres);
    if (response) {
      const newUser: User = { ...user!, favorGenres: newFavorGenres };
      setUser(newUser);
      createToast('선호 장르 변경에 성공했어요.', 'success');
    } else {
      createToast('선호 장르 변경에 실패했어요.', 'error');
    }
    changeFavorGenresClose();
  };

  const handlePutProfileImage = (profileImage: string) => {
    const newUser: User = { ...user!, profileImage: profileImage };
    console.log(newUser);
    setUser(newUser);
  };

  return (
    <>
      <MyPageWrapper>
        <Section>
          <MemberInfoCard>
            <>
              <div style={{ position: 'absolute', top: '20px', right: '20px', color: theme.teritary }} onClick={() => navigate('/settings')}>
                <Icon icon="setting" css={{ width: '20px' }} />
              </div>
              <UploadProfileImgButton profileImageUrl={user!.profileImage} handleChangeProfileImage={handlePutProfileImage} />
              <Heading size="large" onClick={() => changeNicknameOpen()}>
                {user?.nickname}
              </Heading>
              <MemberInfoContent>
                <MemberInfoContentWrapper>
                  <MemberInfoContentLabel size="large">이메일</MemberInfoContentLabel>
                  <MemberInfoContentText size="large">{user?.email}</MemberInfoContentText>
                </MemberInfoContentWrapper>
                <MemberInfoContentWrapper>
                  <MemberInfoContentLabel size="large">생년월일</MemberInfoContentLabel>
                  <MemberInfoContentText size="large">{formatDateTime(user!.birth)}</MemberInfoContentText>
                </MemberInfoContentWrapper>
                <MemberInfoContentWrapper onClick={changeFavorGenresOpen}>
                  <MemberInfoContentLabel size="large">선호 장르</MemberInfoContentLabel>
                  <MemberInfoContentText size="large">{<Genres genres={user!.favorGenres} />}</MemberInfoContentText>
                </MemberInfoContentWrapper>
              </MemberInfoContent>
            </>
          </MemberInfoCard>
        </Section>
        <Section>
          <Heading size="large">시사회 결제 내역</Heading>
          <PaymentLogSection />
        </Section>
      </MyPageWrapper>
      {/* 닉네임 변경 모달 */}
      <Modal isOpen={isChangeNicknameOpen} closeModal={changeNicknameClose}>
        <Heading css={{ marginBottom: '24px' }}>닉네임을 변경하시겠어요?</Heading>
        <Input placeholder="닉네임을 입력해주세요" value={newNickname} onChange={handleNicknameChange} />
        <ButtonWrapper>
          <Button variant="secondary" size="small" onClick={changeNicknameClose}>
            취소하기
          </Button>
          <Button variant="primary" size="small" onClick={handlePutNickname}>
            변경하기
          </Button>
        </ButtonWrapper>
      </Modal>
      {/* 선호 장르 변경 모달 */}
      <Modal isOpen={isChangeFavorGenresOpen} closeModal={changeFavorGenresClose}>
        <Heading css={{ marginBottom: '24px' }}>선호 장르를 변경하시겠어요?</Heading>
        <div style={{ width: '360px' }}>
          <GenreSelect value={newFavorGenres} onChange={setNewFavorGenres}></GenreSelect>
        </div>
        <ButtonWrapper>
          <Button variant="secondary" size="small" onClick={changeFavorGenresClose}>
            취소하기
          </Button>
          <Button variant="primary" size="small" onClick={handlePutFavorGenres}>
            변경하기
          </Button>
        </ButtonWrapper>
      </Modal>
    </>
  );
};

export default Index;
