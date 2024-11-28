import Padded from '../../components/templates/Padded/Padded';
import ReactEditor from '../../components/Review/ReactEditor';
import { Heading, Body, Button, Modal, useOverlay, Logo } from 'pov-design-system';
import Keyword from '../../components/Review/Keyword';
import ReviewToggle from '../../components/Review/ReviewToggle';
import { HeadingContainer, ButtonContainer, Vs, Item } from './index.style';

const Index = () => {
  const { isOpen, open, close } = useOverlay();

  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">리뷰쓰기</Heading>
      </HeadingContainer>
      <ReactEditor />
      <Keyword />
      <ReviewToggle />
      <ButtonContainer>
        <Button variant="primary" size="large" onClick={open}>
          저장하기
        </Button>
      </ButtonContainer>

      <Modal isOpen={isOpen} closeModal={close} hasCloseButton={true}>
        <div>
          <Heading size="medium">영화를 평가해주세요.</Heading>
          <Body>이 영화에 대한 전반적인 평가는 어떠신가요?</Body>
          <ButtonContainer>
            <Item>
              <Logo icon="type5" />
              <Body>별로에요!</Body>
            </Item>
            <Vs>
              <Body>vs</Body>
            </Vs>
            <Item>
              <Logo icon="type6" />
              <Body>재밌었어요!</Body>
            </Item>
          </ButtonContainer>
          <ButtonContainer>
            <Button variant="primary" onClick={close} css={{ width: '100%' }}>
              평가하기
            </Button>
          </ButtonContainer>
        </div>
      </Modal>
    </Padded>
  );
};

export default Index;
