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
  // @ts-ignorem
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  const {
    formState: { errors },
    register,
    setFocus,
    getValues,
  } = useFormContext();
  console.log(errors);

  // errors가 업데이트될 때마다 관련 상태 업데이트
  useEffect(() => {
    console.log('hi');
    setFocus('birth'); // focus를 계속 유지
    setButtonDisabled(!!errors.birth); // 버튼 상태 업데이트
  }, [errors, getValues('birth')]);

  // 초기 렌더링 시 button을 disabled로 설정
  useEffect(() => {
    setButtonDisabled(true);
  }, []);

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
        />
      </div>
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" disabled={!!errors.birth} onClick={onNext}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default BirthStep;
