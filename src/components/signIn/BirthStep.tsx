import { Input } from 'pov-design-system';

interface BirthStepProps {
  birth: string;
  handleBirthChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BirthStep = ({ birth, handleBirthChange }: BirthStepProps) => {
  const getTodayDate = () => {
    const today = new Date();
    const formattedDate = today
      .toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\. /g, '-')
      .replace('.', '');

    return formattedDate;
  };

  return <Input size="large" type="date" placeholder="생년월일을 입력해주세요" max={getTodayDate()} value={birth} onChange={handleBirthChange}></Input>;
};
export default BirthStep;
