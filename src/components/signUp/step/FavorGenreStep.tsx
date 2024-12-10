import { Controller, useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Button } from 'pov-design-system';
import GenreSelect from '../../../components/common/GenreSelect/GenreSelect';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import type { User } from '../../../types/user';
import { ButtonContainer } from './SignUpStep.style';

interface FavorGenreStepProps {
  onSubmit: (data: User) => Promise<void>;
  onPrev: (prevStep: string) => void;
}

const FavorGenreStep = ({ onSubmit, onPrev }: FavorGenreStepProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.favorGenre.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.favorGenre.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.favorGenre.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.favorGenre.description}
      onPrev={onPrev}
    >
      <Controller
        name="favorGenres"
        control={control}
        render={({ field }) => (
          <GenreSelect
            value={field.value || []} // favorGenres 필드의 value 전달
            onChange={(selectedGenres) => field.onChange(selectedGenres)}
          />
        )}
      />
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onSubmit} disabled={errors.favorGenre}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default FavorGenreStep;
