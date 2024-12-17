import { useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Input, Button } from 'pov-design-system';
import { getTodayDate } from '../../../utils/getTodayDate';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';
import { useEffect, useState } from 'react';

interface BirthStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const BirthStep = ({ onNext, onPrev }: BirthStepProps) => {
  const [initButtonDisabled, setInitButtonDisabled] = useState<boolean>(true);
  const {
    formState: { errors },
    register,
    setFocus,
    getValues,
  } = useFormContext();

  // errors가 업데이트될 때마다 관련 상태 업데이트
  useEffect(() => {
    setFocus('birth'); // focus를 계속 유지
  }, [errors, getValues('birth')]);

  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.birth.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.birth.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.birth.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.birth.description}
      onPrev={onPrev}
    >
      <div style={{ width: '100%' }}>
        <Input
          size="large"
          type="date"
          placeholder="생년월일을 입력해주세요"
          max={getTodayDate()}
          isError={errors.birth}
          supportingText={errors.birth?.message}
          {...register('birth')}
          onChange={() => {
            if (initButtonDisabled) setInitButtonDisabled(false);
          }}
        />
      </div>
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" disabled={initButtonDisabled || !!errors.birth} onClick={onNext}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default BirthStep;
