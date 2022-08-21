import MoreWeatherInfo from '@Components/MoreWeatherInfo';
import Alarm from '@Pages/Alarm';
import ExamplePage from '@Pages/ExamplePage';
import Home from '@Pages/Home';
import LocationPage from '@Pages/LocationPage';
import LoginPage from '@Pages/LoginPage';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import Auth from '../Auth';

const Router = () => (
  <Routers>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/alarm" element={<Alarm />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/kakao/callback" element={<Auth />} />
      <Route path="/more-weather" element={<MoreWeatherInfo />} />
    </Routes>
  </Routers>
);

export default Router;
