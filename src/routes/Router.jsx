import KakaoLoginAuth from '@Components/KakaoLogin/KakaoLoginAuth';
import AlarmLocation from '@Components/SlideMenu/AlarmLocation';
import Alarm from '@Pages/Alarm';
import Error from '@Pages/Error';
import Home from '@Pages/Home';
import LocationPage from '@Pages/LocationPage';
import SplashPage from '@Pages/SplashPage';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routers>
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/main" element={<Home />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/alarm" element={<Alarm />} />
      <Route path="/alarm-location" element={<AlarmLocation />} />
      <Route path="/account/kakao/oauth" element={<KakaoLoginAuth />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Routers>
);

export default Router;
