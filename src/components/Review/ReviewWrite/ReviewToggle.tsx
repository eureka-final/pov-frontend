import { Heading, SwitchToggle } from 'pov-design-system';
import { Container, Name } from './ReviewToggle.style';
import { useEffect } from 'react';

interface ReviewToggleProps {
  spoiler: boolean;
  onSpoilerChange: (spoiler: boolean) => void;
}

// eslint-disable-next-line react/prop-types
const ReviewToggle: React.FC<ReviewToggleProps> = ({ spoiler, onSpoilerChange }) => {
  // 로컬스토리지에서 리뷰 스포일러 상태 동기화
  useEffect(() => {
    const savedData = localStorage.getItem('reviewDraft');

    try {
      const parsedData = savedData ? JSON.parse(savedData) : null; // JSON 파싱
      const savedSpoiler = parsedData?.spoiler ?? false; // spoiler 값 추출
      onSpoilerChange(savedSpoiler); // boolean 값 전달
    } catch (error) {
      console.error('Failed to parse reviewDraft:', error);
      onSpoilerChange(false); // 파싱 실패 시 기본값
    }
  }, [onSpoilerChange]);

  const handleChange = () => {
    const newSpoiler = !spoiler; // boolean 값 반전
    onSpoilerChange(newSpoiler); // 상태 업데이트
  };

  return (
    <Container>
      <Name>
        <Heading size="small">스포일러</Heading>
      </Name>
      <SwitchToggle onChange={handleChange} checkedState={spoiler} />
    </Container>
  );
};

export default ReviewToggle;
