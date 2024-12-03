import { Input } from 'pov-design-system';

interface NicknameStepProps {
  nickname: string;
  handleNicknameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NicknameStep = ({ nickname, handleNicknameChange }: NicknameStepProps) => {
  return <Input size="large" placeholder="닉네임을 입력해주세요" value={nickname} onChange={handleNicknameChange}></Input>;
};
export default NicknameStep;
