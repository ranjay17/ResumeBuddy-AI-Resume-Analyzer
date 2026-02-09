import AppRouting from "./routing/AppRouting";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <AppRouting />
      </Provider>
    </div>
  );
}

export default App;
