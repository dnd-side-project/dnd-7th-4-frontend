import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import Home from '@Pages/Home';
import ExamplePage from '@Pages/ExamplePage';
import LocationPage from '@Pages/LocationPage';
import LoginPage from '@Pages/LoginPage';
import Auth from '../Auth';
import Alram from '@Pages/Alram';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/alram" element={<Alram />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
    </Routers>
  );
}

export default Router;
