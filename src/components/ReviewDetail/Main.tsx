interface MainProps {
  image: string;
  title: string;
  contents: string;
}

export default function Main({ image, title, contents }: MainProps) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%),
      url('${image}'), #1c1c1c`,
        height: '500px',
        backgroundSize: '100%, cover',
        backgroundPosition: 'center, center',
        position: 'relative',
      }}
    >
      <div>
        <div
          style={{
            position: 'absolute',
            maxWidth: '500px',
            bottom: '2rem',
            marginLeft: '2rem',
          }}
        >
          <p style={{ color: 'white', fontSize: '3rem' }}>{title}</p>
          <p style={{ color: 'white', fontSize: '1rem' }}>{contents}</p>
        </div>
      </div>
    </div>
  );
}
