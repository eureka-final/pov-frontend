import { Badge } from 'pov-design-system';
import { GenresWrapper } from './Genres.style';

interface GenresProps {
  genres: string[];
}

const Genres = ({ genres }: GenresProps) => {
  return (
    <GenresWrapper>
      {genres.map((genre, index) => (
        <Badge key={index} variant="keyword" cancel={true} size="small" click={false}>
          {genre}
        </Badge>
      ))}
    </GenresWrapper>
  );
};

export default Genres;
