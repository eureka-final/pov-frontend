import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading, Button, Modal, useOverlay } from 'pov-design-system';

import { HeadingContainer, ButtonContainer } from '@/pages/Review/ReviewWrite/ReviewWrite.style';
import Padded from '@/components/templates/Padded/Padded';
import ClubInfo from '@/components/club/ClubCreate/ClubInfo';
import PublicToggle from '@/components/club/ClubCreate/PublicToggle';
import { SettingClubImage } from '@/components/club/ClubCreate/SettingClubImage';
import GenreSelect from '@/components/common/GenreSelect/GenreSelect';
import { Container, Label } from '@/components/styles/InputLabel';
import { useCreateClubMutation } from '@/hooks/queries/useCreateClubMutation';
import { useToast } from '@/hooks/common/useToast';

const Index = () => {
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const navigate = useNavigate();
  const { createToast } = useToast();

  // 클럽 정보 상태
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [maxParticipants, setMaxParticipants] = useState<number>();
  const [imgUrl, setImgUrl] = useState<string | null>('');
  const [uploadImgUrl, setUploadImgUrl] = useState<string | null>('');

  // publicToggle 상태
  const [isPublic, setIsPublic] = useState<boolean>(true);

  // 장르 상태
  const [genres, setGenres] = useState<string[]>([]);

  const createClubMutation = useCreateClubMutation();
  // 데이터 통합 후 요청 전송
  const handleSubmit = () => {
    const requestData = {
      name,
      description,
      maxParticipants,
      clubFavorGenre: genres,
      isPublic,
      clubImage: imgUrl,
    };
    console.log(requestData);

    createClubMutation.mutate(
      { ...requestData },
      {
        onSuccess: () => {
          saveOpen();
        },
      }
    );
  };

  const handleClose = () => {
    saveClose();
    navigate(`/club`);
    createToast('클럽이 생성되었어요.', 'success');
  };

  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">클럽 만들기</Heading>
      </HeadingContainer>

      <SettingClubImage onImgUrl={setImgUrl} uploadImgUrl={uploadImgUrl} onUploadImgUrl={setUploadImgUrl} />

      <ClubInfo
        name={name}
        description={description}
        maxParticipants={maxParticipants!}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onMaxParticipantsChange={setMaxParticipants}
      />

      <Container>
        <Label>
          <Heading size="small">장르</Heading>
        </Label>
        <GenreSelect value={genres || []} onChange={(selectedGenres) => setGenres(selectedGenres)} />
      </Container>

      <PublicToggle isPublic={isPublic} onIsPublicChange={setIsPublic} />

      <ButtonContainer>
        <Button variant="primary" size="large" onClick={handleSubmit}>
          클럽 만들기
        </Button>
      </ButtonContainer>
      {/* 클럽 생성 모달 */}
      <Modal isOpen={isSaveOpen} closeModal={saveOpen}>
        <Heading>클럽이 생성되었습니다!</Heading>
        <ButtonContainer>
          <Button variant="primary" onClick={handleClose}>
            확인
          </Button>
        </ButtonContainer>
      </Modal>
    </Padded>
  );
};

export default Index;
