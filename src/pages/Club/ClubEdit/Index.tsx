import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Padded from '../../../components/templates/Padded/Padded';
import { Heading, Button, Modal, useOverlay } from 'pov-design-system';
import ClubInfo from '../../../components/club/ClubCreate/ClubInfo';
import PublicToggle from '../../../components/club/ClubCreate/PublicToggle';
import { HeadingContainer, ButtonContainer } from '../../Review/ReviewWrite/ReviewWrite.style';
import { SettingClubImage } from '../../../components/club/ClubCreate/SettingClubImage';
import { useEditClubMutation } from '../../../hooks/queries/useEditClubMutation';
import GenreSelect from '../../../components/common/GenreSelect/GenreSelect';
import { Container, Label } from '../../../components/styles/InputLabel';
import { useClubDetailQuery } from '../../../hooks/queries/useClubsQuery';

const Index = () => {
  const { clubId } = useParams<{ clubId: string }>();
  const navigate = useNavigate();

  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();

  // 클럽 정보 상태
  const { clubsData } = useClubDetailQuery(clubId!);
  const [name, setName] = useState<string>(clubsData ? clubsData.data.clubName : '');
  const [description, setDescription] = useState<string>(clubsData ? clubsData.data.clubDescription : '');
  const [maxParticipants, setMaxParticipants] = useState<number | null>(clubsData ? clubsData.data.participant : null);
  const [imgUrl, setImgUrl] = useState<string | null>('');
  const [uploadImgUrl, setUploadImgUrl] = useState<string | null>(clubsData ? clubsData.data.clubImage : null);
  const [genres, setGenres] = useState<string[]>(clubsData ? clubsData.data.clubFavorGenres : []);
  const [isPublic, setIsPublic] = useState<boolean>(clubsData ? clubsData.data.isPublic : false);

  const editClubMutation = useEditClubMutation();
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

    editClubMutation.mutate(
      { clubId: clubId!, ...requestData },
      {
        onSuccess: () => {
          saveOpen();
        },
      }
    );
  };

  const handleClose = () => {
    saveClose();
    navigate(`/club/${clubId}/detail`);
  };

  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">클럽 수정하기</Heading>
      </HeadingContainer>

      <SettingClubImage onImgUrl={setImgUrl} uploadImgUrl={uploadImgUrl} onUploadImgUrl={setUploadImgUrl} />

      <ClubInfo
        name={name}
        description={description}
        maxParticipants={maxParticipants}
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
          클럽 수정하기
        </Button>
      </ButtonContainer>
      {/* 클럽 생성 모달 */}
      <Modal isOpen={isSaveOpen} closeModal={saveOpen}>
        <Heading>클럽이 수정되었습니다!</Heading>
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
