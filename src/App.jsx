import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/collectionPage";
import NavBar from "./components/NavBar";
import { ToastContainer} from "react-toastify";
// toastify is used to add small pop up msgs in the app

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer/>
    </div>
  );
};

export default App;
