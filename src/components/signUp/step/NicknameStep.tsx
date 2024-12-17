import { useFormContext } from 'react-hook-form';
import SignUpStep from './SignUpStep';
import { Input, Button } from 'pov-design-system';
import { SIGN_UP_HEADER_TEXTS } from '../../../constants/texts';
import { ButtonContainer } from './SignUpStep.style';
import { useEffect, useState } from 'react';

interface NicknameStepProps {
  onNext: (nextStep: string) => void;
  onPrev: (prevStep: string) => void;
}

const NicknameStep = ({ onNext, onPrev }: NicknameStepProps) => {
  const [initButtonDisabled, setInitButtonDisabled] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [nicknameText, setNicknameText] = useState<string>('');

  const { register, setFocus } = useFormContext();

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (initButtonDisabled) setInitButtonDisabled(false);

    if (event.target.value.length === 0) {
      setErrorMsg('닉네임은 필수 입력 항목이에요.');
    } else if (event.target.value.length > 12) {
      setErrorMsg('닉네임은 최대 12자까지만 입력할 수 있어요.');
    } else {
      setErrorMsg('');
    }
    setNicknameText(event.target.value);
  };

  useEffect(() => {
    setFocus('nickname');
  }, []);

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
          isError={!!errorMsg}
          supportingText={errorMsg}
          {...register('nickname')}
          value={nicknameText}
          onChange={handleNicknameChange}
        />
      </div>
      <ButtonContainer>
        <Button css={{ width: '100%' }} size="large" onClick={onNext} disabled={initButtonDisabled || !!errorMsg}>
          다음으로
        </Button>
      </ButtonContainer>
    </SignUpStep>
  );
};

export default NicknameStep;
