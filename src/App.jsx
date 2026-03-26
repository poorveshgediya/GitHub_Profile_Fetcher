import { Route, Routes } from "react-router-dom";
import "./App.css";
import GitHubProfile from "./Components/GitHubProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GitHubProfile />} />
      </Routes>
    </>
  );
}

export default App;
