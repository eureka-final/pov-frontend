import { Skeleton } from 'pov-design-system';
import { Wrapper } from './Review.style';

const ReviewPageSkeleton = () => {
  return (
    <>
      <Wrapper>
        <Skeleton variant="square" width="100%" height="183px" />
      </Wrapper>
    </>
  );
};

export default ReviewPageSkeleton;
