import { useTheme } from 'pov-design-system';

const ThemeToggle = () => {
  const { toggleStyle, theme } = useTheme(); // theme: ThemeType, themeName: "light" | "dark"
  const themeName = theme.light ? 'light' : 'dark';

  return (
    <>
      <h1>Theme is {themeName}</h1>
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
        {themeName === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </>
  );
};

export default ThemeToggle;
