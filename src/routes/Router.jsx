import KakaoLogin from '@Components//KakaoLogin';
import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import Alram from '@Pages/Alram';
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
      <Route path="/alram" element={<Alram />} />
      <Route path="/login" element={<KakaoLogin />} />
      <Route path="/more-weather" element={<MoreWeatherInfo />} />
    </Routes>
  </Routers>
);

export default Router;
