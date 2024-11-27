import Padded from '../../components/templates/Padded/Padded';
import ReactEditor from '../../components/Review/ReactEditor';
import { Heading, Button } from 'pov-design-system';
import Keyword from '../../components/Review/Keyword';
import ReviewToggle from '../../components/Review/ReviewToggle';
import { HeadingContainer, ButtonContainer } from './index.style';

const index = () => {
  return (
    <Padded>
      <HeadingContainer>
        <Heading size="large">리뷰쓰기</Heading>
      </HeadingContainer>
      <ReactEditor />
      <Keyword />
      <ReviewToggle />
      <ButtonContainer>
        <Button variant="primary" size="large">
          저장하기
        </Button>
      </ButtonContainer>
    </Padded>
  );
};

export default index;
