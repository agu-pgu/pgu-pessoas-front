import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/RoutesPath";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./Auth/AuthContext.jsX";

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
