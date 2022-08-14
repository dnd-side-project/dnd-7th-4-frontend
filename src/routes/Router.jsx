import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from '@Pages/HomePage';
import ExamplePage from '@Pages/ExamplePage';
import LocationPage from '@Pages/LocationPage';
import LoginPage from '@Pages/LoginPage';
import Auth from '../Auth';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
    </Routers>
  );
}

export default Router;
