import KakaoLogin from '@Components/KakaoLogin';
import KakaoLoginAuth from '@Components/KakaoLogin/KakaoLoginAuth';
import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import AlarmLocation from '@Components/SlideMenu/AlarmLocation';
import Alarm from '@Pages/Alarm';
import Error from '@Pages/Error';
import ExamplePage from '@Pages/ExamplePage';
import Home from '@Pages/Home';
import LocationPage from '@Pages/LocationPage';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routers>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/alarm" element={<Alarm />} />
      <Route path="/login" element={<KakaoLogin />} />
      <Route path="/more-weather" element={<MoreWeatherInfo />} />
      <Route path="/alarm-location" element={<AlarmLocation />} />
      <Route path="/account/kakao/oauth" element={<KakaoLoginAuth />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Routers>
);

export default Router;
