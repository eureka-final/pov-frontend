import { Badge } from 'pov-design-system';
import { GenreSelectWrapper } from './GenreSelect.style';
import { GENRES } from '../../../constants/genres';

interface GenreSelectProps {
  selectedGenres: string[];
  addGenre: (genre: string) => void;
  removeGenre: (genre: string) => void;
}

const GenreSelect = ({ selectedGenres, addGenre, removeGenre }: GenreSelectProps) => {
  const handleBadgeClick = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      // 이미 선택된 장르 클릭 시 선택 해제
      removeGenre(genre);
    } else {
      // 최대 3개까지 선택 개수 제한
      if (selectedGenres.length < 3) {
        addGenre(genre);
      } else {
        return;
      }
    }
  };

  return (
    <GenreSelectWrapper>
      {GENRES.map((genre, index) => (
        <Badge key={index} variant="keyword" size="large" cancel={selectedGenres.includes(genre)} click={false} onClick={() => handleBadgeClick(genre)}>
          {genre}
        </Badge>
      ))}
    </GenreSelectWrapper>
  );
};

export default GenreSelect;
