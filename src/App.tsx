import { Routes , Route } from 'react-router-dom';
import NotFound from './router/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>ahad</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
