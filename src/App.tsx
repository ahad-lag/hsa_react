import { Routes , Route } from 'react-router-dom';
import * as yup from 'yup';
import MasterPage from './components/masterPage';
import InsertUserForm from './froms/user/insertUserForm';
import NotFound from './router/notFound';
import UserIndex from './router/user';

function App() {
  return (
    <MasterPage>
      <Routes>
        <Route path="/user" element={<UserIndex />} />
        <Route path='/user/insert' element={<InsertUserForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MasterPage>
  );
}

export default App;
