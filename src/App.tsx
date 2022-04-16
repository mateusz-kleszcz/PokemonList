import { Provider } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
