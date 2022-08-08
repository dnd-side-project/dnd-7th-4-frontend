import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ExamplePage from '@Pages/ExamplePage';
import LocationPage from '@Pages/LocationPage';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </Routers>
  );
}

export default Router;
