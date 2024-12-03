import GenreSelect from '../common/GenreSelect/GenreSelect';

interface GenreStepProps {
  selectedGenres: string[];
  addGenre: (genre: string) => void;
  removeGenre: (genre: string) => void;
}

const GenreStep = ({ selectedGenres, addGenre, removeGenre }: GenreStepProps) => {
  return <GenreSelect selectedGenres={selectedGenres} addGenre={addGenre} removeGenre={removeGenre}></GenreSelect>;
};

export default GenreStep;
