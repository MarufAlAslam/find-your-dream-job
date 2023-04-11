import { RouterProvider } from "react-router-dom";
import router from "./router"
import "./App.css";
import Main from "./pages/main/Main";

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
