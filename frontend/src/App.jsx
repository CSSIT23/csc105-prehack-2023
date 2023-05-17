import router from "@/share/router";
import { RouterProvider } from "react-router-dom";
import "@share/styles/main.scss";
import "@share/styles/normalise.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
