import AppScreen from './routes/AppScreen';
import { BrowserRouter } from 'react-router-dom';
import { requestPermission } from './utils/firebase/notificationPermission';
import { useEffect } from 'react';
import './utils/firebase/initFirebase';

function App() {
  // 서비스 초기화 시 푸시 알림 권한 요청 및 FCM 연결
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <BrowserRouter>
      <AppScreen />
    </BrowserRouter>
  );
}

export default App;
