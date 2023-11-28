import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/RoutesPath";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./AuthProvider/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesPath />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
