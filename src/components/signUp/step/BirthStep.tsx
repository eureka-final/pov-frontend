import { useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Input, Button } from 'pov-design-system';
import { getTodayDate } from '../../../utils/getTodayDate';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';

interface BirthStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const BirthStep = ({ onNext, onPrev }: BirthStepProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.birth.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.birth.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.birth.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.birth.description}
      onPrev={onPrev}
    >
      <Input size="large" type="date" placeholder="생년월일을 입력해주세요" max={getTodayDate()} error={errors.nickname} {...register('birth')} />
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onNext}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default BirthStep;
