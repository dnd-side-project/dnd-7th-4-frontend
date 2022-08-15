import Alram from '@Pages/Alram';
import ExamplePage from '@Pages/ExamplePage';
import HomePage from '@Pages/HomePage';
import LocationPage from '@Pages/LocationPage';
import LoginPage from '@Pages/LoginPage';
import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';

import Auth from '../Auth';

const Router = () => (
  <Routers>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/alram" element={<Alram />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/oauth/kakao/callback" element={<Auth />} />
    </Routes>
  </Routers>
);

export default Router;
