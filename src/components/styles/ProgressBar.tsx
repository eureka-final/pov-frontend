import styled from '@emotion/styled';
import { Heading, Body } from 'pov-design-system';
import { constants } from '../../constants/constants';

const Container = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  width: 100%;
  height: 30px;
  background-color: #dedede;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin: 8px 0;
  overflow: hidden;
`;

const Progress = styled.div<{ width?: number }>`
  width: ${({ width }) => (width ? `${width}%` : '0%')};
  height: 30px;
  padding: 0;
  text-align: center;
  background-color: #1bd27d;
  color: #111;
`;

const Count = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Progess {
  percentage: number;
  like: number;
  unlike: number;
}

const ProgressBar = ({ percentage, like, unlike }: Progess) => {
  return (
    <Container>
      <Heading size="large" style={{ color: '#1BD27D' }}>{`${percentage}%`}</Heading>
      <Bar>
        <Progress width={percentage} />
      </Bar>
      <Count>
        <Body size="large" style={{ color: '#1BD27D' }}>
          {constants.movies.progress.like + ' ' + like}
        </Body>
        <Body size="large">{constants.movies.progress.unlike + ' ' + unlike}</Body>
      </Count>
    </Container>
  );
};
export default ProgressBar;
