import { renderComponent } from "./components/renderComponents";
// import Data from "./utils/data.json";
import Data2 from "./utils/data2.json";

function App() {

  return (
    <div className="App">
      {
        renderComponent(Data2)
      }
    </div>
  );
}

export default App;
