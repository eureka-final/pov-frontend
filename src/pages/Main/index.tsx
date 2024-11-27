import axios from 'axios';

const index = () => {
  const fetchTest = async () => {
    const response = await axios.get('https://www.point-of-views.com/api/actuator/health');
    console.log(response);
  };
  return (
    <button
      onClick={() => {
        fetchTest();
      }}
    >
      123123
    </button>
  );
};

export default index;
