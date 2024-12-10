import { useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Input, Button } from 'pov-design-system';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';
import { useEffect, useRef } from 'react';

interface NicknameStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const NicknameStep = ({ onNext, onPrev }: NicknameStepProps) => {
  const {
    formState: { errors },
    register,
    setFocus,
  } = useFormContext();

  // TODO 포커스 사라지는 문제 해결 필요 (다시 렌더링이 되더라도 input에 focus를 강제 유지하는 방법은 없는지?)
  // NOTE 현재 상태면 error가 변경될 때마다 Input 자체가 계속 재렌더링돼서 focus가 사라짐
  useEffect(() => {
    setFocus('nickname');
  }, [errors]);

  return (
    <SignUpStep
      firstLine={{ keyword: SIGN_UP_HEADER_TEXTS.nickname.title.firstLine[0], particle: SIGN_UP_HEADER_TEXTS.nickname.title.firstLine[1] }}
      secondLine={SIGN_UP_HEADER_TEXTS.nickname.title.secondLine}
      description={SIGN_UP_HEADER_TEXTS.nickname.description}
      onPrev={onPrev}
    >
      <div style={{ width: '100%' }}>
        <Input
          size="large"
          placeholder="닉네임을 입력해주세요"
          isError={!!errors.nickname}
          supportingText={errors.nickname?.message}
          {...register('nickname')}
        />
      </div>
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onNext} disabled={!!errors.nickname}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default NicknameStep;
