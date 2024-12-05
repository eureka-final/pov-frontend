import { useState } from 'react';
import Padded from '../../../components/templates/Padded/Padded';
import { Heading, Button, Modal, useOverlay } from 'pov-design-system';
import ClubInfo from '../../../components/club/ClubCreate/ClubInfo';
import Keyword from '../../../components/review/ReviewWrite/Keyword';
import PublicToggle from '../../../components/club/ClubCreate/PublicToggle';
import { HeadingContainer, ButtonContainer } from '../../Review/ReviewWrite/ReviewWrite.style';
import { SettingClubImage } from '../../../components/club/ClubCreate/SettingClubImage';
// import { useCreateClubMutation } from '../../../hooks/queries/useCreateClubMutation';

const Index = () => {
  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();

  // 클럽 정보 상태
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [maxParticipants, setMaxParticipants] = useState<string>('');

  // publicToggle 상태
  const [isPublic, setIsPublic] = useState<boolean>(true);

  // Keyword 상태
  const [keywords, setKeywords] = useState([
    { text: '감동적인', cancel: false },
    { text: '재미있는', cancel: false },
    { text: '몰입감 있는', cancel: false },
    { text: '연기력이 뛰어난', cancel: false },
    { text: '연출이 뛰어난', cancel: false },
    { text: '지루한', cancel: false },
    { text: '연기가 어색한', cancel: false },
    { text: '연출이 어색한', cancel: false },
    { text: '전개가 느린', cancel: false },
    { text: '기대이하의', cancel: false },
  ]);

  const handleKeywordsChange = (selectedKeywords: string[]) => {
    // 부모 상태 업데이트
    setKeywords((prevKeywords) =>
      prevKeywords.map((keyword) => ({
        ...keyword,
        cancel: selectedKeywords.includes(keyword.text),
      }))
    );
  };

  //   const createClubMutation = useCreateClubMutation();
  // 데이터 통합 후 요청 전송
  const handleSubmit = () => {
    // 선택된 키워드만 필터링
    const selectedKeywords = keywords.filter((keyword) => keyword.cancel).map((keyword) => keyword.text);

    const requestData = {
      name,
      description,
      maxParticipants,
      clubFavorGenre: selectedKeywords,
      isPublic,
    };
    console.log(requestData);

    // createClubMutation.mutate(
    //   { ...requestData },
    //   {
    //     onSuccess: () => {
    //       console.log('클럽 생성 성공!');
    //       saveClose();
    //     },
    //   }
    // );
  };

  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">클럽 만들기</Heading>
      </HeadingContainer>

      <SettingClubImage />
      <ClubInfo
        name={name}
        description={description}
        maxParticipants={maxParticipants}
        onNameChange={setName}
        onDescriptionChange={setDescription}
        onMaxParticipantsChange={setMaxParticipants}
      />
      <Keyword keywords={keywords} onKeywordsChange={handleKeywordsChange} />
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
          <Button variant="primary" onClick={saveOpen}>
            확인
          </Button>
        </ButtonContainer>
      </Modal>
    </Padded>
  );
};

export default Index;
