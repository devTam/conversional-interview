import { renderComponent } from "./components/renderComponents";
import { Provider } from "./context";
// import Data from "./utils/data.json";
// import Data2 from "./utils/data2.json";
import Data3 from "./utils/data3.json";

function App() {
  return (
    <Provider>
      <div className="App">
        {
          // insert JSON file in renderComponent
          renderComponent(Data3)
        }
      </div>
    </Provider>
  );
}

export default App;
