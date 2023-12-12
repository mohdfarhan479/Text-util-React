import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <div className="container my-3">
        <TextForm />
        <About />
      </div>
    </>
  );
}

export default App;
