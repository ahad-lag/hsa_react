import { Route, Routes } from "react-router-dom";
import Login from "./router/authenticate/login";
import NotFound from "./router/notFound";
import UserIndex from "./router/user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserIndex />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
