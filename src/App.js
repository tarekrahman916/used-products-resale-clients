import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="md:w-9/12 mx-auto px-5 md:px-0">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
