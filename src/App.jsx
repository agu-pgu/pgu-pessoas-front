import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./routes/RoutesPath";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <RoutesPath />
    </BrowserRouter>
  );
}

export default App;
