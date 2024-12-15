import { useTheme, SwitchToggle } from 'pov-design-system';
import { useState, useEffect } from 'react';
import { ToggleWrapper, Label } from './Toggle.styles';
const ThemeToggle = () => {
  const { toggleStyle } = useTheme(); // 테마 전환 함수
  const [themeName, setThemeName] = useState<'light' | 'dark'>('dark'); // 초기값 설정

  // 로컬스토리지에서 테마 상태 동기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    setThemeName(savedTheme || 'dark'); // 기본값은 dark
  }, []);

  const handleChange = () => {
    const newTheme = themeName === 'light' ? 'dark' : 'light';
    setThemeName(newTheme); // 상태 업데이트
    toggleStyle(); // 테마 전환
  };

  return (
    <ToggleWrapper>
      <Label size="xLarge">{themeName === 'dark' ? '다크 모드' : '라이트 모드'}</Label>
      <SwitchToggle
        onChange={handleChange} // 상태 변화 핸들러
        checkedState={themeName === 'light'} // 테마가 light이면 스위치 켜짐
      />
    </ToggleWrapper>
  );
};

export default ThemeToggle;
