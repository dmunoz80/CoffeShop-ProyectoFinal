import { GeneralProvider } from "./Context";
import RouteContainer from "./components/RouteContainer";


function App() {

  return (
    <div className="App">
      <GeneralProvider>
        <RouteContainer/>
      </GeneralProvider>
    </div>
  );
}

export default App;
