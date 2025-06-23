import { Provider } from "react-redux";
import Home from "./src/pages/Home";
import BottomTabsNavigator from "./src/routes/BottomTabsNavigator";
import store from "./src/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <BottomTabsNavigator/>
    </Provider>
  );
}
