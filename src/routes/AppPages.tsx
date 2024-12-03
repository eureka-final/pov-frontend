import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';
import Header from '../components/header/Header';
import Padded from '../components/templates/Padded/Padded';

const AppPages = () => {
  return (
    <BrowserRouter>
      <Padded>
        <Header />
      </Padded>
      <Routes>
        {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
          <Route key={name + index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppPages;
