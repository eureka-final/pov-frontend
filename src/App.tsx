import './App.css';
import AppScreen from './routes/AppScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppScreen />
    </BrowserRouter>
  );
}

export default App;
