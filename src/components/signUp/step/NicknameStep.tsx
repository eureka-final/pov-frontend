import { useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Input, Button } from 'pov-design-system';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';

interface NicknameStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const NicknameStep = ({ onNext, onPrev }: NicknameStepProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.nickname.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.nickname.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.nickname.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.nickname.description}
      onPrev={onPrev}
    >
      <div style={{ width: '100%' }}>
        <Input size="large" placeholder="닉네임을 입력해주세요" error={errors.nickname} {...register('nickname')} />
      </div>
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onNext}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default NicknameStep;
