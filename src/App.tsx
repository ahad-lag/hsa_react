import { Routes , Route } from 'react-router-dom';
import MasterPage from './components/masterPage';
import NotFound from './router/notFound';
import UserPage from './router/user';

function App() {
  return (
    <Routes>
      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
