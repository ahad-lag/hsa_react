import { Route, Routes } from "react-router-dom";
import MasterPage from "./components/masterPage";
import NotFound from "./router/notFound";
import UserIndex from "./router/user";

function App() {
  return (
    <MasterPage>
      <Routes>
        <Route path="/user" element={<UserIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MasterPage>
  );
}

export default App;
