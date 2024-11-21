import React from 'react';

interface ThemeToggleProps {
  toggleStyle: () => void; // 부모 컴포넌트에서 전달되는 함수
  theme: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleStyle }) => {
  return (
    <>
      <h1>Theme is {theme}</h1>
      <button
        onClick={toggleStyle}
        style={{
          cursor: 'pointer',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          background: '#ccc',
        }}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </>
  );
};

export default ThemeToggle;
