import { Badge } from 'pov-design-system';
import { GenreSelectWrapper } from './GenreSelect.style';
import { GENRES } from '../../../constants/genres';

interface GenreSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const GenreSelect = ({ value, onChange }: GenreSelectProps) => {
  const handleBadgeClick = (genre: string) => {
    // 이미 선택된 장르 클릭 시 선택 해제
    if (value.includes(genre)) {
      onChange(value.filter((g) => g !== genre));
    } else {
      // 최대 3개까지 선택 개수 제한
      if (value.length < 3) {
        onChange([...value, genre]);
      }
    }
  };

  return (
    <GenreSelectWrapper>
      {GENRES.map((genre, index) => (
        <Badge key={index} variant="keyword" size="large" cancel={value.includes(genre)} click={false} onClick={() => handleBadgeClick(genre)}>
          {genre}
        </Badge>
      ))}
    </GenreSelectWrapper>
  );
};

export default GenreSelect;
