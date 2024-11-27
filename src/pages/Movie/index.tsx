import Padded from '../../components/templates/Padded/Padded';
import axios from 'axios';
import { Container } from './Movie.styles';

const index = () => {
  const fetchTest = async () => {
    const response = await axios.get('http://pov-elb-01-1418143664.ap-northeast-2.elb.amazonaws.com/actuator/health');
    console.log(response);
  };
  return (
    <Padded>
      <Container>
        <button
          onClick={() => {
            fetchTest();
          }}
        >
          123123
        </button>
      </Container>
    </Padded>
  );
};

export default index;
