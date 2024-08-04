import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { routes } from "./router";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </Provider>
  );
}

export default App;
