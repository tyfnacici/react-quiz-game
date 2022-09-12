import { Route } from "react-router-dom";
import Header from "./components/Header";
import Lists from "./Pages/Lists";
import MakeList from "./Pages/MakeList";

function App() {
  return (
    <div className="h-screen bg-slate-800">
      <Header />
      <main className="flex flex-col items-center px-16">
        <Route path="/lists">
          <Lists />
        </Route>
        <Route path="/new">
          <MakeList />
        </Route>
      </main>
    </div>
  );
}

export default App;
