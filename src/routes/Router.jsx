import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ExamplePage from '@Pages/ExamplePage';
import HomePage from '@Pages/HomePage';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </Routers>
  );
}

export default Router;
