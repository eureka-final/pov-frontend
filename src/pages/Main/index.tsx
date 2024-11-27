import axios from 'axios';

const index = () => {
  const fetchTest = async () => {
    const response = await axios.get('https://www.point-of-views.com/actuator/health');
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
