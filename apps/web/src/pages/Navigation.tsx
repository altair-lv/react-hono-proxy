import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './HomePage';
import UsersPage from './UsersPage';
import ProfilePage from './ProfilePage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/p/:username" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
