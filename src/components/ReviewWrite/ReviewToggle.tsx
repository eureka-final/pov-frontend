import { Heading, Toggle, useToggle } from 'pov-design-system';
import { Container, Name } from './ReviewToggle.style';
import { useEffect } from 'react';

interface ReviewToggleProps {
  onSpoilerChange: (spoiler: boolean) => void;
}
// eslint-disable-next-line react/prop-types
const ReviewToggle: React.FC<ReviewToggleProps> = ({ onSpoilerChange }) => {
  const { selected, handleSelectClick } = useToggle(false);

  useEffect(() => {
    onSpoilerChange(selected);
  }, [selected]);

  return (
    <Container>
      <Name>
        <Heading size="small">스포일러</Heading>
      </Name>
      <Toggle isSelected={selected} onToggle={handleSelectClick} />
    </Container>
  );
};

export default ReviewToggle;
