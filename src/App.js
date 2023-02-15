import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./MainRoutes";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
