import { Heading, SwitchToggle } from 'pov-design-system';
import { Container, Label } from '../../styles/InputLabel';

interface isPublicToggleProps {
  isPublic: boolean;
  onIsPublicChange: (spoiler: boolean) => void;
}

// eslint-disable-next-line react/prop-types
const PublicToggle: React.FC<isPublicToggleProps> = ({ isPublic, onIsPublicChange }) => {
  const handleChange = () => {
    const newIsPublic = !isPublic; // boolean 값 반전
    onIsPublicChange(newIsPublic); // 상태 업데이트
  };

  return (
    <Container>
      <Label>
        <Heading size="small">공개여부</Heading>
      </Label>
      <SwitchToggle onChange={handleChange} checkedState={isPublic} />
    </Container>
  );
};

export default PublicToggle;
