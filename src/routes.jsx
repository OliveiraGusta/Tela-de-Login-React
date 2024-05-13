import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/Error';
import Login from './components/Login';
import Register from './components/Register';

const routes = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default routes;
