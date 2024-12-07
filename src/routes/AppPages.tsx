import { Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';
import Padded from '../components/templates/Padded/Padded';
import ToastContainer from '../components/common/ToastContainer/ToastContainer';
import useRenderHeader from '../hooks/utils/useRenderHeader';

const AppPages = () => {
  const header = useRenderHeader();

  return (
    <>
      <Padded>
        {header} <ToastContainer />
      </Padded>
      <Routes>
        {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
          <Route key={name + index} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppPages;
