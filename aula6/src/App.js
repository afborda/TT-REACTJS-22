import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import RouterNavigation from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <RouterNavigation />
    </BrowserRouter>
  );
};

export default App;
