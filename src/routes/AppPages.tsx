import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRouteDef } from './RouteDef';
import Header from '../components/Header/Header';

const AppPages = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Object.entries({ ...AppRouteDef }).map(([name, { path, element }], index) => (
          <Route key={name + index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppPages;
