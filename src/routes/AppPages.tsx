import { Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';
import Padded from '../components/templates/Padded/Padded';
import useRenderHeader from '../hooks/useRenderHeader';

const AppPages = () => {
  const header = useRenderHeader();

  return (
    <>
      <Padded>{header}</Padded>
      <Routes>
        {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
          <Route key={name + index} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppPages;
