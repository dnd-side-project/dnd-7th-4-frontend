import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from '@Pages/HomePage';
import ExamplePage from '@Pages/ExamplePage';
import LocationPage from '@Pages/LocationPage';
import Alram from '@Pages/Alram';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/alram" element={<Alram />} />
      </Routes>
    </Routers>
  );
}

export default Router;
