import { useTheme } from 'pov-design-system';

const ThemeToggle = () => {
  const { toggleStyle, theme } = useTheme();
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
