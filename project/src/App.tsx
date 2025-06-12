import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import JoinPage from './pages/JoinPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:username" element={<ProfilePage />} />
      <Route path="/explore" element={<HomePage />} /> {/* Placeholder */}
      <Route path="/trends" element={<HomePage />} /> {/* Placeholder */}
      <Route path="/saved" element={<HomePage />} /> {/* Placeholder */}
      <Route path="*" element={<Navigate to="/\" replace />} />
    </Routes>
  );
}

export default App;