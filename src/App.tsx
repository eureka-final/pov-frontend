import './App.css';
import AppScreen from './routes/AppScreen';
import Header from './components/Header/Header';
import { PovProvider } from 'pov-design-system';

function App() {
  return (
    <PovProvider>
      <Header />
      <AppScreen />
    </PovProvider>
  );
}

export default App;
