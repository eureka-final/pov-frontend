import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Heading, Body, Button, Modal, useOverlay, Logo } from 'pov-design-system';

import { HeadingContainer, ButtonContainer, Vs, Item } from '@/pages/Review/ReviewWrite/ReviewWrite.style';
import Padded from '@/components/templates/Padded/Padded';
import ReactEditor from '@/components/review/ReviewWrite/ReactEditor';
import ReviewToggle from '@/components/review/ReviewWrite/ReviewToggle';
import { useEditReviewMutation } from '@/hooks/queries/useEditReviewMutation';
import { useReviewDetailQuery } from '@/hooks/queries/useReviewsQuery';
import { useToast } from '@/hooks/common/useToast';

const Index = () => {
  const { movieId, reviewId } = useParams<{ movieId: string; reviewId: string }>();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { reviewData } = useReviewDetailQuery(movieId!, reviewId!);
  const editReviewMutation = useEditReviewMutation();

  const { isOpen: isSaveOpen, open: saveOpen, close: saveClose } = useOverlay();
  const { isOpen: isTempOpen, open: tempOpen, close: tempClose } = useOverlay();

  // ReactEditor 상태
  const [title, setTitle] = useState(reviewData!.data.title || '');
  const [content, setContent] = useState(reviewData!.data.contents || '');

  // Keyword 상태
  const [keywords, setKeywords] = useState(reviewData!.data.keywords);

  // ReviewToggle 상태
  const [spoiler, setSpoiler] = useState(reviewData!.data.spoiler || false);

  // Modal 상태
  const [preference, setPreference] = useState('');

  // 데이터 통합 후 요청 전송
  const handleSubmit = () => {
    const requestData = {
      title,
      contents: content,
      preference,
      keywords,
      spoiler,
    };
    console.log(requestData);

    editReviewMutation.mutate(
      { movieId: movieId!, reviewId: reviewId!, ...requestData },
      {
        onSuccess: () => {
          saveClose();
          navigate(`/review/${movieId}/detail/${reviewId}`);
          createToast('리뷰가 수정되었어요.', 'success');
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
      localStorage.setItem(`${movieId}`, JSON.stringify(tempData));
      tempOpen();
      console.log(tempData);
    } catch (error) {
      console.error('임시 저장 실패:', error);
      alert('임시 저장 중 문제가 발생했습니다.');
    }
  };

  // 로컬 스토리지에서 임시저장 데이터 복원
  useEffect(() => {
    const savedDraft = localStorage.getItem(`${movieId}`);
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
      {/* <Keyword keywords={keywords} onKeywordsChange={handleKeywordsChange} /> */}
      <ReviewToggle spoiler={spoiler} onSpoilerChange={setSpoiler} movieId={movieId!} />

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
