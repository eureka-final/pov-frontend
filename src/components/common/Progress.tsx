import { useState, CSSProperties } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const CircularProgress = () => {
  const [loading] = useState(true);

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#9549FF',
  };
  return <BounceLoader color="#9549FF" loading={loading} cssOverride={override} size={64} aria-label="Loading Spinner" data-testid="loader" />;
};

export default CircularProgress;
