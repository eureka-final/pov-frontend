import SignUpStep from './SignUpStep';
import { Button } from 'pov-design-system';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';

interface OnSuccessStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const OnSuccessStep = ({ onNext, onPrev }: OnSuccessStepProps) => {
  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.complete.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.complete.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.complete.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.complete.description}
      onPrev={onPrev}
    >
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onNext}>
          홈으로 가기
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default OnSuccessStep;
