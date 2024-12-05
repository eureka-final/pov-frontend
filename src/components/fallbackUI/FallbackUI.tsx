import PropTypes from 'prop-types';
import { Button } from 'pov-design-system';

const FallbackUI = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <div>
      <span>{error.message}...</span>
      <Button variant="primary" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </div>
  );
};

FallbackUI.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default FallbackUI;
