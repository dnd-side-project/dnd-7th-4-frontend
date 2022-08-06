import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import ExamplePage from '@Pages/ExamplePage';

function Router() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<ExamplePage />} />
      </Routes>
    </Routers>
  );
}

export default Router;