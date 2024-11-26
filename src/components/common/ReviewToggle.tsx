import { Toggle, useToggle } from 'pov-design-system';

function ReviewToggle() {
  // useToggle 훅으로 선택된 탭 상태 관리
  const { selected, handleSelectClick } = useToggle(false);

  return (
    <div>
      <Toggle isSelected={selected} onToggle={handleSelectClick} />
    </div>
  );
}

export default ReviewToggle;
