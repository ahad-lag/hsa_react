import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./router/authenticate/login";
import NotFound from "./router/notFound";
import UserIndex from "./router/user";
import './assets/css/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserIndex />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* import ToastContainer */}
      <ToastContainer />
    </>
  );
}

export default App;
