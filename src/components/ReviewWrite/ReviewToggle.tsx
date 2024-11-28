import { Heading, Toggle, useToggle } from 'pov-design-system';
import { Container, Name } from './ReviewToggle.style';

function ReviewToggle() {
  const { selected, handleSelectClick } = useToggle(false);

  return (
    <Container>
      <Name>
        <Heading size="small">스포일러</Heading>
      </Name>
      <Toggle isSelected={selected} onToggle={handleSelectClick} />
    </Container>
  );
}

export default ReviewToggle;
