import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex mt-2">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
