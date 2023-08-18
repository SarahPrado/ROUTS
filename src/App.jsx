import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  console.log('window', window.location.pathname);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
