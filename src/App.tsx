import AppScreen from './routes/AppScreen';
import { BrowserRouter } from 'react-router-dom';
import './firebase-messaging-sw.ts';

function App() {
  return (
    <BrowserRouter>
      <AppScreen />
    </BrowserRouter>
  );
}

export default App;
