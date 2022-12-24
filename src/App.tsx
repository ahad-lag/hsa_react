import { Routes , Route } from 'react-router-dom';
import MasterPage from './components/masterPage';
import NotFound from './router/notFound';

function App() {
  return (
    <Routes>
      <Route path="/user" element={<MasterPage><div>ahad</div></MasterPage>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
