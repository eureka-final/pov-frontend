import Padded from '../../components/templates/Padded/Padded';
import ReactEditor from '../../components/Review/ReactEditor';
import { Input, Button } from 'pov-design-system';

const index = () => {
  return (
    <Padded>
      <Input label="한줄평을 입력해주세요!" id="title" name="title" placeholder="제목을 입력해 주세요" supportingText="40자 내로 입력해주세요" />
      <ReactEditor />
      <Button variant="primary" size="large">
        저장하기
      </Button>
    </Padded>
  );
};

export default index;
