import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Padded from '../../../components/templates/Padded/Padded';
import ReactEditor from '../../../components/review/ReviewWrite/ReactEditor';
import { Heading, Body, Button, Modal, useOverlay, Logo } from 'pov-design-system';
import Keyword from '../../../components/review/ReviewWrite/Keyword';
import ReviewToggle from '../../../components/review/ReviewWrite/ReviewToggle';
import { HeadingContainer, ButtonContainer, Vs, Item } from '../ReviewWrite/ReviewWrite.style';
import { useEditReviewMutation } from '../../../hooks/queries/useEditReviewMutation';
import { useEditReviewQuery } from '../../../hooks/queries/useEditReviewQuery';

const Index = () => {
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const { mutate } = useEditReviewMutation();
  const { existingReview } = useEditReviewQuery(movieId!, reviewId!);

  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { isOpen: isTempOpen, open: tempOpen, close: tempClose } = useOverlay();

  // ReactEditor 상태
  const [title, setTitle] = useState(existingReview?.title || '');
  const [content, setContent] = useState(existingReview?.content || '');

  // Keyword 상태
  const [keywords, setKeywords] = useState(
    existingReview?.keywords || [
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
    ]
  );

  const handleKeywordsChange = (selectedKeywords: string[]) => {
    // 부모 상태 업데이트
    setKeywords((prevKeywords) =>
      prevKeywords.map((keyword) => ({
        ...keyword,
        cancel: selectedKeywords.includes(keyword.text),
      }))
    );
  };

  // ReviewToggle 상태
  const [spoiler, setSpoiler] = useState(existingReview?.spoiler || false);

  // Modal 상태
  const [preference, setPreference] = useState(existingReview?.preference || '');

  interface Keyword {
    text: string;
    cancel: boolean;
  }
  // 데이터 통합 후 요청 전송
  const handleSubmit = () => {
    // 선택된 키워드만 필터링
    const selectedKeywords = keywords.filter((keyword: Keyword) => keyword.cancel).map((keyword) => keyword.text);
    const requestData = {
      title,
      contents: content,
      preference,
      keywords: selectedKeywords,
      spoiler,
    };
    console.log(requestData);

    mutate(
      { movieId: movieId!, reviewId: reviewId!, ...requestData },
      {
        onSuccess: () => {
          console.log('리뷰 수정 성공!');
          saveClose();
        },
      }
    );
  };

  // 임시저장
  const handleTemporary = () => {
    const tempData = {
      title,
      content,
      preference,
      keywords,
      spoiler,
    };

    try {
      localStorage.setItem(`${reviewId}`, JSON.stringify(tempData));
      tempOpen();
      console.log(tempData);
    } catch (error) {
      console.error('임시 저장 실패:', error);
      alert('임시 저장 중 문제가 발생했습니다.');
    }
  };

  // 로컬 스토리지에서 임시저장 데이터 복원
  useEffect(() => {
    const savedDraft = localStorage.getItem(`${reviewId}`);
    if (savedDraft) {
      try {
        const draftData = JSON.parse(savedDraft);
        setTitle(draftData.title || '');
        setContent(draftData.content || '');
        setKeywords(draftData.keywords || []);
        setSpoiler(draftData.spoiler || false);
        setPreference(draftData.preference || '');
        console.log(draftData.content);
      } catch (error) {
        console.error('임시 저장된 데이터를 불러오는 데 실패했습니다:', error);
      }
    }
  }, []);
  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">리뷰 수정하기</Heading>
      </HeadingContainer>

      <ReactEditor title={title} content={content} onChangeTitle={setTitle} onChangeContent={setContent} />
      <Keyword keywords={keywords} onKeywordsChange={handleKeywordsChange} />
      <ReviewToggle spoiler={spoiler} onSpoilerChange={setSpoiler} />

      <ButtonContainer>
        <Button variant="secondary" size="large" onClick={handleTemporary}>
          임시 저장하기
        </Button>
        <Button variant="primary" size="large" onClick={saveOpen}>
          저장하기
        </Button>
      </ButtonContainer>

      {/* 임시 저장 모달 */}
      <Modal isOpen={isTempOpen} closeModal={tempClose}>
        <Heading>임시 저장 되었습니다!</Heading>
        <ButtonContainer>
          <Button variant="primary" onClick={tempClose}>
            확인
          </Button>
        </ButtonContainer>
      </Modal>

      {/* 저장하기 버튼 누르면 나오는 모달창 */}
      <Modal isOpen={isSaveOpen} closeModal={saveClose}>
        <div>
          <Heading size="medium">영화를 평가해주세요.</Heading>
          <Body>이 영화에 대한 전반적인 평가는 어떠신가요?</Body>
          <ButtonContainer>
            <Item onClick={() => setPreference('bad')} isSelected={preference === 'bad'}>
              <Logo icon="type5" />
              <Body>별로에요!</Body>
            </Item>
            <Vs>
              <Body>vs</Body>
            </Vs>
            <Item onClick={() => setPreference('good')} isSelected={preference === 'good'}>
              <Logo icon="type6" />
              <Body>재밌었어요!</Body>
            </Item>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant="primary" onClick={handleSubmit} css={{ width: '100%' }}>
              평가하기
            </Button>
          </ButtonContainer>
        </div>
      </Modal>
    </Padded>
  );
};

export default Index;
