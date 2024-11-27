import axios from 'axios';

const index = () => {
  const fetchTest = async () => {
    const response = await axios.get('https://pov-elb-01-1418143664.ap-northeast-2.elb.amazonaws.com/actuator/health');
    console.log(response);
  };
  return (
    <button
      onClick={() => {
        fetchTest();
      }}
    >
      연결확인용
    </button>
  );
};

export default index;
